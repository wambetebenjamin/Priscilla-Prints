import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms", description: "Terms for using the independent Priscilla Prints directory." };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Directory terms" current="Terms" description="Effective 29 October 2026. Use the directory as a starting point, then verify every job directly." />
      <article className="container legal-page">
        <section><h2>1. Independent directory</h2><p>Priscilla Prints provides directory information and general file preparation guidance. We do not print, take payment, act as an agent or guarantee price, quality, rights, availability or turnaround.</p></section>
        <section><h2>2. Shop relationships</h2><p>Any quote, proof, production agreement, payment, delivery or dispute is directly between you and the independent shop. Verify that a listing is current before relying on it.</p></section>
        <section><h2>3. Materials and artwork rights</h2><p>You must confirm materials, colour expectations, dimensions, durability and finishing with the shop. You are responsible for having permission to reproduce all artwork, logos, photographs, fonts, patterns and other protected content.</p></section>
        <section><h2>4. Listings</h2><p>Submitters must have authority to share business details and must provide accurate information. We may edit, decline, label, suspend or remove a listing. Submission does not guarantee publication or placement.</p></section>
        <section><h2>5. Sample content</h2><p>Profiles marked “Sample listing” are illustrative and are not active businesses. Their names, service details and production notes show the intended directory format.</p></section>
        <section><h2>6. Acceptable use</h2><p>Do not misuse forms, impersonate a business, submit unlawful material, scrape personal data, bypass security controls or interfere with the service.</p></section>
        <section><h2>7. Availability and liability</h2><p>The directory may change or be unavailable. To the extent allowed by law, Priscilla Prints is not liable for decisions, losses or disputes arising from a shop relationship or from reliance on directory information.</p></section>
        <section><h2>8. Contact</h2><p>Questions about these terms can be raised by calling or messaging <a href="tel:+254112272061">+254 112 272 061</a>.</p></section>
      </article>
    </>
  );
}
