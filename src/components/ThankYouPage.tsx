import { FC } from "react";
import { Check, MailCheck } from "lucide-react";
import Link from "next/link";
import { appConfig } from "@/config/appConfig";

interface ThankYouPageProps {
  message?: string;
  emailStatus?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ThankYouPage: FC<ThankYouPageProps> = ({
  message = "Thank you for your purchase",
  emailStatus = "Your Order was completed successfully",
  buttonText = "Back Home",
  buttonLink = "/",
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 flex flex-col gap-2 max-w-4xl mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <Check className="text-green-500" size={128} />
        </div>

        <h1 className="text-5xl font-bold  mb-2 bg-gradient-to-r from-secondary via-secondary to-primary/80 bg-clip-text text-transparent dark:text-primary">
          {message}
        </h1>

        <p className="text-2xl mb-6 bg-gradient-to-r from-secondary via-secondary to-primary/80 bg-clip-text text-transparent dark:text-primary">
          {emailStatus}
        </p>

        <div className="w-ful flex items-center w-full justify-center">
          <div className="flex gap-4 items-center  max-w-xl">
            <div>
              <MailCheck className="w-20h-20" size={72} />
            </div>
            <span className="text-justify">
              An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records.
            </span>
          </div>
        </div>

        <Link href={buttonLink}>
          <span className="inline-block mt-10 px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary-600 transition-colors duration-300">
            {buttonText}
          </span>
        </Link>

        <p className="text-sm mt-4">
          If you didn&apos;t receive any email or having issues{" "}
          <Link href={`mailto:${appConfig.supportEmail}`}>
            <span className="text-primary underline">contact us</span>
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
