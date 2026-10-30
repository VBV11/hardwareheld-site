import { Check } from "lucide-react";
import AanmeldFormulier from "./AanmeldFormulier";

const zekerheden = [
  "Wij reageren binnen 1 werkdag",
  "Ophalen én datawissen is altijd gratis",
  "U ontvangt een wisbevestiging per apparaat",
];

const AanmeldSection = () => {
  return (
    <section id="aanmelden" className="bg-muted py-16 md:py-24">
      <div className="container grid gap-x-16 gap-y-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="kop-sectie">Vraag gratis ophalen aan</h2>
            <p className="mt-3 max-w-prose text-muted-foreground">Voor bedrijven in Zuid- en Midden-Limburg.</p>
            <ul className="mt-5 space-y-2">
              {zekerheden.map((z) => (
                <li key={z} className="flex items-start gap-2.5 leading-snug">
                  <Check size={17} strokeWidth={2.5} className="mt-0.5 flex-shrink-0 text-inkt" aria-hidden />
                  {z}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="min-w-0 rounded-xl border border-border bg-card p-5 md:p-8 lg:col-span-8">
          <AanmeldFormulier />
        </div>
      </div>
    </section>
  );
};

export default AanmeldSection;
