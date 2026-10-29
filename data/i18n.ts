export type Locale = "en" | "sw" | "fr";

export const localeNames: Record<Locale, string> = {
  en: "English",
  sw: "Kiswahili",
  fr: "Français"
};

export const messages = {
  en: {
    navHome: "Home",
    navShops: "Shops",
    navServices: "Services",
    navFileGuide: "File guide",
    navCities: "Cities",
    navAbout: "About",
    listShop: "List a shop",
    saved: "Saved",
    heroKicker: "Community print directory",
    heroTitle: "Print local. Share clear.",
    heroBody: "Find independent print shops for fabric, garments, education materials and design work.",
    findShop: "Find a shop",
    prepareFile: "Prepare your file",
    whyTitle: "Why local print matters",
    whyBody: "Local conversations make it easier to check material, colour, size and timing before a job starts.",
    featuredTitle: "Featured services",
    howTitle: "How to find a shop",
    citiesTitle: "Printing starts with a clear local conversation",
    footerNote: "Independent directory only. We do not print, take payment or guarantee turnaround.",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    language: "Language"
  },
  sw: {
    navHome: "Mwanzo",
    navShops: "Maduka",
    navServices: "Huduma",
    navFileGuide: "Mwongozo wa faili",
    navCities: "Miji",
    navAbout: "Kuhusu",
    listShop: "Orodhesha duka",
    saved: "Zilizohifadhiwa",
    heroKicker: "Saraka ya uchapishaji wa jamii",
    heroTitle: "Chapisha karibu. Shiriki wazi.",
    heroBody: "Pata maduka huru ya uchapishaji wa vitambaa, mavazi, nyenzo za elimu na kazi za ubunifu.",
    findShop: "Tafuta duka",
    prepareFile: "Andaa faili yako",
    whyTitle: "Kwa nini uchapishaji wa karibu ni muhimu",
    whyBody: "Mazungumzo ya karibu hurahisisha kuthibitisha nyenzo, rangi, ukubwa na muda kabla ya kazi kuanza.",
    featuredTitle: "Huduma zinazoangaziwa",
    howTitle: "Jinsi ya kupata duka",
    citiesTitle: "Uchapishaji huanza na mazungumzo wazi ya karibu",
    footerNote: "Hii ni saraka huru pekee. Hatuchapishi, hatupokei malipo wala kuhakikishia muda wa kukamilisha.",
    contact: "Wasiliana",
    privacy: "Faragha",
    terms: "Masharti",
    language: "Lugha"
  },
  fr: {
    navHome: "Accueil",
    navShops: "Ateliers",
    navServices: "Services",
    navFileGuide: "Guide fichiers",
    navCities: "Villes",
    navAbout: "À propos",
    listShop: "Ajouter un atelier",
    saved: "Enregistrés",
    heroKicker: "Annuaire d'impression communautaire",
    heroTitle: "Imprimez local. Partagez clairement.",
    heroBody: "Trouvez des ateliers indépendants pour le tissu, les vêtements, les supports éducatifs et la création.",
    findShop: "Trouver un atelier",
    prepareFile: "Préparer un fichier",
    whyTitle: "Pourquoi l'impression locale compte",
    whyBody: "Un échange local facilite la vérification du support, des couleurs, du format et du délai avant de commencer.",
    featuredTitle: "Services en vedette",
    howTitle: "Comment trouver un atelier",
    citiesTitle: "L'impression commence par un échange local clair",
    footerNote: "Annuaire indépendant uniquement. Nous n'imprimons pas, n'encaissons aucun paiement et ne garantissons aucun délai.",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    language: "Langue"
  }
} as const;

export type MessageKey = keyof (typeof messages)["en"];
