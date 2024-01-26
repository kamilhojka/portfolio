"use client";

import { Suspense, useState } from "react";

import { useHydration } from "@/hooks/useHydration";

export function LocalTime() {
  const [date, setDate] = useState(Date.now());

  setInterval(() => {
    setDate(Date.now());
  }, 1000);

  const hydrated = useHydration();

  return (
    <div className="flex flex-row sm:flex-col gap-2 sm:gap-0 items-end">
      <span className="text-lg font-medium tracking-tighter text-[#1c1c1c]">
        Local time
      </span>
      <a className="text-lg tracking-tighter text-primary-foreground cursor-default group transition-all duration-300 ease-in-out">
        <span className="bg-left-bottom bg-gradient-to-r from-primary-foreground to-primary-foreground bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          <Suspense key={hydrated ? "local" : "utc"}>
            <time dateTime={new Date(date).toISOString()}>
              {new Date(date).toLocaleTimeString()}
              {hydrated ? "" : " (UTC)"}
            </time>
          </Suspense>
        </span>
      </a>
    </div>
  );
}
