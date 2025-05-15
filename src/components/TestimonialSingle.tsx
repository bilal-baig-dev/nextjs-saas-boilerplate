import Image from "next/image";
import { FC } from "react";
import RatingGroup from "./RatingGroup";
import { Card } from "./ui/card";

interface TestimonialSingleProps {
  name: string;
  title: string;
  avatarSrc: string;
  quote: string;
  socialIcon?: any;
  highlight?: string;
  align?: "center" | "start";
}

const TestimonialSingle: FC<TestimonialSingleProps> = async ({ align = "start", name, highlight, socialIcon, title, avatarSrc, quote }) => {
  return (
    <Card
      className={`flex flex-col ${
        align === "start" ? "items-start" : "items-center"
      } bg-card border-2 p-6 rounded-xl shadow-md max-w-lg mx-auto text-center`}
    >
      <div className="flex justify-center mb-4">
        <RatingGroup />
      </div>

      <p className={`text-lg font-medium mb-4 ${align === "start" ? "text-start" : "text-center"} leading-8 tracking-wider`}>
        <span className="bg-primary rounded px-1 py-px text-white">{highlight}</span>
        {` ${quote}`}
      </p>

      <div className={`flex  items-center mt-3`}>
        <Image src={avatarSrc} alt={name} width={50} height={50} className="rounded-full w-12 h-12 object-cover" />
        <div className="ml-3 text-left">
          <div className="flex items-center gap-1">
            <h3 className="text-lg font-medium">{name}</h3>
            {socialIcon}
          </div>
          <h3 className="text-medium">{title}</h3>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialSingle;
