"use client";

import { usePathname } from "next/navigation";
import { ResumeButton } from "./resume-button";

export function ResumeSection() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <h2 className="text-muted-foreground/80 tracking-tighter">
        AVAILABLE FOR WORK
      </h2>
      <ResumeButton />
    </>
  );
}
