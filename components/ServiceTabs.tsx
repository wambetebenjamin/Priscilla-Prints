"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Maximize, Printer, Shirt, SwatchBook, PanelsTopLeft } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Screen printing", icon: PanelsTopLeft, image: "/images/screen-printer.jpg", text: "A practical choice for repeated colours on garments, posters and selected fabrics. Ask about mesh, ink, curing and minimum quantities.", tip: "Best question: can I approve one sample first?" },
  { name: "Digital printing", icon: Printer, image: "/images/press-quality.jpg", text: "Useful for short document runs, variable artwork and detailed colour. Confirm paper, final size, bleed and finishing.", tip: "Bring: a print-ready PDF and a reference copy." },
  { name: "Fabric printing", icon: SwatchBook, image: "/images/fabric-shop-cotonou.jpg", text: "Start with the fabric composition, pattern repeat and intended use. Always ask how colours and texture may change after washing.", tip: "Start small: request a strike-off or sample length." },
  { name: "Garment printing", icon: Shirt, image: "/images/garment-workshop.jpg", text: "Share garment sizes, colours, fabric type, placement and quantity. Confirm who supplies the blank garments.", tip: "Check: print placement on every garment size." },
  { name: "Large format", icon: Maximize, image: "/images/nairobi-customer.jpg", text: "State final dimensions, viewing distance, indoor or outdoor use and installation needs. Ask about safe image resolution.", tip: "Measure the installation space before ordering." },
  { name: "Binding", icon: BookOpen, image: "/images/press-operator.jpg", text: "Page count, margins and how the document should lie open affect the binding choice. Request a finished sample when possible.", tip: "Keep text clear of the binding edge." }
];

export function ServiceTabs() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <div className="service-tabs">
      <div className="service-tab-list" role="tablist" aria-label="Print services">
        {services.map((item, index) => {
          const Icon = item.icon;
          return <button key={item.name} id={`service-tab-${index}`} role="tab" aria-selected={active === index} aria-controls="service-panel" onClick={() => setActive(index)}><Icon aria-hidden="true" /> {item.name}</button>;
        })}
      </div>
      <div id="service-panel" className="service-tab-panel" role="tabpanel" aria-labelledby={`service-tab-${active}`}>
        <div className="service-copy">
          <span className="service-number">0{active + 1}</span>
          <h3>{service.name}</h3>
          <p>{service.text}</p>
          <p className="service-tip">{service.tip}</p>
          <Link href="/services" className="btn-default">Compare services</Link>
        </div>
        <div className="service-image"><Image src={service.image} alt="" fill sizes="(max-width: 800px) 100vw, 40vw" /></div>
      </div>
    </div>
  );
}
