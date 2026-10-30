import { HardDrive, Laptop, Monitor, Network } from "lucide-react";
import { Link } from "react-router-dom";
import Sectie from "./Sectie";

const categorieen = [
  { icon: HardDrive, titel: "Computers", tekst: "Towers, mini-PC's en workstations. Alle merken, werkend of defect." },
  { icon: Laptop, titel: "Laptops", tekst: "Notebooks en ultrabooks van Dell, HP, Lenovo en ASUS. Ook met kapot scherm of accu." },
  { icon: Monitor, titel: "Monitoren", tekst: "Alle maten, LCD en LED. Alle merken, werkend of defect." },
  { icon: Network, titel: "Netwerk", tekst: "Switches, routers, accesspoints en firewalls. Alle merken." },
];

const ProductsSection = () => (
  <Sectie
    id="wat-wij-aannemen"
    titel="Wat nemen wij aan?"
    intro="Werkend of defect, alle merken. Gratis ophalen in Zuid- en Midden-Limburg."
    actie={
      <Link to="/wat-wij-aannemen" className="tekstlink">
        Bekijk de volledige lijst
      </Link>
    }
  >
    <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {categorieen.map((c) => (
        <li key={c.titel}>
          <span className="tegel">
            <c.icon size={20} strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="kop-blok mt-3">{c.titel}</h3>
          <p className="mt-1 text-muted-foreground">{c.tekst}</p>
        </li>
      ))}
    </ul>
    <p className="mt-8 max-w-prose text-muted-foreground">
      Twijfelt u? Stuur een foto naar{" "}
      <a href="mailto:info@hardwareheld.nl" className="tekstlink text-foreground">
        info@hardwareheld.nl
      </a>
      . Wij laten u weten of het past.
    </p>
  </Sectie>
);

export default ProductsSection;
