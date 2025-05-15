import { Card } from "./ui/card";
import Link from "next/link";
import XIcon from "./svgs/icon-social-x";
import { Separator } from "./ui/separator";
import { MessageCircleMore } from "lucide-react";
import Section from "./common/Section";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from "react";
import { appConfig } from "@/config/appConfig";
const testimonials = [
  {
    name: "John D.",
    title: "Indie Maker",
    avatarSrc: "/images/img2.jpg",
    socialIcon: (
      <Link href="https://x.com/">
        <XIcon className="w-8 h-8 fill-none" />
      </Link>
    ),
    comment: `${appConfig.appName} boilerplate is a game-changer! We launched our MVP in just two weeks, saving months of development time. The pre-built features and integrations are exactly what every SaaS startup needs.`,
  },
  {
    name: "Lisa Patel",
    title: "CTO",
    avatarSrc: "",
    socialIcon: (
      <Link href="https://x.com/">
        <XIcon className="w-8 h-8 fill-none" />
      </Link>
    ),
    comment:
      "I’m not a backend expert, but this made everything so easy. From payments to authentication, I had everything ready to go in a few clicks.",
  },
  {
    name: "Mike Johnson",
    title: "Solopreneur",
    avatarSrc: "/images/img3.jpg",
    socialIcon: (
      <Link href="https://x.com/">
        <XIcon className="w-8 h-8 fill-none" />
      </Link>
    ),
    comment: `${appConfig.appName} boilerplate is a game-changer! We launched our MVP in just two weeks, saving months of development time. The pre-built features and integrations are exactly what every SaaS startup needs.`,
  },
];

const TestimonialCard = ({ name, comment, avatarSrc, socialIcon, title }: any) => (
  <Card
    className={`flex flex-col items-start
     bg-card border-2 p-6 justify-between rounded-xl gap-2 shadow-md max-w-lg mx-auto`}
  >
    <p className={`text-lg font-medium mb-4 text-start tracking-wider`}>{comment}</p>
    <div className="flex flex-col w-full">
      <Separator />
      <div className={`flex items-center mt-3`}>
        <Avatar className="h-12 w-12">
          <AvatarImage className="rounded-full w-12 h-12 object-cover" src={avatarSrc} />
          <AvatarFallback className=" bg-gray-300">{name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="ml-6 text-left">
          <div className="flex items-center gap-1">
            <h3 className="text-lg font-medium">{name}</h3>
            {socialIcon}
          </div>
          <h3 className="text-medium">{title}</h3>
        </div>
      </div>
    </div>
  </Card>
);

function TestimonialThreeColumn() {
  return (
    <Section id="testimonial" className="flex-col items-center gap-6">
      <Card className="px-4 gap-2 flex items-center border-2 py-2 rounded-xl bg-card">
        <MessageCircleMore className="text-primary" />
        <h1 className="text-primary font-semibold text-xl">Testimonials</h1>
      </Card>
      <h1 className="text-3xl md:text-5xl font-bold">Trusted By Founders Everywhere</h1>
      <p className="text-lg md:text-xl text-center mb-12">
        Discovering how indie founders are leveraging this boilerplate to skip setup headaches and focus on building—proving that shipping fast is
        possible.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <React.Fragment key={index}>
            <TestimonialCard {...testimonial} />
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

export default TestimonialThreeColumn;
