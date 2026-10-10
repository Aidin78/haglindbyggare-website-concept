import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GableDrawing } from "@/components/ui/GableDrawing";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-36">
      <div className="lg:col-span-7">
        <Eyebrow className="text-pine">404</Eyebrow>
        <h1 className="mt-6 font-display text-display font-normal">Här står inget hus än.</h1>
        <p className="mt-8 max-w-lg text-lead text-ink-soft">
          Sidan du letar efter finns inte, eller har flyttats. Gå till startsidan eller hör av dig direkt.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Till startsidan</ButtonLink>
          <ButtonLink href="/kontakt" variant="secondary" arrow={false}>
            Kontakta oss
          </ButtonLink>
        </div>
      </div>
      <div className="hidden self-center lg:col-span-5 lg:block">
        <GableDrawing className="w-full text-ink/40" />
      </div>
    </Container>
  );
}
