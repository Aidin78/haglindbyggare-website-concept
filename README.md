# Haglind Byggare AB – webbplatskoncept

Ett omarbetningsförslag för [haglindbyggare.se](https://www.haglindbyggare.se/), byggt med Next.js (App Router), TypeScript och Tailwind CSS.

## Kom igång

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

Kräver Node.js 20.9 eller senare.

## Struktur

```
src/
  app/                 Sidor (/, /om-oss, /tjanster, /projekt, /rot-avdrag, /kontakt),
                       metadata, sitemap, robots, OG-bild och kontaktformulärets server action
  components/
    layout/            Sidhuvud, mobilmeny, sidfot
    sections/          Återanvändbara sektioner (hero, tjänstelista, arbetsgång, kontakt-CTA …)
    projects/          Bildgalleri med ljuslåda
    contact/           Kontaktformulär
    ui/                Primitiver (Container, ButtonLink, Eyebrow, Ruler, logotyp, husritning)
  content/             Allt innehåll: företagsfakta, tjänster, projekt, arbetsgång, navigation
  lib/                 Validering (Zod), miljövariabler, e-postutskick, SEO-hjälpare
public/images/         Projektbilder hämtade från nuvarande webbplats
```

Innehållet ligger i `src/content/` och är skilt från presentationen, så det kan bytas mot ett CMS senare utan att komponenterna behöver skrivas om. Nya projekt läggs till i `src/content/projects.ts` (bilden i `public/images/`).

## Kontaktformuläret

Formuläret validerar med samma Zod-schema i webbläsaren och på servern, har honeypot-fält och en minsta ifyllnadstid som skydd mot spam.

Utskick sker via [Resend](https://resend.com) och aktiveras först när alla tre variabler är satta (se `.env.example`):

| Variabel | Beskrivning |
| --- | --- |
| `RESEND_API_KEY` | API-nyckel från Resend |
| `CONTACT_TO_EMAIL` | Mottagare, t.ex. `frederic@haglindbyggare.se` |
| `CONTACT_FROM_EMAIL` | Avsändare på en domän som är verifierad i Resend |
| `NEXT_PUBLIC_SITE_URL` | Publik adress (standard `https://www.haglindbyggare.se`) |

Utan konfiguration skickas **ingenting**. Besökaren får då ett tydligt besked om att meddelandet inte har skickats och hänvisas till telefon och e-post.

## Kända begränsningar

- Den nuvarande webbplatsen har bara tre egna projektbilder, alla i låg upplösning (högst 614 px). Layouten visar dem nära originalstorlek. För en skarp presentation behövs fler och större bilder, t.ex. från företagets Instagram (med tillstånd).
- Logotypen är ett förslag. Den nuvarande "Haglind Byggare Crew"-logotypen används inte.
- Texterna om arbetsgång och integritet är förslag och behöver godkännas av företaget.
- ROT-sidan anger medvetet inga procentsatser eller belopp och hänvisar till Skatteverket.
- Formuläret har ingen rate limiting. Lägg till det på plattformsnivå (t.ex. WAF) vid driftsättning.
- Kartan är en OpenStreetMap-inbäddning över Håstahagvägen. Husnumret finns inte i OSM, så kartan har ingen exakt markör. Länkarna till Google Maps och Apple Kartor söker på den fullständiga adressen.
