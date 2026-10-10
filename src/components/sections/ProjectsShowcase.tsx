import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { cn } from "@/lib/cn";
import { SectionHeader } from "./SectionHeader";

type ShowcaseFigureProps = {
  project: Project;
  sizes: string;
  aspect: string;
  className?: string;
};

function ShowcaseFigure({ project, sizes, aspect, className }: ShowcaseFigureProps) {
  return (
    <figure className={cn("reveal w-full", className)}>
      <div className={cn("relative overflow-hidden bg-paper-deep", aspect)}>
        <Image
          src={project.image}
          alt={project.alt}
          fill
          quality={85}
          placeholder="blur"
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-4 grid grid-cols-[1fr_auto] gap-x-4 border-t border-ink/15 pt-3">
        <span className="font-display text-xl">{project.title}</span>
        <span className="text-sm text-ink-soft tabular-nums">{project.period}</span>
        <span className="col-span-2 mt-1 text-sm text-ink-soft">{project.category}</span>
      </figcaption>
    </figure>
  );
}

export function ProjectsShowcase() {
  const [main, ...rest] = projects;

  return (
    <section aria-labelledby="projekt-rubrik" className="py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeader
          id="projekt-rubrik"
          index="04"
          eyebrow="Från bygget"
          title="Bilder från våra projekt."
          intro="Ett urval bilder från byggen vi har arbetat med. Fler bilder från pågående projekt delar vi löpande på Instagram."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-8 lg:mt-20">
          <div className="md:col-span-7 md:row-start-1">
            <ShowcaseFigure
              project={main}
              aspect="aspect-square"
              className="max-w-[38rem]"
              sizes="(min-width: 1024px) 608px, (min-width: 768px) 58vw, 100vw"
            />
          </div>
          <div className="grid content-start gap-10 md:col-span-5 md:row-span-2 md:row-start-1 md:pt-24">
            {rest.map((project, index) => (
              <ShowcaseFigure
                key={project.id}
                project={project}
                aspect="aspect-[4/3]"
                className={index === 0 ? "max-w-[30rem]" : "max-w-[19rem] md:ml-auto"}
                sizes={index === 0 ? "(min-width: 768px) 480px, 100vw" : "304px"}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3 self-start sm:flex-row md:col-span-7 md:row-start-2">
            <ButtonLink href="/projekt" variant="secondary">
              Se alla projekt
            </ButtonLink>
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 px-6 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <InstagramIcon className="size-5" />
              Följ {site.social.instagram.handle}
              <span className="sr-only">(öppnas i ny flik)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
