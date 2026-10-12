import Link from "next/link";
import { mainNav } from "@/content/navigation";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Brand";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Ruler } from "@/components/ui/Ruler";

const headingClass = "text-xs font-medium tracking-[0.18em] text-brand uppercase";
const linkClass = "link-underline text-paper/85 transition-colors hover:text-paper";

export function Footer() {
  const { contact } = site;

  return (
    <footer data-tone="dark" className="bg-char-deep text-paper">
      <Container className="pt-16 pb-10 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} – startsida`} className="inline-block">
              <Wordmark />
            </Link>
            <p className="mt-6 max-w-sm text-paper/75">
              Familjeföretag inom bygg och snickeri. Verksamma i {site.serviceArea.join(" och ")} sedan år{" "}
              {site.foundedYear}.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-[1.5fr_1.1fr_0.8fr_1fr] lg:gap-8">
            <div>
              <h2 className={headingClass}>Kontakt</h2>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href={contact.phoneHref} className={linkClass}>
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className={`${linkClass} [overflow-wrap:anywhere]`}>
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className={headingClass}>Adress</h2>
              <address className="mt-5 text-paper/85 not-italic">
                {site.name}
                <br />
                {contact.address.street}
                <br />
                {contact.address.postalCode} {contact.address.city}
              </address>
            </div>

            <nav aria-label="Sidfot">
              <h2 className={headingClass}>Sidor</h2>
              <ul className="mt-5 space-y-3">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={headingClass}>Tjänster</h2>
              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link href={`/tjanster#${service.id}`} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Ruler className="mt-16 text-brand" />

        <div className="mt-6 flex flex-col gap-4 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.name}</p>
          <a
            href={site.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-paper/80 transition-colors hover:text-paper"
          >
            <InstagramIcon className="size-5" />
            <span>
              {site.social.instagram.handle}
              <span className="sr-only"> på Instagram (öppnas i ny flik)</span>
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
