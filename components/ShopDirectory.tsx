"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { ShopCard } from "@/components/ShopCard";
import { cities, serviceOptions, shops } from "@/data/shops";

export function ShopDirectory() {
  const [city, setCity] = useState("All cities");
  const [service, setService] = useState("All services");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => shops.filter((shop) => {
    const cityMatch = city === "All cities" || shop.city === city;
    const serviceMatch = service === "All services" || shop.services.includes(service as never);
    const haystack = `${shop.name} ${shop.area} ${shop.city} ${shop.summary} ${shop.services.join(" ")}`.toLowerCase();
    return cityMatch && serviceMatch && haystack.includes(query.toLowerCase());
  }), [city, query, service]);

  return (
    <section className="directory-section">
      <div className="container">
        <div className="directory-toolbar" aria-label="Shop filters">
          <div className="filter-title"><SlidersHorizontal aria-hidden="true" /><span>Filter shops</span></div>
          <label><span>City</span><select value={city} onChange={(event) => setCity(event.target.value)}>{cities.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Service</span><select value={service} onChange={(event) => setService(event.target.value)}><option>All services</option>{serviceOptions.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label className="search-field"><span>Search</span><span className="input-with-icon"><Search aria-hidden="true" size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Name, area or service" /></span></label>
        </div>
        <div className="results-row"><p aria-live="polite"><strong>{filtered.length}</strong> sample {filtered.length === 1 ? "shop" : "shops"}</p><button type="button" className="text-button" onClick={() => { setCity("All cities"); setService("All services"); setQuery(""); }}>Clear filters</button></div>
        {filtered.length ? <div className="shop-grid">{filtered.map((shop) => <ShopCard key={shop.slug} shop={shop} />)}</div> : <div className="empty-results"><h2>No matching shops</h2><p>Try another city, service or search phrase.</p></div>}
      </div>
    </section>
  );
}
