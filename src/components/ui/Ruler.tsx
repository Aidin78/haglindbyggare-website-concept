import { cn } from "@/lib/cn";

export function Ruler({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("ruler h-3.5 w-full opacity-35", className)} />;
}
