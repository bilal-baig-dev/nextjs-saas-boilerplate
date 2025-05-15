"use client";
import { appConfig } from "@/config/appConfig";
import PricingCard from "./common/PricingCard";
import Section from "./common/Section";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { Card } from "./ui/card";
import { Banknote } from "lucide-react";

const pricingListFeature = [
  {
    name: "Starter template (Next.js 14 + TypeScript)",
    isAvail: true,
  },
  {
    name: "Payment integration (Stripe)",
    isAvail: true,
  },
  {
    name: "Email support (transactional via Resend/Mailgun)",
    isAvail: true,
  },
  {
    name: "Auth with email, password, and magic link",
    isAvail: true,
  },
  {
    name: "Social login (Google, GitHub, and more)",
    isAvail: true,
  },
  {
    name: "Built-in SEO and blog with MDX",
    isAvail: true,
  },
  {
    name: "Reusable UI components",
    isAvail: true,
  },
  {
    name: "Lifetime updates",
    isAvail: false,
    isPremium: true,
  },
];

function Pricing() {
  const [pricing, setPricing] = useState(appConfig.stripePaymentMode === "payment" ? appConfig.onetime : appConfig.recurring.monthly);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <Section id="pricing" className="flex-col items-center gap-6">
      <Card className="px-4 gap-2 flex items-center border-2 py-2 rounded-xl bg-card">
        <Banknote className="text-primary" />
        <h1 className="text-primary font-semibold text-xl">Pricing</h1>
      </Card>
      <div className="flex flex-col gap-2">
        {/* <h2 className="text-center text-2xl sm:text-4xl font-bold">Lorem ipsum dolor sit amet</h2>
        <h2 className="text-center text-primary text-2xl sm:text-4xl font-bold">Lorem ipsum dolor sit amet</h2>
         */}
        {/* <div className="my-1">
          <LaunchOfferText title={"$100 off"} description="for the next 50 customers (Only 15 spots left!)" />
        </div> */}
      </div>
      {appConfig.stripePaymentMode === "subscription" && (
        <div className="flex items-center gap-3">
          <span>Billed Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={(checked) => {
              setIsYearly(checked);
              setPricing(checked ? appConfig.recurring.yearly : appConfig.recurring.monthly);
            }}
          />
          <span>Billed Yearly</span>
        </div>
      )}
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-8">
        {pricing.map((price, index) => {
          return (
            <PricingCard
              key={`pricing-${index}`}
              currency={appConfig.currencySymbol}
              actualPrice={price.price}
              discountedPrice={price.discountedPrice}
              isPremium={price?.isPremium}
              priceID={price.priceID}
              title={price.name}
              isPopular={price.isPopular}
              featureList={pricingListFeature}
              mode={appConfig.stripePaymentMode === "payment" ? "/one-time" : isYearly ? "/year" : "/month"}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Pricing;
