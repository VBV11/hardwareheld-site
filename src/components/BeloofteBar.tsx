import { motion } from "framer-motion";

const BeloofteBar = () => {
  return (
    <section className="relative py-10 bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(25 100% 40%) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />
      <div className="container relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-heading text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2">
            Geen minimum, geen voorrijkosten, geen offerte.
          </p>
          <p className="text-base text-muted-foreground">
            Of u nu één laptop heeft of twintig werkplekken: wij komen langs en het ophalen is gratis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeloofteBar;
