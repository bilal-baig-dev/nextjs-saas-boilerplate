"use client";
import { loginWithMagicLink, verifyEmail } from "@/actions/auth";
import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { appConfig } from "@/config/appConfig";
import { useCustomToast } from "@/hooks/useCustomToast";
import { CheckCircle, Mail, XCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

function RenderVerifyEmail() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [verificationState, setVerificationState] = useState<"pending" | "success" | "error" | "empty">("empty");

  const { showToast } = useCustomToast();
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const verifyToken = useCallback(async () => {
    setLoading(true);
    try {
      if (token) {
        await verifyEmail(token);
        setVerificationState("success");
        showToast({
          title: "Email verified successfully",
          variant: "success",
        });
      }
    } catch (error: any) {
      console.log("ERROR WHILE VERFICAION", error);
      setVerificationState("error");
      showToast({
        title: error?.message || "Something went wrong",
        variant: "error",
      });
    } finally {
      localStorage.removeItem("email");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const storedEmail = localStorage.getItem("email");
    if (!token && storedEmail) {
      setVerificationState("pending");
      setEmail(storedEmail);
    } else {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      verifyToken(); // Only call this once the component is mounted
    }
  }, [isMounted]);

  const resendVerificationEmail = useCallback(async () => {
    setLoading(true);
    if (email) {
      await loginWithMagicLink("smtp-email", email as string);
      showToast({
        title: "Email Sent Successfully",
        variant: "success",
      });
    } else {
      showToast({
        title: "Something went wrong",
        variant: "error",
      });
    }

    setLoading(false);
  }, [email, showToast]);

  const renderContent = () => {
    switch (verificationState) {
      case "success":
        return (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mt-6 text-center text-2xl font-semibold">Email Verified Successfully</h2>
            <p className="mt-2 text-center text-sm">Your email has been verified. You can now access your account.</p>
            <div className="mt-4 w-full flex justify-center">
              <Button className="mt-4 w-full text-white" onClick={() => router.push("/login")}>
                {loading ? <Spinner /> : "Login to your account"}
              </Button>
            </div>
          </>
        );
      case "error":
        return (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="mt-6 text-center text-2xl font-semibold">Email Verification Failed</h2>
            <p className="mt-2 text-center text-sm">We couldn&apos;t verify your email. Please try again or contact support.</p>
          </>
        );
      case "pending":
        return (
          <>
            <div className="flex h-16 w-16 items-center justify-center rounded-full ">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mt-6 text-center text-2xl font-semibold ">Please verify your email</h2>
            <p className="mt-2 text-center text-sm">You&apos;re almost there! We sent an email to </p>
            <p className="text-center font-medium ">{email}</p>
            <p className="mt-2 text-center text-sm ">
              Just click on the link in that email to complete your signup. If you don&apos;t see it, you may need to{" "}
              <span className="font-semibold ">check your spam</span> folder.
            </p>
            <p className="mt-4 text-center text-sm ">
              For any questions or concerns please reach out to our{" "}
              <Link className="text-primary underline" href={`mailto:${appConfig.supportEmail}`}>
                support team.
              </Link>
            </p>
          </>
        );
      default:
        return (
          <>
            <div className="flex gap-5 w-full flex-col items-center">
              <Skeleton className="h-16 w-16 rounded-full" />
              <div className="space-y-1 w-full">
                <Skeleton className="h-4  w-full" />
                <Skeleton className="h-4  w-full" />
                <Skeleton className="h-4  w-full" />
                <Skeleton className="h-4  w-full" />
              </div>
            </div>
          </>
        );
    }
  };
  return renderContent();
}

export default RenderVerifyEmail;
