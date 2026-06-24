import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import { ArrowRight, Truck, HardDrive, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Werkwijze", "item": "https://hardwareheld.nl/werkwijze" },
  ],
};

const Werkwijze = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Werkwijze: gratis ophalen & datawissing | Hardware Held"
        description="Zo werkt het gratis ophalen van oude bedrijfshardware en de datawissing op locatie bij Hardware Held in Limburg. Veilig, met PDF-bevestiging per apparaat."
        canonical="https://hardwareheld.nl/werkwijze"
        keywords="werkwijze hardware ophalen, datawissing op locatie, veilige datawissing bedrijf, hardware ophaalservice Limburg"
        structuredData={breadcrumb}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-background overflow-hidden">
        <div
          className="absolute top-10 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)",
          }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Werkwijze
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Zo helpen wij u
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Wij bieden twee diensten aan: gratis ophalen van uw oude hardware, of datawissing op locatie als u uw apparaten wilt houden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two service cards + decision helper */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Gratis ophalen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ willChange: "transform" }}
              className="rounded-2xl border-2 border-primary/30 bg-primary/[0.04] p-7 flex flex-col shadow-sm
                transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
            >
              <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full">
                Volledig gratis
              </span>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, hsl(25 100% 50% / 0.15), hsl(35 100% 55% / 0.20))" }}
              >
                <Truck className="text-primary" size={24} aria-hidden />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3">Gratis ophalen</h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Wij komen naar u toe en nemen uw oude bedrijfshardware mee. Volledig kosteloos, inclusief professionele datawissing. U hoeft niks in te pakken of te verzenden.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Volledig gratis", "Inclusief veilige datawissing", "Bevestiging per apparaat"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={16} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/werkwijze/gratis-ophalen"
                className="btn-hover inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg shadow-primary/25 text-sm hover:bg-primary/90 transition-colors"
              >
                Meer over gratis ophalen <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Datawissing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              style={{ willChange: "transform" }}
              className="rounded-2xl border border-border bg-card p-7 flex flex-col shadow-sm
                transition-all duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
            >
              <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-bold text-primary bg-primary/10 rounded-full">
                Vast tarief per apparaat
              </span>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "linear-gradient(135deg, hsl(25 100% 50% / 0.10), hsl(35 100% 55% / 0.14))" }}
              >
                <HardDrive className="text-primary" size={24} aria-hidden />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3">Datawissing op locatie</h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Wilt u uw hardware houden? Wij komen bij u langs en wissen alle bedrijfsdata professioneel ter plekke. U ontvangt een bevestiging per apparaat.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Vast tarief per apparaat", "U houdt uw hardware", "Met bevestiging per apparaat"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={16} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/werkwijze/datawissing-op-locatie"
                className="btn-hover inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg shadow-primary/25 text-sm hover:bg-primary/90 transition-colors"
              >
                Meer over datawissing op locatie <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Welke kiest u? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15 }}
            className="mt-6 py-10 bg-secondary/30 rounded-2xl p-6"
          >
            <h2 className="font-heading text-xl md:text-2xl font-bold text-center mb-8">Welke kiest u?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div>
                <p className="font-heading font-bold mb-3 flex items-center gap-2">
                  <Truck className="text-primary" size={18} aria-hidden /> Gratis ophalen
                </p>
                <ul className="space-y-2.5">
                  {[
                    "U wilt de hardware kwijt",
                    "Volledig kosteloos, inclusief datawissing",
                    "Wij nemen de apparatuur mee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={15} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:border-l md:border-border md:pl-6">
                <p className="font-heading font-bold mb-3 flex items-center gap-2">
                  <HardDrive className="text-primary" size={18} aria-hidden /> Datawissing op locatie
                </p>
                <ul className="space-y-2.5">
                  {[
                    "U wilt de hardware houden",
                    "Vast tarief per apparaat",
                    "Apparatuur blijft in uw pand",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={15} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Werkwijze;
