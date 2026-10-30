import type { LucideIcon } from "lucide-react";

interface Voordeel {
  icon: LucideIcon;
  titel: string;
  tekst: string;
}

// Rijen met pictogram, voor opsommingen die geen volgorde hebben.
const Voordelen = ({ items }: { items: Voordeel[] }) => (
  <ul className="border-t-2 border-foreground">
    {items.map((item) => (
      <li
        key={item.titel}
        className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 border-b border-border/80 py-5 md:gap-x-6"
      >
        <item.icon size={24} className="mt-0.5 text-foreground" strokeWidth={1.75} aria-hidden />
        <div>
          <h3 className="kop-blok">{item.titel}</h3>
          <p className="mt-1 max-w-prose text-muted-foreground">{item.tekst}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default Voordelen;
