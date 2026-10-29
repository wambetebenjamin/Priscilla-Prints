"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { AccountPanel } from "@/components/AccountPanel";
import { useAuth } from "@/components/AuthProvider";
import { useI18n } from "@/components/I18nProvider";
import { Locale, localeNames } from "@/data/i18n";

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const { savedSlugs } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const nav = [
    ["/", t("navHome")],
    ["/shops", t("navShops")],
    ["/services", t("navServices")],
    ["/file-guide", t("navFileGuide")],
    ["/cities", t("navCities")],
    ["/about", t("navAbout")]
  ] as const;

  function active(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      <header className="site-header">
        <div className="top-bar">
          <div className="container top-bar-inner">
            <p className="address"><MapPin aria-hidden="true" size={17} /> Local-first print guidance across growing city networks</p>
            <div className="top-actions">
              <a href="tel:+254112272061"><Phone aria-hidden="true" size={15} /> +254 112 272 061</a>
              <label className="language-control">
                <span className="sr-only">{t("language")}</span>
                <select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={t("language")}>
                  {Object.entries(localeNames).map(([code, name]) => <option key={code} value={code}>{name}</option>)}
                </select>
              </label>
            </div>
          </div>
        </div>
        <nav className="navbar-custom" aria-label="Main navigation">
          <div className="container nav-inner">
            <div className="brand-group">
              <Link className="navbar-brand" href="/" onClick={() => setMenuOpen(false)}>
                Priscilla<span>Prints</span>
              </Link>
              <p>Print local. <b>Share clear.</b></p>
            </div>

            <button
              type="button"
              className="navbar-toggle"
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>

            <div id="main-menu" className={`nav-menu ${menuOpen ? "is-open" : ""}`}>
              <ul>
                {nav.map(([href, label]) => (
                  <li key={href}>
                    <Link className={active(href) ? "active" : ""} aria-current={active(href) ? "page" : undefined} href={href} onClick={() => setMenuOpen(false)}>
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className="saved-nav" type="button" onClick={() => { setMenuOpen(false); setAccountOpen(true); }}>
                    <Bookmark aria-hidden="true" size={15} /> {t("saved")} {savedSlugs.length > 0 && <span>{savedSlugs.length}</span>}
                  </button>
                </li>
                <li><Link className="btn-default nav-cta" href="/list" onClick={() => setMenuOpen(false)}>{t("listShop")}</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <AccountPanel open={accountOpen} onClose={() => setAccountOpen(false)} />
    </>
  );
}
