import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "./SectionHeader";

export function ServicesIndex() {
  return (
    <section aria-labelledby="tjanster-rubrik" className="border-t border-ink/10 py-20 sm:py-28 lg:py-36">
      <Container>
        <SectionHeader
          id="tjanster-rubrik"
          index="02"
          eyebrow="Tjänster"
          title="Allt inom bygg och snickeri."
          intro="Från en ny panel på gaveln till ett helt nytt hus. Här är det vi gör – och har gjort länge."
        />

        <ol className="mt-16 border-t border-ink/15 lg:mt-20">
          {services.map((service, index) => (
            <li key={service.id} className="border-b border-ink/15">
              <Link
                href={`/tjanster#${service.id}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 transition-colors duration-500 hover:bg-paper-deep sm:grid-cols-[4rem_1fr_auto] sm:py-9 lg:grid-cols-[6rem_minmax(0,5fr)_minmax(0,6fr)_auto] lg:px-4"
              >
                <span className="text-xs tracking-[0.18em] text-ink-soft tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.75rem,1.2rem+2.2vw,3.5rem)] leading-none tracking-[-0.02em] transition-transform duration-500 ease-out-soft group-hover:translate-x-2">
                  {service.title}
                </span>
                <span className="col-start-2 row-start-2 max-w-md text-ink-soft lg:col-start-3 lg:row-start-1">
                  {service.summary}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="col-start-3 row-start-1 size-6 self-center text-ink-soft transition-all duration-500 ease-out-soft group-hover:rotate-45 group-hover:text-pine lg:col-start-4"
                  strokeWidth={1.25}
                />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
