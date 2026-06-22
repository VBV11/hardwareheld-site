import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { HardDrive, Laptop, Monitor, Network, Server, Mail, MessageCircle } from "lucide-react";

const categories = [
  {
    icon: HardDrive,
    title: "Computers",
    items: [
      { label: "Wat valt eronder", text: "towers, mini PC's, small form factor PC's, all-in-ones, workstations, thin clients" },
      { label: "Welke merken", text: "alle merken, waaronder Dell, HP, Lenovo, ASUS, Acer, Fujitsu, MSI, en zelfgebouwde systemen" },
      { label: "Werkend of defect", text: "beide. Defecte computers worden verantwoord gerecycled, werkende computers krijgen na datawissing een tweede leven" },
      { label: "Met of zonder onderdelen", text: "wij nemen ze aan met of zonder harde schijf, met of zonder geheugen. Heeft u losse onderdelen liggen? Vraag het ons." },
    ],
  },
  {
    icon: Laptop,
    title: "Laptops",
    items: [
      { label: "Wat valt eronder", text: "bedrijfslaptops, notebooks, ultrabooks, 2-in-1 laptops, mobiele werkstations" },
      { label: "Welke merken", text: "alle gangbare Windows-laptops, waaronder Dell Latitude, HP EliteBook en ProBook, Lenovo ThinkPad, ASUS, Acer en Microsoft Surface" },
      { label: "Werkend of defect", text: "beide. Wij halen ook laptops op met kapot scherm, defect toetsenbord, of zonder werkende accu" },
      { label: "Met of zonder accessoires", text: "opladers en docking stations mogen mee, hoeven niet" },
    ],
  },
  {
    icon: Monitor,
    title: "Monitoren",
    items: [
      { label: "Wat valt eronder", text: "alle zakelijke beeldschermen, ongeacht maat en techniek. LCD, LED, ultrawide en gewone schermen" },
      { label: "Welke merken", text: "alle merken, waaronder Dell, HP, BenQ, Iiyama, ASUS, LG, Samsung, Philips, AOC en Eizo" },
      { label: "Werkend of defect", text: "beide. Werkende monitoren worden hergebruikt, defecte monitoren worden verantwoord gerecycled" },
      { label: "Met of zonder kabels", text: "voedingskabels en displaykabels mogen mee, hoeven niet" },
    ],
  },
  {
    icon: Network,
    title: "Netwerkapparatuur",
    items: [
      { label: "Wat valt eronder", text: "switches, routers, accesspoints, firewalls, patchpanelen en kabels in bulk" },
      { label: "Welke merken", text: "alle merken, waaronder Cisco, HPE Aruba, Ubiquiti, MikroTik, Fortinet, Netgear, TP-Link, Zyxel en Draytek" },
      { label: "Werkend of defect", text: "beide" },
    ],
  },
  {
    icon: Server,
    title: "Servers en NAS",
    items: [
      { label: "Wat valt eronder", text: "tower-servers, kleinere rackservers, NAS-systemen en storage devices" },
      { label: "Welke merken", text: "alle merken, waaronder Dell PowerEdge, HP ProLiant, Lenovo ThinkSystem, Synology, QNAP en zelfgebouwde systemen" },
      { label: "Werkend of defect", text: "beide" },
      { label: "Datawissing per geval", text: "bij servers en NAS hangt de manier van wissen af van het type schijf en de opslagopstelling. Daarom bekijken wij deze apparaten eerst per geval. Stuur een foto van het apparaat en, als u erbij kunt, van de schijven. Wij laten u dan weten wat mogelijk is en hoe wij de wissing of vernietiging aanpakken." },
    ],
  },
];

