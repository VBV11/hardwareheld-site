import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mykqzlge";

interface FormState {
  bedrijfsnaam: string;
  contactpersoon: string;
  email: string;
  telefoon: string;
  ophaaladres: string;
  aantalApparaten: string;
  omschrijving: string;
  wiscertificaat: string;
  akkoord: boolean;
}

const init: FormState = {
  bedrijfsnaam: "",
  contactpersoon: "",
  email: "",
  telefoon: "",
  ophaaladres: "",
  aantalApparaten: "",
  omschrijving: "",
  wiscertificaat: "",
  akkoord: false,
};

export default function AanmeldFormulier() {
  const [form, setForm] = useState<FormState>(init);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function set(field: keyof FormState, value: string | boolean) {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.bedrijfsnaam.trim()) e.bedrijfsnaam = "Verplicht veld";
    if (!form.contactpersoon.trim()) e.contactpersoon = "Verplicht veld";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Voer een geldig e-mailadres in";
    if (!form.ophaaladres.trim()) e.ophaaladres = "Verplicht veld";
    if (!form.aantalApparaten) e.aantalApparaten = "Maak een keuze";
    if (!form.omschrijving.trim()) e.omschrijving = "Verplicht veld";
    if (!form.wiscertificaat) e.wiscertificaat = "Maak een keuze";
    if (!form.akkoord) e.akkoord = "Verplicht";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const data = new FormData();
    data.append("Bedrijfsnaam", form.bedrijfsnaam);
    data.append("Contactpersoon", form.contactpersoon);
    data.append("E-mailadres", form.email);
    if (form.telefoon) data.append("Telefoonnummer", form.telefoon);
    data.append("Ophaaladres", form.ophaaladres);
    data.append("Aantal apparaten", form.aantalApparaten);
    data.append("Omschrijving apparatuur", form.omschrijving);
    data.append("Wisbevestiging gewenst", form.wiscertificaat);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(init);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 py-14 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 size={36} className="text-primary" />
        </div>
        <h3 className="font-heading text-xl font-bold">Bedankt!</h3>
        <p className="text-muted-foreground max-w-sm">
          We hebben je aanvraag ontvangen en nemen binnen 1 werkdag contact op.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-2">
          Nog een aanvraag indienen
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Bedrijfsnaam + Contactpersoon */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Bedrijfsnaam" required error={errors.bedrijfsnaam}>
          <Input
            placeholder="Uw bedrijfsnaam"
            value={form.bedrijfsnaam}
            onChange={(e) => set("bedrijfsnaam", e.target.value)}
            className={errors.bedrijfsnaam ? "border-destructive" : ""}
          />
        </Field>
        <Field label="Contactpersoon" required error={errors.contactpersoon}>
          <Input
            placeholder="Voor- en achternaam"
            value={form.contactpersoon}
            onChange={(e) => set("contactpersoon", e.target.value)}
            className={errors.contactpersoon ? "border-destructive" : ""}
          />
        </Field>
      </div>

      {/* Email + Telefoon */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="E-mailadres" required error={errors.email}>
          <Input
            type="email"
            placeholder="uw@bedrijf.nl"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
        </Field>
        <Field label="Telefoonnummer">
          <Input
            type="tel"
            placeholder="06 12 34 56 78"
            value={form.telefoon}
            onChange={(e) => set("telefoon", e.target.value)}
          />
        </Field>
      </div>

      {/* Ophaaladres + Aantal */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Ophaaladres (postcode + plaats)" required error={errors.ophaaladres}>
          <Input
            placeholder="1234 AB Sittard"
            value={form.ophaaladres}
            onChange={(e) => set("ophaaladres", e.target.value)}
            className={errors.ophaaladres ? "border-destructive" : ""}
          />
        </Field>
        <Field label="Hoeveel apparaten ongeveer?" required error={errors.aantalApparaten}>
          <Select value={form.aantalApparaten} onValueChange={(v) => set("aantalApparaten", v)}>
            <SelectTrigger className={errors.aantalApparaten ? "border-destructive" : ""}>
              <SelectValue placeholder="Kies een range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1–5">1 – 5</SelectItem>
              <SelectItem value="5–20">5 – 20</SelectItem>
              <SelectItem value="20–50">20 – 50</SelectItem>
              <SelectItem value="50+">50+</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      {/* Omschrijving */}
      <Field label="Omschrijving apparatuur of je vraag" required error={errors.omschrijving}>
        <Textarea
          rows={4}
          placeholder="Voorbeeld: 10 computers, 5 laptops, 3 servers, circa 10 monitoren, 1 printer en 2 verhuisdozen met diversen"
          value={form.omschrijving}
          onChange={(e) => set("omschrijving", e.target.value)}
          className={`resize-none ${errors.omschrijving ? "border-destructive" : ""}`}
        />
      </Field>

      {/* Wisbevestiging */}
      <Field label="Wil je een wisbevestiging per apparaat ontvangen?" required error={errors.wiscertificaat}>
        <RadioGroup
          value={form.wiscertificaat}
          onValueChange={(v) => set("wiscertificaat", v)}
          className="flex flex-col gap-2 mt-1"
        >
          {[
            "Ja, graag een wisbevestiging per apparaat",
            "Nee, geen belangrijke data aanwezig",
          ].map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 cursor-pointer">
              <RadioGroupItem value={opt} />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      </Field>

      {/* Akkoord */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={form.akkoord}
            onCheckedChange={(v) => set("akkoord", !!v)}
            className={`mt-0.5 ${errors.akkoord ? "border-destructive" : ""}`}
          />
          <span className="text-sm leading-snug">
            Ik ga akkoord met het{" "}
            <Link to="/privacy" target="_blank" className="text-primary underline underline-offset-2 hover:opacity-75">
              privacybeleid
            </Link>
            .<span className="text-destructive ml-0.5">*</span>
          </span>
        </label>
        {errors.akkoord && (
          <p className="text-xs text-destructive pl-7">{errors.akkoord}</p>
        )}
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-sm text-destructive">
          <AlertCircle size={16} />
          Er is iets misgegaan. Probeer het opnieuw of mail{" "}
          <a href="mailto:info@hardwareheld.nl" className="underline">info@hardwareheld.nl</a>.
        </div>
      )}

      {/* Submit */}
      <div>
        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full h-12 text-base font-semibold gap-2"
        >
          {status === "sending" ? "Versturen…" : <><Send size={18} /> Gratis ophalen aanvragen</>}
        </Button>
        <p className="text-xs text-muted-foreground text-center mt-2">
          We reageren binnen 1 werkdag. Velden met <span className="text-destructive">*</span> zijn verplicht.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}
