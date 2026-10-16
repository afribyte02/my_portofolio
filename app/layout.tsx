import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Hydriss Tshwala Mangala — Software Engineer",
  description: "Portfolio of Hydriss Tshwala Mangala, a software engineer building intuitive and engaging products.",
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#131212" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
