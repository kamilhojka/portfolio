import type { Metadata } from "next";

import "@/styles/globals.css";
import { fontSans, fontSerif } from "@/constants/fonts";
import { cn } from "@/lib/utils";
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
