import { appConfig } from "@/config/appConfig";
import ButtonPurchase from "./ButtonPurchase";
import { Crown } from "lucide-react";

function CTA() {
  return (
    <div className="flex h-[500px] justify-center items-center">
      <div className="w-full h-full gap-5 flex flex-col relative bg-cover bg-center justify-center items-center px-12 py-12">
        <div className="absolute inset-0 dark:bg-card opacity-70"></div>
        <h1 className="relative text-4xl md:text-5xl text-primary font-bold mb-2 text-center z-10">
          <span className="font-extrabold whitespace-normal  xl:whitespace-nowrap">Lorem ipsum dolor sit amet.</span>
          <Crown className="absolute -top-8 md:-top-20 -right-4 w-8 h-8 md:w-16 md:h-16" />
        </h1>
        <span className="font-light z-10 text-xl text-center">Lorum consectetur adipiscing elit. Sed do eiusmod tempor</span>

        <div className="w-64 mt-10 items-center lg:items-start">
          <ButtonPurchase priceID={appConfig.onetime?.[1]?.priceID} rounded />
        </div>
      </div>
    </div>
  );
}

export default CTA;
