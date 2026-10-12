import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} – byggmästare i Stockholm och Mälardalen sedan år ${site.foundedYear}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/husbygge-stallning-2024.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f5f1ea", color: "#1c1d1a" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, width: 630 }}>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", color: "#a54c10" }}>
            {site.name}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 72, lineHeight: 1.02, letterSpacing: -2 }}>Från friggebod till helt nytt hus.</div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#52524a" }}>
              {`Byggmästare i Stockholm och Mälardalen sedan år ${site.foundedYear}`}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#a54c10" }}>{site.contact.phoneDisplay}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photoSrc} alt="" width={570} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
