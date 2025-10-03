import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "../../components/ui/ShimmerButton";

export const metadata: Metadata = {
  title: "About Us | Orca Intelligence Inc",
  description:
    "Learn about Orca Intelligence Inc, our mission, values, and approach.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Orca Intelligence Inc",
    description:
      "Learn about Orca Intelligence Inc, our mission, values, and approach.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <section>
          <p className="text-sm font-medium tracking-wider text-foreground/60">KNOW MORE, SPEND LESS</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">We don’t just save you money, we empower you to save more.</h1>
          <div className="mt-6">
            <Link href="/contact">
              <ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">Get started now</ShimmerButton>
            </Link>
          </div>
        </section>

        <section className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold tracking-wider text-foreground/60">WHO IS ORCA?</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">THE FUTURE OF SUPPLY CHAIN OPTIMIZATION</h2>
            <p className="mt-4 text-foreground/80">
              At Orca, we understand that every supply chain is unique. We combine intuitive technologies with smarter processes to create efficiencies that save you money. Going far beyond verifying, correcting and paying freight bills, we solve your logistics and operations challenges by empowering your supply chain with critical intelligence. Our solution is customized to your needs, leading to deeper insights and higher cost savings. With Orca, you’re investing in a partner, not a service.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-foreground/10">
            <Image src="/orca_2296_rgb.png" alt="Matt Grossi & Marco Grossi Co-Founders of Orca" fill className="object-cover" />
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-foreground">Our Values</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "People Over Profit", sub: "People over\nprofits" },
              { title: "KNOWLEDGE OVER INTUITION", sub: "Knowledge over\nintuition" },
              { title: "Evolution Over Legacy", sub: "Evolution over\nlegacy" },
              { title: "Knowledge", sub: "Innovation over\neverything" },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
                <div className="text-sm text-foreground/60">{v.title}</div>
                <div className="mt-1 whitespace-pre-line text-foreground font-medium">{v.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h3 className="text-xl font-semibold text-foreground">The Orca Difference</h3>
          <p className="text-foreground/80">Organizations understand the power of data but struggle to efficiently collect or utilize it to streamline processes and make better business decisions. Our Freight Audit & Analytics solution automates your freight payables process and collects and consolidates your data. It ensures that your supply chain analytics are at your fingertips, equipping you with the information you need in real time to make key decisions, faster.</p>
          <p className="text-foreground/80">We bring a fresh view to the industry, focusing on innovation and client experience. Our number one priority is to add value every day by going above and beyond:</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { key: "holistic", title: "A HOLISTIC VIEW", body: "We give you a holistic view of your entire supply chain network, including a carrier scorecard, cost-to-sell analysis, customer summary, GL analysis and budgetary tracking." },
              { key: "rfp", title: "RFP RESPONSE THAT GOES BEYOND PRICE COMPARISONS", body: "Our solution comprehensively outlines each carrier’s capabilities and terms of service, as well as its pricing structure." },
              { key: "benchmark", title: "BENCHMARKING TO HELP YOU OPTIMIZE", body: "We provide comprehensive supply chain data so you can benchmark, identify issues and optimize your processes." },
              { key: "rating", title: "SHIPMENT RATING AND INTELLIGENT RECOMMENDATIONS", body: "We have multiple carrier relationships, and we help you optimize your freight savings through cost comparison and shipment rating." },
              { key: "clean", title: "CLEAN DATA YOU CAN TRUST", body: "Our software cleans your data before analyzing it and presenting it on dashboards so you can make decisions based on the best intel available." },
              { key: "mobile", title: "MOBILE APP TAKES THE INFORMATION WITH YOU", body: "We offer a mobile app so you can access and respond to critical data from anywhere at any time." },
              { key: "dash", title: "CUSTOMIZED DASHBOARDS AND REPORTING", body: "We help you set up interactive reports and dashboards, including personalized filters that allow you to choose and track KPIs based on the business goals you need to achieve." },
            ].map((b) => (
              <div key={b.title} className="rounded-xl border border-foreground/10 bg-foreground/5 p-4">
                <div className="flex items-start gap-3">
                  <Icon name={b.key} />
                  <div>
                    <div className="text-sm font-medium text-foreground">{b.title}</div>
                    <div className="mt-2 text-sm text-foreground/70">{b.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-foreground">HOW DO I GET STARTED?</h3>
          <p className="mt-2 text-foreground/80">There are no upfront or monthly payments. The savings we recover from your vendors will pay for the entire service in year one. Orca is one of the best freight audit companies providing this option. Simply give us a call to start saving.</p>
          <div className="mt-4">
            <Link href="/contact">
              <ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">Let's talk</ShimmerButton>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Icon({ name }: { name: string }) {
  const className = "mt-0.5 h-8 w-8 shrink-0 text-foreground/70";
  switch (name) {
    case "holistic":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4v16M4 12h16" strokeLinecap="round" />
        </svg>
      );
    case "rfp":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <path d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
          <path d="M9 7h6M9 11h6M9 15h4" strokeLinecap="round" />
        </svg>
      );
    case "benchmark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <path d="M4 20h16" strokeLinecap="round" />
          <rect x="6" y="10" width="3" height="8" rx="1" />
          <rect x="11" y="6" width="3" height="12" rx="1" />
          <rect x="16" y="13" width="3" height="5" rx="1" />
        </svg>
      );
    case "rating":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" strokeLinejoin="round" />
        </svg>
      );
    case "clean":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M7 8h10M7 12h6" strokeLinecap="round" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <circle cx="12" cy="18" r="1" />
        </svg>
      );
    case "dash":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <path d="M4 4h16v6H4z" />
          <path d="M4 14h7v6H4zM13 14h7v6h-7z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}


