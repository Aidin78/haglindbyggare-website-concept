"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";
import { Wordmark } from "@/components/ui/Brand";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="-mr-2 inline-flex size-12 items-center justify-center lg:hidden"
      >
        <Menu aria-hidden="true" className="size-6" strokeWidth={1.5} />
        <span className="sr-only">Öppna meny</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Huvudmeny"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40 open:flex open:flex-col lg:hidden"
      >
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-ink/10 px-4 sm:px-6">
          <Link href="/" onClick={close} aria-label={`${site.name} – startsida`}>
            <Wordmark />
          </Link>
          <button
            type="button"
            onClick={close}
            autoFocus
            className="-mr-2 inline-flex size-12 items-center justify-center"
          >
            <X aria-hidden="true" className="size-6" strokeWidth={1.5} />
            <span className="sr-only">Stäng meny</span>
          </button>
        </div>

        <nav aria-label="Huvudmeny" className="flex-1 overflow-y-auto px-4 pt-6 pb-10 sm:px-6">
          <ol className="border-t border-ink/10">
            {[{ href: "/" as const, label: "Startsida" }, ...mainNav].map((item, index) => {
              const active = pathname === item.href;
              return (
                <li key={item.href} className="border-b border-ink/10">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-16 items-baseline gap-4 py-3 font-display text-[2rem] leading-tight",
                      active ? "text-brand-ink" : "text-ink",
                    )}
                  >
                    <span className="font-sans text-xs tracking-[0.18em] text-ink-soft tabular-nums">
                      {String(index).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 space-y-6">
            <Link href="/kontakt" onClick={close} className={buttonClasses("primary", "w-full")}>
              Begär offert
            </Link>
            <dl className="grid gap-4 text-sm">
              <div>
                <dt className="text-xs tracking-[0.18em] text-ink-soft uppercase">Telefon</dt>
                <dd className="mt-1">
                  <a href={site.contact.phoneHref} className="text-lg">
                    {site.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-ink-soft uppercase">E-post</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.contact.email}`} className="text-lg break-all">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </nav>
      </dialog>
    </>
  );
}
