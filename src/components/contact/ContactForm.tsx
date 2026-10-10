"use client";

import { useActionState, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { submitContact } from "@/app/kontakt/actions";
import { serviceOptions } from "@/content/services";
import { site } from "@/content/site";
import {
  contactFields,
  readContactForm,
  serviceValues,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactState,
} from "@/lib/contact-schema";
import { cn } from "@/lib/cn";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "block w-full rounded-none border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-lg text-ink transition-colors placeholder:text-ink-soft/70 hover:border-ink/60 focus:border-pine focus:shadow-[0_1px_0_var(--color-pine)] focus:outline-none focus-visible:outline-none aria-[invalid=true]:border-alert";

const labels: Record<ContactField, string> = {
  name: "Namn",
  email: "E-post",
  phone: "Telefon",
  service: "Vad gäller projektet?",
  message: "Berätta om projektet",
  consent: "Samtycke",
};

type FieldProps = {
  name: ContactField;
  label: string;
  optional?: boolean;
  errors?: string[];
  children: (props: { id: string; "aria-invalid": boolean; "aria-describedby"?: string }) => React.ReactNode;
  className?: string;
};

function Field({ name, label, optional, errors, children, className }: FieldProps) {
  const id = `kontakt-${name}`;
  const errorId = `${id}-fel`;
  const invalid = Boolean(errors?.length);

  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium">
        <span>{label}</span>
        {optional && <span className="text-xs font-normal text-ink-soft">Valfritt</span>}
      </label>
      {children({ id, "aria-invalid": invalid, "aria-describedby": invalid ? errorId : undefined })}
      {invalid && (
        <p id={errorId} className="mt-2 flex items-start gap-2 text-sm text-alert">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
          {errors?.[0]}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [clientErrors, setClientErrors] = useState<ContactErrors | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);

  const values = state.status === "invalid" || state.status === "error" || state.status === "unconfigured" ? state.values : {};
  const errors: ContactErrors = clientErrors ?? (state.status === "invalid" ? state.errors : {});
  const errorFields = contactFields.filter((field) => errors[field]?.length);
  const initialService =
    values.service || (serviceValues as readonly string[]).find((value) => value === defaultService) || "";

  const markStarted = () => {
    if (startedAtRef.current && !startedAtRef.current.value) {
      startedAtRef.current.value = String(Date.now());
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const result = validateContact(readContactForm(new FormData(event.currentTarget)));
    if (result.success) {
      setClientErrors(null);
      return;
    }
    event.preventDefault();
    setClientErrors(result.errors);
    const first = contactFields.find((field) => result.errors[field]?.length);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const revalidate = (field: ContactField) => {
    if (!errors[field] || !formRef.current) return;
    const result = validateContact(readContactForm(new FormData(formRef.current)));
    const fieldErrors = result.success ? undefined : result.errors[field];
    setClientErrors((current) => {
      const next = { ...(current ?? errors) };
      if (fieldErrors) next[field] = fieldErrors;
      else delete next[field];
      return next;
    });
  };

  if (state.status === "success") {
    return (
      <div role="status" className="border border-pine/30 bg-pine/5 p-8 sm:p-10">
        <CircleCheck aria-hidden="true" className="size-8 text-pine" strokeWidth={1.5} />
        <h2 className="mt-6 font-display text-title">Tack – ditt meddelande är skickat.</h2>
        <p className="mt-4 text-ink-soft">
          Vi återkommer så snart vi kan. Är det bråttom når du oss på{" "}
          <a href={site.contact.phoneHref} className="text-pine underline underline-offset-4">
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit}
      onFocusCapture={markStarted}
      noValidate
      aria-describedby="kontakt-info"
      className="relative"
    >
      <p id="kontakt-info" className="text-sm text-ink-soft">
        Fält utan markering är obligatoriska.
      </p>

      {errorFields.length > 0 && (
        <div role="alert" className="mt-6 border-l-2 border-alert bg-alert/5 p-4 text-sm">
          <p className="font-medium text-alert">Kontrollera följande:</p>
          <ul className="mt-2 space-y-1">
            {errorFields.map((field) => (
              <li key={field}>
                <a href={`#kontakt-${field}`} className="underline underline-offset-4">
                  {labels[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(state.status === "error" || state.status === "unconfigured") && (
        <div role="alert" className="mt-6 flex gap-3 border-l-2 border-alert bg-alert/5 p-4 text-sm">
          <CircleAlert aria-hidden="true" className="size-5 shrink-0 text-alert" strokeWidth={1.75} />
          <p>{state.message}</p>
        </div>
      )}

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <Field name="name" label={labels.name} errors={errors.name}>
          {(props) => (
            <input
              {...props}
              name="name"
              type="text"
              autoComplete="name"
              defaultValue={values.name}
              onChange={() => revalidate("name")}
              className={inputClass}
            />
          )}
        </Field>

        <Field name="phone" label={labels.phone} optional errors={errors.phone}>
          {(props) => (
            <input
              {...props}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              defaultValue={values.phone}
              onChange={() => revalidate("phone")}
              className={inputClass}
            />
          )}
        </Field>

        <Field name="email" label={labels.email} errors={errors.email} className="sm:col-span-2">
          {(props) => (
            <input
              {...props}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="namn@exempel.se"
              defaultValue={values.email}
              onChange={() => revalidate("email")}
              className={inputClass}
            />
          )}
        </Field>

        <Field name="service" label={labels.service} errors={errors.service} className="sm:col-span-2">
          {(props) => (
            <select
              {...props}
              key={initialService}
              name="service"
              defaultValue={initialService}
              onChange={() => revalidate("service")}
              className={cn(inputClass, "cursor-pointer appearance-none bg-[length:1rem] bg-[right_center] bg-no-repeat")}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231c1d1a' stroke-width='1.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
              }}
            >
              <option value="" disabled>
                Välj ett alternativ
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value="annat">Annat / vet inte än</option>
            </select>
          )}
        </Field>

        <Field name="message" label={labels.message} errors={errors.message} className="sm:col-span-2">
          {(props) => (
            <textarea
              {...props}
              name="message"
              rows={5}
              placeholder="Vad vill du bygga eller renovera, och var ligger projektet?"
              defaultValue={values.message}
              onChange={() => revalidate("message")}
              className={cn(inputClass, "resize-y")}
            />
          )}
        </Field>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Lämna detta fält tomt</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="started_at" />

      <div className="mt-10">
        <div className="flex items-start gap-4">
          <input
            id="kontakt-consent"
            name="consent"
            type="checkbox"
            defaultChecked={values.consent === "on"}
            aria-invalid={Boolean(errors.consent?.length)}
            aria-describedby={errors.consent?.length ? "kontakt-consent-fel" : "kontakt-consent-info"}
            onChange={() => revalidate("consent")}
            className="mt-1 size-5 shrink-0 cursor-pointer accent-pine"
          />
          <div>
            <label htmlFor="kontakt-consent" className="cursor-pointer text-sm leading-relaxed">
              Jag godkänner att {site.name} sparar och använder mina uppgifter för att besvara min förfrågan.
            </label>
            <p id="kontakt-consent-info" className="mt-1 text-xs text-ink-soft">
              Uppgifterna används endast för att kontakta dig om ditt projekt.
            </p>
            {errors.consent?.length ? (
              <p id="kontakt-consent-fel" className="mt-2 flex items-start gap-2 text-sm text-alert">
                <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
                {errors.consent[0]}
              </p>
            ) : null}
          </div>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="group mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-pine px-8 text-base font-medium text-paper transition-colors hover:bg-pine-deep disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {pending ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-5 animate-spin" strokeWidth={1.75} />
              Skickar…
            </>
          ) : (
            <>
              Skicka förfrågan
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
