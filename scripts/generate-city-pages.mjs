import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const steden = [
  // Zuid-Limburg
  { slug: "sittard-geleen",    naam: "Sittard-Geleen",    regio: "Zuid-Limburg",   buurt: ["Born", "Beek", "Stein"] },
  { slug: "maastricht",        naam: "Maastricht",         regio: "Zuid-Limburg",   buurt: ["Meerssen", "Valkenburg", "Beek"] },
  { slug: "heerlen",           naam: "Heerlen",            regio: "Zuid-Limburg",   buurt: ["Kerkrade", "Brunssum", "Landgraaf"] },
  { slug: "kerkrade",          naam: "Kerkrade",           regio: "Zuid-Limburg",   buurt: ["Heerlen", "Landgraaf", "Brunssum"] },
  { slug: "landgraaf",         naam: "Landgraaf",          regio: "Zuid-Limburg",   buurt: ["Heerlen", "Kerkrade", "Brunssum"] },
  { slug: "brunssum",          naam: "Brunssum",           regio: "Zuid-Limburg",   buurt: ["Heerlen", "Landgraaf", "Beekdaelen"] },
  { slug: "beek",              naam: "Beek",               regio: "Zuid-Limburg",   buurt: ["Sittard-Geleen", "Maastricht", "Beekdaelen"] },
  { slug: "stein",             naam: "Stein",              regio: "Zuid-Limburg",   buurt: ["Sittard-Geleen", "Born", "Beek"] },
  { slug: "born",              naam: "Born",               regio: "Zuid-Limburg",   buurt: ["Sittard-Geleen", "Stein", "Urmond"] },
  { slug: "urmond",            naam: "Urmond",             regio: "Zuid-Limburg",   buurt: ["Sittard-Geleen", "Born", "Stein"] },
  { slug: "hoensbroek",        naam: "Hoensbroek",         regio: "Zuid-Limburg",   buurt: ["Heerlen", "Brunssum", "Beekdaelen"] },
  { slug: "valkenburg",        naam: "Valkenburg",         regio: "Zuid-Limburg",   buurt: ["Maastricht", "Meerssen", "Voerendaal"] },
  { slug: "meerssen",          naam: "Meerssen",           regio: "Zuid-Limburg",   buurt: ["Maastricht", "Valkenburg", "Beek"] },
  { slug: "beekdaelen",        naam: "Beekdaelen",         regio: "Zuid-Limburg",   buurt: ["Heerlen", "Brunssum", "Simpelveld"] },
  { slug: "eijsden-margraten", naam: "Eijsden-Margraten",  regio: "Zuid-Limburg",   buurt: ["Maastricht", "Gulpen-Wittem", "Vaals"] },
  { slug: "gulpen-wittem",     naam: "Gulpen-Wittem",      regio: "Zuid-Limburg",   buurt: ["Vaals", "Eijsden-Margraten", "Simpelveld"] },
  { slug: "vaals",             naam: "Vaals",              regio: "Zuid-Limburg",   buurt: ["Gulpen-Wittem", "Eijsden-Margraten", "Maastricht"] },
  { slug: "voerendaal",        naam: "Voerendaal",         regio: "Zuid-Limburg",   buurt: ["Heerlen", "Valkenburg", "Simpelveld"] },
  { slug: "simpelveld",        naam: "Simpelveld",         regio: "Zuid-Limburg",   buurt: ["Voerendaal", "Beekdaelen", "Gulpen-Wittem"] },
  // Midden-Limburg
  { slug: "roermond",          naam: "Roermond",           regio: "Midden-Limburg", buurt: ["Maasgouw", "Roerdalen", "Echt-Susteren"] },
  { slug: "weert",             naam: "Weert",              regio: "Midden-Limburg", buurt: ["Nederweert", "Leudal", "Roermond"] },
  { slug: "echt-susteren",     naam: "Echt-Susteren",      regio: "Midden-Limburg", buurt: ["Roermond", "Maasgouw", "Sittard-Geleen"] },
  { slug: "susteren",          naam: "Susteren",           regio: "Midden-Limburg", buurt: ["Echt-Susteren", "Sittard-Geleen", "Maasgouw"] },
  { slug: "maasgouw",          naam: "Maasgouw",           regio: "Midden-Limburg", buurt: ["Roermond", "Echt-Susteren", "Maasbracht"] },
  { slug: "maasbracht",        naam: "Maasbracht",         regio: "Midden-Limburg", buurt: ["Maasgouw", "Roermond", "Echt-Susteren"] },
  { slug: "leudal",            naam: "Leudal",             regio: "Midden-Limburg", buurt: ["Weert", "Roermond", "Nederweert"] },
  { slug: "nederweert",        naam: "Nederweert",         regio: "Midden-Limburg", buurt: ["Weert", "Leudal", "Roermond"] },
  { slug: "roerdalen",         naam: "Roerdalen",          regio: "Midden-Limburg", buurt: ["Roermond", "Echt-Susteren", "Maasgouw"] },
];

const baseHtml = readFileSync("dist/index.html", "utf-8");

for (const stad of steden) {
  const title = `Gratis ophalen bedrijfshardware ${stad.naam} | Hardware Held`;
  const description = `Gratis ophalen van oude bedrijfshardware in ${stad.naam}. Hardware Held haalt computers, laptops, monitoren en netwerkapparatuur kosteloos op in ${stad.naam} en omgeving, inclusief veilige datawissing met bevestiging per apparaat.`;
  const canonical = `https://hardwareheld.nl/ophalen/${stad.slug}`;

  let html = baseHtml;

  // Title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Description
  html = html.replace(
    /<meta name="description"[^>]*\/?>/,
    `<meta name="description" content="${description}" />`
  );

  // Canonical (inject before </head>)
  html = html.replace(
    "</head>",
    `  <link rel="canonical" href="${canonical}" />\n  </head>`
  );

  // OG tags
  html = html.replace(/<meta property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description"[^>]*\/?>/, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${canonical}" />`);

  // Twitter/X tags
  html = html.replace(/<meta name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description"[^>]*\/?>/, `<meta name="twitter:description" content="${description}" />`);

  const dir = join("dist", "ophalen", stad.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf-8");
  console.log(`  Generated: /ophalen/${stad.slug}`);
}

console.log(`\nKlaar: ${steden.length} locatiepagina's aangemaakt.`);
