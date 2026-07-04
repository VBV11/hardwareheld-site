import { Truck, ShieldCheck, MapPin, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    num: "01",
    icon: Truck,
    title: "Gratis ophalen",
    description:
      "Wij komen op afspraak langs en nemen alle oude apparatuur mee. Geen voorrijkosten, geen kosten per apparaat, voor elk bedrijf in Zuid- en Midden-Limburg.",
    href: "/werkwijze/gratis-ophalen",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Veilige datawissing",
    description:
      "Alle data wordt met professionele wissoftware verwijderd. U krijgt per apparaat een overzicht met datum en serienummer.",
    href: "/werkwijze/gratis-ophalen",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Lokaal en persoonlijk",
    description:
      "Wij zijn een lokaal bedrijf uit Sittard-Geleen. U heeft één contactpersoon en korte lijnen.",
    href: "/over-ons",
  },
  {
    num: "04",
    icon: HardDrive,
    title: "Datawissing op locatie",
    description:
      "Wilt u de hardware zelf houden? Wij wissen ter plekke in uw pand. Geen transport nodig.",
    href: "/werkwijze/datawissing-op-locatie",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.035] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(25 100% 50%), transparent 70%)",
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
            Waarom Hardware Held?
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Eenvoudig. Betrouwbaar. Lokaal.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Geen tussenpartijen, geen kleine lettertjes. Gewoon ophalen, wissen en bevestigen.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={cardVariants} style={{ willChange: "transform" }}>
              <Link
                to={f.href}
                className="group relative flex flex-col h-full p-6 rounded-2xl border border-border bg-card shadow-sm overflow-hidden
                  transition-all duration-200
                  hover:-translate-y-1.5
                  hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]
                  hover:border-primary/25"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                />

                {/* Number badge */}
                <span className="absolute top-5 right-5 font-heading text-[10px] font-bold text-primary/25 tracking-widest group-hover:text-primary/50 transition-colors duration-200">
                  {f.num}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, hsl(25 100% 50% / 0.12), hsl(35 100% 55% / 0.18))",
                  }}
                >
                  <f.icon
                    className="text-primary transition-transform duration-200 group-hover:scale-110"
                    size={22}
                    aria-hidden
                  />
                </div>

                <h3 className="font-heading text-lg font-bold mb-2.5 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{f.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
