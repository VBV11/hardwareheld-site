import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import AanmeldFormulier from "@/components/AanmeldFormulier";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Gratis ophalen aanvragen", "item": "https://hardwareheld.nl/aanmelden" },
  ],
};

export default function Aanmelden() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gratis ophalen aanvragen Limburg | Hardware Held"
        description="Vraag gratis ophaling aan van uw bedrijfshardware in Zuid- en Midden-Limburg. Ophalen én datawissen is altijd gratis, inclusief PDF-bevestiging per apparaat."
        canonical="https://hardwareheld.nl/aanmelden"
        keywords="gratis ophalen aanvragen, hardware ophalen formulier Limburg, ICT apparatuur aanmelden, computers laten ophalen"
        structuredData={breadcrumb}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-10 bg-background overflow-hidden">
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        />
        <div className="container max-w-2xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Gratis aanmelden
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
              Meld je ICT-apparatuur aan
            </h1>
            <p className="text-muted-foreground text-lg mb-5">
              Gratis ophalen voor bedrijven in en rond Sittard-Geleen
            </p>

            {/* Trust banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/[0.06] border border-primary/15 text-sm text-foreground/80">
              <ShieldCheck size={16} className="text-primary shrink-0" />
              Ophalen én datawissen is altijd gratis. Je ontvangt een wisbevestiging per apparaat.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 bg-background">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <AanmeldFormulier />
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
