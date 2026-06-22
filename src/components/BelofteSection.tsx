import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, PackageCheck, FileCheck2 } from "lucide-react";

const stappen = [
  {
    num: "01",
    icon: Clock,
    titel: "Direct contact",
    tekst:
      "U stuurt een bericht via e-mail of WhatsApp. U krijgt persoonlijk antwoord van uw vaste contactpersoon, geen callcenter, geen wachtrij.",
  },
  {
    num: "02",
    icon: PackageCheck,
    titel: "Geen voorbereidingen",
    tekst:
      "Wij plannen doorgaans binnen 2 à 3 werkdagen een ophaalmoment in. U hoeft niets in te pakken of klaar te zetten.",
  },
  {
    num: "03",
    icon: FileCheck2,
    titel: "Zekerheid op papier",
    tekst:
      "Binnen 14 dagen ontvangt u per e-mail een overzicht per apparaat, met serienummer, datum en gebruikte wissoftware.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const BelofteSection = () => {
  return (
    <section id="zo-werkt-het" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background: warm off-white */}
      <div className="absolute inset-0 bg-[#FFFAF6]" aria-hidden />
      {/* Very faint dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(25 100% 40%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
            Zo werkt het
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Wat u van ons mag verwachten
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            U meldt zich, wij regelen de rest.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Connecting line: desktop only */}
          <div
            className="absolute hidden md:block top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 z-0"
            aria-hidden
          />

          {stappen.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                variants={cardVariants}
                style={{ willChange: "transform" }}
                className="relative z-10 flex flex-col bg-white rounded-2xl p-6 border border-border/70 shadow-sm hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)] transition-all duration-200"
              >
                {/* Number circle + icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm text-white shadow-[0_4px_16px_-4px_hsl(25_100%_50%_/_0.45)]"
                    style={{ background: "linear-gradient(135deg, hsl(25 100% 52%), hsl(35 100% 58%))" }}
                  >
                    {s.num}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                    <Icon size={16} className="text-primary" aria-hidden />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold mb-3">{s.titel}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">{s.tekst}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <Link
            to="/werkwijze/gratis-ophalen"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Bekijk de volledige werkwijze →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BelofteSection;
