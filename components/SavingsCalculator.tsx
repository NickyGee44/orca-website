"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type RangeItem = {
  label: string;
  audit: number;
  contract: number;
};

const RANGES: RangeItem[] = [
  { label: "$0 - $500,000", audit: 15000, contract: 105000 },
  { label: "$500,000 - $1,000,000", audit: 30000, contract: 210000 },
  { label: "$1,000,000 - $3,000,000", audit: 60000, contract: 420000 },
  { label: "$3,000,000 - $5,000,000", audit: 150000, contract: 1050000 },
  { label: "$5,000,000 - $10,000,000", audit: 300000, contract: 2100000 },
  { label: "$10,000,000 - $20,000,000", audit: 600000, contract: 4200000 },
  { label: "$20,000,000+", audit: 630000, contract: 4500000 },
];

function useCountUp(target: number, deps: any[] = [], durationMs = 700) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const fromRef = useRef(0);
  const toRef = useRef(target);

  useEffect(() => {
    fromRef.current = value;
    toRef.current = target;
    startRef.current = null;
    let raf = 0;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      const next = Math.round(fromRef.current + (toRef.current - fromRef.current) * eased);
      setValue(next);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return value;
}

export default function SavingsCalculator() {
  const [selected, setSelected] = useState<RangeItem>(RANGES[0]);
  const audit = useCountUp(selected.audit, [selected.audit]);
  const contract = useCountUp(selected.contract, [selected.contract]);
  const [showModal, setShowModal] = useState(false);

  const onPick = (next: RangeItem) => {
    // small delay before animating for a premium feel
    setTimeout(() => setSelected(next), 120);
  };

  const currency = useMemo(
    () => new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
    []
  );

  return (
    <section id="savings" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-3">
          <SparkleIcon className="h-5 w-5 text-emerald-400" />
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Calculate Your Freight Savings Now!</h2>
        </div>

        <div className="mt-4 grid gap-6 sm:grid-cols-3 justify-items-center">
          <div className="w-full sm:w-[320px] rounded-2xl border border-foreground/10 bg-foreground/5 p-5 sm:p-6 backdrop-blur">
            <label className="block text-sm text-foreground/70">Annual shipping cost</label>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {RANGES.map((r) => (
                <button
                  key={r.label}
                  onClick={() => onPick(r)}
                  className={`rounded-full px-3 py-1.5 text-xs border transition-colors ${
                    selected.label === r.label
                      ? "bg-foreground text-background border-foreground/80"
                      : "border-foreground/20 text-foreground/80 hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-foreground/60">These are savings estimates. Please contact us for exact savings.</p>
          </div>

          <motion.div
            key={`audit-${selected.label}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative w-full sm:w-[320px] overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 p-5 sm:p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)] bg-gradient-to-br from-emerald-400/40 via-cyan-400/30 to-transparent" />
            <div className="relative z-10 flex items-center gap-2 text-sm text-foreground/70">
              <DollarIcon className="h-4 w-4 text-emerald-400" /> Audit
            </div>
            <div className="relative z-10 mt-1 text-2xl font-semibold">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Up to {currency.format(audit)}</span>
            </div>
            {/* Thermometer bar */}
            <Thermometer value={audit} max={Math.max(...RANGES.map(r=>r.audit))} />
          </motion.div>

          <motion.div
            key={`contract-${selected.label}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="relative w-full sm:w-[320px] overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 p-5 sm:p-6 backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)] bg-gradient-to-br from-cyan-400/40 via-emerald-400/30 to-transparent" />
            <div className="relative z-10 flex items-center gap-2 text-sm text-foreground/70">
              <OptimizeIcon className="h-4 w-4 text-cyan-400" /> Contract optimization
            </div>
            <div className="relative z-10 mt-1 text-2xl font-semibold">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Up to {currency.format(contract)}</span>
            </div>
            {/* Thermometer bar */}
            <Thermometer value={contract} max={Math.max(...RANGES.map(r=>r.contract))} />
          </motion.div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#" onClick={(e)=>{e.preventDefault(); setShowModal(true);}} className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-3 text-sm font-medium hover:opacity-90 shadow-ambient">
            Claim my refunds today
          </a>
          <a href="#" onClick={(e)=>{e.preventDefault(); setShowModal(true);}} className="rounded-full border border-foreground/20 px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/40">
            Get my free analysis
          </a>
        </div>

        {showModal && <LeadModal onClose={()=>setShowModal(false)} />}
      </div>
    </section>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l1.8 4.5L18 8.2l-4.2 1.7L12 14l-1.8-4.1L6 8.2l4.2-1.7L12 2zm6 10l1 2.5 2.5 1L19 17l-1 2.5L17 17l-2.5-1L17 14l1-2zM5 13l.8 2 2 .8-2 .8L5 19l-.8-2.4-2-.8 2-.8L5 13z" />
    </svg>
  );
}

function DollarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M12 1v22M7 7c0-2 2-3 5-3s5 1 5 3-2 3-5 3-5 1-5 3 2 3 5 3 5-1 5-3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function OptimizeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M3 12a9 9 0 1018 0A9 9 0 003 12z" />
      <path d="M7 13l3-3 3 3 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Thermometer({ value, max }: { value: number; max: number }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  // Emphasize small/medium values so they feel more significant
  const displayPct = Math.max(6, Math.min(100, Math.round(Math.sqrt(pct / 100) * 100)));
  const isHot = pct >= 90;
  const gradientClass = isHot
    ? "from-orange-500 via-red-500 to-red-600"
    : "from-amber-300 via-orange-400 to-red-500";

  return (
    <div className="relative mt-4 h-3 w-full rounded-full bg-foreground/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${displayPct}%`, x: isHot ? [0, 1.2, -1.2, 0] : 0 }}
        transition={{ duration: 0.7, ease: "easeOut", repeat: isHot ? Infinity : 0, repeatType: "loop", repeatDelay: 0.1 }}
        className={`h-full bg-gradient-to-r ${gradientClass} shadow-[0_0_18px_rgba(255,100,50,0.35)]`}
      />
    </div>
  );
}

function LeadModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative mx-4 w-full max-w-lg rounded-2xl border border-foreground/10 bg-background p-6 shadow-ambient">
        <h3 className="text-lg font-semibold text-foreground">Get your free analysis</h3>
        <form className="mt-4 grid gap-3" onSubmit={(e)=>{e.preventDefault(); onClose();}}>
          <input required placeholder="Name" className="rounded-lg border border-foreground/15 bg-background/70 px-3 py-2 text-foreground" />
          <input required type="email" placeholder="Email" className="rounded-lg border border-foreground/15 bg-background/70 px-3 py-2 text-foreground" />
          <input placeholder="Company" className="rounded-lg border border-foreground/15 bg-background/70 px-3 py-2 text-foreground" />
          <input placeholder="Phone" className="rounded-lg border border-foreground/15 bg-background/70 px-3 py-2 text-foreground" />
          <div className="mt-2 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="rounded-full border border-foreground/20 px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/40">Cancel</button>
            <button type="submit" className="rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 text-sm font-medium">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}


