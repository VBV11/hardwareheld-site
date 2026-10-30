import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tonen = {
  wit: "bg-background",
  grijs: "bg-muted",
};

interface SectieProps {
  id?: string;
  titel: ReactNode;
  intro?: ReactNode;
  actie?: ReactNode;
  toon?: keyof typeof tonen;
  children: ReactNode;
}

// Vaste opbouw van elke sectie: kop links, inhoud rechts.
const Sectie = ({ id, titel, intro, actie, toon = "wit", children }: SectieProps) => (
  <section id={id} className={cn("py-16 md:py-24", tonen[toon])}>
    <div className="container grid gap-x-16 gap-y-8 lg:grid-cols-12">
      <header className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <h2 className="kop-sectie">{titel}</h2>
          {intro && <p className="mt-3 max-w-prose text-muted-foreground">{intro}</p>}
          {actie && <div className="mt-4">{actie}</div>}
        </div>
      </header>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </div>
  </section>
);

export default Sectie;
