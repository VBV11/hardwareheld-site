import { useParams, Navigate } from "react-router-dom";
import { Truck, ShieldCheck, FileCheck, Monitor, Laptop, Tv, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import Voordelen from "@/components/Voordelen";
import { getStad } from "@/data/steden";

const apparaten = [
  { icon: Monitor, titel: "Computers", tekst: "Towers, mini-PC's, workstations" },
  { icon: Laptop, titel: "Laptops", tekst: "Bedrijfslaptops en notebooks" },
  { icon: Tv, titel: "Monitoren", tekst: "Alle maten en merken" },
  { icon: Network, titel: "Netwerkapparatuur", tekst: "Switches, routers, accesspoints" },
];

const voordelen = [
  { icon: Truck, titel: "Gratis ophalen", tekst: "Geen voorrijkosten, geen minimum" },
  { icon: ShieldCheck, titel: "Veilige datawissing", tekst: "Professionele wissoftware inbegrepen" },
  { icon: FileCheck, titel: "Bevestiging per apparaat", tekst: "PDF per e-mail met serienummer en datum" },
];

const LocatiePagina = () => {
  const { stad: slug } = useParams<{ stad: string }>();
  const stad = getStad(slug ?? "");

  if (!stad) return <Navigate to="/not-found" replace />;

  const buurt = stad.buurtgemeenten.slice(0, 3).join(", ");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
      { "@type": "ListItem", "position": 2, "name": "Ophalen per stad", "item": "https://hardwareheld.nl/ophalen/sittard-geleen" },
      { "@type": "ListItem", "position": 3, "name": stad.naam, "item": `https://hardwareheld.nl/ophalen/${stad.slug}` },
    ],
  };

  const structuredData = [breadcrumb, {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Gratis ophalen bedrijfshardware ${stad.naam}`,
    "description": `Gratis ophalen van oude bedrijfshardware in ${stad.naam} en omgeving. Inclusief professionele datawissing met PDF-bevestiging per apparaat.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Hardware Held",
      "email": "info@hardwareheld.nl",
      "url": "https://hardwareheld.nl",
      "image": "https://hardwareheld.nl/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sittard-Geleen",
        "addressRegion": "Limburg",
        "addressCountry": "NL",
      },
    },
    "areaServed": [
      { "@type": "City", "name": stad.naam },
      ...stad.buurtgemeenten.map((g) => ({ "@type": "City", "name": g })),
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Gratis ophalen inclusief datawissing",
    },
  }];

  return (
    <div className="min-h-screen">
      <SEO
        title={`Gratis ophalen bedrijfshardware ${stad.naam} | Hardware Held`}
        description={`Gratis ophalen van oude bedrijfshardware in ${stad.naam}. Hardware Held haalt computers, laptops, monitoren en netwerkapparatuur kosteloos op in ${stad.naam} en omgeving. Inclusief veilige datawissing met bevestiging per apparaat.`}
        canonical={`https://hardwareheld.nl/ophalen/${stad.slug}`}
        keywords={`hardware ophalen ${stad.naam}, computers inleveren ${stad.naam}, laptops afvoeren ${stad.naam}, datawissing ${stad.naam}, bedrijfshardware ${stad.regio}`}
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        <PageHero
          kruimels={[{ naam: "Werkgebied", href: "/#werkgebied" }, { naam: stad.naam }]}
          titel={`Gratis ophalen bedrijfshardware ${stad.naam}`}
          intro={`Heeft uw bedrijf in ${stad.naam} oude computers, laptops of netwerkapparatuur die mag worden afgevoerd? Hardware Held haalt gratis op, inclusief veilige datawissing en een bevestiging per apparaat.`}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link to="/aanmelden" className="knop knop-oranje">
              Gratis ophalen aanvragen in {stad.naam}
            </Link>
            <Link to="/werkwijze/gratis-ophalen" className="tekstlink">
              Bekijk de werkwijze
            </Link>
          </div>
        </PageHero>

        <Sectie titel={`Wat nemen wij aan in ${stad.naam}?`}>
          <Voordelen items={apparaten} />
        </Sectie>

        <Sectie toon="grijs" titel="Wat u kunt verwachten">
          <Voordelen items={voordelen} />
        </Sectie>

        <Sectie titel={`Ophaalservice in ${stad.naam} en omgeving`}>
          <div>
            <p className="max-w-prose">
              Hardware Held is actief in heel {stad.regio}. Naast {stad.naam} rijden wij ook naar {buurt} en andere
              gemeenten in de regio. Er zijn geen reiskosten en geen minimumhoeveelheid: of u nu één apparaat heeft of
              een volledige serverruimte wilt laten leeghalen.
            </p>
          </div>
        </Sectie>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default LocatiePagina;
