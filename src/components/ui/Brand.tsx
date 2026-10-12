import { cn } from "@/lib/cn";

export function HouseMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cn("shrink-0", className)}>
      <path
        d="M5 36V16.5L20 5l15 11.5V36M13 19v17M27 19v17M13 27h14M2 36h36"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <HouseMark className="size-8 text-brand" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-medium tracking-[-0.01em]">Haglind</span>
        <span className="mt-1 text-[0.6rem] font-medium tracking-[0.32em] uppercase opacity-75">Byggare AB</span>
      </span>
    </span>
  );
}
