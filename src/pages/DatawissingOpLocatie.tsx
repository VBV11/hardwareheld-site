import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import Stappen from "@/components/Stappen";
import Voordelen from "@/components/Voordelen";
import { ShieldCheck, FileCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import schrijvenImg from "@/assets/schrijven.webp";

const steps = [
  { titel: "U neemt contact op", tekst: "Stuur een e-mail naar info@hardwareheld.nl en laat weten hoeveel apparaten u wilt laten wissen." },
  { titel: "Wij komen bij u langs", tekst: "Wij plannen een moment dat u uitkomt en wissen alle data ter plekke met professionele software." },
  { titel: "U ontvangt een bevestiging", tekst: "Binnen 14 dagen na de wissing ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software." },
];

const benefits = [
  { icon: ShieldCheck, titel: "Professionele wissing", tekst: "Met betrouwbare wissoftware" },
  { icon: FileCheck, titel: "Bevestiging per apparaat", tekst: "PDF per e-mail met serienummer, datum en software" },
  { icon: Lock, titel: "Geen dataverlies-risico", tekst: "Hardware verlaat uw kantoor niet" },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Werkwijze", "item": "https://hardwareheld.nl/werkwijze" },
    { "@type": "ListItem", "position": 3, "name": "Datawissing op locatie", "item": "https://hardwareheld.nl/werkwijze/datawissing-op-locatie" },
  ],
};

const DatawissingOpLocatie = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Datawissing op locatie in Limburg | Hardware Held"
        description="Veilige datawissing op locatie in Zuid- en Midden-Limburg tegen vast tarief. U houdt uw hardware en ontvangt een PDF-bevestiging per apparaat met serienummer."
        canonical="https://hardwareheld.nl/werkwijze/datawissing-op-locatie"
        keywords="datawissing op locatie, veilige datawissing bedrijf, harde schijf wissen, AVG datawissing, certificaat datawissing Limburg"
        structuredData={breadcrumb}
      />
      <Navbar />
      <main>
        <PageHero
          kruimels={[{ naam: "Werkwijze", href: "/werkwijze" }, { naam: "Datawissing op locatie" }]}
          titel="Datawissing op locatie in Zuid- en Midden-Limburg"
          intro="Voor elk bedrijf dat zijn hardware wil houden, maar zekerheid wil over de gegevens die erop staan. Professionele wissing bij u op kantoor, tegen een vast tarief per apparaat."
        >
          <Link to="/contact" className="knop knop-oranje">
            Datawissing aanvragen
          </Link>
        </PageHero>

        <Sectie titel="Voor welk bedrijf?">
          <div>
            <p className="max-w-prose">
              Soms wilt u uw apparatuur niet kwijt: u verkoopt zelf door, geeft door aan een collega of een ander
              bedrijf, of bewaart het als reserve. Maar de bedrijfsgegevens moeten wel grondig van de schijf. Daarvoor
              is datawissing op locatie.
            </p>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Wij komen bij elk bedrijf langs. Vaker afgenomen door organisaties die werken met gevoelige gegevens,
              zoals administratiekantoren, accountantskantoren, notariskantoren en zorgpraktijken, maar ook
              bouwbedrijven, productiebedrijven, kantoren en zzp'ers vragen er regelmatig om.
            </p>
          </div>
        </Sectie>

        <Sectie toon="grijs" titel="Zo werkt het">
          <Stappen stappen={steps} />
        </Sectie>

        <section className="container py-16 md:py-24">
          <div className="grid items-center gap-x-16 gap-y-8 rounded-2xl bg-foreground p-7 text-white md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="kop-sectie">Hoe wij wissen</h2>
              <p className="mt-4 max-w-prose text-white/80">
                Wij wissen alle opslag met betrouwbare, veelgebruikte wissoftware. Data is daarna niet meer toegankelijk
                met standaard middelen.
              </p>
              <p className="mt-4 max-w-prose text-white/80">
                In de praktijk wissen wij de opslag ter plekke bij u op kantoor. Afhankelijk van het apparaat gebeurt dit
                via het apparaat zelf of via een aansluiting op onze apparatuur, altijd binnen uw pand. U hoeft er zelf
                niets voor te doen.
              </p>
              <p className="mt-4 font-semibold">Uw hardware verlaat uw kantoor niet.</p>
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

        <Sectie titel="Wat u kunt verwachten">
          <Voordelen items={benefits} />
        </Sectie>

        <Sectie toon="grijs" titel="Goed om te weten">
          <div className="grid gap-x-10 sm:grid-cols-2">
            <div className="pb-6 sm:pb-0">
              <h3 className="kop-blok">Na de wissing is de opslag leeg</h3>
              <p className="mt-2 text-muted-foreground">
                Het besturingssysteem en alle software zijn verwijderd. Uw IT-partner of uzelf dient het apparaat opnieuw
                in te richten als u het weer in gebruik wilt nemen. Wij bieden deze installatie niet aan.
              </p>
            </div>
            <div>
              <h3 className="kop-blok">Wilt u de hardware niet houden?</h3>
              <p className="mt-2 text-muted-foreground">
                Als u de apparaten toch niet meer nodig heeft, is{" "}
                <Link to="/werkwijze/gratis-ophalen" className="tekstlink text-foreground">
                  gratis ophalen
                </Link>{" "}
                een betere keuze. Wij halen de hardware kosteloos op, wissen de data op dezelfde professionele manier en
                u ontvangt ook dan een bevestiging per apparaat.
              </p>
            </div>
          </div>
        </Sectie>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default DatawissingOpLocatie;
