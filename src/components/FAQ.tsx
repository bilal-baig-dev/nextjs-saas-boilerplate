import Link from "next/link";
import FAQItem from "./common/FAQItem";
import Section from "./common/Section";
import { appConfig } from "@/config/appConfig";

type FaqItem = {
  question: string;
  answer: string;
};
type FaqProps = {
  faqs: FaqItem[];
};

function FAQ({ faqs }: FaqProps) {
  return (
    <Section id="faq" className="flex-col lg:flex-row justify-between gap-12 items-start">
      <div className="flex gap-5 flex-col w-full">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <span>
          Still have questions? Don&apos;t hesitate to{" "}
          <Link className=" underline" href={`mailto:${appConfig.supportEmail}`}>
            reach out.
          </Link>
        </span>
      </div>
      <div className="w-full flex flex-col">
        {/* <Separator /> */}
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  );
}

export default FAQ;
