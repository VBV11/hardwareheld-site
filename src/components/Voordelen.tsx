import type { LucideIcon } from "lucide-react";

interface Voordeel {
  icon: LucideIcon;
  titel: string;
  tekst: string;
}

// Opsomming met pictogram, voor punten die geen volgorde hebben.
const Voordelen = ({ items }: { items: Voordeel[] }) => (
  <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item.titel} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4">
        <span className="tegel">
          <item.icon size={20} strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <h3 className="kop-blok">{item.titel}</h3>
          <p className="mt-1 text-muted-foreground">{item.tekst}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default Voordelen;
