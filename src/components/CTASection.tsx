import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col gap-6 rounded-2xl bg-muted p-7 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-2xl">
          <h2 className="kop-sectie">Klaar om uw hardware kwijt te raken?</h2>
          <p className="mt-2 text-muted-foreground">
            Wij plannen een gratis ophaalmoment bij u in de regio. Geen verplichtingen, geen verrassingen.
          </p>
        </div>
        <Link to="/aanmelden" className="knop knop-oranje flex-shrink-0 self-start lg:self-auto">
          Gratis ophalen aanvragen
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
