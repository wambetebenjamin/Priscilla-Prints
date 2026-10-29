import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Cities", description: "Explore example local print needs across a growing network of African cities." };

const cityCards = [
  { city: "Nairobi", country: "Kenya", image: "/images/nairobi-customer.jpg", alt: "A customer in a patterned shirt on a Nairobi street", focus: "Garments, education packs, digital print and large-format work", count: "3 sample profiles" },
  { city: "Mombasa", country: "Kenya", image: "/images/fabric-shop-cotonou.jpg", alt: "A fabric seller arranging colourful printed textiles", focus: "Fabric-led projects, event materials and visitor-facing signs", count: "1 sample profile" },
  { city: "Kisumu", country: "Kenya", image: "/images/press-operator.jpg", alt: "A printer working at a press in a small workshop", focus: "Community editions, school materials and practical binding", count: "1 sample profile" },
  { city: "Nakuru", country: "Kenya", image: "/images/screen-printer.jpg", alt: "A screen print operator checking a frame", focus: "Display sheets, local business print and garment work", count: "1 sample profile" },
  { city: "Eldoret", country: "Kenya", image: "/images/press-quality.jpg", alt: "A printer checking the detail of a finished piece", focus: "Reports, manuals, learning packs and finishing", count: "1 sample profile" },
  { city: "Kampala", country: "Uganda", image: "/images/fabric-stacks.jpg", alt: "Stacks of bold African print fabrics", focus: "Textile projects, screen print and community publications", count: "1 sample profile" }
];

export default function CitiesPage() {
  return (
    <>
      <PageHero title="Print conversations across cities" current="Cities" description="Examples show how the directory can serve local makers, schools, groups and small businesses without pretending every city works the same way." />
      <section className="content-section">
        <div className="container city-intro"><div><span className="eyebrow">Local context matters</span><h2>Start near the work</h2></div><p>City pages are not rankings. They help people find a starting point, then compare material knowledge, proofing and finishing directly with independent shops.</p></div>
        <div className="container city-grid">
          {cityCards.map((item) => <article className="city-card" key={item.city}><div className="city-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="city-card-copy"><p><MapPin aria-hidden="true" size={15} /> {item.country}</p><h2>{item.city}</h2><span>{item.count}</span><p>{item.focus}</p><Link href="/shops">View directory <ArrowRight aria-hidden="true" size={16} /></Link></div></article>)}
        </div>
        <div className="container city-cta"><div><span className="eyebrow">Not listed yet?</span><h2>Help a local shop describe its work clearly</h2><p>Business owners can submit a listing for review. No paid placement and no guarantee of publication.</p></div><Link href="/list" className="btn-default">List a shop</Link></div>
        <div className="container"><Disclaimer /></div>
      </section>
    </>
  );
}
