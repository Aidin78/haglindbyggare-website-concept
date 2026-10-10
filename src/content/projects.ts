import type { StaticImageData } from "next/image";
import husbygge from "../../public/images/husbygge-stallning-2024.jpg";
import gavel from "../../public/images/takstol-gavel-2024.jpg";
import villamontage from "../../public/images/villamontage-2013.jpg";

export type Project = {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

export const projects: readonly Project[] = [
  {
    id: "husbygge-2024",
    title: "Villa under uppförande",
    category: "Nybyggnation",
    period: "Oktober 2024",
    description:
      "Nytt hus under uppförande, med ställning rest runt fasaden. Taket är lagt och den vita panelen på plats.",
    image: husbygge,
    alt: "Vitt hus med svart tak omgivet av byggställning en solig höstdag, med en vit skåpbil och Haglind Byggares släp på tomten.",
  },
  {
    id: "gavel-2024",
    title: "Gavel och takstolar",
    category: "Nybyggnation",
    period: "Oktober 2024",
    description: "Gavelns stomme är rest och fönstren är på plats.",
    image: gavel,
    alt: "Svartvitt fotografi av en snickare i hjälm framför en nyrest gavel med två fönster, med tall- och björkskog i bakgrunden.",
  },
  {
    id: "villamontage-arkiv",
    title: "Villamontage",
    category: "Nybyggnation",
    period: "Ur arkivet",
    description: "Villa med takkupor under montage, med takets läkt på plats och arbetsbilar på tomten.",
    image: villamontage,
    alt: "Ljust hus med takkupa under montage, där takläkt syns på taket och två skåpbilar står parkerade framför.",
  },
];

export const featuredReference = {
  name: "Smålandsvillan",
  statement: "Smålandsvillan är en av våra största referenser – genom åren har vi byggt över 400 villor tillsammans.",
} as const;
