import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionHeadingVariants = cva(
  "flex items-end text-6xl lg:text-7xl font-bold font-serif",
  {
    variants: {
      justify: {
        start: "justify-start",
        end: "justify-end",
      },
    },
    defaultVariants: {
      justify: "start",
    },
  }
);

interface SectionHeadingProps
  extends VariantProps<typeof sectionHeadingVariants> {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export function SectionHeading({
  title,
  id,
  justify,
  children,
}: SectionHeadingProps) {
  return (
    <section id={id} className="flex flex-col gap-8">
      <h2 className={cn(sectionHeadingVariants({ justify }))}>
        {title}
        <span className="block rounded-full w-3 h-3 bg-blue-300" />
      </h2>
      {children}
    </section>
  );
}
