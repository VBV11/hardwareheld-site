import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wat kost het ophalen van oude bedrijfshardware?",
    a: "Het ophalen is volledig gratis. Wij rekenen geen voorrijkosten en geen kosten per apparaat. De veilige datawissing is bij het ophalen inbegrepen.",
  },
  {
    q: "Hoe veilig is de datawissing?",
    a: "Wij wissen elke gegevensdrager met professionele wissoftware. Binnen 14 dagen na ophaling ontvangt u per e-mail een PDF-bevestiging per apparaat, met serienummer, datum en gebruikte software.",
  },
  {
    q: "In welk gebied halen jullie op?",
    a: "Wij halen gratis op in heel Zuid- en Midden-Limburg, waaronder Sittard-Geleen, Maastricht, Heerlen, Roermond, Weert, Echt-Susteren, Maasgouw, Leudal, Nederweert en omliggende gemeenten.",
  },
  {
    q: "Welke hardware nemen jullie aan?",
    a: "Wij nemen alle zakelijke computers, laptops, monitoren en netwerkapparatuur aan. Twijfelt u of uw apparatuur in aanmerking komt? Stuur een foto via e-mail of WhatsApp en u krijgt binnen 24 uur antwoord.",
  },
  {
    q: "Wat doen jullie met de hardware na het ophalen?",
    a: "Bruikbare apparatuur wordt na de datawissing opgeknapt en krijgt een tweede leven. Apparatuur die niet meer functioneert wordt op een verantwoorde manier gerecycled.",
  },
  {
    q: "Hoe snel kunnen jullie langskomen?",
    a: "In de meeste gevallen plannen wij binnen 2 à 3 werkdagen een ophaalmoment in. Heeft u haast? Geef dat aan in uw bericht en wij doen ons best om eerder langs te komen.",
  },
  {
    q: "Moet ik de computers eerst zelf wissen?",
    a: "Nee, dat hoeft niet. Wij wissen de gegevens voor u en sturen binnen 14 dagen per e-mail een PDF-bevestiging per apparaat met serienummer, datum en gebruikte software.",
  },
  {
    q: "Werken jullie ook voor zzp'ers en kleine bedrijven?",
    a: "Ja. Wij werken voor elk bedrijf met oude hardware, van zzp'er tot organisatie met tientallen werkplekken. Er is geen minimum aantal apparaten.",
  },
  {
    q: "Hoe verschilt jullie aanpak van een kringloop of recycler?",
    a: "Bij Hardware Held ontvangt u per e-mail een PDF-bevestiging van de datawissing per apparaat, met serienummer, datum en gebruikte software. Veel inleverpunten geven die zekerheid niet.",
  },
  {
    q: "Wat is datawissing op locatie en wanneer kies ik daarvoor?",
    a: "Bij datawissing op locatie komen wij naar u toe en wissen wij de gegevens terwijl de apparatuur in uw pand blijft. Dat kiest u wanneer u de hardware zelf wilt houden of weggooien, maar wel zekerheid wilt over de wissing. Hiervoor geldt een vast tarief, zonder minimum.",
  },
  {
    q: "Moet ik iets ondertekenen?",
    a: "Bij de ophaling tekent u een eenvoudig overdrachtsformulier. Hierop staat welke apparaten u overdraagt, en u verklaart dat u eigenaar bent. Het is geen abonnement of doorlopend contract, alleen een eenmalige bevestiging van de overdracht.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container max-w-3xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-primary/[0.08] border border-primary/15">
            FAQ
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12 md:mb-14">
            Antwoord op de vragen die wij het vaakst krijgen.
          </p>
        </motion.div>

        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <AccordionItem value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-heading text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
