"use client";
import React from "react";
import { addUserNameEmailToWaitlist } from "@/actions/db";
import { useCustomToast } from "@/hooks/useCustomToast";
import { ArrowRight, Mail, User } from "lucide-react";
import { useRef, useTransition } from "react";
import RatingGroup from "../RatingGroup";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import Flex from "./Flex";
import { appConfig } from "@/config/appConfig";

const toastMessage = {
  updated: "You're on the waitlist! Stay tuned!",
  added: "You're on the waitlist! Stay tuned!",
};

function WaitlistForm() {
  let [pending, startTransition] = useTransition();
  const ref = useRef<HTMLFormElement>(null);
  const { showToast } = useCustomToast();

  return (
    <Card className="max-h-[42rem] rounded-2xl mt-6 p-6 md:p-12 shadow-xl max-w-lg w-full text-center">
      <Flex className="flex-col items-center gap-1">
        <h2 className="mt-4 font-semibold  text-xl sm:text-3xl text-center">Join the {appConfig.appName} Community</h2>
      </Flex>
      <form
        className="mt-4 space-y-4"
        ref={ref}
        action={async (formData: any) => {
          startTransition(async () => {
            const { success, actionType } = await addUserNameEmailToWaitlist(formData.get("fullname") as string, formData.get("email") as string);
            ref.current?.reset();
            showToast({
              title: success ? (toastMessage as any)?.[actionType] : "Oops! Something went wrong",
              variant: success ? "success" : "error",
            });
          });
        }}
      >
        <div className="flex w-full max-w-xl items-center relative transition-all duration-300 group-focus-within:max-w-2xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <User className="w-5 h-5 fill-none" />
          </div>
          <Input type="text" name="fullname" placeholder="Enter your name" required={true} className="pl-10 pr-12 py-6 bg-transparent" />
        </div>

        <div className="flex w-full max-w-xl items-center relative transition-all duration-300 group-focus-within:max-w-2xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Mail className="w-5 h-5 fill-none" />
          </div>
          <Input type="email" name="email" placeholder="Enter your email" required={true} className="pl-10 pr-12 py-6 bg-transparent" />
        </div>

        <Button
          type="submit"
          aria-disabled={pending}
          className="text-white text-sm md:text-lg  w-full bg-primary py-2 gap-1 flex justify-center items-center rounded-md  font-semibold tracking-wide transition"
        >
          {pending ? (
            "Submitting..."
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="h-5 w-5 font-semibold animate-moveArrowRight" />
            </>
          )}
        </Button>
      </form>

      <div className="flex flex-col md:flex-row gap-2 mt-8 items-center justify-center">
        {/* <AvatarGroup /> */}
        <div className="flex gap-1 flex-col items-center">
          <RatingGroup />
          <span className="text-sm font-normal whitespace-nowrap">Loved by early access users</span>
        </div>
      </div>
    </Card>
  );
}

export default WaitlistForm;
