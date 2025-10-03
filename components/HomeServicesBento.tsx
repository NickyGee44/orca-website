import { BentoCard, BentoGrid } from "./ui/BentoGrid";
import { navConfig } from "../config/nav";

export default function HomeServicesBento() {
  const servicesMenu = navConfig.find((i) => i.label === "Services");
  const items = servicesMenu?.children ?? [];
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What Does Orca Do?</h2>
        <p className="mt-2 text-foreground/70 text-sm sm:text-base max-w-3xl">
          Explore our Freight Audit & Analytics suite and related services.
        </p>
        <div className="mt-8">
          <BentoGrid>
            {items.map((c) => (
              <BentoCard key={c.label} name={c.label} href={c.href} description="Learn more" />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}


