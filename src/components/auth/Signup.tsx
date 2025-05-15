"use client";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "../ButtonSignin";
import { register } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useCustomToast } from "@/hooks/useCustomToast";

export function SignUp() {
  const router = useRouter();
  const { showToast } = useCustomToast();

  const onSubmit = useCallback(
    async (formData: FormData) => {
      try {
        await register(formData.get("name") as string, formData.get("email") as string, formData.get("password") as string);
        localStorage.setItem("email", formData.get("email") as string);
        showToast({
          title: "Registration successful! Please verify your email.",
          variant: "success",
          duration: 5000,
        });
        router.push("/verify-email");
      } catch (error) {
        showToast({
          title: "Something went wrong",
          variant: "error",
        });
      }
    },
    [router, showToast]
  );

  return (
    <form action={onSubmit} className="flex flex-col gap-3">
      <span className="font-light">Name</span>
      <Input name="name" type="name" placeholder="Enter your name" required={true} />
      <span className="font-light">Email</span>
      <Input name="email" type="email" placeholder="Enter your email" required={true} />
      <span className="font-light">Password</span>
      <Input name="password" type="password" placeholder="Enter your password" required={true} />
      <SubmitButton text="Signup" />
    </form>
  );
}
