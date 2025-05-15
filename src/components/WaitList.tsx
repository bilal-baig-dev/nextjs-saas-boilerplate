import React from "react";
import Image from "next/image";
import ButtonWaitlist from "./ButtonWaitlist";
import Flex from "./common/Flex";
import Block from "./common/Block";
import WaitlistForm from "./common/WaitlistForm";
import FeatureGrid from "./FeatureGridTwo";
import FeatureHighlights from "./FeatureHighlights";
import Footer from "./Footer";
import Header from "./Header";
import TwoColumnLayout from "./TwoColumnLayout";
import FAQ from "./FAQ";
import { faqs, featuresGridTwo, highlights, TwoColumnLayoutFeatures } from "@/lib/constants";
import LaunchOfferText from "./common/LaunchOfferText";
import PHFollowButton from "./common/PHFollowButton";
import { siteConfig } from "@/config";

function WaitList() {
  return (
    <>
      <Header />
      <main className="w-full max-w-full overflow-hidden mt-16">
        <Block>
          {siteConfig.notificationBar ? <div className="mt-20"></div> : null}

          <Flex className="flex items-center mt-10 flex-col gap-8">
            <PHFollowButton />
          </Flex>

          <div className="max-w-4xl mx-auto mt-5">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
              The Ultimate Next.js
              <br />
              Boilerplate for Your SaaS
            </h1>
            <p className="text-lg md:text-xl mb-8 text-center">Your Idea to MVP in Record Time</p>
            <Flex className="flex items-center flex-col gap-8">
              <ButtonWaitlist rounded={true} />
              <LaunchOfferText title={"50% off:"} description="Only 15 spots left! Join the waitlist today." />
            </Flex>
          </div>

          <div className="mt-16 w-full max-w-7xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none"></div>
            <Image src="/images/hero-section-image.webp" alt="Hero Image" width={1400} height={800} className="rounded-lg shadow-2xl" />
          </div>
        </Block>

        <TwoColumnLayout
          title="Lorem Ipsum Dolor Sit Amet"
          description="Ut dictum ante ut leo cursus, et facilisis urna congue."
          features={TwoColumnLayoutFeatures}
        />

        <FeatureHighlights
          title="Lorem Ipsum Dolor Sit Amet"
          description="Lorem ipsum dolor sit amet, consectetur Vivamus lacinia odio vitae vestibulum vestibulum."
          highlights={highlights}
        />
        <FeatureGrid
          title="Lorem Ipsum Dolor Sit Amet"
          description="Lorem ipsum dolor sit amet, consectetur Vivamus lacinia odio vitae vestibulum vestibulum."
          features={featuresGridTwo}
        />
        <Block id="faq">
          <FAQ faqs={faqs} />
        </Block>

        <Block id="waitlist">
          <div className="h-[48rem] flex items-start justify-center">
            <div className="flex border-none flex-col gap-6 px-2 py-12 rounded-xl w-full lg:w-10/12 items-center justify-center">
              <Flex className="flex-col items-center gap-2">
                <h1 className="whitespace-nowrap capitalize gap-2 font-extrabold text-xl sm:text-3xl flex flex-col z-10">
                  <span className="font-extrabold text-center text-primary">Sign Up for Early Access</span>
                </h1>
                <div className="text-center max-w-2xl text-md md:text-lg font-bold">
                  Be among the first to
                  <span className="text-green-500 whitespace-nowrap"> save 50%</span> with our early bird discount.
                </div>
              </Flex>
              <WaitlistForm />
            </div>
          </div>
        </Block>
      </main>
      <Footer />
    </>
  );
}

export default WaitList;
