import { ResumeSection } from "@/components/common/resume-section";
import { ThemeButton } from "@/components/common/theme-button";

export function Nav() {
  return (
    <div className="sticky top-0 z-40 w-full pt-6 flex gap-4 justify-end items-center">
      <ResumeSection />
      <ThemeButton />
    </div>
  );
}
