import type { Metadata } from "next";
import { loadPage } from "../../lib/content";
import FAQSchema from "../../components/FAQSchema";

const meta = loadPage<any>("faq");

export const metadata: Metadata = {
  title: meta.seo.title,
  description: meta.seo.description,
  alternates: { canonical: meta.seo.canonical },
};

export default function FaqPage() {
  const data = loadPage<any>("faq");
  return (
    <main className="w-full py-16 sm:py-20">
      <FAQSchema items={data.items} />
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Freight Audit FAQ | Implementation, Savings, Integrations</h1>
        <p className="mt-2 text-foreground/70 text-sm sm:text-base max-w-3xl">Answers on carriers supported, SLAs, implementation, reporting, and pricing model.</p>
        <div className="mt-6 divide-y divide-foreground/10 rounded-xl border border-foreground/10 bg-foreground/5">
          {data.items.map((it: any, idx: number) => (
            <details key={idx} className="group p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-foreground/90">
                <span className="text-sm sm:text-base">{it.q}</span>
                <span className="ml-3 text-foreground/60 group-open:rotate-180 transition"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4"><path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </summary>
              <div className="mt-2 text-sm text-foreground/70">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}


