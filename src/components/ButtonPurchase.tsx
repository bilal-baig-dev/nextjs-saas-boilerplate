"use client";
import { Button } from "./ui/button";
import PackIcon from "./svgs/icon-pack";
import { createCheckoutSession } from "@/actions/stripe";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import Spinner from "./common/Spinner";
import { appConfig } from "@/config/appConfig";
type ButtonPurchaseProps = {
  rounded?: boolean;
  priceID: string;
};
function SubmitButton({ rounded }: { rounded: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button
      size={"sm"}
      className={`
          ${rounded ? "rounded-full" : "rounded-xl"}
          w-full  text-base text-white font-semibold p-6 md:p-8 group md:flex items-center bg-primary transition duration-500 ease-in-out transform hover:scale-105  focus:outline-none`}
      type="submit"
    >
      {pending ? (
        <Spinner />
      ) : (
        <PackIcon className="mr-2 w-5 h-4 fill-primary-foreground  group-hover:scale-110 transform group-hover:animate-spin-slow  " />
      )}
      Get {appConfig.appName}
    </Button>
  );
}
function ButtonPurchase({ rounded = false, priceID }: ButtonPurchaseProps) {
  const router = useRouter();
  return (
    <form
      action={async () => {
        const url = await createCheckoutSession(priceID);
        router.push(url as string);
      }}
      className="flex w-full"
    >
      <SubmitButton rounded={rounded} />
    </form>
  );
}

export default ButtonPurchase;
