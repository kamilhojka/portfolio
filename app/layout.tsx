import type { Metadata } from "next";

import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { fontSans, fontSerif } from "@/constants/fonts";
import { Footer } from "@/components/sections/footer";
import { ThemeButton } from "@/components/common/theme-button";
import { ThemeProvider } from "@/components/common/theme-provider";

export const metadata: Metadata = {
  title: "Portfolio",
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
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container relative min-h-screen flex flex-col gap-12 w-full">
            <ThemeButton />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
