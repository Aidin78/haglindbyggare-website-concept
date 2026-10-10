"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1 xl:gap-2">
      {mainNav.map((item) => {
        const active = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative inline-flex min-h-11 items-center px-3 text-[0.95rem] transition-colors duration-300",
                "after:absolute after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-out-soft",
                active
                  ? "text-ink after:scale-x-100"
                  : "text-ink-soft after:scale-x-0 hover:text-ink hover:after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
