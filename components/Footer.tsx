"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer>
      <div className="container">
        <div className="footer-contact-grid">
          <section>
            <h2>Priscilla<span>Prints</span></h2>
            <p className="footer-lead">Directory of community print shops and small-run services for fabric, garments, education materials and design work.</p>
            <ul className="contact-list">
              <li><MapPin aria-hidden="true" size={16} /> Nairobi, Kenya · serving a growing city network</li>
              <li><a href="tel:+254112272061"><Phone aria-hidden="true" size={16} /> +254 112 272 061</a></li>
            </ul>
            <Link href="/contact" className="btn-default">{t("contact")}</Link>
          </section>
          <section className="footer-disclaimer">
            <h2>Clear<span>Terms</span></h2>
            <p>{t("footerNote")}</p>
            <p>Deal directly with shops. Confirm materials, file rights, proofing, price and turnaround yourself.</p>
            <Link href="/file-guide" className="btn-default">Check your file</Link>
          </section>
        </div>
        <div className="footer-link-row">
          <nav aria-label="Footer navigation">
            <ul className="footer-nav">
              <li><Link href="/">{t("navHome")}</Link></li>
              <li><Link href="/shops">{t("navShops")}</Link></li>
              <li><Link href="/services">{t("navServices")}</Link></li>
              <li><Link href="/cities">{t("navCities")}</Link></li>
              <li><Link href="/about">{t("navAbout")}</Link></li>
              <li><Link href="/contact">{t("contact")}</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="copyright">
        <div className="container copyright-inner">
          <span>© {new Date().getFullYear()} Priscilla Prints</span>
          <div><Link href="/terms">{t("terms")}</Link><Link href="/privacy">{t("privacy")}</Link><a href="/credits.md">Photo credits</a></div>
        </div>
      </div>
    </footer>
  );
}
