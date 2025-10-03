export default function Metrics() {
  const data = [
    { k: "$3.2M", l: "Recovered" },
    { k: "9.4%", l: "Contract Savings" },
    { k: "40h/mo", l: "Team Time Saved" },
  ];
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-3">
        {data.map((m) => (
          <div
            key={m.l}
            className="rounded-3xl border border-neutral-200/80 bg-white/70 p-6 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-900/60"
          >
            <div className="text-3xl font-semibold">{m.k}</div>
            <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


