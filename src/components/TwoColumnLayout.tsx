import Image from "next/image";
import React from "react";
import Block from "./common/Block";
import SectionTitleDescription from "./common/SectionTitleDescription";

type TwoColumnLayoutProps = {
  title: string;
  description: string;
  imageSrc: string;
  alignImageRight?: boolean;
};

function TwoColumnLayout({ features, title, description }: { features: TwoColumnLayoutProps[]; title: string; description: string }) {
  return (
    <Block id="two-column-layout">
      <SectionTitleDescription title={title} description={description} />
      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <React.Fragment>
          {features.map((feature, index) => {
            return (
              <div
                key={`${index}-two-colum-layout`}
                className={`bg-gray-300/20 dark:bg-card border-transparent dark:border-bg-background flex flex-col md:flex-row max-w-7xl ${
                  feature?.alignImageRight ? "md:flex-row-reverse" : ""
                } items-center p-4 md:p-8 bg-card  rounded-xl shadow-2xl`}
              >
                <div className="md:w-1/2 p-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{feature?.title}</h2>
                  <p className="text-black/60 dark:text-white/60  font-semibold">{feature?.description}</p>
                </div>
                <div className="md:w-1/2 flex justify-center p-4">
                  <Image src={feature?.imageSrc} alt="Feature Section Image" className="max-w-full h-auto" width={500} height={250} />
                </div>
              </div>
            );
          })}
        </React.Fragment>
      </div>
    </Block>
  );
}

export default TwoColumnLayout;
