import type { Metadata } from "next";
import Link from "next/link";
import { ShimmerButton } from "../../components/ui/ShimmerButton";
import { loadPage } from "../../lib/content";

export const metadata: Metadata = {
  title: "Freight Audit & Analytics Company | Orca Intelligence Inc",
  description: "Get full supply chain visibility and be more profitable.",
  alternates: { canonical: "/freight-audit-analytics" }
};

function Icon({ name }: { name: string }) {
  const className = "h-5 w-5 text-foreground/80";
  switch (name) {
    case "check":
      return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>);
    case "audit":
      return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 8h10M7 12h6" strokeLinecap="round"/></svg>);
    case "analytics":
      return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}><path d="M4 20h16" strokeLinecap="round"/><rect x="6" y="10" width="3" height="8" rx="1"/><rect x="11" y="6" width="3" height="12" rx="1"/><rect x="16" y="13" width="3" height="5" rx="1"/></svg>);
    default:
      return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}><circle cx="12" cy="12" r="9"/></svg>);
  }
}

export default function FAAOverviewPage() {
  const data = loadPage<any>("freight-audit-analytics");
  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{data.hero.title}</h1>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base">{data.hero.subtitle}</p>
          <div className="mt-4"><Link href={data.hero.cta.href}><ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">{data.hero.cta.label}</ShimmerButton></Link></div>
        </header>

        <section className="space-y-3">
          <p className="text-foreground/80">{data.positioning}</p>
          <p className="text-foreground/80">{data.whyDifferent}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Key Benefits</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.benefits.map((b: string) => (
              <div key={b} className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-foreground/5 p-3">
                <Icon name="check" />
                <span className="text-sm text-foreground/80">{b}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2"><Icon name="audit"/> Audit</h3>
            <ul className="mt-3 space-y-2">
              {data.features.audit.map((f: string) => (<li key={f} className="flex items-start gap-2 text-sm text-foreground/80"><Icon name="check"/><span>{f}</span></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2"><Icon name="analytics"/> Analytics</h3>
            <ul className="mt-3 space-y-2">
              {data.features.analytics.map((f: string) => (<li key={f} className="flex items-start gap-2 text-sm text-foreground/80"><Icon name="check"/><span>{f}</span></li>))}
            </ul>
          </div>
        </section>

        <div><Link href={data.cta.href}><ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">{data.cta.label}</ShimmerButton></Link></div>
      </div>
    </main>
  );
}


