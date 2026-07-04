export interface Stad {
  slug: string;
  naam: string;
  regio: "Zuid-Limburg" | "Midden-Limburg";
  buurtgemeenten: string[];
}

export const steden: Stad[] = [
  // Zuid-Limburg
  {
    slug: "sittard-geleen",
    naam: "Sittard-Geleen",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Born", "Beek", "Stein", "Urmond", "Beekdaelen"],
  },
  {
    slug: "maastricht",
    naam: "Maastricht",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Meerssen", "Eijsden-Margraten", "Valkenburg", "Beek"],
  },
  {
    slug: "heerlen",
    naam: "Heerlen",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Kerkrade", "Brunssum", "Landgraaf", "Hoensbroek", "Beekdaelen"],
  },
  {
    slug: "kerkrade",
    naam: "Kerkrade",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Heerlen", "Landgraaf", "Brunssum"],
  },
  {
    slug: "landgraaf",
    naam: "Landgraaf",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Heerlen", "Kerkrade", "Brunssum"],
  },
  {
    slug: "brunssum",
    naam: "Brunssum",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Heerlen", "Landgraaf", "Beekdaelen"],
  },
  {
    slug: "beek",
    naam: "Beek",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Sittard-Geleen", "Maastricht", "Beekdaelen"],
  },
  {
    slug: "stein",
    naam: "Stein",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Sittard-Geleen", "Born", "Beek"],
  },
  {
    slug: "born",
    naam: "Born",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Sittard-Geleen", "Stein", "Urmond"],
  },
  {
    slug: "urmond",
    naam: "Urmond",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Sittard-Geleen", "Born", "Stein"],
  },
  {
    slug: "hoensbroek",
    naam: "Hoensbroek",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Heerlen", "Brunssum", "Beekdaelen"],
  },
  {
    slug: "valkenburg",
    naam: "Valkenburg",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Maastricht", "Meerssen", "Voerendaal"],
  },
  {
    slug: "meerssen",
    naam: "Meerssen",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Maastricht", "Valkenburg", "Beek"],
  },
  {
    slug: "beekdaelen",
    naam: "Beekdaelen",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Heerlen", "Brunssum", "Simpelveld"],
  },
  {
    slug: "eijsden-margraten",
    naam: "Eijsden-Margraten",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Maastricht", "Gulpen-Wittem", "Vaals"],
  },
  {
    slug: "gulpen-wittem",
    naam: "Gulpen-Wittem",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Vaals", "Eijsden-Margraten", "Simpelveld"],
  },
  {
    slug: "vaals",
    naam: "Vaals",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Gulpen-Wittem", "Eijsden-Margraten", "Maastricht"],
  },
  {
    slug: "voerendaal",
    naam: "Voerendaal",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Heerlen", "Valkenburg", "Simpelveld"],
  },
  {
    slug: "simpelveld",
    naam: "Simpelveld",
    regio: "Zuid-Limburg",
    buurtgemeenten: ["Voerendaal", "Beekdaelen", "Gulpen-Wittem"],
  },
  // Midden-Limburg
  {
    slug: "roermond",
    naam: "Roermond",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Maasgouw", "Roerdalen", "Echt-Susteren"],
  },
  {
    slug: "weert",
    naam: "Weert",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Nederweert", "Leudal", "Roermond"],
  },
  {
    slug: "echt-susteren",
    naam: "Echt-Susteren",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Roermond", "Maasgouw", "Sittard-Geleen"],
  },
  {
    slug: "susteren",
    naam: "Susteren",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Echt-Susteren", "Sittard-Geleen", "Maasgouw"],
  },
  {
    slug: "maasgouw",
    naam: "Maasgouw",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Roermond", "Echt-Susteren", "Maasbracht"],
  },
  {
    slug: "maasbracht",
    naam: "Maasbracht",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Maasgouw", "Roermond", "Echt-Susteren"],
  },
  {
    slug: "leudal",
    naam: "Leudal",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Weert", "Roermond", "Nederweert"],
  },
  {
    slug: "nederweert",
    naam: "Nederweert",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Weert", "Leudal", "Roermond"],
  },
  {
    slug: "roerdalen",
    naam: "Roerdalen",
    regio: "Midden-Limburg",
    buurtgemeenten: ["Roermond", "Echt-Susteren", "Maasgouw"],
  },
];

export function getStad(slug: string): Stad | undefined {
  return steden.find((s) => s.slug === slug);
}
