import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Heading } from "@/components/common/heading";

const sectionHeadingVariants = cva("", {
  variants: {
    align: {
      start: "text-start",
      end: "text-end",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

interface SectionHeadingProps
  extends VariantProps<typeof sectionHeadingVariants> {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export function SectionHeading({
  title,
  id,
  align,
  children,
}: SectionHeadingProps) {
  return (
    <section id={id} className="flex flex-col gap-8">
      <Heading
        title={title}
        className={cn(sectionHeadingVariants({ align }))}
      />
      {children}
    </section>
  );
}
