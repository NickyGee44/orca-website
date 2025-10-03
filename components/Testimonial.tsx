import { loadPage } from "../lib/content";

export default function Testimonial() {
  const home = loadPage<any>("home");
  return (
    <section id="testimonial" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-foreground/10 mb-6" />
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">{home?.testimonial?.title ?? "How Orca Helps in the Real World"}</h2>
        <blockquote className="mt-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-6 text-foreground/90">
          <p>“{home?.testimonial?.quote ?? "The Orca analytics tool has helped parmalat connect the dots within our supply chain."}”</p>
          <footer className="mt-3 text-sm text-foreground/70">– {home?.testimonial?.cite ?? "National Transportation Manager - Parmalat"}.</footer>
        </blockquote>
      </div>
    </section>
  );
}


