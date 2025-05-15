"use client";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "../ButtonSignin";
import { loginWithMagicLink } from "@/actions/auth";

export function SignInWithMagicLink() {
  return (
    <form
      action={async (formData) => {
        localStorage.setItem("email", formData.get("email") as string);
        await loginWithMagicLink("smtp-email", formData.get("email") as string);
      }}
      className="flex flex-col gap-3"
    >
      <span className="font-light">Email</span>
      <Input name="email" type="email" placeholder="Enter your email" required={true} />
      <SubmitButton text="Sign in With Email" />
    </form>
  );
}
