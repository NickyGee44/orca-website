import Image from "next/image";

export default function Articles() {
  const items = [
    {
      title: "Is It Time To Audit Your Auditor?",
      blurb: "Your legacy freight auditor is likely compromising your profitability. Learn how to audit your auditor using 3 key criteria.",
      image: "/is-it-time-to-audit-your-auditor-post.png",
    },
    {
      title: "Is Your Stack of Unconsolidated Freight Invoices Leaking Money?",
      blurb: "Learn the 10 key benefits of freight invoice consolidation and why it’s critical to shipping cost control, visibility and bottom line savings.",
      image: "/is-your-stack-of-unconsolidated-freight-invoices-leaking-money.png",
    },
    {
      title: "Are You Handing Over Your Profits to Your Carriers?",
      blurb: "Learn how end-to-end freight auditing, payment processing and discrepancy resolution can eliminate overpayments and increase profits.",
      image: "/block-bg.png",
    },
  ];
  return (
    <section id="articles" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What You Need to Know</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((it) => (
            <article key={it.title} className="rounded-xl border border-foreground/10 bg-foreground/5 overflow-hidden">
              <div className="relative h-44 w-full">
                <Image src={it.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-medium text-foreground">{it.title}</h3>
              <p className="mt-2 text-foreground/70 text-sm">{it.blurb}</p>
              <a href="/blog" className="mt-3 inline-block text-sm text-foreground/80 hover:text-foreground underline underline-offset-4">Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


