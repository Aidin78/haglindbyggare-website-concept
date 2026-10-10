import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function RotTeaser({ index }: { index?: string }) {
  return (
    <section aria-labelledby="rot-rubrik" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 border border-ink/15 p-6 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-16">
          <div className="lg:col-span-6">
            <Eyebrow index={index} className="text-pine">
              ROT-avdrag
            </Eyebrow>
            <h2 id="rot-rubrik" className="mt-6 font-display text-headline">
              Avdraget görs direkt på fakturan.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-5 lg:col-start-8">
            <p className="text-lead text-ink-soft">
              Som privatperson kan du få skattereduktion för arbetskostnaden vid reparation, underhåll, ombyggnad och
              tillbyggnad av din bostad. Material och resor omfattas inte.
            </p>
            <div>
              <ButtonLink href="/rot-avdrag" variant="secondary">
                Så fungerar ROT-avdraget
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
