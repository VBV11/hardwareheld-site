import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import logo from "@/assets/logo.png";

const regels = [
  { apparaat: "Dell OptiPlex 3040", serienummer: "7XK2LM3" },
  { apparaat: "HP EliteBook 840", serienummer: "5CG8214QTR" },
  { apparaat: "Lenovo ThinkPad T480", serienummer: "PF1A9ZQD" },
  { apparaat: "Dell Latitude 5490", serienummer: "3HN4W12" },
];

// Voorbeeld van de bevestiging die klanten krijgen. De regels springen één
// voor één op "Gewist" zodra het vel in beeld komt.
const WisBevestiging = () => {
  const vel = useRef<HTMLDivElement>(null);
  const inBeeld = useInView(vel, { once: true, margin: "-100px" });
  const rustig = useReducedMotion();
  const [gewist, setGewist] = useState(0);

  useEffect(() => {
    if (!inBeeld || rustig) return;
    const timers = regels.map((_, i) => window.setTimeout(() => setGewist(i + 1), 450 + i * 600));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inBeeld, rustig]);

  const aantalGewist = rustig ? regels.length : gewist;

  return (
    <div ref={vel} className="rounded-sm bg-white p-5 text-foreground md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-heading text-xl font-extrabold leading-tight">Bevestiging datawissing</p>
          <p className="mt-1 text-[0.9375rem] text-muted-foreground">Voorbeeld van wat u per e-mail ontvangt</p>
        </div>
        <img src={logo} alt="" width={92} height={24} className="mt-1 h-6 w-auto flex-shrink-0" />
      </div>

      <table className="mt-6 w-full border-t-2 border-foreground text-left text-[0.9375rem]">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="py-2 pr-3 font-semibold">Apparaat</th>
            <th scope="col" className="hidden py-2 pr-3 font-semibold sm:table-cell">Datum</th>
            <th scope="col" className="py-2 text-right font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {regels.map((regel, i) => {
            const isGewist = i < aantalGewist;
            return (
              <tr key={regel.serienummer} className="border-b border-border">
                <td className="py-2.5 pr-3">
                  <span className="block font-medium">{regel.apparaat}</span>
                  <span className="block text-sm tabular-nums text-muted-foreground">
                    Serienummer {regel.serienummer}
                  </span>
                </td>
                <td className="hidden py-2.5 pr-3 tabular-nums sm:table-cell">14-10-2026</td>
                <td className="py-2.5 text-right">
                  <span
                    className={`inline-flex items-center gap-1.5 font-semibold transition-colors duration-200 ${
                      isGewist ? "text-led" : "text-muted-foreground"
                    }`}
                  >
                    {isGewist ? (
                      <>
                        <Check size={16} strokeWidth={3} aria-hidden /> Gewist
                      </>
                    ) : (
                      "Bezig"
                    )}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="mt-4 text-sm text-muted-foreground">
        Per apparaat staan het serienummer, de datum en de gebruikte wissoftware vermeld.
      </p>
    </div>
  );
};

export default WisBevestiging;
