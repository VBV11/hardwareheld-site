import { ShieldCheck, FileCheck2, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, label: "100% gratis ophalen", sub: "Geen voorrijkosten" },
  { icon: FileCheck2, label: "Wisbevestiging", sub: "Per apparaat, gegarandeerd" },
  { icon: Clock, label: "Reactie binnen 1 werkdag", sub: "Ook in het weekend" },
  { icon: MapPin, label: "Lokaal in Limburg", sub: "Eén vast contactpersoon" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon size={20} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
