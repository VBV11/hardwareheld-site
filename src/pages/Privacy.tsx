import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacyverklaring | Hardware Held"
        description="Hoe Hardware Held omgaat met uw persoonsgegevens conform de AVG. Transparant, veilig en alleen voor de uitvoering van onze dienstverlening."
        canonical="https://hardwareheld.nl/privacy"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden">
        <div
          className="absolute top-10 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, hsl(25 100% 50%), transparent 60%)",
          }}
        />
        <div className="container max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium text-primary border border-primary/30 rounded-full">
              Privacy
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Privacyverklaring
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Hoe wij omgaan met uw gegevens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 bg-background overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border space-y-8"
          >
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Laatst bijgewerkt: 16-04-2026
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hardware Held respecteert uw privacy en gaat zorgvuldig om met uw persoonsgegevens. In deze verklaring leest u welke gegevens wij verzamelen, waarom wij dat doen, en welke rechten u heeft.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                1. Wie zijn wij?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hardware Held is een lokaal bedrijf gevestigd in Sittard-Geleen. Wij halen oude zakelijke hardware op en bieden veilige datawissing aan.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium mb-2">Contact:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>E-mail: info@hardwareheld.nl</li>
                <li>WhatsApp: 06 8337 3852</li>
                <li>Vestigingsplaats: Sittard-Geleen, Limburg</li>
                <li>KVK-nummer: in aanvraag</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                2. Welke persoonsgegevens verzamelen wij?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij verzamelen alleen gegevens die u zelf aan ons verstrekt wanneer u contact met ons opneemt of een dienst afneemt:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Naam</li>
                <li>Bedrijfsnaam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer (indien u dit verstrekt)</li>
                <li>Adres (voor ophaal- of locatiediensten)</li>
                <li>Inhoud van uw bericht</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                3. Waarom verzamelen wij deze gegevens?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij gebruiken uw gegevens uitsluitend voor:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Het beantwoorden van uw vraag of aanvraag</li>
                <li>Het inplannen van een ophaal- of datawissingsafspraak</li>
                <li>Het uitvoeren van onze dienstverlening</li>
                <li>Het opstellen en versturen van een bevestiging per apparaat</li>
                <li>Het voldoen aan wettelijke verplichtingen (zoals administratie)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                4. Op welke grondslag verwerken wij uw gegevens?
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li><span className="font-medium text-foreground">Toestemming:</span> wanneer u zelf contact met ons opneemt</li>
                <li><span className="font-medium text-foreground">Uitvoering van een overeenkomst:</span> wanneer u een dienst afneemt</li>
                <li><span className="font-medium text-foreground">Wettelijke verplichting:</span> voor administratieve en fiscale doeleinden</li>
                <li><span className="font-medium text-foreground">Gerechtvaardigd belang:</span> voor bedrijfsvoering en dienstverlening</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                5. Hoe lang bewaren wij uw gegevens?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij bewaren uw gegevens niet langer dan nodig:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed">
                <li>Contactaanvragen zonder vervolg: maximaal 6 maanden</li>
                <li>Klantgegevens bij afgenomen diensten: 7 jaar (wettelijke bewaartermijn administratie)</li>
                <li>Bevestigingen van datawissing: 7 jaar</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                6. Delen wij uw gegevens met derden?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wij delen uw gegevens niet met derden, tenzij dit noodzakelijk is voor onze dienstverlening of wettelijk verplicht is. Wij verkopen uw gegevens nooit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Wij maken gebruik van de volgende verwerkers:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed mb-4">
                <li>Zoho Mail voor e-mailverwerking (Europese servers)</li>
                <li>TransIP voor domeinregistratie (Nederlands)</li>
                <li>GitHub Pages voor webhosting (Microsoft, VS/EU)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Met deze partijen zijn passende afspraken gemaakt over de verwerking van persoonsgegevens.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                7. Hoe beveiligen wij uw gegevens?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies, misbruik en onbevoegde toegang.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                8. Wat gebeurt er met data op opgehaalde hardware?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Alle opslag op hardware die wij ophalen of op locatie wissen, wordt professioneel verwijderd met betrouwbare wissoftware. U ontvangt per apparaat een bevestiging van de wissing. Wij benaderen of gebruiken uw bedrijfsdata op geen enkele manier.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                9. Welke rechten heeft u?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                U heeft onder de AVG de volgende rechten:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground leading-relaxed mb-4">
                <li>Recht op inzage in uw gegevens</li>
                <li>Recht op correctie van onjuiste gegevens</li>
                <li>Recht op verwijdering van uw gegevens</li>
                <li>Recht op beperking van de verwerking</li>
                <li>Recht op dataportabiliteit</li>
                <li>Recht om bezwaar te maken tegen de verwerking</li>
                <li>Recht om uw toestemming in te trekken</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Wilt u gebruik maken van een van deze rechten? Stuur een e-mail naar{" "}
                <a href="mailto:info@hardwareheld.nl" className="text-primary hover:underline">
                  info@hardwareheld.nl
                </a>
                . Wij reageren binnen 30 dagen.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                10. Cookies en logbestanden
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Onze website gebruikt alleen functionele cookies die nodig zijn voor een goede werking van de site. Wij gebruiken geen tracking- of marketingcookies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Onze website wordt gehost via GitHub Pages. GitHub registreert automatisch IP-adressen van bezoekers voor beveiligings- en onderhoudsdoeleinden. Deze gegevens worden door GitHub (Microsoft) verwerkt conform het EU-VS Data Privacy Framework.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Onze website gebruikt Google Fonts om lettertypen in te laden. Hierbij wordt uw IP-adres aan Google doorgegeven voor het laden van de fonts. Wij gebruiken deze gegevens zelf niet.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                11. Klachten
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bent u niet tevreden over hoe wij met uw gegevens omgaan? Neem dan eerst contact met ons op via{" "}
                <a href="mailto:info@hardwareheld.nl" className="text-primary hover:underline">
                  info@hardwareheld.nl
                </a>
                . U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens via{" "}
                <a
                  href="https://autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  autoriteitpersoonsgegevens.nl
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-3">
                12. Wijzigingen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen. De meest actuele versie vindt u altijd op hardwareheld.nl/privacy.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Privacy;
