"use client";

import { motion } from "framer-motion";

type ValueItem = {
  title: string;
  description: string;
};

const VALUES: ValueItem[] = [
  {
    title: "Trusted Security",
    description:
      "Placeholder copy – swap with Orca’s value prop. Clear, benefit-led, concise.",
  },
  {
    title: "Expert Audits",
    description:
      "Placeholder copy – swap with Orca’s value prop. Clear, benefit-led, concise.",
  },
  {
    title: "Faster Delivery",
    description:
      "Placeholder copy – swap with Orca’s value prop. Clear, benefit-led, concise.",
  },
  {
    title: "Proven Results",
    description:
      "Placeholder copy – swap with Orca’s value prop. Clear, benefit-led, concise.",
  },
];

export default function ValueGrid() {
  return (
    <section className="w-full py-16 sm:py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            Why Orca
          </h2>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base">
            Four premium tiles with hover accent and smooth reveal. Light/dark supported.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {VALUES.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition-colors p-5 sm:p-6"
           >
              <h3 className="text-base sm:text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-foreground/70 text-sm">
                {item.description}
              </p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}



