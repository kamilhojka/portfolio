"use client";

import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    setIsPointer(
      window.getComputedStyle(e.target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={cn(
        "fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[999] p-[10px] flex justify-center items-center bg-primary backdrop-blur-[1px] transition-[padding]",
        isPointer ? "p-[30px]" : ""
      )}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
}

// ${isPointer ? "pointer" : ""}
