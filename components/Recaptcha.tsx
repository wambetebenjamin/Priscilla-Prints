"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const testSiteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

declare global {
  interface Window {
    grecaptcha?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

export function Recaptcha({ onToken }: { onToken: (token: string) => void }) {
  const id = useId().replaceAll(":", "");
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<number | null>(null);
  const [ready, setReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || testSiteKey;

  const renderWidget = useCallback(() => {
    if (!container.current || !window.grecaptcha || widget.current !== null) return;
    widget.current = window.grecaptcha.render(container.current, {
      sitekey: siteKey,
      callback: (token: string) => onToken(token),
      "expired-callback": () => onToken(""),
      "error-callback": () => onToken("")
    });
    setReady(true);
  }, [onToken, siteKey]);

  useEffect(() => {
    renderWidget();
  }, [renderWidget]);

  return (
    <div className="recaptcha-wrap">
      <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" onLoad={renderWidget} />
      <div id={`recaptcha-${id}`} ref={container} />
      {!ready && <small>Loading spam protection…</small>}
    </div>
  );
}
