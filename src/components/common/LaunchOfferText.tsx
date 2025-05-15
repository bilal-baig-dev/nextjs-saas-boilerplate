import { Gift } from "lucide-react";
import { Card } from "../ui/card";

type LaunchOfferTextProps = {
  title: string;
  description: string;
};
function LaunchOfferText({ title, description }: LaunchOfferTextProps) {
  return (
    <Card className="px-4 gap-2 border-2 flex items-center py-2 justify-center  rounded-2xl bg-card">
      <Gift className="text-green-500 animate-pulse" />
      <span className="text-xs sm:text-lg text-start font-medium">
        <span className="text-green-500 whitespace-nowrap text-xs sm:text-lg">{title}</span> {description}
      </span>
    </Card>
  );
}

export default LaunchOfferText;
