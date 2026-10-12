import { Suspense } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { addressLine, mapLinks, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Ruler } from "@/components/ui/Ruler";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormWithParams } from "@/components/contact/ContactFormWithParams";

export const metadata = pageMetadata({
  title: "Kontakt",
  description: `Kontakta Haglind Byggare AB för offert på renovering, tillbyggnad, nybyggnation eller snickeri. Ring ${site.contact.phoneDisplay} eller mejla ${site.contact.email}.`,
  path: "/kontakt",
});

const directLinkClass =
  "group flex min-h-16 items-center gap-5 border-b border-ink/15 py-5 transition-colors hover:text-brand-ink";

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <section className="border-b border-ink/10">
        <Container className="grid gap-16 pt-14 pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:pb-28">
          <div className="lg:col-span-5">
            <Eyebrow className="text-brand-ink">Kontakt</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,1.6rem+3.6vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.025em]">
              Hör av dig <em className="text-brand-ink italic">till oss.</em>
            </h1>
            <p className="mt-8 max-w-md text-lead text-ink-soft">
              Välkommen att kontakta oss om du har frågor eller vill ha en offert. Ring, mejla eller använd formuläret.
            </p>

            <ul className="mt-12 border-t border-ink/15">
              <li>
                <a href={contact.phoneHref} className={directLinkClass}>
                  <Phone aria-hidden="true" className="size-5 shrink-0 text-brand" strokeWidth={1.5} />
                  <span className="flex flex-col">
                    <span className="text-xs tracking-[0.18em] text-ink-soft uppercase">Telefon</span>
                    <span className="font-display text-3xl tabular-nums">{contact.phoneDisplay}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className={directLinkClass}>
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-brand" strokeWidth={1.5} />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs tracking-[0.18em] text-ink-soft uppercase">E-post</span>
                    <span className="text-lg break-all sm:text-xl">{contact.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-5 border-b border-ink/15 py-5">
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-brand" strokeWidth={1.5} />
                <span className="flex flex-col">
                  <span className="text-xs tracking-[0.18em] text-ink-soft uppercase">Adress</span>
                  <address className="text-lg not-italic">{addressLine}</address>
                </span>
              </li>
              <li>
                <a
                  href={site.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={directLinkClass}
                >
                  <InstagramIcon className="size-5 shrink-0 text-brand" />
                  <span className="flex flex-col">
                    <span className="text-xs tracking-[0.18em] text-ink-soft uppercase">Instagram</span>
                    <span className="text-lg">
                      {site.social.instagram.handle}
                      <span className="sr-only"> (öppnas i ny flik)</span>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-paper-deep p-6 sm:p-10 lg:p-12">
              <h2 className="font-display text-title">Begär offert</h2>
              <p className="mt-3 text-ink-soft">
                Beskriv kort vad du vill göra, så hör vi av oss. Ju mer du berättar, desto lättare är det för oss att
                ge ett bra svar.
              </p>
              <div className="mt-8">
                <Suspense fallback={<ContactForm />}>
                  <ContactFormWithParams />
                </Suspense>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="hitta-rubrik" className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Eyebrow className="text-brand-ink">Hitta hit</Eyebrow>
            <h2 id="hitta-rubrik" className="mt-6 font-display text-headline">
              {contact.address.city}
            </h2>
            <address className="mt-6 text-lg text-ink-soft not-italic">
              {site.name}
              <br />
              {contact.address.street}
              <br />
              {contact.address.postalCode} {contact.address.city}
            </address>
            <ul className="mt-8 flex flex-col gap-1">
              {[
                { href: mapLinks.google, label: "Öppna i Google Maps" },
                { href: mapLinks.apple, label: "Öppna i Apple Kartor" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-2 font-medium text-brand-ink"
                  >
                    <span className="link-underline">{link.label}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                    <span className="sr-only">(öppnas i ny flik)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden border border-ink/15 bg-paper-deep sm:aspect-[16/9]">
              <iframe
                title={`Karta över ${contact.address.city} med Håstahagvägen`}
                src={mapLinks.osmEmbed}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 size-full grayscale-[0.85] sepia-[0.15]"
              />
            </div>
            <Ruler className="mt-4 text-ink" />
            <p className="mt-3 text-xs text-ink-soft">
              Kartdata ©{" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                OpenStreetMap-bidragsgivare
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
