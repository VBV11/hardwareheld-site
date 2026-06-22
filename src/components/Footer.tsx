import { Link } from "react-router-dom";
import { MapPin, Mail, MessageCircle, ShieldCheck, Clock, Recycle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="container">
        {/* Trust strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm text-white/70">
            <ShieldCheck size={18} className="text-primary flex-shrink-0" />
            Bevestiging per apparaat
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <Clock size={18} className="text-primary flex-shrink-0" />
            Direct persoonlijk contact
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <Recycle size={18} className="text-primary flex-shrink-0" />
            Duurzaam: hergebruik waar mogelijk, anders recycling
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div>
            <img src={logo} alt="Hardware Held" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-white/40 mb-3">
              Duurzame verwerking van oude zakelijke hardware in de regio Zuid- en Midden-Limburg.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              Sittard-Geleen, Limburg
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3 text-white">Navigatie</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/40 hover:text-white transition-colors">Home</Link>
              <Link to="/werkwijze" className="text-sm text-white/40 hover:text-white transition-colors">Werkwijze</Link>
              <Link to="/over-ons" className="text-sm text-white/40 hover:text-white transition-colors">Over ons</Link>
              <Link to="/wat-wij-aannemen" className="text-sm text-white/40 hover:text-white transition-colors">Wat wij aannemen</Link>
              <Link to="/#faq" className="text-sm text-white/40 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3 text-white">Diensten</h4>
            <div className="flex flex-col gap-2">
              <Link to="/werkwijze/gratis-ophalen" className="text-sm text-white/40 hover:text-white transition-colors">Gratis ophalen</Link>
              <Link to="/werkwijze/datawissing-op-locatie" className="text-sm text-white/40 hover:text-white transition-colors">Datawissing op locatie</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3 text-white">Contact</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@hardwareheld.nl"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <Mail size={14} />
                info@hardwareheld.nl
              </a>
              <a
                href="https://wa.me/31683373852?text=Hallo%20Hardware%20Held%2C%20ik%20heb%20oude%20bedrijfshardware%20die%20opgehaald%20mag%20worden."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp: 06 8337 3852
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <p className="text-sm text-white/30 text-center">
            © {new Date().getFullYear()} Hardware Held. Alle rechten voorbehouden.
          </p>
          <span className="hidden sm:inline text-white/20">·</span>
          <Link to="/privacy" className="text-sm text-white/30 hover:text-white transition-colors">
            Privacyverklaring
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
