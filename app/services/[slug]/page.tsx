import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadPage } from "../../../lib/content";
import { ShimmerButton } from "../../../components/ui/ShimmerButton";

const valid = new Set([
  "freight-audit",
  "freight-payment",
  "freight-claims-processing",
  "freight-rating",
  "freight-invoice-management",
  "freight-accounting",
  "supply-chain-analytics",
]);

export const metadata: Metadata = {
  title: "Services | Orca Intelligence Inc",
  description: "Orca services",
};

function Icon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-foreground/80"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

type ServiceData = { title: string; intro: string; benefits: string[]; features: string[]; cta: { label: string; href: string } };

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!valid.has(slug)) return notFound();
  const data = loadPage<ServiceData>(`services/${slug}`);

  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{data.title}</h1>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base max-w-3xl">{data.intro}</p>
          <div className="mt-4"><Link href={data.cta.href}><ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">{data.cta.label}</ShimmerButton></Link></div>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Benefits</h2>
            <ul className="mt-3 space-y-2">
              {data.benefits.map((b) => (<li key={b} className="flex items-start gap-2 text-sm text-foreground/80"><Icon /><span>{b}</span></li>))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Features</h2>
            <ul className="mt-3 space-y-2">
              {data.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-foreground/80"><Icon /><span>{f}</span></li>))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
