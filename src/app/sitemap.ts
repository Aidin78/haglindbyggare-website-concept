import type { MetadataRoute } from "next";
import { mainNav } from "@/content/navigation";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ href: "/" }, ...mainNav].map(({ href }) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : href === "/kontakt" || href === "/tjanster" ? 0.8 : 0.6,
  }));
}
