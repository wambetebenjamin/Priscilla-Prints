import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, FileImage, Maximize2, Printer, Shirt, SwatchBook } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Print services", description: "Compare common print types and learn what to confirm before production." };

const services = [
  { title: "Screen print", icon: Printer, best: "Repeated spot colours and sturdy coverage", ask: "Mesh, ink type, curing, setup cost and minimum run", file: "Vector artwork or high-resolution separated colours" },
  { title: "Digital print", icon: FileImage, best: "Short runs, detailed colour and variable pages", ask: "Paper profile, colour mode, bleed and finishing", file: "Print-ready PDF with fonts embedded" },
  { title: "Fabric print", icon: SwatchBook, best: "Patterns, panels and textile-led work", ask: "Fibre content, repeat, wash result and sample length", file: "Repeat tile, scale note and colour reference" },
  { title: "Garment print", icon: Shirt, best: "T-shirts, uniforms and event garments", ask: "Blank supplier, size split, placement and wash care", file: "Artwork at final print size with placement guide" },
  { title: "Large format", icon: Maximize2, best: "Posters, signs and display graphics", ask: "Viewing distance, substrate, weather and installation", file: "Scaled PDF with suitable effective resolution" },
  { title: "Binding", icon: BookOpen, best: "Manuals, reports and education packs", ask: "Page count, opening style, cover and trim", file: "Ordered pages with binding-safe inner margins" }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Common print types" current="Services" description="Match the method to the material, run size and intended use. A shop should explain what changes in cost, finish and durability." />
      <section className="content-section">
        <div className="container feature-split">
          <div><span className="eyebrow">Start with the use</span><h2>The process comes second</h2><p className="lead-copy">Tell a shop where the printed item will go, how long it should last and how many you need. A useful recommendation follows from those details.</p><p>A logo on thirty cotton shirts, a school workbook and an outdoor sign need different artwork, material checks and proofing. Avoid choosing only by machine name.</p><Link href="/file-guide" className="btn-default">Use the file checklist</Link></div>
          <div className="content-image"><Image src="/images/press-quality.jpg" alt="Print specialist checking colour and detail with a magnifier" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        </div>
        <div className="container service-reference-grid">
          {services.map((service) => { const Icon = service.icon; return <article key={service.title} className="reference-card"><Icon aria-hidden="true" /><h2>{service.title}</h2><dl><div><dt>Often useful for</dt><dd>{service.best}</dd></div><div><dt>Ask the shop</dt><dd>{service.ask}</dd></div><div><dt>Prepare</dt><dd>{service.file}</dd></div></dl></article>; })}
        </div>
        <div className="container"><Disclaimer /></div>
      </section>
    </>
  );
}
