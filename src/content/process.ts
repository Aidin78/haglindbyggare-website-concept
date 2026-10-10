export type ProcessStep = {
  title: string;
  text: string;
};

export const processSteps: readonly ProcessStep[] = [
  {
    title: "Första kontakt",
    text: "Ring, mejla eller använd formuläret. Berätta kort vad du vill göra och var projektet ligger.",
  },
  {
    title: "Genomgång",
    text: "Vi går igenom förutsättningar, omfattning och dina önskemål så att båda vet vad som ska byggas.",
  },
  {
    title: "Offert",
    text: "Du får en offert att ta ställning till. Omfattas arbetet av ROT-avdrag dras det direkt på fakturan.",
  },
  {
    title: "Bygget",
    text: "Arbetet utförs enligt överenskommelse – av ett familjeföretag som har byggt sedan år 2000.",
  },
];
