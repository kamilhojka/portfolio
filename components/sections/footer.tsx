import Link from "next/link";

import { LocalTime } from "@/components/common/local-time";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row rounded-t-3xl border-t p-12 justify-between items-start sm:items-center gap-4 bg-[#9fbbf7]">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-medium tracking-tight text-primary-foreground">
          <span className="font-semibold">© 2024</span> Kamil Hojka
        </h2>
        <h4 className="text-xs sm:max-w-xs md:max-w-sm lg:max-w-lg font-medium text-justify text-primary-foreground/80">
          Crafted in{" "}
          <Link
            href="https://figma.com/"
            className="font-extrabold cursor-pointer group transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Figma
            </span>
          </Link>{" "}
          and coded using{" "}
          <Link
            href="https://code.visualstudio.com/"
            className="font-extrabold cursor-pointer group transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              VS Code
            </span>
          </Link>
          . Developed with{" "}
          <Link
            href="https://nextjs.org/"
            className="font-extrabold cursor-pointer group transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Next.js
            </span>
          </Link>{" "}
          and styled with{" "}
          <Link
            href="https://tailwindcss.com/"
            className="font-extrabold cursor-pointer group transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Tailwind CSS
            </span>
          </Link>
          , the final product is seamlessly deployed through{" "}
          <Link
            href="https://vercel.com/"
            className="font-extrabold cursor-pointer group transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Vercel
            </span>
          </Link>
          .
        </h4>
      </div>
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
