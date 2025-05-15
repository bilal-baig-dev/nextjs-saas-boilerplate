import Block from "./common/Block";
import Section from "./common/Section";
import GoogleIcon from "./svgs/icon-google";
import HuluIcon from "./svgs/icon-hulu";
import MetaIcon from "./svgs/icon-meta";
import NetFlixIcon from "./svgs/icon-netflix";
import TikTokIcon from "./svgs/icon-tiktok";
import TwitchIcon from "./svgs/icon-twitch";

function ImageCarouselSection() {
  return (
    <Block id="image-carousel-section" className="border-t border-b">
      <Section className="flex-col text-center">
        <div className="mb-4 flex items-center justify-center">
          <span className="flex items-center w-auto border border-black dark:border-white px-4 py-2 text-sm rounded-full">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
            </span>
            Tech Stack Trusted By Companies WorldWide
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Next.js: Powering Success for Top Companies</h1>
        <p className="text-lg md:text-xl mb-12">
          Join top-tier companies leveraging Next.js for high-performance web solutions and exceptional user experiences. These Companies choose
        </p>
        <div className="flex flex-wrap justify-center items-center gap-14">
          {/* Replace LucideIcon with the appropriate icon components */}
          <GoogleIcon className="w-20 h-20" />
          <MetaIcon className="w-20 h-20" />
          <NetFlixIcon className="w-20 h-20" />
          <TikTokIcon className="w-20 h-20" />
          <TwitchIcon className="w-20 h-20" />
          <HuluIcon className="w-20 h-20" />
        </div>
      </Section>
    </Block>
  );
}

export default ImageCarouselSection;
