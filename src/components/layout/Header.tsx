import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} – startsida`} className="-m-1 p-1">
          <Wordmark />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.contact.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
          >
            <Phone aria-hidden="true" className="size-4" strokeWidth={1.75} />
            {site.contact.phoneDisplay}
          </a>
          <ButtonLink href="/kontakt" arrow={false} className="min-h-11 px-5">
            Begär offert
          </ButtonLink>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
