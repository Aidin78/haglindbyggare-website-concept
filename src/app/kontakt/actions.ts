"use server";

import { services } from "@/content/services";
import { site } from "@/content/site";
import { readContactForm, validateContact, type ContactState } from "@/lib/contact-schema";
import { getMailConfig } from "@/lib/env";
import { sendMail } from "@/lib/mailer";

const MIN_FILL_TIME_MS = 3_000;

const fallbackContact = `Ring ${site.contact.phoneDisplay} eller mejla ${site.contact.email}.`;

export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const values = readContactForm(formData);

  const honeypot = formData.get("company_website");
  const startedAt = Number(formData.get("started_at"));
  const tooFast = Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS;

  if ((typeof honeypot === "string" && honeypot.length > 0) || tooFast) {
    return {
      status: "error",
      message: `Meddelandet kunde inte skickas. Försök igen om en stund. ${fallbackContact}`,
      values,
    };
  }

  const result = validateContact(values);
  if (!result.success) {
    return { status: "invalid", errors: result.errors, values };
  }

  const config = getMailConfig();
  if (!config) {
    return {
      status: "unconfigured",
      message: `Formuläret är ännu inte kopplat till e-post, så ditt meddelande har inte skickats. ${fallbackContact}`,
      values,
    };
  }

  const { name, email, phone, service, message } = result.data;
  const serviceLabel = services.find((item) => item.id === service)?.title ?? "Annat / vet inte än";

  const sent = await sendMail(config, {
    subject: `Förfrågan via webbplatsen: ${serviceLabel} – ${name}`,
    replyTo: email,
    text: [
      `Namn: ${name}`,
      `E-post: ${email}`,
      `Telefon: ${phone || "–"}`,
      `Gäller: ${serviceLabel}`,
      "",
      message,
    ].join("\n"),
  });

  if (!sent) {
    return {
      status: "error",
      message: `Något gick fel och meddelandet kunde inte skickas. ${fallbackContact}`,
      values,
    };
  }

  return { status: "success" };
}
