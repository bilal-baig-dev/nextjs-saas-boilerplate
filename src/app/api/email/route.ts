import { sendVerificationEmail } from "@/email/emailSender";
import { initializeEmailServices } from "@/email/init/emailServiceInit";
import { NextResponse } from "next/server";

initializeEmailServices();
async function POST(request: Request) {
  try {
    const { email: to, url, host } = await request.json();

    const result = await sendVerificationEmail(to, url);
    return NextResponse.json({ result });
  } catch (error) {
    console.log(error, "Error sending verfication email");
    let message = "Something went wrong";
    if (error instanceof Error) message = error.message;
    else message = String(error);
    return Response.json(
      { message },
      {
        status: 500,
      }
    );
  }
}

export { POST };
