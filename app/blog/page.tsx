import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { loadPage } from "../../lib/content";

const data = loadPage<any>("blog");

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
};

export default function BlogPage() {
  const posts = data.posts;
  const latest = posts.slice(0, 3);
  return (
    <main className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">Blog</h1>
          <p className="mt-2 text-foreground/70 text-sm sm:text-base">
            Product insights, freight audit best practices, and supply chain analytics.
          </p>
        </div>

        <h2 className="mt-8 text-xl font-semibold text-foreground">Latest Articles</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {latest.map((p: any) => (
            <article key={p.title} className="overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
              <div className="relative h-44 w-full">
                <Image src={p.image} alt="" fill className="object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-foreground/70 text-sm">{p.blurb}</p>
                <Link href={p.href} className="mt-3 inline-block text-sm text-foreground/80 hover:text-foreground underline underline-offset-4">Read more</Link>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-10 text-xl font-semibold text-foreground">All Articles</h2>
        <div className="mt-4 space-y-4">
          {posts.map((p: any) => (
            <article key={p.title} className="flex gap-3 rounded-xl border border-foreground/10 bg-foreground/5 p-3">
              <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-md">
                <Image src={p.image} alt="" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground">{p.title}</h3>
                <p className="mt-1 text-foreground/70 text-sm line-clamp-2">{p.blurb}</p>
                <Link href={p.href} className="mt-2 inline-block text-sm text-foreground/80 hover:text-foreground underline underline-offset-4">Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}