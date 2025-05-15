"use client";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "../ButtonSignin";
import { loginWithCredentials } from "@/actions/auth";
import { useCustomToast } from "@/hooks/useCustomToast";
export function SigninWithEmailPassword() {
  const { showToast } = useCustomToast();

  return (
    <form
      action={async (formData) => {
        try {
          await loginWithCredentials("credentials", formData);

          showToast({
            title: "Login successful!",
            variant: "success",
            duration: 5000,
          });
        } catch (error: any) {
          let errorMessage = "Something went wrong";
          if (error instanceof Error) {
            errorMessage = error.message;
          }

          showToast({
            title: errorMessage,
            variant: "error",
          });
        }
      }}
      className="flex flex-col gap-3"
    >
      <span className="font-light">Email</span>
      <Input name="email" type="email" placeholder="Enter your email" required={true} />
      <span className="font-light">Password</span>
      <Input name="password" type="password" placeholder="Enter your password" required={true} />
      <SubmitButton text={"Login"} />
    </form>
  );
}
