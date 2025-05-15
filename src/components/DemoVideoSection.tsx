import React from "react";
import Section from "./common/Section";
import Video from "./common/Video";
import DownArrowIcon from "./svgs/icon-down-arrow";

function DemoVideoSection() {
  return (
    <Section className="justify-center">
      <div className="w-full max-w-5xl justify-center flex flex-col gap-4 items-center">
        <h2 className="font-bold text-2xl whitespace-nowrap md:text-3xl text-primary capitalize">Launch your SAAS in Minutes!</h2>
        <DownArrowIcon className="h-20 w-20 fill-primary rounded-2xl" />
        <Video videoId="" />
      </div>
    </Section>
  );
}

export default DemoVideoSection;
