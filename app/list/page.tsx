import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ListingForm } from "@/components/ListingForm";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = { title: "List a print shop", description: "Submit an independent local print shop for directory review." };

export default function ListPage() {
  return (
    <>
      <PageHero title="List a local print shop" current="List a shop" description="Share accurate business details and practical production information. Submission does not guarantee publication." />
      <section className="content-section listing-section">
        <div className="container preform-note"><div><span>1</span><p><strong>Be authorised</strong> Submit your own business or have clear permission.</p></div><div><span>2</span><p><strong>Be specific</strong> Name real services, materials and typical job sizes.</p></div><div><span>3</span><p><strong>Be reachable</strong> Use contact details customers can verify directly.</p></div></div>
        <div className="container"><ListingForm /></div>
        <div className="container"><Disclaimer /></div>
      </section>
    </>
  );
}
