import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NewNavigation from "@/components/layout/NewNavigation";
import DirectNavigation from "@/components/layout/DirectNavigation";
import Footer from "@/components/layout/Footer";
import DirectFooter from "@/components/layout/DirectFooter";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingChatbot from "@/components/ui/FloatingChatbot";
import TestComponent from "@/components/ui/TestComponent";
import DirectTestComponent from "@/components/ui/DirectTestComponent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nine Tales Media - Crafting Digital Narratives",
  description: "Nine Tales Media specializes in digital marketing, web development, and creative content creation. We craft compelling digital narratives that drive results for your business.",
  keywords: ["digital marketing", "web development", "content creation", "meta ads", "google ads", "TVC production", "e-commerce marketing", "AI chatbot", "custom software"],
  authors: [{ name: "Nine Tales Media" }],
  creator: "Nine Tales Media",
  publisher: "Nine Tales Media",
  openGraph: {
    title: "Nine Tales Media - Crafting Digital Narratives",
    description: "Nine Tales Media specializes in digital marketing, web development, and creative content creation.",
    url: "https://ninetalesmedia.com",
    siteName: "Nine Tales Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine Tales Media - Crafting Digital Narratives",
    description: "Nine Tales Media specializes in digital marketing, web development, and creative content creation.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="/direct-styles.css" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {/* CustomCursor temporarily disabled */}
        <NewNavigation />
        <main className="min-h-screen" style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
          {children}
        </main>
        <DirectFooter />
        <FloatingChatbot />
      </body>
    </html>
  );
}
