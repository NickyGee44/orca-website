import type { Metadata } from "next";
import { navConfig } from "../../config/nav";
import { BentoCard, BentoGrid } from "../../components/ui/BentoGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Orca's services including Freight Audit, Payment, Claims Processing, Rating, Invoice Management, Accounting, and Supply Chain Analytics.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Orca Intelligence Inc",
    description:
      "Explore Orca's services including Freight Audit, Payment, Claims Processing, Rating, Invoice Management, Accounting, and Supply Chain Analytics.",
    url: "/services",
  },
};

export default function ServicesPage() {
  const servicesMenu = navConfig.find((i) => i.label === "Services");
  const items = servicesMenu?.children ?? [];
  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Services</h1>
        <p className="mt-2 text-foreground/70 text-sm sm:text-base max-w-3xl">
          We combine leading-edge Freight Audit & Analytics with a full suite of services to deliver savings and visibility across your supply chain.
        </p>
        <div className="mt-8">
          <BentoGrid>
            {items.map((c) => (
              <BentoCard
                key={c.label}
                name={c.label}
                href={c.href}
                description={c.description ?? "Click to explore"}
                background={c.image ? (
                  <div className="absolute inset-0 opacity-20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt="" className="h-full w-full object-cover grayscale" />
                  </div>
                ) : undefined}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </main>
  );
}


