import { HeroVideoDialog } from "./ui/HeroVideoDialog";
import { loadPage } from "../lib/content";

export default function AboutOrca() {
  const home = loadPage<{ aboutTeaser?: { title?: string; subtitle?: string; body?: string; cta?: { label?: string; href?: string } } }>("home");
  return (
    <section id="about" className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 sm:grid-cols-2 items-start">
        <div className="h-px bg-foreground/10 col-span-full mb-6" />
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">{home?.aboutTeaser?.title ?? "About Orca"}</h1>
          <h2 className="mt-2 text-xl sm:text-2xl font-medium tracking-tight text-foreground/90">{home?.aboutTeaser?.subtitle ?? "We’re a Partner, Not a Service"}</h2>
          <div className="mt-4 text-foreground/80 space-y-4">
            {home?.aboutTeaser?.body ? (
              <p>{home.aboutTeaser.body}</p>
            ) : (
              <>
                <p>
                  We’re a partner, not a service. Orca delivers cutting-edge integrated supply chain technology that helps create efficiencies to save you money.
                </p>
                <p>
                  No more searching for your shipment data or guessing your freight partners’ performance. Our software ensures your supply chain analytics are at your fingertips.
                </p>
              </>
            )}
          </div>
          <div className="mt-6">
            <a href={home?.aboutTeaser?.cta?.href ?? "/about"} className="rounded-full border border-foreground/20 px-5 py-3 text-sm text-foreground/80 hover:text-foreground hover:border-foreground/40">
              {home?.aboutTeaser?.cta?.label ?? "Learn more"}
            </a>
          </div>
        </div>
        <div>
          <HeroVideoDialog
            animationStyle="from-center"
            videoSrc="/mediaio_orca-explainervideo_0330.mp4"
            thumbnailSrc="/Main-7-800x445.png"
            thumbnailAlt="Orca explainer video"
          />
        </div>
      </div>
    </section>
  );
}


