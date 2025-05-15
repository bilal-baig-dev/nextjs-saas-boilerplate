import { appConfig } from "@/config/appConfig";
import PHReview from "./common/PHReview";

function NotificationBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-white p-2 z-50 flex justify-center gap-1 items-center">
      <div className="font-bold">${appConfig.appName} is Live on Product Hunt! 🚀 </div>
      <PHReview />
    </div>
  );
}

export default NotificationBar;
