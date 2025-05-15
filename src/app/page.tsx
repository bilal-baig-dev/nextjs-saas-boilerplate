import Container from "@/components/Container";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FeatureHighlights from "@/components/FeatureHighlights";
import FeaturesGrid from "@/components/FeatureGridOne";
import FeaturesSection from "@/components/ProductHighlights";
import Hero from "@/components/Hero";
import ImageCarouselSection from "@/components/ImageCarouselSection";
import Pricing from "@/components/Pricing";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import { faqs, featuresGridOne, featuresSection, highlights, TwoColumnLayoutFeatures } from "@/lib/constants";

export default function Home() {
  return (
    <Container>
      <Hero />
      <FeaturesSection features={featuresSection} />
      <TwoColumnLayout
        features={TwoColumnLayoutFeatures}
        title="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
      />
      <FeatureHighlights
        title="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur Vivamus lacinia odio vitae vestibulum vestibulum."
        highlights={highlights}
      />
      <FeaturesGrid
        title="Lorem Ipsum Dolor Sit Amet"
        description="Lorem ipsum dolor sit amet, consectetur Vivamus lacinia odio vitae vestibulum vestibulum."
        features={featuresGridOne}
      />
      <Pricing />
      <FAQ faqs={faqs} />
      <ImageCarouselSection />
      <CTA />
    </Container>
  );
}
