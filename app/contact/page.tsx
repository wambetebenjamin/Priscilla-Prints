import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact", description: "Contact Priscilla Prints about the directory or a listing review." };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact the directory" current="Contact" description="For listing corrections, directory questions or accessibility support. Send print job requests directly to a shop." />
      <section className="contact-us content-section">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-info">
            <span className="eyebrow">Directory support</span>
            <h2>How can we help?</h2>
            <p>We can help with a directory entry, site guidance or a privacy request. We cannot quote, accept artwork or manage a print order.</p>
            <ul>
              <li><MessageCircle aria-hidden="true" /><div><strong>WhatsApp</strong><a href="https://wa.me/254112272061">+254 112 272 061</a></div></li>
              <li><Phone aria-hidden="true" /><div><strong>Phone</strong><a href="tel:+254112272061">+254 112 272 061</a></div></li>
              <li><MapPin aria-hidden="true" /><div><strong>Base</strong><span>Nairobi, Kenya</span></div></li>
            </ul>
            <div className="contact-boundary"><strong>Need a print quote?</strong><p>Use the shop directory and contact a listed business directly after checking that the listing is active.</p></div>
          </aside>
        </div>
      </section>
    </>
  );
}
