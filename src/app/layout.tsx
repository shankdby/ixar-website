import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import DepthGauge from "@/components/DepthGauge/DepthGauge";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IXAR Robotic Solutions | Subsea Inspection & ROVs",
    template: "%s | IXAR Robotic Solutions",
  },
  description: "An IIT Bombay & IIT Madras alumni startup providing submersible robotic inspection, cleaning, and survey solutions with high-precision ROVs and Magnetic Crawlers.",
  metadataBase: new URL("https://ixarrobotics.com"),
  openGraph: {
    title: "IXAR Robotic Solutions | Industrial Inspection Robotics",
    description: "Advanced B2B subsea and tank inspections using proprietary ROVs and climbers.",
    url: "https://ixarrobotics.com",
    siteName: "IXAR Robotics",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-50 text-slate-800 min-h-full flex flex-col font-sans">
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-grow pt-24">
          {children}
        </main>
        <DepthGauge />
        <Footer />
      </body>
    </html>
  );
}
