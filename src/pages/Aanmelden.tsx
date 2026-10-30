import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import AanmeldFormulier from "@/components/AanmeldFormulier";
import { Check } from "lucide-react";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Gratis ophalen aanvragen", "item": "https://hardwareheld.nl/aanmelden" },
  ],
};

const zekerheden = [
  "Wij reageren binnen 1 werkdag",
  "Ophalen én datawissen is altijd gratis",
  "U ontvangt een wisbevestiging per apparaat",
];

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
      <main>
        <PageHero
          kruimels={[{ naam: "Gratis ophalen aanvragen" }]}
          titel="Gratis ophalen aanvragen"
          intro="Voor bedrijven in Zuid- en Midden-Limburg."
        />

        <section className="py-10 md:py-16">
          <div className="container grid gap-x-16 gap-y-8 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <AanmeldFormulier />
            </div>
            <aside className="lg:col-span-4 lg:row-start-1 lg:col-start-9">
              <div className="border-t-2 border-foreground pt-4 lg:sticky lg:top-28">
                <h2 className="kop-blok">Wat u mag verwachten</h2>
                <ul className="mt-3 space-y-2">
                  {zekerheden.map((z) => (
                    <li key={z} className="flex items-start gap-2.5 leading-snug">
                      <Check size={18} strokeWidth={3} className="mt-0.5 flex-shrink-0 text-led" aria-hidden />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
