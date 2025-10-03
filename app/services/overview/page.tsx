import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services Overview | Orca Intelligence Inc",
  description:
    "Overview of Orca services. Replace with exact Services copy from site.",
  alternates: { canonical: "/services/overview" },
  openGraph: {
    title: "Services Overview | Orca Intelligence Inc",
    description:
      "Overview of Orca services. Replace with exact Services copy from site.",
    url: "/services/overview",
  },
};

export default function ServicesOverviewPage() {
  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Services Overview</h1>
        <p className="mt-2 text-foreground/70 text-sm sm:text-base">
          Placeholder. Replace with Services Overview content from orcaaudit.com.
        </p>
      </div>
    </main>
  );
}


