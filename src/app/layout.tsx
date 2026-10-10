import type { Metadata, Viewport } from "next";
import { Newsreader, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Byggmästare i Stockholm och Mälardalen`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  formatDetection: { telephone: false },
  openGraph: {
    siteName: site.name,
    locale: "sv_SE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f1ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${newsreader.variable} ${schibsted.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#innehall"
          className="fixed top-3 left-3 z-50 -translate-y-24 bg-ink px-4 py-3 text-paper transition-transform focus:translate-y-0"
        >
          Hoppa till innehållet
        </a>
        <Header />
        <main id="innehall" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
