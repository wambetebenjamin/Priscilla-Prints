"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cookieName = "priscilla-prints-cookie-consent";

type Consent = "accepted" | "essential";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setVisible(!window.localStorage.getItem(cookieName)));
  }, []);

  function save(value: Consent) {
    window.localStorage.setItem(cookieName, value);
    document.cookie = `${cookieName}=${value}; path=/; max-age=31536000; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-labelledby="cookie-title" aria-live="polite">
      <div>
        <strong id="cookie-title">Your privacy, kept clear</strong>
        <p>We use essential storage for language, saved shops and your consent choice. Optional preferences stay on this device. <Link href="/privacy">Read the privacy notice</Link>.</p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="btn-secondary" onClick={() => save("essential")}>Essential only</button>
        <button type="button" className="btn-default" onClick={() => save("accepted")}>Accept</button>
      </div>
    </aside>
  );
}
