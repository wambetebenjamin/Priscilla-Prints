import type { Metadata } from "next";
import Link from "next/link";
import { Check, FileCheck2, TriangleAlert } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = { title: "Artwork and file guide", description: "A simple file readiness checklist for local print jobs." };

const checks = [
  ["Final size", "Set the artwork to the intended trim or print size. Tell the shop if a file is supplied at scale."],
  ["Bleed and safe area", "Extend backgrounds beyond the cut edge and keep text away from trims, folds, seams and binding."],
  ["Images", "Use original, high-resolution images. Check effective resolution after scaling, not only the source file."],
  ["Colour", "Ask the shop which colour mode and profile it expects. Printed colour will not exactly match every screen."],
  ["Fonts", "Embed fonts in a PDF or outline display lettering when the shop requests it. Keep an editable source copy."],
  ["Transparency and effects", "Review flattened output at high zoom and check shadows, overprints and fine lines."],
  ["Pages and versions", "Name files clearly, remove old versions and confirm page order, quantities and language variants."],
  ["Artwork rights", "Use only images, logos, typefaces and designs you are allowed to reproduce."],
  ["Proof approval", "Check spelling, numbers, size, colour intent, placement and finishing before the full run."],
  ["Packaging and handover", "Agree how files are transferred, how prints are packed and who collects or installs them."]
];

export default function FileGuidePage() {
  return (
    <>
      <PageHero title="Is your file ready to print?" current="File guide" description="Use this plain checklist before you ask for a quote. Then confirm the shop's exact export settings." />
      <section className="content-section">
        <div className="container guide-intro">
          <div><span className="eyebrow">Artwork readiness</span><h2>One clean handover</h2><p className="lead-copy">A print-ready file is final, correctly sized and easy to identify. It should include the agreed production allowances without hiding missing decisions.</p></div>
          <aside><FileCheck2 aria-hidden="true" /><strong>Recommended handover</strong><p>PDF for final artwork, plus linked source files only when requested. Include a short written job brief.</p></aside>
        </div>
        <div className="container checklist-grid">
          {checks.map(([title, copy], index) => <article key={title} className="check-card"><span>{String(index + 1).padStart(2, "0")}</span><Check aria-hidden="true" /><h2>{title}</h2><p>{copy}</p></article>)}
        </div>
        <div className="container warning-box"><TriangleAlert aria-hidden="true" /><div><h2>Do not send files you do not have rights to print</h2><p>You are responsible for permissions covering logos, photographs, illustrations, typefaces, patterns and other protected work. A directory listing does not clear those rights.</p></div></div>
        <div className="container download-card"><div><span className="eyebrow">Take it to the shop</span><h2>Save this checklist</h2><p>Use your browser print command to save this page as a PDF, or keep it open while discussing the job.</p></div><PrintButton /><Link href="/shops" className="btn-secondary">Find a shop</Link></div>
      </section>
    </>
  );
}
