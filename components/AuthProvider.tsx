"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LocalListing = {
  id: string;
  shopName: string;
  city: string;
  ownerEmail: string;
  status: "Saved locally";
  createdAt: string;
};

type AuthValue = {
  email: string | null;
  savedSlugs: string[];
  listings: LocalListing[];
  signIn: (email: string) => void;
  signOut: () => void;
  toggleSaved: (slug: string) => void;
  addListing: (listing: Omit<LocalListing, "id" | "status" | "createdAt">) => void;
};

const AuthContext = createContext<AuthValue | null>(null);
const authKey = "priscilla-prints-auth";
const savedKey = "priscilla-prints-saved";
const listingsKey = "priscilla-prints-listings";

function readArray<T>(key: string): T[] {
  try {
    return JSON.parse(window.localStorage.getItem(key) || "[]") as T[];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [listings, setListings] = useState<LocalListing[]>([]);

  useEffect(() => {
    queueMicrotask(() => {
      setEmail(window.localStorage.getItem(authKey));
      setSavedSlugs(readArray<string>(savedKey));
      setListings(readArray<LocalListing>(listingsKey));
    });
  }, []);

  const value = useMemo<AuthValue>(() => ({
    email,
    savedSlugs,
    listings,
    signIn: (nextEmail) => {
      const normalized = nextEmail.trim().toLowerCase();
      window.localStorage.setItem(authKey, normalized);
      setEmail(normalized);
    },
    signOut: () => {
      window.localStorage.removeItem(authKey);
      setEmail(null);
    },
    toggleSaved: (slug) => {
      setSavedSlugs((current) => {
        const next = current.includes(slug)
          ? current.filter((item) => item !== slug)
          : [...current, slug];
        window.localStorage.setItem(savedKey, JSON.stringify(next));
        return next;
      });
    },
    addListing: (listing) => {
      setListings((current) => {
        const next: LocalListing[] = [
          ...current,
          {
            ...listing,
            id: crypto.randomUUID(),
            status: "Saved locally",
            createdAt: new Date().toISOString()
          }
        ];
        window.localStorage.setItem(listingsKey, JSON.stringify(next));
        return next;
      });
    }
  }), [email, listings, savedSlugs]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
