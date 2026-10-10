import { z } from "zod";
import { services } from "@/content/services";

export const serviceValues = [...services.map((service) => service.id), "annat"] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Skriv ditt namn." })
    .max(100, { error: "Namnet får vara högst 100 tecken." })
    .regex(/^[^\r\n]*$/, { error: "Namnet får inte innehålla radbrytningar." }),
  email: z
    .string()
    .trim()
    .min(1, { error: "Skriv din e-postadress." })
    .pipe(z.email({ error: "Kontrollera e-postadressen, t.ex. namn@exempel.se." })),
  phone: z
    .string()
    .trim()
    .max(20, { error: "Telefonnumret är för långt." })
    .regex(/^$|^\+?[\d\s()-]{6,20}$/, { error: "Kontrollera telefonnumret." }),
  service: z.enum(serviceValues, { error: "Välj vad projektet gäller." }),
  message: z
    .string()
    .trim()
    .min(10, { error: "Berätta lite mer – minst 10 tecken." })
    .max(3000, { error: "Meddelandet får vara högst 3 000 tecken." }),
  consent: z.literal("on", { error: "Du behöver godkänna att vi behandlar dina uppgifter." }),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
export type ContactErrors = Partial<Record<ContactField, string[]>>;
export type ContactValues = Partial<Record<ContactField, string>>;

export type ContactState =
  | { status: "idle" }
  | { status: "invalid"; errors: ContactErrors; values: ContactValues }
  | { status: "error" | "unconfigured"; message: string; values: ContactValues }
  | { status: "success" };

export const contactFields: readonly ContactField[] = ["name", "email", "phone", "service", "message", "consent"];

export function readContactForm(formData: FormData): ContactValues {
  return Object.fromEntries(
    contactFields.map((field) => {
      const value = formData.get(field);
      return [field, typeof value === "string" ? value : ""];
    }),
  );
}

export function validateContact(values: ContactValues) {
  const result = contactSchema.safeParse(values);
  return result.success
    ? ({ success: true, data: result.data } as const)
    : ({ success: false, errors: z.flattenError(result.error).fieldErrors as ContactErrors } as const);
}
