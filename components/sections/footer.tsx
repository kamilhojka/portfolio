import { LocalTime } from "@/components/common/local-time";
import { Copyright } from "../common/copyright";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row rounded-t-3xl border-t p-6 sm:p-12 justify-between items-start sm:items-center gap-4 bg-primary">
      <Copyright />
      <LocalTime />
    </footer>
  );
}
