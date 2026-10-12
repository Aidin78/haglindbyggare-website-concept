import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

type ContactCtaProps = {
  title?: string;
  text?: string;
};

export function ContactCta({
  title = "Berätta om ditt projekt.",
  text = "Stort eller litet – hör av dig så pratar vi om vad du vill bygga. Ring direkt, skicka ett mejl eller använd vårt formulär.",
}: ContactCtaProps) {
  const { contact } = site;

  return (
    <section data-tone="dark" aria-labelledby="kontakt-cta" className="bg-char text-paper">
      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <Eyebrow className="text-brand">Kontakt</Eyebrow>
          <h2 id="kontakt-cta" className="mt-6 font-display text-headline">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lead text-paper/80">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/kontakt" variant="inverse">
              Begär offert
            </ButtonLink>
          </div>
        </div>

        <dl className="grid content-end gap-8 border-t border-paper/20 pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <div>
            <dt className="text-xs tracking-[0.18em] text-brand uppercase">Ring Frederic</dt>
            <dd className="mt-2">
              <a
                href={contact.phoneHref}
                className="font-display text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-none tabular-nums transition-colors hover:text-brand"
              >
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.18em] text-brand uppercase">Mejla</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${contact.email}`}
                className="link-underline text-lg break-all text-paper/90 hover:text-paper sm:text-xl"
              >
                {contact.email}
              </a>
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
