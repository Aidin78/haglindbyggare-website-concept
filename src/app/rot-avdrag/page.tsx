import { ArrowUpRight } from "lucide-react";
import { skatteverketRotUrl } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata = pageMetadata({
  title: "ROT-avdrag",
  description:
    "Så fungerar ROT-avdraget när du anlitar Haglind Byggare för renovering, ombyggnad eller tillbyggnad. Avdraget görs direkt på fakturan.",
  path: "/rot-avdrag",
});

const coverage = [
  { title: "Omfattas", items: ["Reparation och underhåll", "Ombyggnad", "Tillbyggnad", "Arbetskostnaden för arbetet"] },
  { title: "Omfattas inte", items: ["Material", "Resekostnader", "Andra kostnader än arbete"] },
] as const;

const steps = [
  { title: "Avdraget dras på fakturan", text: "Företaget du anlitar drar av ROT-avdraget från arbetskostnaden direkt på fakturan." },
  { title: "Du betalar resten", text: "Du betalar det belopp som återstår efter avdraget. Betalningsdagen avgör vilket år avdraget räknas till." },
  { title: "Företaget ansöker", text: "När arbetet är utfört och betalt ansöker företaget om utbetalning från Skatteverket." },
] as const;

function SkatteverketLink({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  return (
    <a href={skatteverketRotUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses(variant)}>
      <span>
        Läs mer hos Skatteverket<span className="sr-only"> (öppnas i ny flik)</span>
      </span>
      <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.75} />
    </a>
  );
}

export default function RotPage() {
  return (
    <>
      <PageHero
        eyebrow="ROT-avdrag"
        title={
          <>
            Mindre att betala <em className="text-pine italic">för arbetet.</em>
          </>
        }
        lead={
          <p>
            Som privatperson kan du få skattereduktion för en del av arbetskostnaden när du anlitar ett företag för
            reparation, underhåll, ombyggnad eller tillbyggnad av din bostad.
          </p>
        }
      >
        <SkatteverketLink />
      </PageHero>

      <section aria-labelledby="omfattning-rubrik" className="py-20 sm:py-28 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow index="01" className="text-pine">
              Vad omfattas
            </Eyebrow>
            <h2 id="omfattning-rubrik" className="mt-6 font-display text-headline">
              Avdraget gäller arbetet – inte materialet.
            </h2>
            <p className="mt-6 text-lead text-ink-soft">
              ROT-avdraget är en skattereduktion. Det betyder att din skatt minskar med motsvarande belopp, och att
              avdraget inte kan bli större än vissa skatter och avgifter du betalar.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {coverage.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-medium tracking-[0.18em] text-ink-soft uppercase">{group.title}</h3>
                <ul className="mt-4 border-t border-ink/15">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 border-b border-ink/15 py-4 text-lg">
                      <span aria-hidden="true" className="h-px w-4 bg-pine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="sa-fungerar-rubrik" className="border-y border-ink/10 bg-paper-deep py-20 sm:py-28 lg:py-32">
        <Container>
          <Eyebrow index="02" className="text-pine">
            Så går det till
          </Eyebrow>
          <h2 id="sa-fungerar-rubrik" className="mt-6 max-w-3xl font-display text-headline">
            Du behöver inte ansöka själv.
          </h2>
          <ol className="mt-14 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="bg-paper-deep p-6 sm:p-8">
                <span className="font-display text-5xl leading-none text-timber tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="belopp-rubrik" className="py-20 sm:py-28 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow index="03" className="text-pine">
              Belopp och regler
            </Eyebrow>
            <h2 id="belopp-rubrik" className="mt-6 font-display text-headline">
              Kontrollera aktuella nivåer hos Skatteverket.
            </h2>
          </div>
          <div className="space-y-6 text-lg text-ink-soft lg:col-span-6 lg:col-start-7">
            <p>
              Hur stor del av arbetskostnaden som kan dras av och hur högt avdraget kan bli per person och år styrs av
              Skatteverkets regler – och de ändras ibland. Det finns också krav på bland annat bostaden och dig som
              beställare.
            </p>
            <p>
              Därför anger vi inga procentsatser eller belopp här. Aktuella regler finns alltid hos Skatteverket, och vi
              går gärna igenom vilka delar av ditt projekt som kan omfattas när vi tar fram en offert.
            </p>
            <div className="pt-4">
              <SkatteverketLink variant="secondary" />
            </div>
            <p className="border-t border-ink/15 pt-6 text-sm">
              Informationen på den här sidan är en översikt och ersätter inte Skatteverkets regler och vägledning.
            </p>
          </div>
        </Container>
      </section>

      <ContactCta
        title="Planerar du en renovering eller tillbyggnad?"
        text="Berätta om ditt projekt, så går vi igenom vad som behöver göras och vad som kan omfattas av ROT-avdraget."
      />
    </>
  );
}
