import Image from "next/image";
import { FeaturesSectionProps, SvgIconProps } from "@/interfaces";
import Flex from "./common/Flex";
import Section from "./common/Section";
import { Card } from "./ui/card";
import Block from "./common/Block";
import React from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  contentPosition?: "left" | "right";
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];

  iconTextItems: {
    icon: React.FC<SvgIconProps>;
    name: string;
  }[];
}

const ProductHighlights: React.FC<SectionProps> = ({ title, subtitle, imageUrl, contentPosition = "left", features, iconTextItems }) => {
  return (
    <Section className="flex-col items-center gap-12 py-0">
      <div
        className={`mx-auto flex gap-12 flex-col md:flex-row ${contentPosition === "left" ? "" : "md:flex-row-reverse"} items-start md:items-center`}
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-80">{subtitle}</p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {iconTextItems.map((item, index) => {
              return (
                <Flex className="flex flex-row gap-2 items-center" key={index}>
                  <item.icon className="w-10 h-10" />
                  <span className="text-lg font-semibold">{item.name}</span>
                </Flex>
              );
            })}
          </div>
        </div>
        <div className={`w-full md:w-1/2 flex ${contentPosition === "left" ? "md:justify-end" : "md:justify-start"}`}>
          <Image src={imageUrl} alt="Section Image" width={500} height={300} className="object-cover w-full md:w-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature: any, index) => (
          <Card
            key={index}
            className="flex flex-col gap-2 px-6 py-8 dark:border-card transform transition-transform duration-300 hover:scale-110 rounded-2xl shadow-2xl"
          >
            {/* Icon */}
            {feature.icon && <feature.icon className="w-8 h-8" />}
            {/* Title */}
            <h3 className="text-xl font-bold">{feature.title}</h3>
            {/* Description */}
            <p className="whitespace-pre-wrap">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const FeaturesSection = (props: FeaturesSectionProps) => {
  const { features } = props;

  return (
    <React.Fragment>
      {features.map((feature, index) => {
        return (
          <Block key={`feature-section-${index}`}>
            <ProductHighlights
              title={feature.title}
              subtitle={feature.subtitle}
              imageUrl={feature.imageUrl}
              contentPosition={feature?.contentPosition as "left" | "right"}
              features={feature.featureItems}
              iconTextItems={feature.iconTextItems}
            />
          </Block>
        );
      })}
    </React.Fragment>
  );
};

export default FeaturesSection;
