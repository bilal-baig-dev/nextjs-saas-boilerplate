import React from "react";
import ButtonPurchase from "../ButtonPurchase";
import CheckIcon from "../svgs/icon-check";
import CrossIcon from "../svgs/icon-cross";
import { Card } from "../ui/card";
import { Gem } from "lucide-react";

type PricingList = {
  name: string;
  isAvail: boolean;
  isPremium?: boolean;
};

type Props = {
  currency: string;
  title: string;
  actualPrice: string;
  discountedPrice: string;
  featureList: PricingList[];
  isPopular?: boolean;
  priceID: string;
  mode: string;
  isPremium: boolean | undefined;
};

function PricingCard({ title, isPremium = false, featureList, mode, isPopular = false, actualPrice, discountedPrice, priceID, currency }: Props) {
  return (
    <Card className="relative flex flex-col border-2 border-primary w-full lg:w-2/5 p-6 gap-8 items-start bg-transparent dark:bg-zinc-900 transition-colors duration-250 rounded-xl shadow-2xl">
      {isPopular && (
        <div className="w-fit flex gap-1 uppercase  text-white absolute -top-[2%] right-0 left-1/2 font-semibold rounded-full text-sm transform -translate-x-1/2 bg-primary px-3 py-1 justify-center items-center text-center">
          <Gem />
          Best Selling
        </div>
      )}
      <h1 className="font-bold text-lg text-primary">{title}</h1>
      <div className="flex gap-2 items-center">
        <span className="text-base line-through text-gray-400 dark:text-gray-300">
          {currency}
          {actualPrice}
        </span>
        <span className="font-semibold text-4xl text-slate-600 dark:text-gray-300">
          {currency}
          {discountedPrice}
        </span>
        <span className="font-semibold text-sm text-slate-800 dark:text-gray-300">{mode}</span>
      </div>
      <ul className="list-none space-y-2">
        {featureList?.map((el, index) => {
          return (
            <li key={index} className={`font-light flex gap-2 items-center ${!isPremium && !el?.isAvail && "opacity-50"}`}>
              {el?.isAvail || isPremium ? <CheckIcon className="fill-primary" /> : <CrossIcon className="opacity-50 dark:fill-gray-300" />}
              {el?.name}
            </li>
          );
        })}
      </ul>
      <div className="flex w-full flex-col gap-2 items-center justify-center">
        <ButtonPurchase priceID={priceID} />
        <span className="text-sm opacity-80 font-semibold font-sans text-center items-center">Pay once. Ship unlimited products!</span>
      </div>
    </Card>
  );
}

export default PricingCard;
