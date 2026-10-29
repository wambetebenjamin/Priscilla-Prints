import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About", description: "Why Priscilla Prints makes local print information easier to compare." };

export default function AboutPage() {
  return (
    <>
      <PageHero title="Clearer local print choices" current="About" description="Priscilla Prints helps people ask better questions before a small print job starts." />
      <section className="content-section">
        <div className="container feature-split about-split">
          <div className="content-image"><Image src="/images/fabric-portrait.jpg" alt="Portrait framed by a bright African print fabric" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></div>
          <div><span className="eyebrow">Our purpose</span><h2>Print local. Share clear.</h2><p className="lead-copy">Printing is easier when service descriptions are plain, artwork requirements are visible and customers can speak directly with the people doing the work.</p><p>Priscilla Prints is designed as a practical directory and readiness guide. It is not a broker, print provider, payment service or guarantee.</p><ul className="tick-list"><li><CheckCircle2 aria-hidden="true" />Local-first discovery</li><li><CheckCircle2 aria-hidden="true" />Plain file preparation guidance</li><li><CheckCircle2 aria-hidden="true" />Direct customer and shop relationships</li></ul><Link href="/shops" className="btn-default">Browse shops</Link></div>
        </div>
        <div className="container values-grid"><article><span>01</span><h2>Clear</h2><p>We separate guidance from promises and label sample content plainly.</p></article><article><span>02</span><h2>Helpful</h2><p>We explain which details make a shop conversation more useful.</p></article><article><span>03</span><h2>Local-first</h2><p>We favour direct relationships and practical knowledge close to the job.</p></article></div>
        <div className="container"><Disclaimer /></div>
      </section>
    </>
  );
}
