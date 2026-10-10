import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  title?: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title: title ?? { absolute: `${site.name} – Byggmästare i Stockholm och Mälardalen` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${site.name}` : site.name,
      description,
      url: path,
      siteName: site.name,
      locale: "sv_SE",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image" },
  };
}

export function localBusinessJsonLd() {
  const { contact } = site;
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#foretag`,
    name: site.name,
    url: site.url,
    description: site.description,
    telephone: contact.phoneE164,
    email: contact.email,
    foundingDate: String(site.foundedYear),
    founder: { "@type": "Person", name: site.founders[0] },
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      postalCode: contact.address.postalCode,
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    areaServed: site.serviceArea.map((name) => ({ "@type": "Place", name })),
    sameAs: [site.social.instagram.url],
  };
}
