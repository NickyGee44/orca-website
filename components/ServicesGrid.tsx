"use client";

type Service = {
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  { title: "Freight Audit", description: "Placeholder – swap with exact phrasing." },
  { title: "Freight Payment", description: "Placeholder – swap with exact phrasing." },
  { title: "Freight Claims Processing", description: "Placeholder – swap with exact phrasing." },
  { title: "Freight Rating", description: "Placeholder – swap with exact phrasing." },
  { title: "Freight Invoice Management", description: "Placeholder – swap with exact phrasing." },
  { title: "Freight Accounting", description: "Placeholder – swap with exact phrasing." },
  { title: "Supply Chain Analytics", description: "Placeholder – swap with exact phrasing." },
];

import { motion } from "framer-motion";

export default function ServicesGrid() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          What Does Orca Do?
        </h2>
        <p className="mt-2 text-foreground/70 text-sm sm:text-base">Seven core services at a glance.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((svc, i) => (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              className="rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors p-5 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-medium text-foreground">{svc.title}</h3>
              <p className="mt-2 text-foreground/70 text-sm">{svc.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}



