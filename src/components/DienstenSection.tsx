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
    <div className="grid gap-5 md:grid-cols-2">
      {diensten.map((dienst) => (
        <div key={dienst.titel} className="flex flex-col rounded-xl border border-border bg-card p-6 md:p-7">
          <p className="text-sm font-medium text-inkt">{dienst.keuze}</p>
          <h3 className="mt-1 text-xl font-semibold leading-snug">{dienst.titel}</h3>
          <p className="mt-2 text-muted-foreground">{dienst.tekst}</p>
          <dl className="mt-5 flex-1 divide-y divide-border border-t border-border">
            {dienst.gegevens.map((g) => (
              <div key={g.label} className="py-2.5">
                <dt className="text-sm text-muted-foreground">{g.label}</dt>
                <dd className="leading-snug">{g.waarde}</dd>
              </div>
            ))}
          </dl>
          <Link to={dienst.href} className="tekstlink mt-4 self-start">
            {dienst.link}
          </Link>
        </div>
      ))}
    </div>
  </Sectie>
);

export default DienstenSection;
