import { featuredReference, projects } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { PageHero } from "@/components/sections/PageHero";
import { ContactCta } from "@/components/sections/ContactCta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export const metadata = pageMetadata({
  title: "Projekt och referenser",
  description:
    "Bilder från Haglind Byggares projekt och referenser. Smålandsvillan är en av våra största referenser, med över 400 villor byggda genom åren.",
  path: "/projekt",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projekt & referenser"
        title={
          <>
            Hus vi har varit med <em className="text-pine italic">och byggt.</em>
          </>
        }
        lead={
          <p>
            Ett urval bilder från våra byggen. Fler bilder från pågående projekt delar vi löpande på Instagram,{" "}
            {site.social.instagram.handle}.
          </p>
        }
      />

      <section aria-labelledby="referens-rubrik" className="border-b border-ink/10 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Eyebrow index="01" className="text-pine">
              Största referens
            </Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <h2 id="referens-rubrik" className="font-display text-headline">
              {featuredReference.name}
            </h2>
            <p className="mt-6 max-w-2xl font-display text-[clamp(1.4rem,1.1rem+1.2vw,2.1rem)] leading-snug text-ink-soft">
              {featuredReference.statement}
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="galleri-rubrik" className="py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow index="02" className="text-pine">
                Från bygget
              </Eyebrow>
              <h2 id="galleri-rubrik" className="mt-6 font-display text-headline">
                Bildarkiv
              </h2>
            </div>
            <p className="max-w-sm text-ink-soft">Klicka på en bild för att se den i sin helhet.</p>
          </div>

          <ProjectGallery projects={projects} />
        </Container>
      </section>

      <section aria-labelledby="instagram-rubrik" className="bg-paper-deep py-20 sm:py-24">
        <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow className="text-pine">Instagram</Eyebrow>
            <h2 id="instagram-rubrik" className="mt-6 max-w-3xl font-display text-headline">
              Följ pågående projekt på {site.social.instagram.handle}.
            </h2>
          </div>
          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("secondary", "shrink-0")}
          >
            <InstagramIcon className="size-5" />
            <span>
              Öppna Instagram<span className="sr-only"> (öppnas i ny flik)</span>
            </span>
          </a>
        </Container>
      </section>

      <ContactCta title="Har du ett projekt på gång?" />
    </>
  );
}
