import { LocalTime } from "@/components/common/local-time";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row rounded-t-3xl border-t p-12 justify-between items-start sm:items-center gap-4 bg-[#9fbbf7]">
      <h2 className="text-4xl font-medium tracking-tight text-primary-foreground">
        <span className="font-semibold">© 2024</span> Kamil Hojka
      </h2>
      <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 items-end">
        <span className="text-lg font-medium tracking-tighter text-[#1c1c1c]">
          Local time
        </span>
        <a className="text-lg tracking-tighter text-primary-foreground cursor-default group transition-all duration-300 ease-in-out">
          <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            <LocalTime />
          </span>
        </a>
      </div>
    </footer>
  );
}
