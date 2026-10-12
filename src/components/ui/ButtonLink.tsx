import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "ghost-inverse";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-deep",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  inverse: "bg-brand text-ink hover:bg-paper",
  "ghost-inverse": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  arrow?: boolean;
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-[0.95rem] font-medium tracking-[0.01em] transition-colors duration-300",
    variants[variant],
    className,
  );
}

export function ButtonLink({ variant = "primary", arrow = true, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1"
          strokeWidth={1.75}
        />
      )}
    </Link>
  );
}
