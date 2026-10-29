"use client";

import { AuthProvider } from "@/components/AuthProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { I18nProvider } from "@/components/I18nProvider";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <AuthProvider>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
        <CookieConsent />
      </AuthProvider>
    </I18nProvider>
  );
}
