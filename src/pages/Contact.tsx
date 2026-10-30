import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Sectie from "@/components/Sectie";
import { Mail, MapPin, ArrowRight } from "lucide-react";
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
              <MapPin size={18} aria-hidden />
              Sittard-Geleen, Limburg
            </p>
          }
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/aanmelden"
              className="group flex flex-col rounded-sm bg-primary p-6 text-primary-foreground transition-colors hover:bg-[hsl(30_94%_49%)] md:p-7"
            >
              <span className="text-[0.9375rem]">Snelste manier</span>
              <span className="mt-1 font-heading text-2xl font-extrabold leading-tight">
                Vul het aanmeldformulier in
              </span>
              <span className="mt-3 flex-1">
                Met een paar vragen weten wij wat u heeft en waar wij moeten zijn.
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold">
                Naar het formulier
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>

            <a
              href="mailto:info@hardwareheld.nl"
              className="group flex min-w-0 flex-col rounded-sm border-2 border-foreground p-6 transition-colors hover:bg-muted md:p-7"
            >
              <span className="text-[0.9375rem] text-muted-foreground">Liever zelf schrijven</span>
              <span className="mt-1 break-words font-heading text-xl font-extrabold leading-tight sm:text-2xl md:text-xl xl:text-2xl">
                info@hardwareheld.nl
              </span>
              <span className="mt-3 flex-1 text-muted-foreground">
                Ook handig als u foto's van uw apparatuur wilt meesturen.
              </span>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold">
                <Mail size={18} aria-hidden />
                Stuur een e-mail
              </span>
            </a>
          </div>
        </Sectie>

        <Sectie toon="grijs" titel="Wat vermelden?">
          <div className="border-t-2 border-foreground pt-5">
            <p className="max-w-prose">
              Vermeld kort hoeveel apparaten het betreft, welke soort (computers, laptops, monitoren, netwerkapparatuur),
              uw bedrijfsnaam en locatie. Meer details mogen, maar hoeven niet.
            </p>
            <p className="mt-4 max-w-prose text-muted-foreground">
              Daarna reageren wij binnen 1 werkdag met een voorstel voor gratis ophalen of datawissing op locatie, en
              plannen wij samen een moment dat u uitkomt.
            </p>
          </div>
        </Sectie>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;
