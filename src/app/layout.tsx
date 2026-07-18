import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#141412",
};

// Runs before paint. The site opens dark by default; a stored explicit choice
// (from the dock toggle) is stamped so a returning light-mode visitor stays light.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
