import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function IntroSection() {
  return (
    <section aria-labelledby="om-foretaget" className="py-20 sm:py-28 lg:py-36">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Eyebrow index="01" className="text-pine">
            Familjeföretaget
          </Eyebrow>
          <h2 id="om-foretaget" className="sr-only">
            Om Haglind Byggare
          </h2>
        </div>

        <div className="reveal lg:col-span-8">
          <figure>
            <blockquote className="font-display text-[clamp(1.75rem,1.2rem+2.4vw,3.25rem)] leading-[1.12] tracking-[-0.015em]">
              <p>
                <span aria-hidden="true" className="text-timber">
                  ”
                </span>
                Alla projekt är intressanta och värdefulla för oss, oavsett storlek.
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm tracking-[0.04em] text-ink-soft">
              — Frederic Haglind, grundare
            </figcaption>
          </figure>

          <div className="mt-14 grid gap-8 border-t border-ink/10 pt-10 text-ink-soft sm:grid-cols-2">
            <p>
              Haglind Byggare AB startades år {site.foundedYear} och drivs i dag av Frederic och Mickaela Haglind. Vi
              arbetar mot såväl företag som privatpersoner, framför allt i Mälardalen och Stockholm.
            </p>
            <p>
              Vill du byta panel på gaveln, få en ny uteplats eller bygga ett helt nytt hus? Vi tar oss gärna an just
              ditt projekt – och tack vare goda samarbeten med andra företag kan vi även erbjuda totalentreprenad.
            </p>
          </div>

          <Link
            href="/om-oss"
            className="group mt-10 inline-flex min-h-11 items-center gap-3 font-medium text-pine"
          >
            <span className="link-underline">Läs mer om oss</span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
