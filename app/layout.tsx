import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";
import { LightRays } from "../components/ui/LightRays";
import StructuredData from "../components/StructuredData";

const geometricSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orcaaudit.com"),
  title: {
    default: "Freight Audit & Analytics Platform | Orca Intelligence",
    template: "%s | Orca Intelligence",
  },
  description:
    "Stop overpaying for freight. Capture audit recoveries, automate payments, and unlock supply chain insights with Orca.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-96x96-wt.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-32x32-wt.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16-wt.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon-wt.png",
  },
  openGraph: {
    siteName: "Orca Intelligence",
    title: "Freight Audit & Analytics Platform | Orca Intelligence",
    description:
      "Stop overpaying for freight. Capture audit recoveries, automate payments, and unlock supply chain insights.",
    url: "/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Orca Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OrcaIntelligence",
    creator: "@OrcaIntelligence",
    title: "Freight Audit & Analytics Platform | Orca Intelligence",
    description:
      "Stop overpaying for freight. Capture audit recoveries, automate payments, and unlock supply chain insights.",
    images: ["/og.png"],
  },
  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geometricSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}> 
        <StructuredData />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 z-[60] rounded bg-foreground text-background px-3 py-2 text-sm"
          >
            Skip to content
          </a>
          <div className="fixed inset-0 -z-10">
            <LightRays className="opacity-70" color="var(--rays-color)" />
          </div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
