"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FAQItem = {
  q: string;
  a: string;
};

const FAQS: FAQItem[] = [
  { q: "What industries do you support?", a: "Placeholder answer. Replace with your FAQ content." },
  { q: "How fast is onboarding?", a: "Placeholder answer. Replace with your FAQ content." },
  { q: "Do you support multi-carrier invoices?", a: "Placeholder answer. Replace with your FAQ content." },
  { q: "What data integrations are available?", a: "Placeholder answer. Replace with your FAQ content." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 divide-y divide-foreground/10 rounded-xl border border-foreground/10 bg-foreground/5">
          {FAQS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={item.q}
                className="w-full text-left p-5 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-foreground font-medium">{item.q}</span>
                  <span className="text-foreground/60 text-sm">{isOpen ? "−" : "+"}</span>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-foreground/70 text-sm sm:text-base">{item.a}</p>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


