import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import { Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact: ophaling of datawissing aanvragen | Hardware Held"
        description="Vraag een gratis ophaling of datawissing op locatie aan in Zuid- en Midden-Limburg. Reactie binnen 24 uur via e-mail of WhatsApp."
        canonical="https://hardwareheld.nl/contact"
        keywords="contact Hardware Held, hardware ophalen aanvragen, datawissing aanvragen, ophaalservice Limburg contact"
      />
      <Navbar />

      <section className="relative pt-28 pb-12 bg-background overflow-hidden">
        {/* Decorative glow */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        />

        <div className="container max-w-3xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Contact
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Neem contact op
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Plan een gratis ophaalmoment of vraag datawissing op locatie aan. Wij reageren binnen 24 uur.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-14 md:pb-20 bg-background overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          {/* Contact grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <a
              href="mailto:info@hardwareheld.nl"
              style={{ willChange: "transform" }}
              className="group flex flex-col p-6 rounded-2xl border-2 border-primary/30 bg-primary/[0.04] shadow-sm min-h-[44px]
                transition-all duration-200 hover:-translate-y-1
                hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, hsl(25 100% 50% / 0.15), hsl(35 100% 55% / 0.20))" }}
              >
                <Mail size={24} className="text-primary" aria-hidden />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                E-mail
              </span>
              <span className="font-heading text-lg font-bold text-foreground mb-3">
                info@hardwareheld.nl
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Stuur een e-mail <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>

            <a
              href="https://wa.me/31683373852?text=Hallo%20Hardware%20Held%2C%20ik%20heb%20oude%20bedrijfshardware%20die%20opgehaald%20mag%20worden."
              target="_blank"
              rel="noopener noreferrer"
              style={{ willChange: "transform" }}
              className="group flex flex-col p-6 rounded-2xl border border-border bg-card shadow-sm min-h-[44px]
                transition-all duration-200 hover:-translate-y-1 hover:border-primary/30
                hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-primary" aria-hidden />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">
                WhatsApp
              </span>
              <span className="font-heading text-lg font-bold text-foreground mb-3">
                06 8337 3852
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                App ons via WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>

          {/* Wat vermelden? */}
          <motion.div
            className="mt-6 p-6 rounded-2xl bg-card border border-border shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-heading text-lg font-bold mb-2">Wat vermelden?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Vermeld kort hoeveel apparaten het betreft, welke soort (computers, laptops, monitoren, netwerkapparatuur), uw bedrijfsnaam en locatie. Meer details mogen, maar hoeven niet.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-3">
              Daarna reageren wij binnen 24 uur met een voorstel voor gratis ophalen of datawissing op locatie, en plannen wij samen een moment dat u uitkomt.
            </p>
          </motion.div>

          {/* Location */}
          <motion.p
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.15 }}
          >
            <MapPin size={16} className="text-primary" aria-hidden />
            Sittard-Geleen, Limburg
          </motion.p>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
