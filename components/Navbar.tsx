"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";
import { AnimatedThemeToggler } from "../components/ui/AnimatedThemeToggler";
import { ShimmerButton } from "../components/ui/ShimmerButton";
import { navConfig } from "../config/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const toggleSection = (label: string) =>
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-foreground/10">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Orca home">
          {/* Light mode: black logo */}
          <Image
            src="/orca-logo-2-white-blk.png"
            alt="Orca"
            width={96}
            height={30}
            priority
            className="block dark:hidden opacity-90 mix-blend-normal"
          />
          {/* Dark mode: white logo */}
          <Image
            src="/orca-logo-2-white.png"
            alt="Orca"
            width={96}
            height={30}
            priority
            className="hidden dark:block opacity-90 mix-blend-normal"
          />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-foreground/80">
          {navConfig.map((item) => (
            item.children && item.children.length > 0 ? (
              <div key={item.label} className="relative group">
                <Link href={item.href} className="hover:text-foreground flex items-center gap-1">
                  {item.label}
                  <svg className="h-3 w-3 opacity-70" viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 011.04 1.08l-4.24 3.835a.75.75 0 01-1.04 0L5.25 8.31a.75.75 0 01-.02-1.1z"/></svg>
                </Link>
                <div className="pointer-events-none absolute left-0 top-full min-w-[220px] rounded-xl border border-foreground/10 bg-background/95 backdrop-blur p-2 shadow-2xl opacity-0 translate-y-1 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus-within:translate-y-0 group-hover:pointer-events-auto group-focus-within:pointer-events-auto z-50 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                  {item.children.map((c) => (
                    <Link key={c.label} href={c.href} className="block rounded-md px-3 py-2 hover:bg-foreground/5 hover:text-foreground">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            )
          ))}
          <Link href="/contact">
            <ShimmerButton background="rgba(0,0,0,1)" className="px-3 py-1.5 text-xs">Contact us</ShimmerButton>
          </Link>
          <span className="hidden lg:inline text-foreground/60">·</span>
          <a href="tel:1.833.211.1197" className="hidden lg:inline text-foreground/70 hover:text-foreground">1.833.211.1197</a>
          <a
            href="https://clients.orca.bi/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full border border-foreground/20 px-3 py-1.5 text-xs text-foreground/80 hover:text-foreground hover:border-foreground/40"
          >
            Our Portal
          </a>
        </nav>
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/20 text-foreground/80"
          onClick={() => setMobileOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </button>

        <div className="absolute right-4 top-3 hidden sm:block">
          <AnimatedThemeToggler />
        </div>
      </div>
      {/* Mobile full-screen menu - render as portal outside header */}
      {mobileOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100] sm:hidden bg-background overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Image src="/orca-logo-2-white-blk.png" alt="Orca" width={80} height={24} className="block dark:hidden" />
                <Image src="/orca-logo-2-white.png" alt="Orca" width={80} height={24} className="hidden dark:block" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-foreground/20 text-foreground/80"
                onClick={() => setMobileOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path d="M6 6l12 12M18 6L6 18" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            </div>

            <nav className="mt-4 space-y-1">
              {navConfig.map((item) => (
                <div key={item.label}>
                  {item.children && item.children.length > 0 ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-foreground/90 hover:bg-foreground/5"
                        aria-expanded={!!openSections[item.label]}
                        onClick={() => toggleSection(item.label)}
                      >
                        <span>{item.label}</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className={`h-4 w-4 transition-transform ${openSections[item.label] ? "rotate-180" : "rotate-0"}`}
                        >
                          <path d="M6 9l6 6 6-6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {openSections[item.label] && (
                        <div className="mt-1 pl-3">
                          {item.children.map((c) => (
                            <Link
                              key={c.label}
                              href={c.href}
                              className="block rounded-md px-3 py-2 text-foreground/70 hover:bg-foreground/5"
                              onClick={() => setMobileOpen(false)}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-foreground/90 hover:bg-foreground/5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-2 h-px bg-foreground/10" />
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block">
                <ShimmerButton background="rgba(0,0,0,1)" className="w-full px-3 py-2 text-sm">Contact us</ShimmerButton>
              </Link>
              <a href="tel:1.833.211.1197" className="block text-center text-sm text-foreground/70 mt-2">1.833.211.1197</a>
              <a href="https://clients.orca.bi/" target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-full border border-foreground/20 px-3 py-2 text-center text-xs text-foreground/80 hover:text-foreground">
                Our Portal
              </a>
              <div className="mt-4 flex justify-center">
                <AnimatedThemeToggler />
              </div>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}


