import { DM_Sans as FontSans } from "next/font/google";
import { Darker_Grotesque as FontSerif } from "next/font/google";
import { Fira_Code as FontMono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
