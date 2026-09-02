import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { Footer }            from "@/components/organisms/Footer";

// ── Google Fonts via next/font (zero layout shift) ───────────────────────────
const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-inter",
  display:  "swap",
  preload:  true,
});

const playfair = Playfair_Display({
  subsets:  ["latin"],
  variable: "--font-playfair",
  display:  "swap",
  preload:  true,
  weight:   ["400", "600", "700"],
  style:    ["normal", "italic"],
});

// ── SEO Metadata ───────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#619853",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trishania.github.io/Pangasinan-Heritage-Digital-Showcase"),
  title: {
    default:  "Pangasinan Heritage | Discover Iconic Cultural Sites",
    template: "%s | Pangasinan Heritage",
  },
  description:
    "Explore Pangasinan Province's most iconic heritage sites — " +
    "Hundred Islands National Park, Cape Bolinao Lighthouse, and Balungao Hot Spring. " +
    "Discover natural wonders, historical landmarks, and cultural treasures.",
  keywords: [
    "Pangasinan", "heritage", "tourism", "Hundred Islands", "Bolinao Lighthouse",
    "Balungao Hot Spring", "Philippines travel", "cultural sites", "Alaminos",
  ],
  authors:    [{ name: "Pangasinan Provincial Tourism Office" }],
  creator:    "Pangasinan Heritage Digital Showcase",
  openGraph: {
    type:        "website",
    locale:      "en_PH",
    url:         "https://trishania.github.io/Pangasinan-Heritage-Digital-Showcase",
    title:       "Pangasinan Heritage | Discover Iconic Cultural Sites",
    description: "Explore Pangasinan's most iconic heritage sites and natural wonders.",
    siteName:    "Pangasinan Heritage",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Pangasinan Heritage | Discover Iconic Cultural Sites",
    description: "Explore Pangasinan's most iconic heritage sites and natural wonders.",
    images:      ["/og-image.jpg"],
  },
  robots:   { index: true, follow: true },
};

// ── Root Layout ─────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-PH"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral-50 antialiased">
        <HeaderNavigation />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
