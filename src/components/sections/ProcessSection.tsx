import { processSteps } from "@/content/process";
import { Container } from "@/components/ui/Container";
import { Ruler } from "@/components/ui/Ruler";
import { SectionHeader } from "./SectionHeader";

export function ProcessSection({ index }: { index?: string }) {
  return (
    <section data-tone="dark" aria-labelledby="process-rubrik" className="bg-char-deep py-20 text-paper sm:py-28 lg:py-36">
      <Container>
        <SectionHeader
          id="process-rubrik"
          index={index}
          eyebrow="Arbetsgång"
          title="Så går det till."
          intro="Från första samtalet till färdigt bygge. Hör av dig, så tar vi det därifrån."
          tone="dark"
        />

        <Ruler className="mt-16 text-brand lg:mt-20" />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="py-8 sm:pr-8 lg:border-l lg:border-paper/15 lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0">
              <span className="font-display text-5xl leading-none text-brand tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-paper/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
