import { ArrowRight, ChevronRight, CheckCircle, Recycle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import opgehaaldImg from "@/assets/opgehaald.png";

const badges = [
  "100% gratis",
  "Reactie <24u",
  "Bewijs per apparaat",
  "MKB-specialist",
];

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[88vh] flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 60% 80% at 100% 0%,   hsl(25 100% 55% / 0.22) 0%, transparent 65%),
          radial-gradient(ellipse 50% 60% at 0%   95%,  hsl(35 100% 60% / 0.18) 0%, transparent 65%),
          radial-gradient(ellipse 80% 50% at 50%  50%,  hsl(20 100% 62% / 0.15) 0%, transparent 70%),
          #FFFAF6
        `,
      }}
    >
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold text-primary bg-white border border-primary/20 rounded-full uppercase tracking-widest shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <CheckCircle size={13} className="text-primary" />
              Gratis ophalen · Veilige datawissing
            </motion.span>

            <motion.h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight mb-6 text-foreground"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              Oude hardware?
              <br />
              <span className="text-gradient-orange">Wij halen het op.</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Wij halen uw bedrijfsapparatuur <span className="font-semibold text-foreground">gratis</span> op. Onze
              vergoeding zit in de restwaarde van de hardware, niet bij u. Inclusief{" "}
              <span className="font-semibold text-foreground">veilige datawissing</span> met bewijs per apparaat.
              Voor MKB in Zuid- en Midden-Limburg.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="btn-hover inline-flex items-center gap-2 min-h-[44px] px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-base shadow-[0_20px_60px_-15px_hsl(25_100%_50%_/_0.55)]"
              >
                Plan gratis ophaling <ArrowRight size={18} />
              </Link>
              <Link
                to="/werkwijze"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-7 py-4 rounded-full border border-border bg-white/70 text-muted-foreground font-medium hover:border-primary/40 hover:text-primary transition-all duration-200 text-base backdrop-blur-sm"
              >
                Bekijk werkwijze <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-2 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-white text-xs font-medium text-foreground/70 shadow-sm"
                >
                  <CheckCircle size={11} className="text-primary flex-shrink-0" aria-hidden />
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: foto opgehaalde hardware */}
          <motion.div
            className="hidden lg:flex justify-center items-center relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg">
              <img
                src={opgehaaldImg}
                alt="Opgehaalde bedrijfshardware: computers, laptops en monitoren klaar voor verwerking"
                className="w-full h-auto rounded-2xl shadow-[0_24px_80px_-16px_rgba(0,0,0,0.22)]"
                draggable={false}
              />

              {/* Floating trust pill */}
              <motion.div
                className="absolute -top-3 -right-3 bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.15)] border border-border flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: "transform" }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Recycle size={18} className="text-primary" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">100% Gratis</p>
                  <p className="text-[11px] text-muted-foreground leading-tight">Geen verborgen kosten</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
