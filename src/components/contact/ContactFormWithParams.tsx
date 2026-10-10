"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";

export function ContactFormWithParams() {
  const searchParams = useSearchParams();
  return <ContactForm defaultService={searchParams.get("tjanst") ?? undefined} />;
}
