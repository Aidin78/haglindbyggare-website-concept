import Image from "next/image";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ExperienceSection() {
  const photo = projects[1];

  return (
    <section aria-labelledby="erfarenhet-rubrik" className="bg-paper-deep py-20 sm:py-28 lg:py-36">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <figure className="reveal max-w-[30rem] lg:col-span-5">
          <div className="relative aspect-[9/8] overflow-hidden bg-stone">
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              quality={85}
              placeholder="blur"
              sizes="(min-width: 480px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 flex justify-between gap-4 border-t border-ink/15 pt-3 text-sm text-ink-soft">
            <span>{photo.title}</span>
            <span className="tabular-nums">{photo.period}</span>
          </figcaption>
        </figure>

        <div className="flex flex-col lg:col-span-6 lg:col-start-7">
          <Eyebrow index="03" className="text-pine">
            Erfarenhet
          </Eyebrow>
          <p aria-hidden="true" className="mt-8 font-display text-[clamp(5rem,3rem+9vw,11rem)] leading-[0.85] tracking-[-0.04em] text-pine">
            <span className="mr-3 font-display text-[0.28em] tracking-normal text-ink-soft italic">ca</span>
            {site.housesBuilt.replace("ca ", "")}
          </p>
          <h2 id="erfarenhet-rubrik" className="mt-6 font-display text-title">
            Omkring 450 villor byggda och monterade – och erfarenheten följer med till varje nytt jobb.
          </h2>
          <div className="mt-8 space-y-5 text-ink-soft">
            <p>
              Frederic har haft ett nära och långtgående samarbete med en av Sveriges största villaproducenter,
              Smålandsvillan, och med OBOS. Genom åren har det blivit omkring 450 villor.
            </p>
            <p>
              Sedan 2009 arbetar Frederic och Mickaela tillsammans, huvudsakligen med renoveringar av äldre fastigheter
              men även med nybyggnation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
