export const site = {
  name: "Haglind Byggare AB",
  shortName: "Haglind Byggare",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.haglindbyggare.se").replace(/\/$/, ""),
  description:
    "Familjeägd byggmästare i Stockholm och Mälardalen sedan år 2000. Renovering, tillbyggnad, nybyggnation och snickeri för privatpersoner och företag.",
  foundedYear: 2000,
  founders: ["Frederic Haglind", "Mickaela Haglind"],
  serviceArea: ["Stockholm", "Mälardalen"],
  housesBuilt: "ca 450",
  contact: {
    phoneDisplay: "0708-14 51 53",
    phoneHref: "tel:+46708145153",
    phoneE164: "+46708145153",
    email: "frederic@haglindbyggare.se",
    address: {
      street: "Håstahagvägen 29",
      postalCode: "645 62",
      city: "Stallarholmen",
      region: "Södermanlands län",
      country: "SE",
    },
  },
  social: {
    instagram: {
      handle: "@haglindbyggare",
      url: "https://www.instagram.com/haglindbyggare",
    },
  },
} as const;

export const addressLine = `${site.contact.address.street}, ${site.contact.address.postalCode} ${site.contact.address.city}`;

const mapQuery = encodeURIComponent(addressLine);

export const mapLinks = {
  google: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  apple: `https://maps.apple.com/?q=${mapQuery}`,
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=17.1650%2C59.3610%2C17.2100%2C59.3800&layer=mapnik",
} as const;

export const skatteverketRotUrl =
  "https://www.skatteverket.se/privat/fastigheterochbostad/rotochrutarbete.4.2e56d4ba1202f95012080002966.html";
