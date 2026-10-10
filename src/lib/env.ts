import "server-only";
import { z } from "zod";

const mailEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1),
  CONTACT_TO_EMAIL: z.email(),
  CONTACT_FROM_EMAIL: z.string().min(3),
});

export type MailConfig = {
  apiKey: string;
  to: string;
  from: string;
};

export function getMailConfig(): MailConfig | null {
  const raw = {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  };

  if (Object.values(raw).every((value) => !value)) return null;

  const result = mailEnvSchema.safeParse(raw);
  if (!result.success) {
    console.error(
      "Kontaktformuläret är felkonfigurerat. Kontrollera:",
      result.error.issues.map((issue) => issue.path.join(".")).join(", "),
    );
    return null;
  }

  return {
    apiKey: result.data.RESEND_API_KEY,
    to: result.data.CONTACT_TO_EMAIL,
    from: result.data.CONTACT_FROM_EMAIL,
  };
}
