import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../config/db/prisma";
import { sendVerificationRequest } from "@/actions/email";
import { LoginPagePath, maxAge } from "../constants";
import { compare } from "bcryptjs";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: LoginPagePath,
    verifyRequest: "/verify-email",
  },
  providers: [
    {
      id: "smtp-email",
      name: "Email",
      type: "email",
      maxAge,
      sendVerificationRequest,
    } as any,
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        });

        if (!user) {
          throw new Error("User not found");
        }

        const passwordMatch = await compare(credentials?.password as string, user.password as string);
        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        if (!user.emailVerified) {
          throw new Error("Please verify your email before logging in");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "smtp-email" || account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile?.email || (user?.email as string) },
          include: { accounts: true },
        });

        const existingLinkedAccount = existingUser?.accounts.find((el) => el.userId === existingUser.id && el.provider === account.provider);
        if (existingUser && !existingLinkedAccount) {
          const { expires_in = null, refresh_token = null, authorization_details = null, ...accountDetails } = account;
          // Link the OAuth account to the existing user
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              ...accountDetails,
            },
          });

          return true;
        }
      }

      return true;
    },
    async session({ session, token, user }) {
      // Add custom fields to session if needed
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
