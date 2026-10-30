import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="border-t-2 border-foreground bg-primary py-12 text-primary-foreground md:py-16">
      <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-2xl">
          <h2 className="kop-sectie">Klaar om uw hardware kwijt te raken?</h2>
          <p className="mt-3">
            Wij plannen een gratis ophaalmoment bij u in de regio. Geen verplichtingen, geen verrassingen.
          </p>
        </div>
        <Link to="/aanmelden" className="knop knop-donker self-start sm:px-7 lg:self-auto">
          Gratis ophalen aanvragen <ArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
