import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import Stappen from "@/components/Stappen";
import Voordelen from "@/components/Voordelen";
import { Monitor, Laptop, Tv, Network, Truck, ShieldCheck, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import schrijvenImg from "@/assets/schrijven.webp";

const steps = [
  { titel: "U neemt contact op", tekst: "Stuur een e-mail naar info@hardwareheld.nl of vul het aanmeldformulier in. Vertel kort wat u heeft en waar u gevestigd bent. Wij reageren binnen 1 werkdag." },
  { titel: "Wij plannen een ophaalmoment", tekst: "Wij komen naar u toe op een tijdstip dat uitkomt. Volledig gratis, u hoeft niks in te pakken of te verzenden." },
  { titel: "Wij halen alles op", tekst: "Wij laden de hardware in. Bij de ophaling tekent u een eenvoudig overdrachtsformulier waarmee de eigendom formeel overgaat op Hardware Held en wij u de wisbevestiging kunnen sturen." },
  { titel: "Data wordt professioneel gewist", tekst: "Alle opslag wordt professioneel gewist met betrouwbare wissoftware. Data is daarna niet meer toegankelijk met standaard middelen." },
  { titel: "U ontvangt een bevestiging", tekst: "Binnen 14 dagen na ophaling ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software." },
];

const apparaten = [
  { icon: Monitor, titel: "Computers", tekst: "Alle soorten, groot en klein" },
  { icon: Laptop, titel: "Laptops", tekst: "Bedrijfslaptops en notebooks" },
  { icon: Tv, titel: "Monitoren", tekst: "Beeldschermen voor kantoor" },
  { icon: Network, titel: "Netwerkapparatuur", tekst: "Switches, routers, accesspoints" },
];

const benefits = [
  { icon: Truck, titel: "Gratis ophaalservice", tekst: "Geen kosten, wij komen naar u toe" },
  { icon: ShieldCheck, titel: "Veilige datawissing", tekst: "Professionele wissoftware, data niet meer toegankelijk" },
  { icon: FileCheck, titel: "Bevestiging per apparaat", tekst: "PDF per e-mail met serienummer, datum en software" },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Werkwijze", "item": "https://hardwareheld.nl/werkwijze" },
    { "@type": "ListItem", "position": 3, "name": "Gratis ophalen", "item": "https://hardwareheld.nl/werkwijze/gratis-ophalen" },
  ],
};

const GratisOphalen = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gratis ophalen oude bedrijfshardware Limburg | Hardware Held"
        description="Gratis ophalen oude bedrijfshardware in Zuid- en Midden-Limburg, inclusief veilige datawissing en PDF-bevestiging per apparaat. In 5 simpele stappen geregeld."
        canonical="https://hardwareheld.nl/werkwijze/gratis-ophalen"
        keywords="gratis ophalen bedrijfshardware, computers laten ophalen, laptops ophalen bedrijf, hardware afvoeren Limburg, MKB hardware ophaalservice"
        structuredData={breadcrumb}
      />
      <Navbar />
      <main>
        <PageHero
          kruimels={[{ naam: "Werkwijze", href: "/werkwijze" }, { naam: "Gratis ophalen" }]}
          titel="Gratis ophalen van oude bedrijfshardware"
          intro="Voor elk bedrijf in Zuid- en Midden-Limburg, van eenmanszaak tot organisatie met tientallen werkplekken. Geen minimum, geen voorrijkosten, geen verborgen kosten."
        >
          <Link to="/aanmelden" className="knop knop-oranje">
            Gratis ophalen aanvragen
          </Link>
        </PageHero>

        <Sectie titel="Zo werkt het" intro="In vijf stappen van oude hardware naar bewijs in uw mailbox.">
          <Stappen stappen={steps} />
        </Sectie>

        <Sectie toon="grijs" titel="Wat nemen wij aan?" intro="Alle gangbare zakelijke apparatuur." actie={
          <Link to="/wat-wij-aannemen" className="tekstlink">
            Bekijk de volledige lijst
          </Link>
        }>
          <ul className="grid gap-x-10 border-t-2 border-foreground sm:grid-cols-2">
            {apparaten.map((a) => (
              <li key={a.titel} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 border-b border-border/80 py-5">
                <a.icon size={24} strokeWidth={1.75} className="mt-0.5" aria-hidden />
                <div>
                  <h3 className="kop-blok">{a.titel}</h3>
                  <p className="mt-1 text-muted-foreground">{a.tekst}</p>
                </div>
              </li>
            ))}
          </ul>
        </Sectie>

        <Sectie titel="Wat u kunt verwachten">
          <Voordelen items={benefits} />
        </Sectie>

        <section className="bg-foreground py-14 text-white md:py-24">
          <div className="container grid items-center gap-x-16 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="kop-sectie">Hoe zit het met datawissing?</h2>
              <p className="mt-4 max-w-prose text-white/80">
                Bij gratis ophalen is professionele datawissing standaard inbegrepen. Zodra wij de hardware hebben
                opgehaald, wordt de opslag uit elk apparaat gehaald en gewist met betrouwbare wissoftware, waarna u de
                bevestiging ontvangt zoals hierboven beschreven.
              </p>
              <p className="mt-4 max-w-prose text-white/80">
                Wilt u de hardware liever houden en alleen de data laten wissen? Bekijk dan onze{" "}
                <Link to="/werkwijze/datawissing-op-locatie" className="tekstlink text-white">
                  datawissing op locatie
                </Link>
                .
              </p>
            </div>
            <div className="hidden lg:col-span-4 lg:block">
              <img
                src={schrijvenImg}
                alt="Gestapelde harde schijven, één geopend met zichtbare binnenkant"
                className="mx-auto h-auto w-full max-w-[14rem]"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default GratisOphalen;
