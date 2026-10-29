import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span className="eyebrow">404</span><h1>That page is not in the directory</h1><p>Check the address or return to the shop listings.</p><Link href="/shops" className="btn-default">Browse shops</Link></div></section>;
}
