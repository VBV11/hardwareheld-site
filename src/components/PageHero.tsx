import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Kruimel {
  naam: string;
  href?: string;
}

interface PageHeroProps {
  kruimels: Kruimel[];
  titel: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}

const PageHero = ({ kruimels, titel, intro, children }: PageHeroProps) => (
  <section className="border-b border-border pb-10 pt-28 md:pb-14 md:pt-36">
    <div className="container">
      <nav aria-label="Kruimelpad" className="mb-4 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          <li>
            <Link to="/" className="underline-offset-4 hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          {kruimels.map((k) => (
            <li key={k.naam} className="flex items-center gap-1.5">
              <ChevronRight size={14} aria-hidden />
              {k.href ? (
                <Link to={k.href} className="underline-offset-4 hover:text-foreground hover:underline">
                  {k.naam}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {k.naam}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="kop-pagina max-w-3xl">{titel}</h1>
      {intro && <p className="inleiding mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
      {children && <div className="mt-7">{children}</div>}
    </div>
  </section>
);

export default PageHero;
