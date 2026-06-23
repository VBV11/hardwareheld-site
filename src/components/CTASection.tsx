import { ArrowRight, ShieldCheck, MapPin, Clock, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const trust = [
  { icon: ShieldCheck, text: "Veilige datawissing" },
  { icon: MapPin, text: "Ophaalservice heel Limburg" },
  { icon: Clock, text: "Reactie binnen 1 werkdag" },
];

const trustContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const trustItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-[#0a0a0a]">
      {/* Layered ambient glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 110%, hsl(25 100% 50% / 0.32), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      {/* Large top glow orb */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(25 100% 55%), transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold text-primary border border-primary/25 rounded-full bg-primary/[0.08] uppercase tracking-widest">
            <Recycle size={14} className="text-primary" aria-hidden />
            Plan uw ophaalmoment
          </span>

          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 text-white tracking-tight leading-[1.08]">
            Klaar om uw hardware
            <br />
            kwijt te raken?
          </h2>

          <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Wij plannen een gratis ophaalmoment bij u in de regio. Geen verplichtingen, geen verrassingen.
          </p>

          {/* CTA button with pulse ring */}
          <div className="relative inline-block mb-12">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ background: "hsl(25 100% 50% / 0.35)", willChange: "transform, opacity" }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
            />
            <Link
              to="/aanmelden"
              className="btn-hover relative inline-flex items-center gap-2 min-h-[44px] px-9 py-4 bg-primary text-primary-foreground font-semibold rounded-full shadow-[0_20px_60px_-15px_hsl(25_100%_50%_/_0.7)] text-base"
            >
              Gratis ophalen aanvragen <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust badges */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto"
            variants={trustContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {trust.map((t) => (
              <motion.div
                key={t.text}
                variants={trustItem}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <t.icon size={15} className="text-primary flex-shrink-0" aria-hidden />
                <span className="text-xs font-medium text-white/70">{t.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
