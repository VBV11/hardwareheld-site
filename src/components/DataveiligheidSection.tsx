import { motion } from "framer-motion";
import { X, Check, FileCheck2 } from "lucide-react";
import schrijvenImg from "@/assets/schrijven.png";

const vergelijking = [
  {
    label: "Kringloop of milieustraat",
    items: [
      "Vaak niet of slecht gewist",
      "Geen bewijs per apparaat",
      "U weet niet waar uw schijven belanden",
    ],
    ok: false,
  },
  {
    label: "Hardware Held",
    items: [
      "Alle schijven gewist met professionele wissoftware",
      "Bevestiging per apparaat met serienummer en datum",
      "U heeft zwart op wit dat de data verdwenen is",
    ],
    ok: true,
  },
];

const stappen = [
  { num: "1", tekst: "Wij halen de hardware bij u op" },
  { num: "2", tekst: "Elke schijf wordt gewist met professionele software" },
  {
    num: "3",
    tekst: "U ontvangt per apparaat een bevestiging: serienummer, datum en gebruikte software",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const DataveiligheidSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#0d0d0d] overflow-hidden">
      {/* Subtle orange glow top-left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 0%, hsl(25 100% 55%), transparent 65%)" }}
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
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            Dataveiligheid
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Niet "wij wissen het wel."
            <br />
            <span className="text-gradient-orange">U ziet het zwart op wit.</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto">
            Het verschil tussen Hardware Held en uw oude hardware ergens inleveren: u krijgt het zwart op wit.
          </p>
        </motion.div>

        {/* Vergelijking */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 mb-14 max-w-3xl mx-auto"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {vergelijking.map((v) => (
            <motion.div
              key={v.label}
              variants={itemVariants}
              style={{ willChange: "transform" }}
              className={`rounded-2xl p-5 border ${
                v.ok ? "bg-primary/[0.08] border-primary/25" : "bg-white/[0.03] border-white/[0.08]"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                  v.ok ? "text-primary" : "text-white/35"
                }`}
              >
                {v.label}
              </p>
              <ul className="space-y-3">
                {v.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                        v.ok ? "bg-primary/20" : "bg-white/[0.08]"
                      }`}
                    >
                      {v.ok ? (
                        <Check size={11} className="text-primary" aria-hidden />
                      ) : (
                        <X size={11} className="text-white/35" aria-hidden />
                      )}
                    </span>
                    <span className={`text-sm leading-snug ${v.ok ? "text-white/80" : "text-white/35"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 3 stappen proof process + foto */}
        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-[1fr_200px] gap-10 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileCheck2 size={18} className="text-primary" aria-hidden />
              <p className="text-sm font-semibold text-white/70 uppercase tracking-widest">
                Zo werkt de bevestiging
              </p>
            </div>

            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
                aria-hidden
              />

              {stappen.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="relative flex items-center gap-4 py-4"
                >
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-sm text-white"
                    style={{ background: "linear-gradient(135deg, hsl(25 100% 52%), hsl(35 100% 58%))" }}
                  >
                    {s.num}
                  </div>
                  <p className="text-white/75 text-sm leading-snug">{s.tekst}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* HDD foto */}
          <div className="hidden md:flex justify-center">
            <img
              src={schrijvenImg}
              alt="Gestapelde harde schijven, één geopend met zichtbare binnenkant"
              className="w-full max-w-[190px] h-auto drop-shadow-[0_20px_48px_rgba(0,0,0,0.65)]"
              draggable={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataveiligheidSection;
