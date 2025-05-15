"use server";
const APP_API_KEY = process.env.APP_API_KEY!;

export async function sendVerificationRequest(params: { identifier: string; provider: string; url: string }) {
  const { identifier: to, url } = params;

  const { host } = new URL(url);

  const domainName = url.split("/api")[0];
  await fetch(`${domainName}/api/email`, {
    body: JSON.stringify({ email: to, url, host }),
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: APP_API_KEY,
    },
  });
}
