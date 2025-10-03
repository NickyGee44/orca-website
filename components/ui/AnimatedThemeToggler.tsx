"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className = "" }: Props) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;

    // View transition supported in Chromium-based browsers
    // Fallback gracefully if unavailable
    const startVT = (document as { startViewTransition?: (callback: () => void) => { ready: Promise<void> } }).startViewTransition?.bind(document);

    const run = async () => {
      flushSync(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark");
        try {
          localStorage.setItem("theme", newTheme ? "dark" : "light");
        } catch {}
      });
    };

    if (startVT) {
      await startVT(run).ready;

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 700,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } else {
      await run();
    }
  }, [isDark]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light" : "Switch to dark"}
      title={isDark ? "Switch to light" : "Switch to dark"}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 bg-background/80 text-foreground/80 hover:text-foreground hover:border-foreground/40 shadow-sm ${className}`}
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
};

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l-1.4-1.4M20.4 20.4 19 19M19 5l1.4-1.4M4.6 20.4 6 19" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M21 12.8A8.5 8.5 0 1111.2 3a7 7 0 109.8 9.8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


