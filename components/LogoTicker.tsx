export default function LogoTicker() {
  const items = ["Carrier A", "Carrier B", "3PL C", "Retail D", "B2B E"];
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          Trusted by logistics leaders
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-[ticker_28s_linear_infinite] flex gap-10 opacity-70">
            {items.concat(items).map((it, i) => (
              <div key={i} className="min-w-max text-neutral-700 dark:text-neutral-300">
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


