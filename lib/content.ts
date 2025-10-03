import fs from "fs";
import path from "path";

export type Seo = { title: string; description: string; canonical?: string };
export type HeroCta = { label: string; href: string };
export type Hero = { title: string; subtitle: string; primaryCta?: HeroCta; secondaryCta?: HeroCta };
export type HomeContent = { seo: Seo; hero: Hero; aboutTeaser?: any; testimonial?: { title: string; quote: string; cite: string } };
export type BlogPost = { title: string; blurb: string; image: string; href: string };
export type BlogContent = { seo: Seo; posts: BlogPost[] };
export type FAQItem = { q: string; a: string };
export type FAQContent = { seo: Seo; items: FAQItem[] };
export type ContactContent = { seo: Seo; heading: string; blurb?: string };

export function readJson<T = unknown>(p: string): T {
  // Resolve relative to the Next app root (web/)
  const file = path.join(process.cwd(), p.replace(/^\/?/, ""));
  const raw = fs.readFileSync(file, "utf-8");
  return JSON.parse(raw) as T;
}

export function loadPage<T = unknown>(slug: string): T {
  return readJson<T>(`content/pages/${slug}.json`);
}

export function seoMetadataFrom(slug: string): Seo | null {
  try {
    const data = loadPage<{ seo?: Seo }>(slug);
    return data?.seo ?? null;
  } catch {
    return null;
  }
}


