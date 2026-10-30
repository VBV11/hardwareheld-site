import { Check, X } from "lucide-react";
import WisBevestiging from "./WisBevestiging";

const kringloop = [
  "Vaak niet of slecht gewist",
  "Geen bewijs per apparaat",
  "U weet niet waar uw schijven belanden",
];

const held = [
  "Alle schijven gewist met professionele wissoftware",
  "Bevestiging per apparaat met serienummer en datum",
  "U heeft zwart op wit dat de data verdwenen is",
];

const DataveiligheidSection = () => {
  return (
    <section id="dataveiligheid" className="py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="kop-sectie">
              <span className="block">Niet “wij wissen het wel.”</span>
              <span className="block">U ziet het zwart op wit.</span>
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Wij halen de hardware bij u op en wissen elke schijf met professionele software. Daarna ontvangt u per
              apparaat een bevestiging met serienummer, datum en gebruikte wissoftware.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <WisBevestiging />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <div className="rounded-xl bg-muted p-6 md:p-7">
            <h3 className="kop-blok">Kringloop of milieustraat</h3>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {kringloop.map((punt) => (
                <li key={punt} className="flex items-start gap-2.5">
                  <X size={17} className="mt-1 flex-shrink-0" aria-hidden />
                  {punt}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border p-6 md:p-7">
            <h3 className="kop-blok">Hardware Held</h3>
            <ul className="mt-4 space-y-2.5">
              {held.map((punt) => (
                <li key={punt} className="flex items-start gap-2.5">
                  <Check size={17} strokeWidth={2.5} className="mt-1 flex-shrink-0 text-inkt" aria-hidden />
                  {punt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataveiligheidSection;
