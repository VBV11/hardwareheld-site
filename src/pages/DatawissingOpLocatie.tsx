import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { ShieldCheck, FileCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import schrijvenImg from "@/assets/schrijven.webp";

const steps = [
  { number: "1", title: "U neemt contact op", description: "Stuur een e-mail naar info@hardwareheld.nl of een WhatsApp naar 06 8337 3852 en laat weten hoeveel apparaten u wilt laten wissen." },
  { number: "2", title: "Wij komen bij u langs", description: "Wij plannen een moment dat u uitkomt en wissen alle data ter plekke met professionele software." },
  { number: "3", title: "U ontvangt een bevestiging", description: "Binnen 14 dagen na de wissing ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software." },
];

const benefits = [
  { icon: ShieldCheck, title: "Professionele wissing", desc: "Met betrouwbare wissoftware" },
  { icon: FileCheck, title: "Bevestiging per apparaat", desc: "PDF per e-mail met serienummer, datum en software" },
  { icon: Lock, title: "Geen dataverlies-risico", desc: "Hardware verlaat uw kantoor niet" },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

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

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-background overflow-hidden">
        <div
          className="absolute top-10 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Datawissing op locatie
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Datawissing op locatie in Zuid- en Midden-Limburg
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Voor elk bedrijf dat zijn hardware wil houden, maar zekerheid wil over de gegevens die erop staan. Professionele wissing bij u op kantoor, tegen een vast tarief per apparaat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Voor welk bedrijf? (inline) */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Voor wie
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Voor welk bedrijf?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soms wilt u uw apparatuur niet kwijt: u verkoopt zelf door, geeft door aan een collega of een ander bedrijf, of bewaart het als reserve. Maar de bedrijfsgegevens moeten wel grondig van de schijf. Daarvoor is datawissing op locatie.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wij komen bij elk bedrijf langs. Vaker afgenomen door organisaties die werken met gevoelige gegevens, zoals administratiekantoren, accountantskantoren, notariskantoren en zorgpraktijken, maar ook bouwbedrijven, productiebedrijven, kantoren en zzp'ers vragen er regelmatig om.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zo werkt het */}
      <section className="relative py-14 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Werkwijze
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold">Zo werkt het</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="relative flex gap-5 md:gap-6"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-base shadow-lg shadow-primary/25">
                    {step.number}
                  </div>
                  <div className="pt-1 md:pt-1.5">
                    <h3 className="font-heading text-lg font-bold mb-1.5">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hoe wij wissen + Wat krijgt u? */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Hoe wij wissen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm border-l-4 border-l-primary pl-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Hoe wij wissen</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Wij wissen alle opslag met betrouwbare, veelgebruikte wissoftware. Data is daarna niet meer toegankelijk met standaard middelen.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                In de praktijk wissen wij de opslag ter plekke bij u op kantoor. Afhankelijk van het apparaat gebeurt dit via het apparaat zelf of via een aansluiting op onze apparatuur, altijd binnen uw pand. Binnen 14 dagen na de wissing ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software.
              </p>
              <p className="text-foreground text-sm font-medium">
                Uw hardware verlaat uw kantoor niet.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src={schrijvenImg}
                  alt="Gestapelde harde schijven, één geopend met zichtbare binnenkant"
                  className="w-full max-w-[160px] h-auto drop-shadow-lg"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Wat krijgt u? */}
            <div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
                  Wat krijgt u?
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Wat u kunt verwachten</h2>
              </motion.div>
              <motion.div
                className="space-y-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {benefits.map((b) => (
                  <motion.div
                    key={b.title}
                    variants={cardVariants}
                    style={{ willChange: "transform" }}
                    className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-sm
                      transition-all duration-200 hover:-translate-y-1 hover:border-primary/25
                      hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <b.icon className="text-primary" size={20} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-1">{b.title}</h3>
                      <p className="text-muted-foreground text-sm">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Goed om te weten + Hardware niet houden? (merged pair) */}
      <section className="relative py-14 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm"
            >
              <h2 className="font-heading text-lg font-bold mb-2">Goed om te weten</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Na wissing is de opslag leeg. Het besturingssysteem en alle software zijn verwijderd. Uw IT-partner of uzelf dient het apparaat opnieuw in te richten als u het weer in gebruik wilt nemen. Wij bieden deze installatie niet aan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card shadow-sm"
            >
              <h2 className="font-heading text-lg font-bold mb-2">Wilt u de hardware niet houden?</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Als u de apparaten toch niet meer nodig heeft, is{" "}
                <Link to="/werkwijze/gratis-ophalen" className="text-primary font-medium hover:underline">
                  gratis ophalen
                </Link>{" "}
                een betere keuze. Wij halen de hardware kosteloos op, wissen de data op dezelfde professionele manier en u ontvangt ook dan een bevestiging per apparaat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default DatawissingOpLocatie;
