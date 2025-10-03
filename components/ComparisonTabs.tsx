"use client";

import React from "react";

export default function ComparisonTabs() {
  const tabs = {
    Audit: [
      "Detailed Invoice Checks",
      "Error Detection",
      "Cost Recovery",
      "Contract Compliance",
      "Discrepancy Reports",
      "Rate Validation",
    ],
    Analytics: [
      "Data Analysis",
      "Cost Optimization",
      "Efficiency Improvements",
      "Trend Forecasting",
      "Performance Tracking",
      "Benchmarking",
    ],
  } as const;
  const [active, setActive] = React.useState<keyof typeof tabs>("Audit");
  return (
    <section id="comparison" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Audit vs. Analytics: What’s Right for You?</h2>
          <div className="flex gap-2">
            {(Object.keys(tabs) as Array<keyof typeof tabs>).map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full border px-4 py-2 text-sm ${
                  active === t
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black"
                    : "border-neutral-300/70 dark:border-neutral-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {tabs[active].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200/80 bg-white/70 p-4 text-sm backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-900/60"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