const nietAan = [
  {
    title: "Beeldbuis-monitoren (CRT)",
    text: "Oude beeldbuismonitoren bevatten lood en vereisen speciale recycling. Lever deze in bij uw gemeentelijke milieustraat.",
  },
  {
    title: "UPS-systemen en accu's",
    text: "UPS-systemen, losse accu's en batterijen vallen onder klein chemisch afval en vereisen aparte verwerking. Lever deze in via Stibat, een KCA-inzamelpunt of de milieustraat.",
  },
  {
    title: "Modems van internetproviders",
    text: "Modems van KPN, Ziggo, Odido of andere providers blijven hun eigendom. Stuur deze terug volgens de instructies van uw provider.",
  },
  {
    title: "Apple-apparatuur (MacBook, iMac, Mac mini)",
    text: "Apple-systemen vereisen Apple-specifieke wissing-procedures. Wij werken hier momenteel niet mee. Voor zakelijke afvoer kunt u terecht bij gespecialiseerde Apple-recyclers.",
  },
  {
    title: "Printers en multifunctionele apparaten",
    text: "Printers en kopieerapparaten bevatten toner, inkt en speciale onderdelen die wij niet verwerken. Vraag uw leverancier om een retourregeling.",
  },
  {
    title: "Witgoed, telefoons en consumentenelectronica",
    text: "Wij richten ons op zakelijke IT-apparatuur. Voor mobiele telefoons, tablets, koffieautomaten, magnetrons en ander witgoed kunt u terecht bij de Wecycle-inleverpunten.",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

const WatWijAannemen = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Welke hardware nemen wij aan? | Hardware Held"
        description="Wij nemen alle gangbare bedrijfshardware aan: computers, laptops, monitoren en netwerkapparatuur. Werkend of defect, alle merken. Gratis ophalen in Limburg."
        canonical="https://hardwareheld.nl/wat-wij-aannemen"
        keywords="welke hardware inleveren, computers inleveren bedrijf, oude laptops afvoeren, monitoren recyclen, netwerkapparatuur inleveren, defecte hardware ophalen"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-background overflow-hidden">
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{ background: "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)" }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Wat wij aannemen
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Welke hardware nemen wij aan?
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wij halen alle gangbare zakelijke Windows- en netwerkhardware op. Werkend of defect, oud of jong: het mag allemaal mee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container max-w-6xl relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Wat kunt u kwijt?
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold">
              Per categorie
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                style={{ willChange: "transform" }}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm flex flex-col
                  transition-all duration-200 hover:-translate-y-1 hover:border-primary/25
                  hover:shadow-[0_12px_40px_-12px_hsl(25_100%_50%_/_0.20)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cat.icon className="text-primary" size={24} aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-bold">{cat.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item.label} className="text-sm leading-relaxed">
                      <span className="font-semibold text-foreground">{item.label}: </span>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wat nemen wij niet aan */}
      <section className="relative py-14 bg-secondary/30 overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
              Uitzonderingen
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Wat nemen wij niet aan
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Niet alle apparatuur past binnen onze werkwijze. Voor onderstaande zaken kunt u beter terecht bij een gespecialiseerde verwerker.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {nietAan.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                style={{ willChange: "transform" }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm"
              >
                <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-muted-foreground text-sm mt-10 max-w-2xl mx-auto">
            Twijfelt u of uw apparaat onder een uitsluiting valt? Stuur een foto via e-mail of WhatsApp. Wij denken graag mee.
          </p>
        </div>
      </section>

      {/* Twijfelt u? */}
      <section className="relative py-14 md:py-20 bg-background overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-3xl mx-auto p-8 rounded-2xl border-2 border-primary/30 bg-primary/[0.04] text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Twijfelt u of uw apparatuur in aanmerking komt?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Stuur een foto via e-mail of WhatsApp en u krijgt binnen 24 uur antwoord. Wij denken graag mee. Heeft u een grote partij hardware die u in één keer wilt afvoeren? Laat het weten, dan plannen wij een ophaalmoment in dat past.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@hardwareheld.nl"
                className="btn-hover inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg shadow-primary/25"
              >
                <Mail size={18} /> Stuur een foto via e-mail
              </a>
              <a
                href="https://wa.me/31683373852?text=Hallo%20Hardware%20Held%2C%20ik%20heb%20oude%20bedrijfshardware%20die%20opgehaald%20mag%20worden."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-lg"
              >
                <MessageCircle size={18} /> App ons via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default WatWijAannemen;
