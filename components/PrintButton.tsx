"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return <button type="button" className="btn-default" onClick={() => window.print()}><Printer aria-hidden="true" size={17} /> Print checklist</button>;
}
