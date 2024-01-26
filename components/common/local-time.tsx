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
    <Suspense key={hydrated ? "local" : "utc"}>
      <time dateTime={new Date(date).toISOString()}>
        {new Date(date).toLocaleTimeString()}
        {hydrated ? "" : " (UTC)"}
      </time>
    </Suspense>
  );
}
