"use server";
import prisma from "@/config/db/prisma";
import { sendVerificationEmail } from "@/email/emailSender";
import { generateToken } from "@/lib/utils";
import bcrypt, { compare } from "bcryptjs";
import type { BuiltInProviderType } from "next-auth/providers";
import { auth, signIn, signOut } from "../lib/next-auth/auth";
import { initializeEmailServices } from "@/email/init/emailServiceInit";

export async function login(provider?: BuiltInProviderType, redirect: string = "/") {
  await signIn(provider, { redirectTo: redirect });
}

export async function loginWithCredentials(provider: BuiltInProviderType, formData: FormData) {
  try {
    await signIn(provider, { email: formData.get("email"), password: formData?.get("password"), redirectTo: "/" });
  } catch (error: any) {
    throw error?.["cause"]?.err || error;
  }
}
export async function loginWithMagicLink(provider: BuiltInProviderType | "smtp-email", email: string, redirect: string = "/") {
  return await signIn(provider, { email, redirectTo: redirect });
}

export async function logout() {
  await signOut();
}

export async function getSession() {
  const session = await auth();
  return session;
}

export async function register(name: string, email: string, password: string) {
  await initializeEmailServices();
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = generateToken();
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);

  // Save verification token
  await prisma.verificationToken.create({
    data: {
      identifier: user.email as string,
      token: token,
      userId: user.id,
      expires: expiresAt,
    },
  });
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${token}`;

  // Send verification email
  await sendVerificationEmail(user.email as string, url);

  return true;
}

export async function loginUserWithEmailPassword(email: string, password: string) {
  // Find user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("No user found with this email");
  }

  // Check if the password is correct
  const passwordMatch = await compare(password, user.password as string);
  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  // Check if email is verified
  if (!user?.emailVerified) {
    throw new Error("Please verify your email before logging in");
  }

  // You can generate a JWT token here and return it if required
  return { message: "Login successful", userId: user.id };
}

export async function verifyEmail(token: string) {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { token },
    include: { user: true },
  });

  if (!verificationToken) {
    throw new Error("Invalid or expired token");
  }

  if (verificationToken.expires < new Date()) {
    throw new Error("Token has expired");
  }

  await prisma.user.update({
    where: { id: verificationToken.userId as string },
    data: { emailVerified: new Date() },
  });

  await prisma.verificationToken.delete({
    where: { id: verificationToken.id },
  });

  return { message: "Email verified successfully" };
}
