"use client";

import { usePathname } from "next/navigation";

import { ResumeButton } from "./resume-button";
import { ThemeButton } from "./theme-button";

export function Nav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40 w-full pt-6 flex gap-4 justify-end items-center">
      {pathname === "/" && (
        <>
          <h2 className="text-muted-foreground/80 tracking-tighter">
            AVAILABLE FOR WORK
          </h2>
          <ResumeButton />
        </>
      )}
      <ThemeButton />
    </div>
  );
}
