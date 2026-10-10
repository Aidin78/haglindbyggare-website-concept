import Image from "next/image";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HomeHero() {
  const hero = projects[0];

  return (
    <section className="relative">
      <Container className="grid gap-12 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
        <div className="flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <Eyebrow className="text-pine">Byggmästare i {site.serviceArea.join(" & ")}</Eyebrow>
          <h1 className="mt-7 font-display text-display font-normal">
            Från friggebod <span className="text-ink-soft">till</span>{" "}
            <em className="text-pine italic">helt nytt hus.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lead text-ink-soft">
            Haglind Byggare är ett familjeföretag som renoverar, bygger till och bygger nytt åt privatpersoner och
            företag – sedan år {site.foundedYear}.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/kontakt">Begär offert</ButtonLink>
            <ButtonLink href="/projekt" variant="secondary" arrow={false}>
              Se våra projekt
            </ButtonLink>
          </div>
        </div>

        <figure className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={hero.image}
              alt={hero.alt}
              fill
              loading="eager"
              fetchPriority="high"
              quality={85}
              placeholder="blur"
              sizes="(min-width: 1440px) 560px, (min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[30%_center]"
            />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-3 text-sm text-ink-soft">
            <span>{hero.title}</span>
            <span className="tabular-nums">{hero.period}</span>
          </figcaption>
          <p
            aria-hidden="true"
            className="absolute top-0 -left-9 hidden text-[0.7rem] tracking-[0.3em] text-ink-soft uppercase [writing-mode:vertical-rl] rotate-180 xl:block"
          >
            Sedan {site.foundedYear} · {site.name}
          </p>
        </figure>
      </Container>
    </section>
  );
}
