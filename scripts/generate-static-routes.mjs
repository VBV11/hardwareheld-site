import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { applySeoToHtml } from "./seo-html.mjs";

// Vaste routes die op GitHub Pages elk hun eigen dist/<route>/index.html nodig
// hebben (voor een directe HTTP 200 in plaats van via de 404-fallback).
// Titel/omschrijving hier moeten overeenkomen met de <SEO>-props in de
// bijbehorende src/pages/*.tsx, zodat de statische HTML (voor bots die geen
// JS uitvoeren) hetzelfde zegt als wat React na hydratie rendert.
const routes = [
  {
    path: "werkwijze",
    title: "Werkwijze: gratis ophalen & datawissing | Hardware Held",
    description: "Zo werkt het gratis ophalen van oude bedrijfshardware en de datawissing op locatie bij Hardware Held in Limburg. Veilig, met PDF-bevestiging per apparaat.",
  },
  {
    path: "werkwijze/gratis-ophalen",
    title: "Gratis ophalen oude bedrijfshardware Limburg | Hardware Held",
    description: "Gratis ophalen oude bedrijfshardware in Zuid- en Midden-Limburg, inclusief veilige datawissing en PDF-bevestiging per apparaat. In 5 simpele stappen geregeld.",
  },
  {
    path: "werkwijze/datawissing-op-locatie",
    title: "Datawissing op locatie in Limburg | Hardware Held",
    description: "Veilige datawissing op locatie in Zuid- en Midden-Limburg tegen vast tarief. U houdt uw hardware en ontvangt een PDF-bevestiging per apparaat met serienummer.",
  },
  {
    path: "wat-wij-aannemen",
    title: "Welke hardware nemen wij aan? | Hardware Held",
    description: "Wij nemen alle gangbare bedrijfshardware aan: computers, laptops, monitoren en netwerkapparatuur. Werkend of defect, alle merken. Gratis ophalen in Limburg.",
  },
  {
    path: "over-ons",
    title: "Over ons: lokaal hardware-bedrijf uit Limburg | Hardware Held",
    description: "Hardware Held haalt gratis oude bedrijfshardware op in Limburg en zorgt voor veilige datawissing. Lokaal bedrijf uit Sittard-Geleen met focus op hergebruik.",
  },
  {
    path: "contact",
    title: "Contact: ophaling of datawissing aanvragen | Hardware Held",
    description: "Vraag een gratis ophaling of datawissing op locatie aan in Zuid- en Midden-Limburg. Reactie binnen 24 uur via e-mail of WhatsApp.",
  },
  {
    path: "privacy",
    title: "Privacyverklaring | Hardware Held",
    description: "Hoe Hardware Held omgaat met uw persoonsgegevens conform de AVG. Transparant, veilig en alleen voor de uitvoering van onze dienstverlening.",
  },
];

const baseHtml = readFileSync("dist/index.html", "utf-8");

for (const route of routes) {
  const canonical = `https://hardwareheld.nl/${route.path}`;
  const html = applySeoToHtml(baseHtml, { title: route.title, description: route.description, canonical });

  const dir = join("dist", route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf-8");
  console.log(`  Generated: /${route.path}`);
}

console.log(`\nKlaar: ${routes.length} vaste routes aangemaakt.`);
