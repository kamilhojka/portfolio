import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { fontMono, fontSans, fontSerif } from "@/constants/fonts";
import { Footer } from "@/components/sections/footer";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Nav } from "@/components/common/nav";

export const metadata: Metadata = {
  title: {
    template: "%s | Kamil Hojka",
    default: "Kamil Hojka",
  },
  description: "It's my portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSerif.variable,
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container relative min-h-screen flex flex-col w-full">
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
