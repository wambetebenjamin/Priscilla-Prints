"use client";

import { FormEvent, useCallback, useState } from "react";
import { Recaptcha } from "@/components/Recaptcha";
import { useAuth } from "@/components/AuthProvider";
import { serviceOptions } from "@/data/shops";

export function ListingForm() {
  const { addListing, email, listings, signIn } = useAuth();
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [reviewUrl, setReviewUrl] = useState("");
  const onToken = useCallback((value: string) => setToken(value), []);
  const mine = email ? listings.filter((listing) => listing.ownerEmail === email) : [];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setReviewUrl("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const ownerEmail = String(formData.get("email") || "").toLowerCase();
    const payload = {
      shopName: formData.get("shopName"),
      ownerName: formData.get("ownerName"),
      email: ownerEmail,
      phone: formData.get("phone"),
      city: formData.get("city"),
      area: formData.get("area"),
      services: formData.getAll("services"),
      description: formData.get("description"),
      rightsConfirmed: formData.get("rightsConfirmed") === "on",
      website: formData.get("website"),
      recaptchaToken: token
    };
    const response = await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      signIn(ownerEmail);
      addListing({ shopName: String(payload.shopName), city: String(payload.city), ownerEmail });
      const note = `Hello Priscilla Prints. Please review this listing.\n\nShop: ${payload.shopName}\nContact: ${payload.ownerName}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nLocation: ${payload.area}, ${payload.city}\nServices: ${payload.services.join(", ")}\n\n${payload.description}`;
      setReviewUrl(`https://wa.me/254112272061?text=${encodeURIComponent(note)}`);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="listing-layout">
      <form className="form-box listing-form" onSubmit={submit}>
        <div className="form-title"><h2>Shop details</h2><p>We review every submission before a public listing is considered.</p></div>
        <div className="form-content form-grid">
          <div><label htmlFor="shop-name">Shop name</label><input id="shop-name" name="shopName" required /></div>
          <div><label htmlFor="owner-name">Contact person</label><input id="owner-name" name="ownerName" required autoComplete="name" /></div>
          <div><label htmlFor="listing-email">Work email</label><input id="listing-email" name="email" type="email" defaultValue={email || ""} required autoComplete="email" /></div>
          <div><label htmlFor="listing-phone">Phone or WhatsApp</label><input id="listing-phone" name="phone" type="tel" required autoComplete="tel" /></div>
          <div><label htmlFor="listing-city">City</label><input id="listing-city" name="city" required /></div>
          <div><label htmlFor="listing-area">Area or neighbourhood</label><input id="listing-area" name="area" required /></div>
          <fieldset className="full-span service-checks">
            <legend>Services offered</legend>
            {serviceOptions.map((service) => <label key={service}><input type="checkbox" name="services" value={service} /> {service}</label>)}
          </fieldset>
          <div className="full-span"><label htmlFor="listing-description">Short description</label><textarea id="listing-description" name="description" rows={5} minLength={30} required placeholder="Materials, equipment, typical jobs and the questions customers should ask." /></div>
          <label className="full-span confirmation"><input type="checkbox" name="rightsConfirmed" required /> I have authority to submit this shop and permission to share its business details.</label>
          <div className="honeypot" aria-hidden="true"><label htmlFor="listing-website">Leave blank</label><input id="listing-website" name="website" tabIndex={-1} autoComplete="off" /></div>
          <div className="full-span"><Recaptcha onToken={onToken} /></div>
          <div className="full-span form-submit-row"><button className="btn-default" type="submit" disabled={!token || status === "sending"}>{status === "sending" ? "Checking…" : "Save listing details"}</button></div>
          <p className="full-span form-status" aria-live="polite">
            {status === "success" && "Listing saved on this device. Continue to WhatsApp to request review."}
            {status === "error" && "The listing could not be checked. Review the fields and try again."}
          </p>
          {reviewUrl && <a className="full-span btn-secondary form-next-action" href={reviewUrl} target="_blank" rel="noreferrer">Request review in WhatsApp</a>}
        </div>
      </form>

      <aside className="my-listings-card">
        <span className="eyebrow">Light account</span>
        <h2>My listing</h2>
        <p>No dashboard. Your email keeps submitted listings together on this device.</p>
        {email && <strong className="account-email">{email}</strong>}
        {mine.length ? <ul>{mine.map((listing) => <li key={listing.id}><b>{listing.shopName}</b><span>{listing.city} · {listing.status}</span></li>)}</ul> : <p className="empty-note">Your submitted listing will appear here.</p>}
      </aside>
    </div>
  );
}
