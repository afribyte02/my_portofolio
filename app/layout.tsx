import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import { site } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seoTitle,
  description: site.seoDescription,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.seoName,
    title: site.seoTitle,
    description: site.seoDescription,
    images: [{ url: "/profile.jpg", width: 853, height: 1280, alt: site.seoName }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
    images: ["/profile.jpg"],
  },
};
export const viewport: Viewport = { themeColor: "#131212" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
