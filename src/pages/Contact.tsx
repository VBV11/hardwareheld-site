import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import { Mail, MapPin, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact: ophaling of datawissing aanvragen | Hardware Held"
        description="Vraag een gratis ophaling of datawissing op locatie aan in Zuid- en Midden-Limburg. Reactie binnen 1 werkdag per e-mail."
        canonical="https://hardwareheld.nl/contact"
        keywords="contact Hardware Held, hardware ophalen aanvragen, datawissing aanvragen, ophaalservice Limburg contact"
      />
      <Navbar />
      <main>
        <PageHero
          kruimels={[{ naam: "Contact" }]}
          titel="Neem contact op"
          intro="Plan een gratis ophaalmoment of vraag datawissing op locatie aan. Wij reageren binnen 1 werkdag."
        />

        <Sectie
          titel="Kies wat u het makkelijkst vindt"
          intro="Beide komen bij dezelfde contactpersoon terecht."
          actie={
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={17} aria-hidden />
              Sittard-Geleen, Limburg
            </p>
          }
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex min-w-0 flex-col rounded-xl border border-border p-6 md:p-7">
              <span className="tegel">
                <ClipboardList size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-snug">Aanmeldformulier</h3>
              <p className="mt-2 flex-1 text-muted-foreground">
                De snelste manier. Met een paar vragen weten wij wat u heeft en waar wij moeten zijn.
              </p>
              <Link to="/aanmelden" className="knop knop-oranje mt-5 self-start">
                Naar het formulier
              </Link>
            </div>

            <div className="flex min-w-0 flex-col rounded-xl border border-border p-6 md:p-7">
              <span className="tegel">
                <Mail size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <h3 className="mt-4 break-words text-xl font-semibold leading-snug">info@hardwareheld.nl</h3>
              <p className="mt-2 flex-1 text-muted-foreground">
                Ook handig als u foto's van uw apparatuur wilt meesturen.
              </p>
              <a href="mailto:info@hardwareheld.nl" className="knop knop-rustig mt-5 self-start">
                Stuur een e-mail
              </a>
            </div>
          </div>
        </Sectie>

        <Sectie toon="grijs" titel="Wat vermelden?">
          <p className="max-w-prose">
            Vermeld kort hoeveel apparaten het betreft, welke soort (computers, laptops, monitoren, netwerkapparatuur),
            uw bedrijfsnaam en locatie. Meer details mogen, maar hoeven niet.
          </p>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Daarna reageren wij binnen 1 werkdag met een voorstel voor gratis ophalen of datawissing op locatie, en
            plannen wij samen een moment dat u uitkomt.
          </p>
        </Sectie>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
