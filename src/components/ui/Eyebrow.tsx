import { cn } from "@/lib/cn";

type EyebrowProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ index, children, className }: EyebrowProps) {
  return (
    <p className={cn("flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase", className)}>
      {index && <span className="tabular-nums opacity-60">{index}</span>}
      {index && <span aria-hidden="true" className="h-px w-8 bg-current opacity-40" />}
      <span>{children}</span>
    </p>
  );
}
