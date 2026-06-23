import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import AanmeldFormulier from "./AanmeldFormulier";

const AanmeldSection = () => {
  return (
    <section id="aanmelden" className="relative py-20 md:py-24 bg-background overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.035] pointer-events-none"
        style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        aria-hidden
      />

      <div className="container max-w-2xl relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
            Direct aanmelden
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Meld je ICT-apparatuur aan
          </h2>
          <p className="text-muted-foreground text-lg mb-5">
            Gratis ophalen voor bedrijven in en rond Sittard-Geleen
          </p>

          {/* Trust banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/[0.06] border border-primary/15 text-sm text-foreground/80">
            <ShieldCheck size={16} className="text-primary shrink-0" />
            Ophalen én datawissen is altijd gratis. Je ontvangt een wisbevestiging per apparaat.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
        >
          <AanmeldFormulier />
        </motion.div>
      </div>
    </section>
  );
};

export default AanmeldSection;
