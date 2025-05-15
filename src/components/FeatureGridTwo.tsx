import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Section from "./common/Section";
import SectionTitleDescription from "./common/SectionTitleDescription";
import Block from "./common/Block";

type FeaturesListProps = {
  title: string;
  icon: any;
  description: React.ReactNode;
};

type FeatureGridProps = {
  features: FeaturesListProps[];
  title: string;
  description: string;
};

const FeatureCard = ({ title, icon: Icon, description }: FeaturesListProps) => (
  <Card className="shadow-xl rounded-xl  transition-colors duration-250 bg-gray-300/20 dark:bg-card border-none dark:border-card">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
        <Icon className="h-6 w-6 text-white" />
      </div>
    </CardHeader>
    <CardContent>
      <CardTitle className="mb-2 text-lg">{title}</CardTitle>
      <p className="text-black/60 dark:text-white/60 font-semibold text-sm">{description}</p>
    </CardContent>
  </Card>
);

function FeatureGrid({ features, title, description }: FeatureGridProps) {
  return (
    <Block>
      <SectionTitleDescription title={title} description={description} />
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features && features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
        </div>
      </Section>
    </Block>
  );
}

export default FeatureGrid;
