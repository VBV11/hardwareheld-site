import { Link } from "react-router-dom";
import { steden } from "@/data/steden";
import LimburgKaart from "./LimburgKaart";

const regios = ["Zuid-Limburg", "Midden-Limburg"] as const;

const bedrijfstypes =
  "kantoren, praktijken, winkels, productiebedrijven, werkplaatsen, bouwbedrijven, installatiebedrijven, transportbedrijven, horecazaken, autobedrijven, administratiekantoren, tandartspraktijken, notariskantoren, accountantskantoren, adviesbureaus, architectenbureaus, makelaars, reclamebureaus, webshops en zzp'ers";

const WerkgebiedSection = () => (
  <section id="werkgebied" className="bg-muted py-16 md:py-24">
    <div className="container grid gap-x-16 gap-y-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h2 className="kop-sectie">Wij halen op in heel Zuid- en Midden-Limburg</h2>
        <p className="mt-3 max-w-prose text-muted-foreground">
          Geen reiskosten, geen minimum. Wij zijn een lokaal bedrijf uit Sittard-Geleen: u heeft één contactpersoon en
          korte lijnen.
        </p>
        <div className="mt-8">
          <LimburgKaart />
        </div>
      </div>

      <div className="min-w-0 space-y-8 lg:col-span-8">
        {regios.map((regio) => (
          <div key={regio}>
            <h3 className="kop-blok">{regio}</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-3 lg:grid-cols-4">
              {steden
                .filter((stad) => stad.regio === regio)
                .map((stad) => (
                  <li key={stad.slug}>
                    <Link
                      to={`/ophalen/${stad.slug}`}
                      className="text-[0.9375rem] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {stad.naam}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        <p className="text-muted-foreground">
          Gemeente er niet bij?{" "}
          <Link to="/contact" className="tekstlink text-foreground">
            Neem contact op
          </Link>
          , wij kijken wat mogelijk is.
        </p>

        <div id="voor-wie" className="max-w-prose border-t border-border pt-8">
          <h3 className="kop-blok">Voor elk bedrijf met oude hardware</h3>
          <p className="mt-2 text-muted-foreground">
            Van één toestel tot een volledig kantoor vol apparatuur: wij werken voor {bedrijfstypes}.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WerkgebiedSection;
