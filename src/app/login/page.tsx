import ButtonGoogle from "@/components/ButtonGoogle";
import Flex from "@/components/common/Flex";
import Logo from "@/components/common/logo";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import RenderSignUpLogin from "@/components/auth/RenderSignUpLogin";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";
import React from "react";
import { appConfig } from "@/config/appConfig";

export const metadata: Metadata = {
  title: `Login`,
};
function Login() {
  return (
    <React.Fragment>
      <Toaster />
      <Flex className="w-full  md:h-screen justify-center items-center">
        <div className="w-full xs:flex-col  md:flex flex-row md:w-[90%] lg:lg:w-[60%] 2xl:w-[30%]">
          <Card className="flex w-full  flex-col shadow md:rounded-tl-xl md:rounded-bl-xl p-6 gap-2">
            <Logo className="pt-6" />
            <div className="flex flex-col gap-6">
              <RenderSignUpLogin />
              <ButtonGoogle size={"lg"} />
              <p className="font-light text-sm">
                {"By clicking sign in, you agree to the "}
                <Link className="underline font-medium" href={"/login"}>
                  Terms and Conitions
                </Link>
                {" and the "}
                <Link className="underline font-medium" href={"/login"}>
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </Card>
          {/* <div className="flex shadow bg-primary md:rounded-tr-xl md:rounded-br-xl h-100 w-full">
            <Image src={SigninArt} alt="Sign in Art Turbo Ship" objectFit="contain" />
          </div> */}
        </div>
      </Flex>
    </React.Fragment>
  );
}

export default Login;
