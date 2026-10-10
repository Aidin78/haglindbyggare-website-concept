export type ServiceId = "renovering" | "tillbyggnad" | "nybyggnation" | "snickeri" | "totalentreprenad";

export type Service = {
  id: ServiceId;
  title: string;
  summary: string;
  body: readonly string[];
  examples: readonly string[];
  rotNote?: string;
};

export const services: readonly Service[] = [
  {
    id: "renovering",
    title: "Renovering",
    summary: "Invändigt och utvändigt, med lång vana av äldre fastigheter.",
    body: [
      "Renovering av äldre fastigheter är det vi har arbetat allra mest med genom åren. Ett äldre hus har sina egna förutsättningar, och de behöver man ha respekt för när man bygger om.",
      "Vi tar oss an både invändiga och utvändiga arbeten – från en ny panel på gaveln till en mer omfattande ombyggnad.",
    ],
    examples: ["Renovering av äldre hus", "Byte av fasadpanel", "Invändig ombyggnad"],
    rotNote: "Arbetskostnaden kan ge rätt till ROT-avdrag.",
  },
  {
    id: "tillbyggnad",
    title: "Tillbyggnad",
    summary: "Mer plats i huset du redan trivs i.",
    body: [
      "En tillbyggnad ger mer yta utan att du behöver lämna huset och platsen du trivs med. Vi bygger till åt både privatpersoner och företag.",
      "Berätta vad du behöver mer plats till, så går vi igenom förutsättningarna tillsammans.",
    ],
    examples: ["Utbyggnad av befintligt hus", "Nya rum och ytor", "För privatpersoner och företag"],
    rotNote: "Arbetskostnaden kan ge rätt till ROT-avdrag.",
  },
  {
    id: "nybyggnation",
    title: "Nybyggnation",
    summary: "Erfarenhet från omkring 450 byggda och monterade villor.",
    body: [
      "Genom ett nära och långvarigt samarbete med Smålandsvillan och OBOS har Frederic byggt och monterat omkring 450 villor genom åren.",
      "Den erfarenheten följer med in i varje nytt projekt – oavsett om det gäller ett helt nytt hus eller en friggebod på tomten.",
    ],
    examples: ["Nya villor", "Villamontage", "Friggebodar och komplementbyggnader"],
  },
  {
    id: "snickeri",
    title: "Snickeri",
    summary: "Allt inom bygg och snickeri – inget jobb är för litet.",
    body: [
      "Alla projekt är intressanta och värdefulla för oss, oavsett storlek. Vill du bygga en friggebod, byta panel på en gavel eller få en ny uteplats? Vi tar oss gärna an just ditt projekt.",
    ],
    examples: ["Uteplatser och altaner", "Panel och fasad", "Friggebodar"],
    rotNote: "Snickeriarbeten i din bostad kan i vissa fall ge rätt till ROT-avdrag.",
  },
  {
    id: "totalentreprenad",
    title: "Totalentreprenad",
    summary: "En samlad entreprenad genom goda samarbeten.",
    body: [
      "Tack vare våra goda samarbeten med andra företag kan vi även erbjuda totalentreprenad. Då har du en part att vända dig till för hela projektet.",
    ],
    examples: ["Samordning med andra yrkesgrupper", "En avtalspart för helheten"],
  },
];

export const serviceOptions = services.map(({ id, title }) => ({ value: id, label: title }));
