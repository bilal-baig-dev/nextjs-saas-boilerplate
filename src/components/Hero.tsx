import ProductBadge from "./ProductBadge";
import ButtonPurchase from "./ButtonPurchase";
import Image from "next/image";
import AvatarGroup from "./AvatarGroup";
import RatingGroup from "./RatingGroup";
import LaunchOfferText from "./common/LaunchOfferText";
import Block from "./common/Block";
import Flex from "./common/Flex";
import { appConfig } from "@/config/appConfig";
import { siteConfig } from "@/config";

function Hero() {
  return (
    <Block>
      {siteConfig.notificationBar ? <div className="mt-14"></div> : null}
      <section className="flex flex-col justify-between px-4 py-14 gap-12  w-full xl:max-w-7xl mx-auto">
        <div className="relative flex flex-col basis-full items-center gap-8">
          <ProductBadge title="Feature on Product Hunt" subtitle="2024" />
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center">
            Build your SaaS product
            <br />
            <span className="text-primary">within minutes</span>
          </h1>
          <p className="font-light text-lg md:text-xl lg:max-w-3xl text-center">
            Ship your startup fast. Create your SaaS, AI tool, or web app and start driving revenue in no time
          </p>
          <Flex className="flex flex-col items-center gap-8">
            <div className="w-64 items-center lg:items-start">
              <ButtonPurchase priceID={appConfig.onetime?.[1]?.priceID} rounded />
            </div>
            <LaunchOfferText title={"Launch offer:"} description="Get $100 off for next 10 customers" />
          </Flex>
          <div className="flex flex-col md:flex-row gap-4">
            <AvatarGroup />
            <div className="flex gap-2 flex-col items-center md:items-start">
              <RatingGroup />
              <span className="text-sm font-normal">Loved by early access users</span>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full max-w-7xl mx-auto relative transform transition-transform ease-in-out duration-300 hover:scale-105">
          <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
          <Image src="/images/saaspack-demo-image.webp" alt="Hero Image" width={1400} height={800} className="rounded-3xl shadow-2xl" />
        </div>
      </section>
    </Block>
  );
}

export default Hero;
