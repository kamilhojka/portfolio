import { LocalTime } from "@/components/common/local-time";
import { Copyright } from "@/components/common/copyright";
import { Socials } from "@/components/common/socials";

export function Footer() {
  return (
    <footer className="flex flex-col rounded-t-3xl border-t p-6 sm:p-12 gap-4 bg-primary">
      <Socials />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-primary">
        <Copyright />
        <LocalTime />
      </div>
    </footer>
  );
}
