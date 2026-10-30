import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import Voordelen from "@/components/Voordelen";
import { Leaf, Heart, ShieldCheck, Cpu } from "lucide-react";
import opgehaaldImg from "@/assets/opgehaald.webp";

const values = [
  {
    icon: Cpu,
    titel: "Tegen verspilling",
    tekst:
      "Bruikbare apparatuur hoort niet in een kast of op de stort. Wij zorgen dat het weer wordt ingezet, bij een ander bedrijf of via verantwoorde recycling.",
  },
  {
    icon: ShieldCheck,
    titel: "Betrouwbaarheid",
    tekst:
      "Uw data is in veilige handen. Wij wissen alles professioneel en u ontvangt een bevestiging per apparaat.",
  },
  {
    icon: Leaf,
    titel: "Duurzaamheid",
    tekst:
      "Oude hardware verdient een tweede kans. Wij verlengen de levensduur van apparaten en verminderen elektronisch afval.",
  },
  {
    icon: Heart,
    titel: "Eerlijkheid",
    tekst:
      "Geen verborgen kosten, geen kleine lettertjes. Wat wij afspreken, doen wij, transparant en direct.",
  },
];

const OverOns = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Over ons: lokaal hardware-bedrijf uit Limburg | Hardware Held"
        description="Hardware Held haalt gratis oude bedrijfshardware op in Limburg en zorgt voor veilige datawissing. Lokaal bedrijf uit Sittard-Geleen met focus op hergebruik."
        canonical="https://hardwareheld.nl/over-ons"
        keywords="Hardware Held, over ons, hardware ophaalbedrijf Limburg, Sittard-Geleen, duurzaam hergebruik IT"
      />
      <Navbar />
      <main>
        <PageHero
          kruimels={[{ naam: "Over ons" }]}
          titel="Het verhaal achter Hardware Held"
          intro="Een lokaal initiatief uit Sittard-Geleen."
        />

        <Sectie titel="Ons verhaal">
          <div className="grid gap-x-10 gap-y-6 border-t-2 border-foreground pt-5 md:grid-cols-5">
            <div className="md:col-span-3">
              <p>
                Hardware Held is ontstaan uit een simpele ergernis: er wordt te veel goede hardware weggegooid. Apparaten
                van drie of vier jaar oud die nog prima werken, belanden op de stapel omdat bedrijven er vanaf willen.
                Zonde.
              </p>
              <p className="mt-4 text-muted-foreground">
                Wij halen die hardware gratis op, wissen alle bedrijfsdata professioneel, en geven de apparaten een
                tweede leven. U bent er vanaf zonder gedoe, en wat nog werkt blijft in gebruik.
              </p>
            </div>
            <img
              src={opgehaaldImg}
              alt="Stapel opgehaalde Dell-computers, klaar voor datawissing"
              className="h-64 w-full rounded-sm object-cover object-[50%_30%] md:col-span-2 md:h-full"
              loading="lazy"
              draggable={false}
            />
          </div>
        </Sectie>

        <Sectie toon="grijs" titel="Waar wij voor staan" intro="Onze kernwaarden vormen de basis van alles wat wij doen.">
          <Voordelen items={values} />
        </Sectie>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OverOns;
