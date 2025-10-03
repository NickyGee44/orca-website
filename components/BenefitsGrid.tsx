"use client";

type Benefit = { title: string; description: string };

const BENEFITS: Benefit[] = [
  { title: "Cost Reduction", description: "Placeholder – swap with exact benefit copy." },
  { title: "Process Optimization", description: "Placeholder – swap with exact benefit copy." },
  { title: "Visibility", description: "Placeholder – swap with exact benefit copy." },
  { title: "Accuracy", description: "Placeholder – swap with exact benefit copy." },
  { title: "Recovery", description: "Placeholder – swap with exact benefit copy." },
  { title: "Insights", description: "Placeholder – swap with exact benefit copy." },
];

import { motion } from "framer-motion";

export default function BenefitsGrid() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">What are the Key Benefits?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BENEFITS.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              className="rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors p-5 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-medium text-foreground">{b.title}</h3>
              <p className="mt-2 text-foreground/70 text-sm">{b.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}



