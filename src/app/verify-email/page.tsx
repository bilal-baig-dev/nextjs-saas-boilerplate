import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import RenderVerifyEmail from "./(components)/RenderVerifyEmail";

export const metadata: Metadata = {
  title: `Verify Your Email`,
};
function VerifyEmailPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-xl space-y-6 rounded-lg p-8 shadow-lg">
          <div className="flex gap-2 flex-col items-center">
            <RenderVerifyEmail />
          </div>
        </Card>
      </div>
    </>
  );
}

export default VerifyEmailPage;
