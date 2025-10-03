export default function SolutionAndAudience() {
  return (
    <section id="solution" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 sm:grid-cols-2">
        <div className="h-px bg-foreground/10 col-span-full mb-6" />
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Freight Audit & Analytics Solution</h3>
          <p className="mt-3 text-foreground/80">
            Supply chain visibility and intelligence to keep you lean and profitable. Our leading-edge
            technology ensures your invoices are 100% accurate, while gathering all critical supply chain
            data and presenting it to you via interactive dashboards customized to your KPIs. It’s time to
            take control of your transportation spend. Our Freight Audit & Analytics solution will help you get there.
          </p>
          <div className="mt-5">
            <a href="/services" className="rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90">Get Started Now</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">Who benefits?</h3>
          <ul className="mt-3 space-y-3 text-foreground/80">
            <li className="flex items-start gap-3">
              <img src="/csuite-benefits-1.png" alt="C-Suite" className="mt-0.5 h-6 w-6" />
              <div><span className="font-medium">C-Suite</span> — Gain deep insight into supply chain performance and save on costs.</div>
            </li>
            <li className="flex items-start gap-3">
              <img src="/finance-benefits-2.png" alt="Finance" className="mt-0.5 h-6 w-6" />
              <div><span className="font-medium">Finance</span> — Quickly identify overcharges and get refunds.</div>
            </li>
            <li className="flex items-start gap-3">
              <img src="/operations-benefits-3.png" alt="Operations" className="mt-0.5 h-6 w-6" />
              <div><span className="font-medium">Operations</span> — Obtain centralized and mobile supply chain visibility and reporting.</div>
            </li>
            <li className="flex items-start gap-3">
              <img src="/logistics-benefits-4.png" alt="Logistics" className="mt-0.5 h-6 w-6" />
              <div><span className="font-medium">Logistics</span> — Get the best carrier rates and optimize your supply chain.</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}


