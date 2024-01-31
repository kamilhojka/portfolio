"use client";

import { usePathname } from "next/navigation";
import { ResumeButton } from "@/components/common/resume-button";

export function ResumeSection() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <p className="text-sm text-[#535455] tracking-tighter">
        AVAILABLE FOR WORK
      </p>
      <ResumeButton />
    </>
  );
}
