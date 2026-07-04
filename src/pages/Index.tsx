import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BeloofteBar from "@/components/BeloofteBar";
import DataveiligheidSection from "@/components/DataveiligheidSection";
import BelofteSection from "@/components/BelofteSection";
import ProductsSection from "@/components/ProductsSection";
import VoorWieSection from "@/components/VoorWieSection";
import WerkgebiedSection from "@/components/WerkgebiedSection";
import FaqSection from "@/components/FaqSection";
import AanmeldSection from "@/components/AanmeldSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gratis ophalen bedrijfshardware Limburg | Hardware Held"
        description="Gratis ophalen van oude bedrijfshardware in Zuid- en Midden-Limburg, inclusief veilige datawissing met PDF-bevestiging per apparaat. Reactie binnen 1 werkdag."
        canonical="https://hardwareheld.nl/"
        keywords="bedrijfshardware ophalen, gratis ophalen computers, datawissing Limburg, oude laptops inleveren, hardware recyclen MKB, Sittard-Geleen, Maastricht, Heerlen, Roermond, Weert"
      />
      <Navbar />
      <HeroSection />
      <BeloofteBar />
      <FeaturesSection />
      <DataveiligheidSection />
      <BelofteSection />
      <ProductsSection />
      <VoorWieSection />
      <WerkgebiedSection />
      <FaqSection />
      <AanmeldSection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
