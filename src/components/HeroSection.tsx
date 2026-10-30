import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import opgehaaldImg from "@/assets/opgehaald.webp";

const punten = ["Geen minimum", "Reactie binnen 1 werkdag", "Bewijs per apparaat"];

const HeroSection = () => {
  return (
    <section className="pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="container grid items-center gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="kop-hero">
            <span className="block">Oude hardware?</span>
            <span className="block">Wij halen het op.</span>
          </h1>
          <p className="inleiding mt-5 max-w-xl text-muted-foreground">
            Wij halen uw bedrijfsapparatuur gratis op, inclusief veilige datawissing met bewijs per apparaat. Onze
            vergoeding zit in de restwaarde van de hardware, niet bij u. Voor het MKB in Zuid- en Midden-Limburg.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/aanmelden" className="knop knop-oranje">
              Gratis ophalen aanvragen
            </Link>
            <Link to="/werkwijze" className="knop knop-rustig">
              Bekijk de werkwijze
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] text-muted-foreground">
            {punten.map((punt) => (
              <li key={punt} className="flex items-center gap-2">
                <Check size={16} strokeWidth={2.5} className="text-inkt" aria-hidden />
                {punt}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <img
            src={opgehaaldImg}
            alt="Stapel opgehaalde Dell-computers, klaar voor datawissing"
            className="aspect-[4/3] w-full rounded-2xl object-cover object-[50%_30%] lg:aspect-[5/6]"
            width={900}
            height={1200}
            draggable={false}
            decoding="async"
            {...{ fetchpriority: "high" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
