import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Sectie from "./Sectie";

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
    a: "Wij nemen alle zakelijke computers, laptops, monitoren en netwerkapparatuur aan. Twijfelt u of uw apparatuur in aanmerking komt? Stuur een foto per e-mail en u krijgt binnen 1 werkdag antwoord.",
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
    <Sectie
      id="faq"
      titel="Veelgestelde vragen"
      intro="Antwoord op de vragen die wij het vaakst krijgen."
      actie={
        <Link to="/contact" className="tekstlink">
          Staat uw vraag er niet bij?
        </Link>
      }
    >
      <Accordion type="multiple" className="w-full border-t-2 border-foreground">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`item-${i}`}>
            <AccordionTrigger className="gap-4 py-5 text-left font-heading text-lg font-bold leading-snug hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="max-w-prose pb-5 text-base leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Sectie>
  );
};

export default FaqSection;
