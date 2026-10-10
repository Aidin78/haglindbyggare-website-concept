import "server-only";
import type { MailConfig } from "./env";

type MailMessage = {
  subject: string;
  text: string;
  replyTo: string;
};

export async function sendMail(config: MailConfig, message: MailMessage): Promise<boolean> {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: message.replyTo,
        subject: message.subject,
        text: message.text,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("E-posttjänsten svarade med fel:", response.status, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("Kunde inte nå e-posttjänsten:", error);
    return false;
  }
}
