import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-foreground/10 mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-medium text-foreground">Services</h3>
          <ul className="mt-3 space-y-2 text-foreground/70">
            <li><Link href="/services/freight-audit">Freight Audit</Link></li>
            <li><Link href="/services/freight-payment">Freight Payment</Link></li>
            <li><Link href="/services/freight-claims-processing">Freight Claims Processing</Link></li>
            <li><Link href="/services/freight-rating">Freight Rating</Link></li>
            <li><Link href="/services/freight-invoice-management">Freight Invoice Management</Link></li>
            <li><Link href="/services/freight-accounting">Freight Accounting</Link></li>
            <li><Link href="/services/supply-chain-analytics">Supply Chain Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Resources</h3>
          <ul className="mt-3 space-y-2 text-foreground/70">
            <li><Link href="/blog">Articles</Link></li>
            <li><Link href="/media">Videos</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/carbon-calculator">Carbon Calculator</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Company</h3>
          <ul className="mt-3 space-y-2 text-foreground/70">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/responsibility">Corporate Responsibility</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-foreground">Legal</h3>
          <ul className="mt-3 space-y-2 text-foreground/70">
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-foreground/60">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            © {year} Orca Intelligence Inc. All rights reserved. | <Link href="/terms">Terms</Link> & <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="text-foreground/70">
            <a href="tel:1.833.211.1197" className="hover:text-foreground">1.833.211.1197</a>
            <span> · </span>
            <a href="mailto:info@orca.bi" className="hover:text-foreground">info@orca.bi</a>
          </div>
          <div className="sm:ml-auto flex justify-end">
            <Image
              src="/TOP_FREIGHT_SOLUTION_PROVIDERS.png"
              alt="Logistics Tech Outlook Badge"
              width={140}
              height={60}
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}


