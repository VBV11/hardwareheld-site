import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import { HardDrive, Laptop, Monitor, Network, Server, Mail } from "lucide-react";

const categories = [
  {
    id: "computers",
    icon: HardDrive,
    title: "Computers",
    items: [
      { label: "Wat valt eronder", text: "Towers, mini PC's, small form factor PC's, all-in-ones, workstations, thin clients." },
      { label: "Welke merken", text: "Alle merken, waaronder Dell, HP, Lenovo, ASUS, Acer, Fujitsu, MSI, en zelfgebouwde systemen." },
      { label: "Werkend of defect", text: "Beide. Defecte computers worden verantwoord gerecycled, werkende computers krijgen na datawissing een tweede leven." },
      { label: "Met of zonder onderdelen", text: "Wij nemen ze aan met of zonder harde schijf, met of zonder geheugen. Heeft u losse onderdelen liggen? Vraag het ons." },
    ],
  },
  {
    id: "laptops",
    icon: Laptop,
    title: "Laptops",
    items: [
      { label: "Wat valt eronder", text: "Bedrijfslaptops, notebooks, ultrabooks, 2-in-1 laptops, mobiele werkstations." },
      { label: "Welke merken", text: "Alle gangbare Windows-laptops, waaronder Dell Latitude, HP EliteBook en ProBook, Lenovo ThinkPad, ASUS, Acer en Microsoft Surface." },
      { label: "Werkend of defect", text: "Beide. Wij halen ook laptops op met kapot scherm, defect toetsenbord, of zonder werkende accu." },
      { label: "Met of zonder accessoires", text: "Opladers en docking stations mogen mee, hoeven niet." },
    ],
  },
  {
    id: "monitoren",
    icon: Monitor,
    title: "Monitoren",
    items: [
      { label: "Wat valt eronder", text: "Alle zakelijke beeldschermen, ongeacht maat en techniek. LCD, LED, ultrawide en gewone schermen." },
      { label: "Welke merken", text: "Alle merken, waaronder Dell, HP, BenQ, Iiyama, ASUS, LG, Samsung, Philips, AOC en Eizo." },
      { label: "Werkend of defect", text: "Beide. Werkende monitoren worden hergebruikt, defecte monitoren worden verantwoord gerecycled." },
      { label: "Met of zonder kabels", text: "Voedingskabels en displaykabels mogen mee, hoeven niet." },
    ],
  },
  {
    id: "netwerkapparatuur",
    icon: Network,
    title: "Netwerkapparatuur",
    items: [
      { label: "Wat valt eronder", text: "Switches, routers, accesspoints, firewalls, patchpanelen en kabels in bulk." },
      { label: "Welke merken", text: "Alle merken, waaronder Cisco, HPE Aruba, Ubiquiti, MikroTik, Fortinet, Netgear, TP-Link, Zyxel en Draytek." },
      { label: "Werkend of defect", text: "Beide." },
    ],
  },
  {
    id: "servers-en-nas",
    icon: Server,
    title: "Servers en NAS",
    items: [
      { label: "Wat valt eronder", text: "Tower-servers, kleinere rackservers, NAS-systemen en storage devices." },
      { label: "Welke merken", text: "Alle merken, waaronder Dell PowerEdge, HP ProLiant, Lenovo ThinkSystem, Synology, QNAP en zelfgebouwde systemen." },
      { label: "Werkend of defect", text: "Beide." },
      { label: "Datawissing per geval", text: "Bij servers en NAS hangt de manier van wissen af van het type schijf en de opslagopstelling. Daarom bekijken wij deze apparaten eerst per geval. Stuur een foto van het apparaat en, als u erbij kunt, van de schijven. Wij laten u dan weten wat mogelijk is en hoe wij de wissing of vernietiging aanpakken." },
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

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hardwareheld.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Wat wij aannemen", "item": "https://hardwareheld.nl/wat-wij-aannemen" },
  ],
};

const WatWijAannemen = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Welke hardware nemen wij aan? | Hardware Held"
        description="Wij nemen alle gangbare bedrijfshardware aan: computers, laptops, monitoren en netwerkapparatuur. Werkend of defect, alle merken. Gratis ophalen in Limburg."
        canonical="https://hardwareheld.nl/wat-wij-aannemen"
        keywords="welke hardware inleveren, computers inleveren bedrijf, oude laptops afvoeren, monitoren recyclen, netwerkapparatuur inleveren, defecte hardware ophalen"
        structuredData={breadcrumb}
      />
      <Navbar />
      <main>
        <PageHero
          kruimels={[{ naam: "Wat wij aannemen" }]}
          titel="Welke hardware nemen wij aan?"
          intro="Wij halen alle gangbare zakelijke Windows- en netwerkhardware op. Werkend of defect, oud of jong: het mag allemaal mee."
        >
          <nav aria-label="Op deze pagina">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`} className="tekstlink">
                    {cat.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#niet-aan" className="tekstlink">
                  Wat wij niet aannemen
                </a>
              </li>
            </ul>
          </nav>
        </PageHero>

        <section className="py-10 md:py-16">
          <div className="container">
            {categories.map((cat, i) => (
              <article
                key={cat.id}
                id={cat.id}
                className={`grid gap-x-10 gap-y-4 border-t-2 border-foreground py-8 md:py-10 lg:grid-cols-12 ${
                  i === categories.length - 1 ? "border-b-2" : ""
                }`}
              >
                <div className="min-w-0 lg:col-span-4">
                  <cat.icon size={30} strokeWidth={1.75} aria-hidden />
                  <h2 className="mt-3 break-words font-heading text-2xl font-extrabold leading-tight xl:text-[1.75rem]">
                    {cat.title}
                  </h2>
                </div>
                <dl className="min-w-0 lg:col-span-8">
                  {cat.items.map((item) => (
                    <div
                      key={item.label}
                      className="grid gap-x-6 border-b border-border py-3 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[11rem_minmax(0,1fr)]"
                    >
                      <dt className="font-semibold">{item.label}</dt>
                      <dd className="text-muted-foreground">{item.text}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <Sectie
          id="niet-aan"
          toon="grijs"
          titel="Wat nemen wij niet aan"
          intro="Niet alle apparatuur past binnen onze werkwijze. Voor onderstaande zaken kunt u beter terecht bij een gespecialiseerde verwerker."
        >
          <ul className="grid gap-x-10 border-t-2 border-foreground sm:grid-cols-2">
            {nietAan.map((item) => (
              <li key={item.title} className="border-b border-border/80 py-5">
                <h3 className="kop-blok">{item.title}</h3>
                <p className="mt-1.5 text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Sectie>

        <Sectie titel="Twijfelt u of uw apparatuur in aanmerking komt?">
          <div className="border-t-2 border-foreground pt-5">
            <p className="max-w-prose">
              Stuur een foto per e-mail en u krijgt binnen 1 werkdag antwoord. Wij denken graag mee. Heeft u een grote
              partij hardware die u in één keer wilt afvoeren? Laat het weten, dan plannen wij een ophaalmoment in dat
              past.
            </p>
            <a href="mailto:info@hardwareheld.nl" className="knop knop-donker mt-6">
              <Mail size={18} aria-hidden /> Stuur een foto per e-mail
            </a>
          </div>
        </Sectie>

        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default WatWijAannemen;
