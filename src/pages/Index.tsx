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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Wat kost het ophalen van oude bedrijfshardware?", "acceptedAnswer": { "@type": "Answer", "text": "Het ophalen is volledig gratis. Wij rekenen geen voorrijkosten en geen kosten per apparaat. De veilige datawissing is bij het ophalen inbegrepen." } },
    { "@type": "Question", "name": "Hoe veilig is de datawissing?", "acceptedAnswer": { "@type": "Answer", "text": "Wij wissen elke gegevensdrager met professionele wissoftware. Binnen 14 dagen na ophaling ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software." } },
    { "@type": "Question", "name": "In welk gebied halen jullie op?", "acceptedAnswer": { "@type": "Answer", "text": "Wij halen gratis op in heel Zuid- en Midden-Limburg, waaronder Sittard-Geleen, Maastricht, Heerlen, Roermond, Weert, Echt-Susteren, Maasgouw, Leudal, Nederweert en omliggende gemeenten." } },
    { "@type": "Question", "name": "Welke hardware nemen jullie aan?", "acceptedAnswer": { "@type": "Answer", "text": "Wij nemen alle zakelijke computers, laptops, monitoren en netwerkapparatuur aan. Twijfelt u of uw apparatuur in aanmerking komt? Stuur een foto via e-mail of WhatsApp en u krijgt binnen 1 werkdag antwoord." } },
    { "@type": "Question", "name": "Wat doen jullie met de hardware na het ophalen?", "acceptedAnswer": { "@type": "Answer", "text": "Bruikbare apparatuur wordt na de datawissing opgeknapt en krijgt een tweede leven. Apparatuur die niet meer functioneert wordt op een verantwoorde manier gerecycled." } },
    { "@type": "Question", "name": "Hoe snel kunnen jullie langskomen?", "acceptedAnswer": { "@type": "Answer", "text": "In de meeste gevallen plannen wij binnen een week een ophaalmoment in. Heeft u haast? Geef dat aan in uw bericht en wij doen ons best om eerder langs te komen." } },
    { "@type": "Question", "name": "Moet ik de computers eerst zelf wissen?", "acceptedAnswer": { "@type": "Answer", "text": "Nee, dat hoeft niet. Wij wissen de gegevens voor u en sturen binnen 14 dagen per e-mail een PDF-bevestiging per apparaat met serienummer, datum en gebruikte software." } },
    { "@type": "Question", "name": "Werken jullie ook voor zzp'ers en kleine bedrijven?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Wij werken voor elk bedrijf met oude hardware, van zzp'er tot organisatie met tientallen werkplekken. Er is geen minimum aantal apparaten." } },
    { "@type": "Question", "name": "Hoe verschilt jullie aanpak van een kringloop of recycler?", "acceptedAnswer": { "@type": "Answer", "text": "Bij Hardware Held krijgt u per e-mail een PDF-bevestiging van de datawissing per apparaat, met serienummer, datum en gebruikte software. Veel inleverpunten geven die zekerheid niet." } },
    { "@type": "Question", "name": "Wat is datawissing op locatie en wanneer kies ik daarvoor?", "acceptedAnswer": { "@type": "Answer", "text": "Bij datawissing op locatie komen wij naar u toe en wissen wij de gegevens terwijl de apparatuur in uw pand blijft. Dat kiest u wanneer u de hardware zelf wilt houden of weggooien, maar wel zekerheid wilt over de wissing. Hiervoor geldt een vast tarief, zonder minimum." } },
    { "@type": "Question", "name": "Moet ik iets ondertekenen?", "acceptedAnswer": { "@type": "Answer", "text": "Bij de ophaling tekent u een eenvoudig overdrachtsformulier. Hierop staat welke apparaten u overdraagt, en u verklaart dat u eigenaar bent. Het is geen abonnement of doorlopend contract, alleen een eenmalige bevestiging van de overdracht." } },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gratis ophalen bedrijfshardware Limburg | Hardware Held"
        description="Gratis ophalen van oude bedrijfshardware in Zuid- en Midden-Limburg, inclusief veilige datawissing met PDF-bevestiging per apparaat. Reactie binnen 1 werkdag."
        canonical="https://hardwareheld.nl/"
        keywords="bedrijfshardware ophalen, gratis ophalen computers, datawissing Limburg, oude laptops inleveren, hardware recyclen MKB, Sittard-Geleen, Maastricht, Heerlen, Roermond, Weert"
        structuredData={faqSchema}
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
