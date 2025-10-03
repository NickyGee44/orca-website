type Row = { audit: string; analytics: string };

const ROWS: Row[] = [
  { audit: "Validates invoice accuracy", analytics: "Identifies trends and optimizations" },
  { audit: "Finds overcharges/recoveries", analytics: "Drives strategy and forecasting" },
  { audit: "Ensures contract compliance", analytics: "Improves performance visibility" },
];

export default function ComparisonTable() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Audit vs. Analytics</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-foreground/10">
          <table className="min-w-full text-sm">
            <thead className="bg-foreground/5 text-foreground">
              <tr>
                <th className="text-left p-4 font-medium">Freight Audit</th>
                <th className="text-left p-4 font-medium">Analytics</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i} className="even:bg-foreground/5">
                  <td className="p-4 text-foreground/80">{r.audit}</td>
                  <td className="p-4 text-foreground/80">{r.analytics}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}



