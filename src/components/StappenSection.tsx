import { Link } from "react-router-dom";
import Sectie from "./Sectie";
import Stappen from "./Stappen";

const stappen = [
  {
    titel: "U neemt contact op",
    tekst:
      "U stuurt een bericht via het formulier of per e-mail. U krijgt persoonlijk antwoord van uw vaste contactpersoon, geen callcenter, geen wachtrij.",
  },
  {
    titel: "Wij halen alles op",
    tekst:
      "Wij plannen doorgaans binnen 2 à 3 werkdagen een ophaalmoment in. U hoeft niets in te pakken of klaar te zetten.",
  },
  {
    titel: "U krijgt het bewijs",
    tekst:
      "Binnen 14 dagen ontvangt u per e-mail een overzicht per apparaat, met serienummer, datum en gebruikte wissoftware.",
  },
];

const StappenSection = () => (
  <Sectie
    id="zo-werkt-het"
    titel="Zo werkt het"
    intro="U meldt zich, wij regelen de rest. Of u nu één laptop heeft of twintig werkplekken: wij komen langs en het ophalen is gratis."
    actie={
      <Link to="/werkwijze/gratis-ophalen" className="tekstlink">
        Bekijk de volledige werkwijze
      </Link>
    }
  >
    <Stappen stappen={stappen} />
  </Sectie>
);

export default StappenSection;
