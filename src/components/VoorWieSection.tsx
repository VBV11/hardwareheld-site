import { motion } from "framer-motion";

const bedrijfstypes = [
  "Kantoren",
  "Praktijken",
  "Winkels",
  "Productiebedrijven",
  "Werkplaatsen",
  "Bouwbedrijven",
  "Installatiebedrijven",
  "Transportbedrijven",
  "Horecazaken",
  "Autobedrijven",
  "Administratiekantoren",
  "Tandartspraktijken",
  "Notariskantoren",
  "Accountantskantoren",
  "Adviesbureaus",
  "Architectenbureaus",
  "Makelaars",
  "Reclamebureaus",
  "Webshops",
  "Zzp'ers",
];

const VoorWieSection = () => {
  return (
    <section id="voor-wie" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
            Voor wie
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-4">
            Voor welk bedrijf?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto text-center">
            <span className="font-bold text-foreground">Elk bedrijf met oude hardware.</span> Van kantoor en werkplaats tot praktijk, winkel of bouwbedrijf, en ook als zzp'er: wij halen het op.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center mt-4">
            Eén laptop of twintig werkplekken: er is geen minimum en wij komen altijd langs.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-4xl mx-auto mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15 }}
        >
          {bedrijfstypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-card border border-border/60 text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              {type}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VoorWieSection;
