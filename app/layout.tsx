import type { Metadata } from "next";

import "@/styles/globals.css";
import { fontSans, fontSerif } from "@/constants/fonts";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "It's my portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={(fontSans.variable, fontSerif.variable)}>
        {children}
      </body>
    </html>
  );
}
