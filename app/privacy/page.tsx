import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Privacy notice", description: "How Priscilla Prints handles local preferences and form submissions." };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy notice" current="Privacy" description="Effective 29 October 2026. A plain summary of what this directory stores and why." />
      <article className="container legal-page">
        <section><h2>1. What we collect</h2><p>Language, cookie consent, saved shop identifiers, a light account email and draft listing references can be stored in your browser. Contact and listing forms collect the fields you choose to submit, plus a reCAPTCHA response used to reduce spam.</p></section>
        <section><h2>2. Why we use it</h2><p>We use this information to remember preferences, display your saved shops, group a listing with your email, respond to messages and review directory submissions.</p></section>
        <section><h2>3. Local device storage</h2><p>The keys <code>priscilla-prints-cookie-consent</code>, <code>priscilla-prints-locale</code>, <code>priscilla-prints-auth</code>, <code>priscilla-prints-saved</code> and <code>priscilla-prints-listings</code> support the light experience. Clearing site data removes them from your device.</p></section>
        <section><h2>4. Google reCAPTCHA</h2><p>Forms use Google reCAPTCHA. Google may process technical information under its own privacy and terms. The production site should use site-specific keys. Documented test keys may appear in development and preview environments.</p></section>
        <section><h2>5. Sharing and payments</h2><p>We do not sell personal information and do not take print payments. A shop submission is reviewed before any business contact details are considered for public display.</p></section>
        <section><h2>6. Retention and requests</h2><p>We retain submitted messages only as long as needed for directory support and review. Contact us to ask for access, correction or deletion of information you submitted.</p></section>
        <section><h2>7. Contact</h2><p>Call or message <a href="tel:+254112272061">+254 112 272 061</a> for a privacy request.</p></section>
      </article>
    </>
  );
}
