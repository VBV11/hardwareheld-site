import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import opgehaaldImg from "@/assets/opgehaald.webp";

const feiten = [
  { label: "Ophalen", waarde: "Gratis" },
  { label: "Minimum", waarde: "Geen" },
  { label: "Reactie", waarde: "1 werkdag" },
  { label: "Bewijs", waarde: "Per apparaat" },
];

const etiket = ["Opgehaald", "Gewist", "Bevestiging verstuurd"];

// De hero is opgebouwd als een transportlabel: vakken met dikke lijnen.
const HeroSection = () => {
  return (
    <section className="overflow-hidden border-b-2 border-foreground bg-primary pt-[4.25rem] text-primary-foreground">
      <div className="container grid lg:min-h-[calc(100vh-4.25rem)] lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-8">
          <div className="flex flex-1 flex-col justify-center py-10 md:py-14 lg:pr-12">
            <h1 className="kop-hero">
              <span className="block">Oude hardware?</span>
              <span className="block">Wij halen het op.</span>
            </h1>
            <p className="inleiding mt-6 max-w-2xl">
              Wij halen uw bedrijfsapparatuur gratis op, inclusief veilige datawissing met bewijs per apparaat.
              Onze vergoeding zit in de restwaarde van de hardware, niet bij u. Voor het MKB in Zuid- en
              Midden-Limburg.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <Link to="/aanmelden" className="knop knop-donker sm:px-7">
                Gratis ophalen aanvragen <ArrowRight size={18} aria-hidden />
              </Link>
              <Link to="/werkwijze" className="font-semibold underline decoration-2 underline-offset-4">
                Bekijk de werkwijze
              </Link>
            </div>
          </div>

          <dl className="uitloop-links grid grid-cols-2 border-t-2 border-foreground max-md:-mx-5 md:grid-cols-4 md:max-lg:-mx-8">
            {feiten.map((feit, i) => (
              <div
                key={feit.label}
                className={`border-foreground px-5 py-4 md:px-8 lg:px-5 lg:first:pl-0 ${
                  i % 2 === 0 ? "border-r-2" : ""
                } ${i < 2 ? "border-b-2 md:border-b-0" : ""} ${i === 1 ? "md:border-r-2" : ""}`}
              >
                <dt className="text-[0.9375rem]">{feit.label}</dt>
                <dd className="text-xl font-extrabold leading-tight tracking-tight">{feit.waarde}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="uitloop-rechts relative h-64 border-t-2 border-foreground max-md:-mx-5 sm:h-80 md:max-lg:-mx-8 lg:col-span-4 lg:h-auto lg:border-l-2 lg:border-t-0">
          <img
            src={opgehaaldImg}
            alt="Stapel opgehaalde Dell-computers, klaar voor datawissing"
            className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
            width={900}
            height={1200}
            draggable={false}
            decoding="async"
            {...{ fetchpriority: "high" }}
          />
          <div className="absolute bottom-5 left-5 -rotate-2 rounded-sm bg-white px-4 py-3 text-foreground shadow-[0_6px_0_-1px_hsl(225_6%_13%)] lg:-left-6 lg:bottom-10">
            <ul className="space-y-1">
              {etiket.map((regel) => (
                <li key={regel} className="flex items-center gap-2 text-[0.9375rem] font-semibold">
                  <Check size={16} strokeWidth={3} className="text-led" aria-hidden />
                  {regel}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
