export default function Overcharged() {
  return (
    <section id="overcharged" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-foreground/10 mb-6" />
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">You Are Being Overcharged By Your Carriers</h2>
        <p className="mt-3 text-foreground/80 max-w-3xl">
          It’s not a question of if, it’s a question of how much. Although carrier invoices can be riddled with errors,
          our Freight Audit & Analytics technology identifies those errors and recovers the funds for you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">Claim my refunds today</a>
          <a href="/contact" className="rounded-full border border-foreground/20 px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/40">Get my free analysis</a>
        </div>
      </div>
    </section>
  );
}


