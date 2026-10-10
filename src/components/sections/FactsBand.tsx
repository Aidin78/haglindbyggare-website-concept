import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Ruler } from "@/components/ui/Ruler";
import { cn } from "@/lib/cn";

const facts = [
  { value: String(site.foundedYear), label: "Året Frederic Haglind startade företaget" },
  { value: site.housesBuilt, label: "Villor byggda och monterade genom åren" },
  { value: "Familjeägt", label: "Drivs av Frederic och Mickaela Haglind" },
  { value: "Mälardalen", label: "Samt Stockholm – där vi framför allt är verksamma" },
] as const;

export function FactsBand() {
  return (
    <Container as="section" aria-label="Haglind Byggare i korthet">
      <Ruler className="text-ink" />
      <dl className="grid grid-cols-2 border-b border-ink/10 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <div
            key={fact.label}
            className={cn(
              "flex flex-col gap-3 border-ink/10 py-8 pr-4 sm:py-10",
              index % 2 === 1 && "border-l pl-4 sm:pl-6",
              index === 2 && "lg:border-l lg:pl-6",
              index > 1 && "border-t lg:border-t-0",
            )}
          >
            <dt className="max-w-[16rem] text-sm text-ink-soft">{fact.label}</dt>
            <dd className="order-first font-display text-[clamp(1.6rem,1.1rem+1.8vw,2.6rem)] leading-none tracking-[-0.015em]">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
