import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// De statische HTML (voor bots die geen JS uitvoeren) bevat al title/meta-tags
// gemarkeerd met data-default. Zodra React mount, neemt <SEO> (react-helmet-async)
// dezelfde tags voor zijn rekening, dus verwijderen we het statische exemplaar
// om dubbele <title>/meta description/OG/Twitter-tags in de DOM te voorkomen.
document.querySelectorAll("[data-default]").forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
