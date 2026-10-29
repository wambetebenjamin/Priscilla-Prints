import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Shop } from "@/data/shops";
import { SaveShopButton } from "@/components/SaveShopButton";

export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <article className="shop-card">
      <div className="shop-image-wrap">
        <Image src={shop.image} alt={shop.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="sample-badge">Sample listing</span>
      </div>
      <div className="shop-card-body">
        <div className="shop-card-heading">
          <div>
            <p className="shop-location"><MapPin aria-hidden="true" size={15} /> {shop.area}, {shop.city}</p>
            <h2><Link href={`/shops/${shop.slug}`}>{shop.name}</Link></h2>
          </div>
          <SaveShopButton slug={shop.slug} compact />
        </div>
        <p>{shop.summary}</p>
        <ul className="service-tags" aria-label="Services">
          {shop.services.map((service) => <li key={service}>{service}</li>)}
        </ul>
        <Link className="card-link" href={`/shops/${shop.slug}`}>View shop details <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
