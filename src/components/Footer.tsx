import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo-licht.webp";

const kolommen = [
  {
    titel: "Diensten",
    links: [
      { label: "Gratis ophalen", href: "/werkwijze/gratis-ophalen" },
      { label: "Datawissing op locatie", href: "/werkwijze/datawissing-op-locatie" },
      { label: "Wat wij aannemen", href: "/wat-wij-aannemen" },
    ],
  },
  {
    titel: "Over Hardware Held",
    links: [
      { label: "Werkwijze", href: "/werkwijze" },
      { label: "Over ons", href: "/over-ons" },
      { label: "Veelgestelde vragen", href: "/#faq" },
    ],
  },
];

const linkKlasse = "text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-4">
          <div>
            <img src={logo} alt="Hardware Held" width={153} height={40} className="mb-4 h-10 w-auto" />
            <p className="max-w-xs text-[0.9375rem] text-white/75">
              Duurzame verwerking van oude zakelijke hardware in Zuid- en Midden-Limburg.
            </p>
          </div>

          {kolommen.map((kolom) => (
            <div key={kolom.titel}>
              <h2 className="mb-3 text-base font-bold">{kolom.titel}</h2>
              <ul className="space-y-2 text-[0.9375rem]">
                {kolom.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className={linkKlasse}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-3 text-base font-bold">Contact</h2>
            <ul className="space-y-2 text-[0.9375rem]">
              <li>
                <a href="mailto:info@hardwareheld.nl" className={`inline-flex items-center gap-2 ${linkKlasse}`}>
                  <Mail size={16} aria-hidden />
                  info@hardwareheld.nl
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/75">
                <MapPin size={16} aria-hidden />
                Sittard-Geleen, Limburg
              </li>
              <li>
                <Link to="/contact" className={linkKlasse}>
                  Naar de contactpagina
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-1 border-t border-white/20 py-6 text-sm text-white/65 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Hardware Held. Alle rechten voorbehouden.</p>
          <Link to="/privacy" className={linkKlasse}>
            Privacyverklaring
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
