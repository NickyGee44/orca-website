"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react").then(m => m.default), {
  ssr: false,
  loading: () => null,
});

type IntroOverlayProps = {
  lottieData?: unknown;
  durationMs?: number;
};

export default function IntroOverlay({ lottieData, durationMs = 1400 }: IntroOverlayProps) {
  // Start visible immediately to avoid one-frame flash of underlying UI
  const [show, setShow] = useState(true);
  const [autoLottie, setAutoLottie] = useState<unknown | null>(null);
  const timerRef = useRef<number | null>(null);
  const playbackSpeed = 1.5; // 50% faster

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Even if reduced motion is preferred, we still show a minimal overlay to meet the requirement

    setShow(true);

    const startTimer = (ms: number) => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setShow(false);
      }, ms) as unknown as number;
    };

    const tryFetch = async () => {
      let data: { fr?: number; ip?: number; op?: number } | null = null;
      try {
        const r1 = await fetch("/intro.json", { cache: "no-store" });
        if (r1.ok) data = await r1.json();
      } catch {}
      if (!data) {
        try {
          const r2 = await fetch("/logo.json", { cache: "no-store" });
          if (r2.ok) data = await r2.json();
        } catch {}
      }
      if (!data) {
        try {
          const r3 = await fetch("/Logo.json", { cache: "no-store" });
          if (r3.ok) data = await r3.json();
        } catch {}
      }
      if (data) setAutoLottie(data);

      const computedMs = (() => {
        try {
          const fr = data?.fr ?? null;
          const ip = data?.ip ?? null;
          const op = data?.op ?? null;
          if (fr && ip !== null && op !== null) {
            const ms = ((op - ip) / fr) * 1000;
            const sped = ms / playbackSpeed;
            return Math.min(Math.max(sped, 700), 7000);
          }
        } catch {}
        return Math.max(durationMs / playbackSpeed, 1000);
      })();

      startTimer(computedMs);
    };

    tryFetch();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [durationMs, prefersReducedMotion]);

  // Always render overlay per requirement

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black"
        >
          {lottieData || autoLottie ? (
            <div className="w-72 sm:w-[22rem]">
              <Lottie
                animationData={lottieData ?? autoLottie}
                loop={false}
                autoplay
                onComplete={() => {
                  setShow(false);
                }}
              />
            </div>
          ) : (
            <motion.img
              src="/logo.png"
              alt="Orca"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-10 sm:h-12"
            />
          )}
          <button
            type="button"
            onClick={() => {
              setShow(false);
              if (typeof window !== "undefined") {
                window.localStorage.setItem("orca_intro_seen", "1");
              }
            }}
            className="absolute bottom-8 rounded-full border border-foreground/20 px-3 py-1.5 text-xs text-foreground/80 hover:text-foreground hover:border-foreground/40"
            aria-label="Skip intro"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


