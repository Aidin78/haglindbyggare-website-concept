import Image from "next/image";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/sections/PageHero";
import { FactsBand } from "@/components/sections/FactsBand";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata = pageMetadata({
  title: "Om oss",
  description:
    "Haglind Byggare AB startades år 2000 av Frederic Haglind och drivs i dag av Frederic och Mickaela Haglind. Ett familjeföretag med erfarenhet av omkring 450 villor.",
  path: "/om-oss",
});

const timeline = [
  { year: "2000", text: "Frederic Haglind startar Haglind Byggare AB och har sedan dess oavbrutet arbetat i byggbranschen." },
  { year: "2009", text: "Frederic och Mickaela Haglind börjar arbeta tillsammans – huvudsakligen med renoveringar av äldre fastigheter, men även med nybyggnation." },
  { year: "I dag", text: "Familjeföretaget arbetar mot både företag och privatpersoner, framför allt i Mälardalen och Stockholm." },
] as const;

export default function AboutPage() {
  const portrait = projects[1];

  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title={
          <>
            Ett familjeföretag i byggbranschen <em className="text-brand-ink italic">sedan år {site.foundedYear}.</em>
          </>
        }
        lead={
          <p>
            Haglind Byggare AB är ett litet familjeföretag med mångårig erfarenhet inom bygg- och fastighetsbranschen.
            Företaget startades av Frederic Haglind och drivs i dag av Frederic och Mickaela Haglind.
          </p>
        }
      />

      <section aria-labelledby="historia-rubrik" className="py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow index="01" className="text-brand-ink">
                Vår historia
              </Eyebrow>
              <h2 id="historia-rubrik" className="mt-6 font-display text-headline">
                Byggt på erfarenhet, inte på löften.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-ink/15">
              {timeline.map((item) => (
                <li key={item.year} className="reveal grid gap-3 border-b border-ink/15 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:py-10">
                  <span className="font-display text-3xl leading-none text-brand-ink">{item.year}</span>
                  <p className="text-lg text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ol>

            <figure className="reveal mt-16 max-w-[30rem]">
              <div className="relative aspect-[9/8] overflow-hidden bg-paper-deep">
                <Image
                  src={portrait.image}
                  alt={portrait.alt}
                  fill
                  quality={85}
                  placeholder="blur"
                  sizes="(min-width: 480px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 flex justify-between gap-4 border-t border-ink/15 pt-3 text-sm text-ink-soft">
                <span>{portrait.title}</span>
                <span className="tabular-nums">{portrait.period}</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section aria-labelledby="samarbeten-rubrik" className="bg-paper-deep py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow index="02" className="text-brand-ink">
              Samarbeten
            </Eyebrow>
            <h2 id="samarbeten-rubrik" className="mt-6 font-display text-headline">
              Omkring 450 villor, byggda och monterade.
            </h2>
          </div>
          <div className="space-y-6 self-end text-lead text-ink-soft lg:col-span-5">
            <p>
              Frederic har haft ett nära och långtgående samarbete med en av Sveriges största villaproducenter,
              Smålandsvillan, och med OBOS. Därigenom har han byggt och monterat omkring 450 villor genom åren.
            </p>
            <p>Smålandsvillan är en av våra största referenser – med över 400 villor byggda tillsammans.</p>
          </div>
        </Container>
        <div className="mt-16 lg:mt-24">
          <FactsBand />
        </div>
      </section>

      <section aria-labelledby="storlek-rubrik" className="py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow index="03" className="text-brand-ink">
              Inget projekt för litet
            </Eyebrow>
            <h2 id="storlek-rubrik" className="mt-6 font-display text-headline">
              Friggebod eller nytt hus – vi tar oss gärna an just ditt projekt.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-5">
            <p className="text-lead text-ink-soft">
              Alla projekt är intressanta och värdefulla för oss, oavsett storlek. Och tack vare goda samarbeten med
              andra företag kan vi även erbjuda totalentreprenad.
            </p>
            <div>
              <ButtonLink href="/tjanster" variant="secondary">
                Se våra tjänster
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
