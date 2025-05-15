"use client";
import { useState } from "react";
import Flex from "../common/Flex";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SigninWithEmailPassword } from "./SigninWithEmailPassword";
import { SignUp } from "./Signup";
import React from "react";

function RenderSignUpLogin() {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  return (
    <React.Fragment>
      <div className="text-2xl font-medium pt-10">Get Started</div>
      <span className="font-light text-sm">
        {isLoginScreen ? "Sign in to get started with your new account." : "Sign up to access all features and start exploring today!"}
      </span>
      <Flex className="flex flex-row gap-6 rounded items-center justify-between px-2 py-2 w-ful bg-background">
        <Button
          className={`flex w-full ${!isLoginScreen && "bg-transparent text-black dark:text-white"} hover:text-white`}
          onClick={() => setIsLoginScreen(true)}
        >
          Login
        </Button>
        <Button
          className={`flex w-full ${isLoginScreen && "bg-transparen text-black dark:text-white"} hover:text-white`}
          onClick={() => setIsLoginScreen(false)}
        >
          Signup
        </Button>
      </Flex>
      <div className="w-full flex-col">
        {isLoginScreen ? <SigninWithEmailPassword /> : <SignUp />}

        <Flex className="pt-3 justify-between items-center gap-2 flex-row basis-full">
          <span className="w-full">
            <Separator />
          </span>
          or
          <span className="w-full">
            <Separator />
          </span>
        </Flex>
      </div>
    </React.Fragment>
  );
}

export default RenderSignUpLogin;
