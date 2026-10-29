"use client";

import { MessageCircle, Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/I18nProvider";

const tourText = {
  en: "Welcome to Priscilla Prints. Use Shops to filter by city and print service. Open the file guide before requesting a quote. This is an independent directory, so confirm materials, rights, price and turnaround directly with each shop.",
  sw: "Karibu Priscilla Prints. Tumia sehemu ya Maduka kuchuja kwa mji na huduma ya uchapishaji. Fungua mwongozo wa faili kabla ya kuomba bei. Hii ni saraka huru, kwa hivyo thibitisha nyenzo, haki, bei na muda moja kwa moja na kila duka.",
  fr: "Bienvenue sur Priscilla Prints. Utilisez Ateliers pour filtrer par ville et service. Consultez le guide fichiers avant de demander un devis. Cet annuaire est indépendant, alors confirmez les supports, les droits, le prix et le délai directement avec chaque atelier."
};

export function FloatingActions() {
  const pathname = usePathname();
  const { locale } = useI18n();
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, [pathname]);

  function toggleTour() {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(tourText[locale]);
    utterance.lang = locale === "sw" ? "sw-KE" : locale === "fr" ? "fr-FR" : "en-KE";
    utterance.rate = 0.94;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return (
    <div className="floating-actions" aria-label="Quick actions">
      <button type="button" className="floating-button voice-button" onClick={toggleTour} aria-pressed={speaking}>
        {speaking ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
        <span>{speaking ? "Stop tour" : "Voice tour"}</span>
      </button>
      <a className="floating-button whatsapp-button" href="https://wa.me/254112272061?text=Hello%20Priscilla%20Prints" target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
