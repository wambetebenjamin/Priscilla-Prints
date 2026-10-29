import { Info } from "lucide-react";

export function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`disclaimer ${compact ? "disclaimer-compact" : ""}`}>
      <Info aria-hidden="true" />
      <div><strong>Independent directory only.</strong> We do not print, take payment or guarantee turnaround. Deal directly with shops. Confirm materials, artwork rights, proofing, cost and timing yourself.</div>
    </aside>
  );
}
