"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Bookmark, LogOut, UserRound, X } from "lucide-react";
import { shops } from "@/data/shops";
import { useAuth } from "@/components/AuthProvider";

export function AccountPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { email, listings, savedSlugs, signIn, signOut } = useAuth();
  const [input, setInput] = useState("");
  const saved = shops.filter((shop) => savedSlugs.includes(shop.slug));
  const ownListings = email ? listings.filter((listing) => listing.ownerEmail === email) : [];

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input.trim()) {
      signIn(input);
      setInput("");
    }
  }

  if (!open) return null;

  return (
    <div className="panel-backdrop" role="presentation" onMouseDown={onClose}>
      <aside
        className="account-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="panel-heading">
          <div>
            <span className="eyebrow">Light account</span>
            <h2 id="account-title">Saved shops & my listing</h2>
          </div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close account panel">
            <X aria-hidden="true" />
          </button>
        </div>

        {!email ? (
          <form className="signin-card" onSubmit={submit}>
            <UserRound aria-hidden="true" size={28} />
            <h3>Keep it simple</h3>
            <p>Use an email on this device to group saved shops and listings. No password or dashboard.</p>
            <label htmlFor="account-email">Email address</label>
            <input
              id="account-email"
              type="email"
              required
              autoComplete="email"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="you@example.com"
            />
            <button className="btn-default" type="submit">Continue</button>
          </form>
        ) : (
          <>
            <div className="signed-in-row">
              <div>
                <small>Using this device as</small>
                <strong>{email}</strong>
              </div>
              <button type="button" className="text-button" onClick={signOut}>
                <LogOut aria-hidden="true" size={16} /> Sign out
              </button>
            </div>

            <section className="panel-section" aria-labelledby="saved-title">
              <h3 id="saved-title"><Bookmark aria-hidden="true" size={18} /> Saved shops</h3>
              {saved.length ? (
                <ul className="panel-list">
                  {saved.map((shop) => (
                    <li key={shop.slug}>
                      <Link href={`/shops/${shop.slug}`} onClick={onClose}>
                        <strong>{shop.name}</strong>
                        <span>{shop.city} · {shop.services[0]}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : <p className="empty-note">No saved shops yet. Use the bookmark button in the directory.</p>}
            </section>

            <section className="panel-section" aria-labelledby="listing-title">
              <h3 id="listing-title">My listing</h3>
              {ownListings.length ? (
                <ul className="panel-list">
                  {ownListings.map((listing) => (
                    <li key={listing.id}>
                      <strong>{listing.shopName}</strong>
                      <span>{listing.city} · {listing.status}</span>
                    </li>
                  ))}
                </ul>
              ) : <p className="empty-note">No listing saved for this email.</p>}
              <Link className="inline-link" href="/list" onClick={onClose}>Add or review a listing</Link>
            </section>
          </>
        )}
      </aside>
    </div>
  );
}
