"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, MessageKey, messages } from "@/data/i18n";

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey) => string;
};

const I18nContext = createContext<I18nValue | null>(null);
const localeKey = "priscilla-prints-locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(localeKey) as Locale | null;
    if (stored && stored in messages) {
      queueMicrotask(() => setLocaleState(stored));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(localeKey, locale);
    document.cookie = `${localeKey}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  }, [locale]);

  const value = useMemo<I18nValue>(() => ({
    locale,
    setLocale: setLocaleState,
    t: (key) => messages[locale][key]
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}
