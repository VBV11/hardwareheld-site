import { motion } from "framer-motion";
import { ArrowRight, HardDrive, Laptop, Monitor, Network, Check } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: HardDrive,
    title: "Computers",
    sub: "Alle soorten",
    specs: ["Towers, mini-PC's, workstations", "Alle merken", "Werkend of defect"],
  },
  {
    icon: Laptop,
    title: "Laptops",
    sub: "Bedrijfslaptops",
    specs: ["Notebooks en ultrabooks", "Dell, HP, Lenovo, ASUS", "Ook kapot scherm of accu"],
  },
  {
    icon: Monitor,
    title: "Monitoren",
    sub: "Beeldschermen",
    specs: ["Alle maten, LCD en LED", "Alle merken", "Werkend of defect"],
  },
  {
    icon: Network,
    title: "Netwerk",
    sub: "Netwerkapparatuur",
    specs: ["Switches en routers", "Accesspoints en firewalls", "Alle merken"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const ProductsSection = () => {
  return (
    <section id="wat-wij-aannemen" className="relative py-16 md:py-24 overflow-hidden bg-background">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        aria-hidden
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
            Wat wij ophalen
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Wat nemen wij aan?
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Werkend of defect, alle merken. Gratis ophalen in Zuid- en Midden-Limburg.
          </p>
        </motion.div>

        {/* 4-column grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              style={{ willChange: "transform" }}
              className="group relative flex flex-col p-5 rounded-2xl border border-border bg-card
                transition-all duration-200
                hover:-translate-y-1.5
                hover:border-primary/25
                hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.18)]"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(25 100% 50% / 0.12), hsl(35 100% 55% / 0.18))" }}
              >
                <cat.icon size={22} className="text-primary transition-transform duration-200 group-hover:scale-110" aria-hidden />
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold mb-0.5">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{cat.sub}</p>

              {/* Specs */}
              <ul className="space-y-1.5 mt-auto">
                {cat.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <Check size={12} className="text-primary flex-shrink-0 mt-[3px]" aria-hidden />
                    <span className="text-xs text-muted-foreground leading-snug">{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border border-primary/15 bg-primary/[0.04]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div>
            <p className="font-heading font-bold text-sm mb-0.5">Twijfelt u?</p>
            <p className="text-xs text-muted-foreground">Stuur een foto via e-mail of WhatsApp. Wij laten u weten of het past.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              to="/wat-wij-aannemen"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline underline-offset-4"
            >
              Volledige lijst <ArrowRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="btn-hover inline-flex items-center gap-1.5 min-h-[36px] px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg text-xs shadow-[0_4px_16px_-4px_hsl(25_100%_50%_/_0.4)]"
            >
              Neem contact op <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
