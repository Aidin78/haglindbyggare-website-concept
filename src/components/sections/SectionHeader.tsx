import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  id: string;
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({ id, index, eyebrow, title, intro, tone = "light", className }: SectionHeaderProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:gap-10", className)}>
      <div className="lg:col-span-7">
        <Eyebrow index={index} className={tone === "dark" ? "text-brand" : "text-brand-ink"}>
          {eyebrow}
        </Eyebrow>
        <h2 id={id} className="mt-6 font-display text-headline">
          {title}
        </h2>
      </div>
      {intro && (
        <div
          className={cn(
            "self-end text-lead lg:col-span-5",
            tone === "dark" ? "text-paper/75" : "text-ink-soft",
          )}
        >
          {intro}
        </div>
      )}
    </div>
  );
}
