import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

/*
 * USAGE:
 * testimonial.quote  — één zin, max ~120 tekens. Vraag aan klant: "Wat vond u het prettigst?"
 * testimonial.author — voornaam + achternaam of initiaal + bedrijfsnaam
 * testimonial.role   — functietitel (optioneel)
 *
 * googleReviews: zet op null zolang je nog geen Google-reviews hebt.
 * Zodra je reviews hebt, vul: { count: 12, avg: 5.0, url: "https://g.page/r/..." }
 */

const testimonial = {
  quote:
    "Netjes geregeld. Computers opgehaald, data gewist en bevestiging ontvangen. Precies wat er beloofd werd.",
  author: "Sailer Sittard",
  role: "Referentie",
};

const googleReviews: { count: number; avg: number; url: string } | null = null;

const SocialProofSection = () => {
  return (
    <section className="relative py-10 border-y border-border bg-secondary/20 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Testimonial */}
          <div className="flex items-start gap-3 max-w-xl">
            <Quote
              size={20}
              className="text-primary flex-shrink-0 mt-0.5 rotate-180"
              aria-hidden
            />
            <div>
              <p className="text-sm font-medium text-foreground leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                {testimonial.author}
                {testimonial.role && (
                  <span className="font-normal"> · {testimonial.role}</span>
                )}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-border flex-shrink-0" aria-hidden />

          {/* Google reviews — shown only when filled in */}
          {googleReviews ? (
            <a
              href={googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              aria-label={`${googleReviews.count} Google-reviews, gemiddeld ${googleReviews.avg}`}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                    aria-hidden
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {googleReviews.avg.toFixed(1)} / 5
                </p>
                <p className="text-xs text-muted-foreground leading-tight">
                  {googleReviews.count} Google-reviews
                </p>
              </div>
            </a>
          ) : (
            /* Placeholder until Google reviews arrive */
            <div className="flex items-center gap-3 opacity-50 select-none" aria-hidden>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div>
                <p className="text-xs text-muted-foreground leading-tight">
                  Google-reviews volgen
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
