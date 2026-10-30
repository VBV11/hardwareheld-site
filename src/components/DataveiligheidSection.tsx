import { Check, X } from "lucide-react";
import WisBevestiging from "./WisBevestiging";

const vergelijking = [
  {
    kringloop: "Vaak niet of slecht gewist",
    held: "Alle schijven gewist met professionele wissoftware",
  },
  {
    kringloop: "Geen bewijs per apparaat",
    held: "Bevestiging per apparaat met serienummer en datum",
  },
  {
    kringloop: "U weet niet waar uw schijven belanden",
    held: "U heeft zwart op wit dat de data verdwenen is",
  },
];

const DataveiligheidSection = () => {
  return (
    <section id="dataveiligheid" className="bg-foreground py-14 text-white md:py-24">
      <div className="container">
        <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="kop-sectie">
              <span className="block">Niet “wij wissen het wel.”</span>
              <span className="block">U ziet het zwart op wit.</span>
            </h2>
            <p className="mt-4 max-w-prose text-white/75">
              Wij halen de hardware bij u op en wissen elke schijf met professionele software. Daarna ontvangt u het
              bewijs per e-mail: zwart op wit dat de data is verwijderd.
            </p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <WisBevestiging />
          </div>
        </div>

        <table className="mt-12 w-full table-fixed border-t-2 border-white/30 text-left md:mt-16">
          <thead>
            <tr className="border-b border-white/20">
              <th scope="col" className="py-3 pr-4 font-semibold text-white/70">Kringloop of milieustraat</th>
              <th scope="col" className="py-3 font-heading text-lg font-extrabold text-primary">Hardware Held</th>
            </tr>
          </thead>
          <tbody>
            {vergelijking.map((rij) => (
              <tr key={rij.held} className="border-b border-white/20 align-top">
                <td className="py-3.5 pr-4 text-white/70">
                  <span className="flex items-start gap-2.5">
                    <X size={18} className="mt-1 flex-shrink-0" aria-hidden />
                    {rij.kringloop}
                  </span>
                </td>
                <td className="py-3.5">
                  <span className="flex items-start gap-2.5">
                    <Check size={18} strokeWidth={3} className="mt-1 flex-shrink-0 text-primary" aria-hidden />
                    {rij.held}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataveiligheidSection;
