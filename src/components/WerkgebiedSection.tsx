import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import limburgMap from "@/assets/limburg.png";

const WerkgebiedSection = () => {
  return (
    <section id="werkgebied" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10">

        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
            Werkgebied
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Wij halen op in heel Zuid- en Midden-Limburg
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Gratis ophaalservice aan huis of op kantoor. Geen reiskosten, geen minimum.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[620px_auto] gap-10 lg:gap-14 items-center justify-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {/* Map */}
          <div className="w-full max-w-[560px] md:max-w-[620px] mx-auto flex-shrink-0">
            <img
              src={limburgMap}
              alt="Kaart van de provincie Limburg — werkgebied Hardware Held"
              className="w-full h-auto"
              draggable={false}
            />
          </div>

          {/* City lists + CTA */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary inline-block flex-shrink-0" aria-hidden />
                Zuid-Limburg
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Sittard-Geleen","Maastricht","Heerlen","Kerkrade","Landgraaf",
                  "Brunssum","Beek","Stein","Born","Urmond","Hoensbroek","Valkenburg",
                  "Meerssen","Beekdaelen","Eijsden-Margraten","Gulpen-Wittem",
                  "Vaals","Voerendaal","Simpelveld",
                ].map((place) => (
                  <span key={place} className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-secondary border border-border/60 text-foreground/70">
                    {place}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/50 inline-block flex-shrink-0" aria-hidden />
                Midden-Limburg
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Roermond","Weert","Echt-Susteren","Susteren",
                  "Maasgouw","Maasbracht","Leudal","Nederweert","Roerdalen",
                ].map((place) => (
                  <span key={place} className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-secondary border border-border/60 text-foreground/70">
                    {place}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-hover inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl text-sm shadow-[0_4px_20px_-4px_hsl(25_100%_50%_/_0.45)]"
            >
              Plan een ophaalmoment <ArrowRight size={16} />
            </Link>

            <p className="text-xs text-muted-foreground text-center">
              Gemeente er niet bij? Neem contact op, wij kijken wat mogelijk is.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WerkgebiedSection;
