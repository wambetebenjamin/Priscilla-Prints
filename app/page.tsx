"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { BookOpenCheck, CheckCircle2, FileCheck2, MapPin, MessageSquareText, Search, ShieldCheck, Shirt, SwatchBook, PanelsTopLeft } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";
import { ServiceTabs } from "@/components/ServiceTabs";
import { cities, serviceOptions } from "@/data/shops";

export default function HomePage() {
  const { t } = useI18n();
  const router = useRouter();

  function find(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/shops");
  }

  return (
    <>
      <section className="hero-slider" aria-labelledby="home-title">
        <Image className="hero-image" src="/images/screen-printer.jpg" alt="Screen print operator preparing a frame in a community workshop" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="slide-info">
            <b>{t("heroKicker")}</b>
            <h1 id="home-title">{t("heroTitle")}</h1>
            <p>{t("heroBody")}</p>
            <div className="hero-actions">
              <Link href="/shops" className="btn-default">{t("findShop")}</Link>
              <Link href="/file-guide" className="btn-ghost">{t("prepareFile")}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro">
            <span className="eyebrow">Clear choices, close to home</span>
            <h2>{t("whyTitle")}</h2>
            <p className="lead-copy">{t("whyBody")}</p>
            <ul className="intro-points">
              <li><MessageSquareText aria-hidden="true" /><h3>Talk before production</h3><p>Ask about the real material, proof and finishing method.</p></li>
              <li><FileCheck2 aria-hidden="true" /><h3>Prepare once</h3><p>Share final size, quantity and a clean export from the start.</p></li>
              <li><ShieldCheck aria-hidden="true" /><h3>Keep control</h3><p>Agree directly on price, rights, timing and collection.</p></li>
            </ul>
          </div>
          <form className="get-quote-form" onSubmit={find}>
            <h2>Find the right local shop</h2>
            <p>Start with a city and the main process you need.</p>
            <label htmlFor="home-city">City</label>
            <select id="home-city" defaultValue="">
              <option value="" disabled>Choose a city</option>
              {cities.slice(1).map((city) => <option key={city}>{city}</option>)}
            </select>
            <label htmlFor="home-service">Service</label>
            <select id="home-service" defaultValue="">
              <option value="" disabled>Choose a service</option>
              {serviceOptions.map((service) => <option key={service}>{service}</option>)}
            </select>
            <button className="btn-default" type="submit"><Search aria-hidden="true" size={17} /> Browse directory</button>
            <small>Listings are independent. Always confirm details yourself.</small>
          </form>
        </div>
      </section>

      <section className="product-tab">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Choose by process</span>
            <h2>{t("featuredTitle")}</h2>
            <p>Start with what you are making, then ask a shop which method fits the material, quantity and budget.</p>
          </div>
          <ServiceTabs />
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">A better first conversation</span><h2>Bring the useful details</h2></div>
          <div className="services-grid">
            <article className="services-dtl"><MapPin aria-hidden="true" /><h3>Final size</h3><p>Use millimetres or centimetres and state orientation.</p></article>
            <article className="services-dtl"><SwatchBook aria-hidden="true" /><h3>Material</h3><p>Name the paper, fabric or garment you expect.</p></article>
            <article className="services-dtl"><Shirt aria-hidden="true" /><h3>Quantity</h3><p>Give the total and any split by size or version.</p></article>
            <article className="services-dtl"><PanelsTopLeft aria-hidden="true" /><h3>Colour</h3><p>Share references and ask how the process handles them.</p></article>
            <article className="services-dtl"><BookOpenCheck aria-hidden="true" /><h3>Finishing</h3><p>Include folds, binding, trimming, eyelets or packing.</p></article>
            <article className="services-dtl"><CheckCircle2 aria-hidden="true" /><h3>Proof</h3><p>Approve a physical or digital proof before the full run.</p></article>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container local-proof-grid">
          <div className="proof-images">
            <div className="proof-image-main"><Image src="/images/fabric-shop-cotonou.jpg" alt="Fabric seller arranging African print textiles in Cotonou" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
            <div className="proof-image-small"><Image src="/images/press-quality.jpg" alt="Print operator inspecting a finished print" fill sizes="220px" /></div>
          </div>
          <div className="proof-copy">
            <span className="eyebrow eyebrow-light">Local knowledge</span>
            <h2>{t("citiesTitle")}</h2>
            <blockquote>“A clear file is helpful. A clear conversation about the material and use is better.”</blockquote>
            <p>Use the directory to make a shortlist. Visit or contact the shop, ask to see similar work and request a proof. The shop remains responsible for its own quote and service.</p>
            <Link href="/cities" className="btn-default">Explore cities</Link>
          </div>
        </div>
      </section>

      <section className="recent-news">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">Three simple steps</span><h2>{t("howTitle")}</h2></div>
          <div className="steps-grid">
            <article className="news-sec-box"><span>01</span><Search aria-hidden="true" /><h3>Filter your options</h3><p>Choose a city and the process closest to your job.</p><Link href="/shops">Browse shops</Link></article>
            <article className="news-sec-box"><span>02</span><FileCheck2 aria-hidden="true" /><h3>Ready the file</h3><p>Check size, bleed, image quality, fonts and rights.</p><Link href="/file-guide">Use the checklist</Link></article>
            <article className="news-sec-box"><span>03</span><MessageSquareText aria-hidden="true" /><h3>Confirm directly</h3><p>Agree on material, proof, payment and collection with the shop.</p><Link href="/services">Compare print types</Link></article>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container partner-row">
          <div><span className="eyebrow">Growing city examples</span><h2><b>Nairobi</b> · Mombasa · Kisumu · Nakuru · Eldoret · Kampala</h2></div>
          <Link href="/list" className="btn-default">Add your shop</Link>
        </div>
      </section>
    </>
  );
}
