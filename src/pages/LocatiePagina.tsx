import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, FileCheck, Monitor, Laptop, Tv, Network, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { getStad } from "@/data/steden";

const apparaten = [
  { icon: Monitor, title: "Computers", desc: "Towers, mini-PC's, workstations" },
  { icon: Laptop, title: "Laptops", desc: "Bedrijfslaptops en notebooks" },
  { icon: Tv, title: "Monitoren", desc: "Alle maten en merken" },
  { icon: Network, title: "Netwerkapparatuur", desc: "Switches, routers, accesspoints" },
];

const voordelen = [
  { icon: Truck, title: "Gratis ophalen", desc: "Geen voorrijkosten, geen minimum" },
  { icon: ShieldCheck, title: "Veilige datawissing", desc: "Professionele wissoftware inbegrepen" },
  { icon: FileCheck, title: "Bevestiging per apparaat", desc: "PDF per e-mail met serienummer en datum" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 20 } },
};
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const LocatiePagina = () => {
  const { stad: slug } = useParams<{ stad: string }>();
  const stad = getStad(slug ?? "");

  if (!stad) return <Navigate to="/not-found" replace />;

  const buurt = stad.buurtgemeenten.slice(0, 3).join(", ");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Gratis ophalen bedrijfshardware ${stad.naam}`,
    "description": `Gratis ophalen van oude bedrijfshardware in ${stad.naam} en omgeving. Inclusief professionele datawissing met PDF-bevestiging per apparaat.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Hardware Held",
      "email": "info@hardwareheld.nl",
      "url": "https://hardwareheld.nl",
      "image": "https://hardwareheld.nl/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sittard-Geleen",
        "addressRegion": "Limburg",
        "addressCountry": "NL",
      },
    },
    "areaServed": [
      { "@type": "City", "name": stad.naam },
      ...stad.buurtgemeenten.map((g) => ({ "@type": "City", "name": g })),
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Gratis ophalen inclusief datawissing",
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`Gratis ophalen bedrijfshardware ${stad.naam} | Hardware Held`}
        description={`Gratis ophalen van oude bedrijfshardware in ${stad.naam}. Hardware Held haalt computers, laptops, monitoren en netwerkapparatuur kosteloos op in ${stad.naam} en omgeving. Inclusief veilige datawissing met bevestiging per apparaat.`}
        canonical={`https://hardwareheld.nl/ophalen/${stad.slug}`}
        keywords={`hardware ophalen ${stad.naam}, computers inleveren ${stad.naam}, laptops afvoeren ${stad.naam}, datawissing ${stad.naam}, bedrijfshardware ${stad.regio}`}
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 bg-background overflow-hidden">
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              <MapPin size={12} aria-hidden /> {stad.regio}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
              Gratis ophalen bedrijfshardware {stad.naam}
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Heeft uw bedrijf in {stad.naam} oude computers, laptops of netwerkapparatuur die mag worden afgevoerd?
              Hardware Held haalt gratis op, inclusief veilige datawissing en een bevestiging per apparaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/aanmelden"
                className="btn-hover inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.5)] text-sm"
              >
                Gratis ophalen aanvragen in {stad.naam} <ArrowRight size={16} />
              </Link>
              <Link
                to="/werkwijze/gratis-ophalen"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-3.5 rounded-full border border-border bg-background text-muted-foreground font-medium hover:border-primary/40 hover:text-primary transition-all duration-200 text-sm"
              >
                Bekijk werkwijze
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wat nemen wij aan + Wat krijgt u */}
      <section className="relative py-14 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

            <div>
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
                  Wat nemen wij aan in {stad.naam}?
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
                    className="p-5 rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.18)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <a.icon className="text-primary" size={20} aria-hidden />
                    </div>
                    <h3 className="font-heading text-base font-bold mb-1">{a.title}</h3>
                    <p className="text-muted-foreground text-sm">{a.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

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
                {voordelen.map((v) => (
                  <motion.div
                    key={v.title}
                    variants={cardVariants}
                    style={{ willChange: "transform" }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.18)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <v.icon className="text-primary" size={20} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold mb-0.5">{v.title}</h3>
                      <p className="text-muted-foreground text-sm">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Werkgebied context */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="p-6 rounded-2xl bg-primary/[0.04] border border-primary/20"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} aria-hidden />
              </div>
              <h2 className="font-heading text-xl font-bold pt-1.5">
                Ophaalservice in {stad.naam} en omgeving
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Hardware Held is actief in heel {stad.regio}. Naast {stad.naam} rijden wij ook naar{" "}
              {buurt} en andere gemeenten in de regio. Er zijn geen reiskosten en geen minimumhoeveelheid:
              of u nu één apparaat heeft of een volledige serverruimte wilt laten leeghalen.
            </p>
            <Link
              to="/aanmelden"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              Ophaling aanvragen <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default LocatiePagina;
