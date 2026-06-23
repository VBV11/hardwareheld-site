import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";

const Werkwijze = lazy(() => import("./pages/Werkwijze"));
const GratisOphalen = lazy(() => import("./pages/GratisOphalen"));
const DatawissingOpLocatie = lazy(() => import("./pages/DatawissingOpLocatie"));
const OverOns = lazy(() => import("./pages/OverOns"));
const WatWijAannemen = lazy(() => import("./pages/WatWijAannemen"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const LocatiePagina = lazy(() => import("./pages/LocatiePagina"));
const Aanmelden = lazy(() => import("./pages/Aanmelden"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/werkwijze" element={<Werkwijze />} />
            <Route path="/werkwijze/gratis-ophalen" element={<GratisOphalen />} />
            <Route path="/werkwijze/datawissing-op-locatie" element={<DatawissingOpLocatie />} />
            <Route path="/wat-wij-aannemen" element={<WatWijAannemen />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aanmelden" element={<Aanmelden />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/ophalen/:stad" element={<LocatiePagina />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
