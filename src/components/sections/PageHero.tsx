import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GableDrawing } from "@/components/ui/GableDrawing";
import { Ruler } from "@/components/ui/Ruler";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <Container className="relative grid gap-10 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:pt-28 lg:pb-24">
        <div className="lg:col-span-8">
          <Eyebrow className="text-pine">{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-display font-normal">{title}</h1>
          <div className="mt-8 max-w-2xl text-lead text-ink-soft">{lead}</div>
          {children && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </div>
        <div className="hidden self-end lg:col-span-4 lg:block">
          <GableDrawing className="w-full text-ink/70" />
        </div>
      </Container>
      <Container>
        <Ruler className="text-ink" />
      </Container>
    </section>
  );
}
