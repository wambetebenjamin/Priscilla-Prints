import Link from "next/link";

export function PageHero({ title, current, description }: { title: string; current?: string; description?: string }) {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <span className="eyebrow">Priscilla Prints</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <ol aria-label="Breadcrumb">
          <li><Link href="/">Home</Link></li>
          <li aria-current="page">{current || title}</li>
        </ol>
      </div>
    </section>
  );
}
