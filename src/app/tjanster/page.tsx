import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata = pageMetadata({
  title: "Tjänster",
  description:
    "Renovering, tillbyggnad, nybyggnation, snickeri och totalentreprenad i Stockholm och Mälardalen. Haglind Byggare tar sig an projekt i alla storlekar.",
  path: "/tjanster",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title={
          <>
            Allt inom bygg <em className="text-brand-ink italic">och snickeri.</em>
          </>
        }
        lead={
          <p>
            Vi arbetar mot såväl företag som privatpersoner, framför allt i Mälardalen och Stockholm. Inget projekt är
            för litet – och genom goda samarbeten kan vi även ta ansvar för helheten.
          </p>
        }
      >
        <ButtonLink href="/kontakt">Begär offert</ButtonLink>
      </PageHero>

      <Container as="nav" aria-label="Tjänster på sidan" className="border-b border-ink/10 py-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {services.map((service, index) => (
            <li key={service.id}>
              <a
                href={`#${service.id}`}
                className="inline-flex min-h-11 items-center gap-2 text-ink-soft transition-colors hover:text-ink"
              >
                <span className="text-xs tabular-nums opacity-70">{String(index + 1).padStart(2, "0")}</span>
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <div>
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-rubrik`}
            className="scroll-mt-24 border-b border-ink/10 py-16 sm:py-24 even:bg-paper-deep"
          >
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <span className="font-display text-6xl leading-none text-brand-ink tabular-nums sm:text-7xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 id={`${service.id}-rubrik`} className="mt-6 font-display text-headline">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-sm text-lg text-ink-soft">{service.summary}</p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7">
                <div className="space-y-5 text-lg leading-relaxed">
                  {service.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <h3 className="mt-10 text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">Till exempel</h3>
                <ul className="mt-4 border-t border-ink/15">
                  {service.examples.map((example) => (
                    <li key={example} className="flex items-center gap-4 border-b border-ink/15 py-3.5">
                      <span aria-hidden="true" className="h-px w-4 bg-brand" />
                      {example}
                    </li>
                  ))}
                </ul>

                {service.rotNote && (
                  <p className="mt-6 text-sm text-ink-soft">
                    {service.rotNote}{" "}
                    <Link href="/rot-avdrag" className="text-brand-ink underline underline-offset-4 hover:no-underline">
                      Så fungerar det
                    </Link>
                  </p>
                )}

                <Link
                  href={`/kontakt?tjanst=${service.id}`}
                  className="group mt-10 inline-flex min-h-11 items-center gap-3 font-medium text-brand-ink"
                >
                  <span className="link-underline">Fråga oss om {service.title.toLowerCase()}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.75}
                  />
                </Link>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <ProcessSection />
      <ContactCta />
    </>
  );
}
