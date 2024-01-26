import { LocalTime } from "@/components/common/local-time";
import { Copyright } from "../common/copyright";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row rounded-t-3xl border-t p-12 justify-between items-start sm:items-center gap-4 bg-[#9fbbf7]">
      <Copyright />
      <LocalTime />
    </footer>
  );
}
