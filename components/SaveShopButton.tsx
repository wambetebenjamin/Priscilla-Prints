"use client";

import { Bookmark } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export function SaveShopButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const { savedSlugs, toggleSaved } = useAuth();
  const isSaved = savedSlugs.includes(slug);

  return (
    <button
      className={compact ? "save-button save-button-compact" : "save-button"}
      type="button"
      aria-pressed={isSaved}
      onClick={() => toggleSaved(slug)}
    >
      <Bookmark aria-hidden="true" size={17} fill={isSaved ? "currentColor" : "none"} />
      {isSaved ? "Saved" : "Save shop"}
    </button>
  );
}
