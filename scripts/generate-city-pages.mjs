import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { applySeoToHtml } from "./seo-html.mjs";

// Zelfde 28 plaatsen als src/data/steden.ts (dat bestand bevat ook de buurtgemeenten
// die op de locatiepagina zelf worden getoond). Hier is alleen slug + naam nodig
// voor de title/description/canonical van de gegenereerde HTML.
const steden = [
  // Zuid-Limburg
  { slug: "sittard-geleen",    naam: "Sittard-Geleen" },
  { slug: "maastricht",        naam: "Maastricht" },
  { slug: "heerlen",           naam: "Heerlen" },
  { slug: "kerkrade",          naam: "Kerkrade" },
  { slug: "landgraaf",         naam: "Landgraaf" },
  { slug: "brunssum",          naam: "Brunssum" },
  { slug: "beek",              naam: "Beek" },
  { slug: "stein",             naam: "Stein" },
  { slug: "born",              naam: "Born" },
  { slug: "urmond",            naam: "Urmond" },
  { slug: "hoensbroek",        naam: "Hoensbroek" },
  { slug: "valkenburg",        naam: "Valkenburg" },
  { slug: "meerssen",          naam: "Meerssen" },
  { slug: "beekdaelen",        naam: "Beekdaelen" },
  { slug: "eijsden-margraten", naam: "Eijsden-Margraten" },
  { slug: "gulpen-wittem",     naam: "Gulpen-Wittem" },
  { slug: "vaals",             naam: "Vaals" },
  { slug: "voerendaal",        naam: "Voerendaal" },
  { slug: "simpelveld",        naam: "Simpelveld" },
  // Midden-Limburg
  { slug: "roermond",          naam: "Roermond" },
  { slug: "weert",             naam: "Weert" },
  { slug: "echt-susteren",     naam: "Echt-Susteren" },
  { slug: "susteren",          naam: "Susteren" },
  { slug: "maasgouw",          naam: "Maasgouw" },
  { slug: "maasbracht",        naam: "Maasbracht" },
  { slug: "leudal",            naam: "Leudal" },
  { slug: "nederweert",        naam: "Nederweert" },
  { slug: "roerdalen",         naam: "Roerdalen" },
];

const baseHtml = readFileSync("dist/index.html", "utf-8");

for (const stad of steden) {
  const title = `Gratis ophalen bedrijfshardware ${stad.naam} | Hardware Held`;
  const description = `Gratis ophalen van oude bedrijfshardware in ${stad.naam}. Hardware Held haalt computers, laptops, monitoren en netwerkapparatuur kosteloos op in ${stad.naam} en omgeving. Inclusief veilige datawissing met bevestiging per apparaat.`;
  const canonical = `https://hardwareheld.nl/ophalen/${stad.slug}`;

  const html = applySeoToHtml(baseHtml, { title, description, canonical });

  const dir = join("dist", "ophalen", stad.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf-8");
  console.log(`  Generated: /ophalen/${stad.slug}`);
}

console.log(`\nKlaar: ${steden.length} locatiepagina's aangemaakt.`);
