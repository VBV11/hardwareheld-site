import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { Monitor, Laptop, Tv, Network, Truck, ShieldCheck, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import schrijvenImg from "@/assets/schrijven.webp";

const steps = [
  { number: "1", title: "U neemt contact op", description: "Stuur een e-mail naar info@hardwareheld.nl of een WhatsApp naar 06 8337 3852. Vertel kort wat u heeft en waar u gevestigd bent. Wij reageren binnen 1 werkdag." },
  { number: "2", title: "Wij plannen een ophaalmoment", description: "Wij komen naar u toe op een tijdstip dat uitkomt. Volledig gratis, u hoeft niks in te pakken of te verzenden." },
  { number: "3", title: "Wij halen alles op", description: "Wij laden de hardware in. Bij de ophaling tekent u een eenvoudig overdrachtsformulier waarmee de eigendom formeel overgaat op Hardware Held en wij u de wisbevestiging kunnen sturen." },
  { number: "4", title: "Data wordt professioneel gewist", description: "Alle opslag wordt professioneel gewist met betrouwbare wissoftware. Data is daarna niet meer toegankelijk met standaard middelen." },
  { number: "5", title: "U ontvangt een bevestiging", description: "Binnen 14 dagen na ophaling ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software." },
];

const apparaten = [
  { icon: Monitor, title: "Computers", desc: "Alle soorten, groot en klein" },
  { icon: Laptop, title: "Laptops", desc: "Bedrijfslaptops en notebooks" },
  { icon: Tv, title: "Monitoren", desc: "Beeldschermen voor kantoor" },
  { icon: Network, title: "Netwerkapparatuur", desc: "Switches, routers, accesspoints" },
];

const benefits = [
  { icon: Truck, title: "Gratis ophaalservice", desc: "Geen kosten, wij komen naar u toe" },
  { icon: ShieldCheck, title: "Veilige datawissing", desc: "Professionele wissoftware, data niet meer toegankelijk" },
  { icon: FileCheck, title: "Bevestiging per apparaat", desc: "PDF per e-mail met serienummer, datum en software" },
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

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-background overflow-hidden">
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Gratis ophalen
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Gratis ophalen van oude bedrijfshardware
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Voor elk bedrijf in Zuid- en Midden-Limburg, van eenmanszaak tot organisatie met tientallen werkplekken. Geen minimum, geen voorrijkosten, geen verborgen kosten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zo werkt het */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
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

      {/* Wat nemen wij aan? + Wat krijgt u? */}
      <section className="relative py-14 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Apparaten */}
            <div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
                  Wat nemen wij aan?
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold">Welke apparatuur</h2>
              </motion.div>
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {apparaten.map((a) => (
                  <motion.div
                    key={a.title}
                    variants={cardVariants}
                    style={{ willChange: "transform" }}
                    className="p-6 rounded-2xl border border-border bg-card shadow-sm
                      transition-all duration-200 hover:-translate-y-1 hover:border-primary/25
                      hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <a.icon className="text-primary" size={20} aria-hidden />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-1">{a.title}</h3>
                    <p className="text-muted-foreground text-sm">{a.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Benefits */}
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

      {/* Hoe zit het met datawissing? */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-6 rounded-2xl bg-primary/[0.04] border border-primary/20"
          >
            <div className="flex gap-6 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-primary" size={20} aria-hidden />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold">Hoe zit het met datawissing?</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Bij gratis ophalen is professionele datawissing standaard inbegrepen. Zodra wij de hardware hebben opgehaald, wordt de opslag uit elk apparaat gehaald en gewist met betrouwbare wissoftware. Binnen 14 dagen na ophaling ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software. Wilt u de hardware liever houden en alleen de data laten wissen? Bekijk dan onze{" "}
                  <Link to="/werkwijze/datawissing-op-locatie" className="text-primary font-medium hover:underline">
                    datawissing op locatie
                  </Link>
                  .
                </p>
              </div>
              <img
                src={schrijvenImg}
                alt="Gestapelde harde schijven, één geopend met zichtbare binnenkant"
                className="hidden sm:block w-[120px] flex-shrink-0 h-auto drop-shadow-lg"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default GratisOphalen;
