import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import DienstenSection from "@/components/DienstenSection";
import CTASection from "@/components/CTASection";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Werkwijze", "item": "https://hardwareheld.nl/werkwijze" },
  ],
};

const Werkwijze = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Werkwijze: gratis ophalen & datawissing | Hardware Held"
        description="Zo werkt het gratis ophalen van oude bedrijfshardware en de datawissing op locatie bij Hardware Held in Limburg. Veilig, met PDF-bevestiging per apparaat."
        canonical="https://hardwareheld.nl/werkwijze"
        keywords="werkwijze hardware ophalen, datawissing op locatie, veilige datawissing bedrijf, hardware ophaalservice Limburg"
        structuredData={breadcrumb}
      />
      <Navbar />
      <main>
        <PageHero
          kruimels={[{ naam: "Werkwijze" }]}
          titel="Zo helpen wij u"
          intro="Wij bieden twee diensten aan: gratis ophalen van uw oude hardware, of datawissing op locatie als u uw apparaten wilt houden."
        />
        <DienstenSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Werkwijze;
