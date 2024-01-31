import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  className?: string;
}

export function Heading({ title, className }: HeadingProps) {
  return (
    <h2
      className={cn(
        "relative text-5xl md:text-6xl lg:text-7xl font-bold font-serif",
        "after:content-[''] after:inline-block after:absolute after:bottom-0 after:rounded-full after:w-3 after:h-3 after:bg-blue-300",
        className,
      )}
    >
      {title}
    </h2>
  );
}
