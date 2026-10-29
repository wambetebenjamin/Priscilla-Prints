import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock3, MapPin, PackageCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/Disclaimer";
import { PageHero } from "@/components/PageHero";
import { SaveShopButton } from "@/components/SaveShopButton";
import { getShop, shops } from "@/data/shops";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return shops.map((shop) => ({ slug: shop.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const shop = getShop((await params).slug);
  if (!shop) return {};
  return { title: shop.name, description: shop.summary };
}

export default async function ShopDetailPage({ params }: Props) {
  const shop = getShop((await params).slug);
  if (!shop) notFound();

  return (
    <>
      <PageHero title={shop.name} current={shop.name} description={`${shop.area}, ${shop.city} · Sample directory profile`} />
      <section className="shop-detail-section">
        <div className="container shop-detail-grid">
          <div>
            <div className="shop-detail-image"><Image src={shop.image} alt={shop.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 58vw" /><span className="sample-badge">Sample listing</span></div>
            <div className="shop-detail-copy">
              <div className="detail-title-row"><div><span className="eyebrow">Community print profile</span><h2>About this example</h2></div><SaveShopButton slug={shop.slug} /></div>
              <p className="lead-copy">{shop.summary}</p>
              <p>{shop.detail}</p>
              <h3>Services shown</h3>
              <ul className="detail-service-list">{shop.services.map((service) => <li key={service}><CheckCircle2 aria-hidden="true" /> {service}</li>)}</ul>
            </div>
          </div>
          <aside className="shop-facts">
            <span className="eyebrow">Before you contact a shop</span>
            <h2>Bring a clear brief</h2>
            <dl>
              <div><dt><MapPin aria-hidden="true" /> Area</dt><dd>{shop.area}, {shop.city}</dd></div>
              <div><dt><Clock3 aria-hidden="true" /> Turnaround</dt><dd>{shop.turnaround}</dd></div>
              <div><dt><PackageCheck aria-hidden="true" /> Minimum</dt><dd>{shop.minimum}</dd></div>
            </dl>
            <ol className="number-list"><li><span>1</span>Share final size and quantity.</li><li><span>2</span>Name the material and finishing.</li><li><span>3</span>Request and approve a proof.</li></ol>
            <Link href="/file-guide" className="btn-default">Open file guide</Link>
            <p className="sample-contact-note">This is an illustrative profile, not an active business listing. Contact details are shown only after a shop is reviewed.</p>
          </aside>
        </div>
        <div className="container"><Disclaimer /></div>
      </section>
    </>
  );
}
