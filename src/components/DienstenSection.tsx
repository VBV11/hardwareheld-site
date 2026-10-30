import { Link } from "react-router-dom";
import Sectie from "./Sectie";

const diensten = [
  {
    titel: "Gratis ophalen",
    keuze: "U wilt de hardware kwijt",
    tekst:
      "Wij komen op afspraak langs en nemen alle oude apparatuur mee. U hoeft niks in te pakken of te verzenden.",
    gegevens: [
      { label: "Kosten", waarde: "Volledig gratis, geen voorrijkosten" },
      { label: "Hardware", waarde: "Wij nemen de apparatuur mee" },
      { label: "Datawissing", waarde: "Inbegrepen, met bevestiging per apparaat" },
    ],
    href: "/werkwijze/gratis-ophalen",
    link: "Meer over gratis ophalen",
  },
  {
    titel: "Datawissing op locatie",
    keuze: "U wilt de hardware houden",
    tekst:
      "Wij komen bij u langs en wissen alle bedrijfsdata professioneel ter plekke. Geen transport nodig.",
    gegevens: [
      { label: "Kosten", waarde: "Vast tarief per apparaat, transparante prijs vooraf" },
      { label: "Hardware", waarde: "Blijft in uw pand" },
      { label: "Datawissing", waarde: "Ter plekke, met bevestiging per apparaat" },
    ],
    href: "/werkwijze/datawissing-op-locatie",
    link: "Meer over datawissing op locatie",
  },
];

const DienstenSection = () => (
  <Sectie
    id="diensten"
    toon="grijs"
    titel="Wilt u de hardware kwijt, of houden?"
    intro="Daar hangt onze dienst vanaf. In beide gevallen is uw data weg en heeft u het bewijs."
  >
    <div className="grid border-t-2 border-foreground md:grid-cols-2">
      {diensten.map((dienst, i) => (
        <div
          key={dienst.titel}
          className={`flex flex-col border-foreground py-6 md:py-7 ${
            i === 0 ? "border-b-2 md:border-b-0 md:border-r-2 md:pr-8" : "md:pl-8"
          }`}
        >
          <p className="font-medium text-inkt">{dienst.keuze}</p>
          <h3 className="mt-1 font-heading text-2xl font-extrabold leading-tight">{dienst.titel}</h3>
          <p className="mt-3 text-muted-foreground">{dienst.tekst}</p>
          <dl className="mt-5 flex-1 space-y-3">
            {dienst.gegevens.map((g) => (
              <div key={g.label}>
                <dt className="text-sm text-muted-foreground">{g.label}</dt>
                <dd className="font-medium leading-snug">{g.waarde}</dd>
              </div>
            ))}
          </dl>
          <Link to={dienst.href} className="tekstlink mt-6 self-start">
            {dienst.link}
          </Link>
        </div>
      ))}
    </div>
  </Sectie>
);

export default DienstenSection;
