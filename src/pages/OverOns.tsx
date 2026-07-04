import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import { Leaf, Heart, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Cpu,
    title: "Tegen verspilling",
    description:
      "Bruikbare apparatuur hoort niet in een kast of op de stort. Wij zorgen dat het weer wordt ingezet, bij een ander bedrijf of via verantwoorde recycling.",
  },
  {
    icon: ShieldCheck,
    title: "Betrouwbaarheid",
    description:
      "Uw data is in veilige handen. Wij wissen alles professioneel en u ontvangt een bevestiging per apparaat.",
  },
  {
    icon: Leaf,
    title: "Duurzaamheid",
    description:
      "Oude hardware verdient een tweede kans. Wij verlengen de levensduur van apparaten en verminderen elektronisch afval.",
  },
  {
    icon: Heart,
    title: "Eerlijkheid",
    description:
      "Geen verborgen kosten, geen kleine lettertjes. Wat wij afspreken, doen wij, transparant en direct.",
  },
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

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-background overflow-hidden">
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)",
          }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Over ons
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Het verhaal achter Hardware Held
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Een lokaal initiatief uit Sittard-Geleen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-6 rounded-2xl border border-border bg-card shadow-sm border-l-4 border-l-primary pl-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ons verhaal
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Hardware Held is ontstaan uit een simpele ergernis: er wordt te veel goede hardware weggegooid. Apparaten van drie of vier jaar oud die nog prima werken, belanden op de stapel omdat bedrijven er vanaf willen. Zonde.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Wij halen die hardware gratis op, wissen alle bedrijfsdata professioneel, en geven de apparaten een tweede leven. U bent er vanaf zonder gedoe, en wat nog werkt blijft in gebruik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Onze waarden */}
      <section className="relative py-14 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Onze waarden
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Waar wij voor staan
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Onze kernwaarden vormen de basis van alles wat wij doen.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                style={{ willChange: "transform" }}
                className="p-5 rounded-2xl border border-border bg-card shadow-sm
                  transition-all duration-200 hover:-translate-y-1
                  hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)] hover:border-primary/25"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="text-primary" size={20} aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OverOns;
