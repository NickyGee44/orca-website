import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "../../components/ui/ShimmerButton";
import { loadPage } from "../../lib/content";

const metaDataFile = loadPage<{ seo: { title: string; description: string; canonical: string } }>("responsibility");
export const metadata: Metadata = {
  title: metaDataFile.seo.title,
  description: metaDataFile.seo.description,
  alternates: { canonical: metaDataFile.seo.canonical },
};

export default function ResponsibilityPage() {
  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Our Responsibility</h1>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base">We don’t just save you money, we empower you to save more.</p>
          <div className="mt-4">
            <Link href="/contact"><ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">Get started now</ShimmerButton></Link>
          </div>
        </header>

        <section className="max-w-3xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">Corporate Social Responsibility / Giving Back</h2>
            </div>
            <Image src="/capitalize-for-kids.png" alt="Capitalize for Kids" width={140} height={60} className="object-contain shrink-0" />
          </div>
          <p className="text-foreground/80">Our key value is people over profits. We believe that corporations have a social responsibility to support worthy causes and help make the world a better place. Today, 1 in 5 kids will experience a mental health challenge, and they need our help more than ever before.</p>
          <p className="text-foreground/80">We are proud to partner with Capitalize for Kids to help more children gain access to the mental healthcare they need. Through initiatives in the financial services community, Capitalize for Kids ensures leading mental health organizations can get access to critical funding and pro-bono services. Together, we are helping children spend less time looking for help and more time getting better.</p>
          <div className="mt-4">
            <Link href="/contact"><ShimmerButton background="rgba(0,0,0,1)" className="px-5 py-3 text-sm">Let&apos;s talk</ShimmerButton></Link>
          </div>
        </section>

        <p className="text-foreground/60 text-sm">Orca Intelligence technology makes freight analysis, auditing, and tracking easier. Call 1-844-GET-ORCA.</p>
      </div>
    </main>
  );
}
