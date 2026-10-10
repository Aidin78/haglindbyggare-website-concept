export type NavItem = {
  href: "/" | "/om-oss" | "/tjanster" | "/projekt" | "/rot-avdrag" | "/kontakt";
  label: string;
};

export const mainNav: readonly NavItem[] = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/projekt", label: "Projekt" },
  { href: "/rot-avdrag", label: "ROT-avdrag" },
  { href: "/kontakt", label: "Kontakt" },
];
