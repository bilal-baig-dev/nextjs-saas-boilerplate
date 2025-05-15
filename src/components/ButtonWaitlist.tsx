"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

type ButtonWaitlistProps = {
  rounded?: boolean;
};
function ButtonWaitlist({ rounded = false }: ButtonWaitlistProps) {
  const router = useRouter();

  const handleScroll = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex w-full justify-center">
      <Button
        size={"sm"}
        className={`justify-center gap-2 text-sm md:text-base text-white font-semibold px-5 py-5 ${
          rounded ? "rounded-full" : "rounded-md"
        } group md:flex items-center bg-primary transition duration-500 ease-in-out transform hover:scale-105  focus:outline-none`}
        onClick={handleScroll}
      >
        Join Waitlist <ArrowDown className="w-5 h-5" />
      </Button>
    </div>
  );
}

export default ButtonWaitlist;
