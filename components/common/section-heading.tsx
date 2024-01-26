interface SectionHeadingProps {
  title: string;
  id?: string;
  children: React.ReactNode;
}

export function SectionHeading({ title, id, children }: SectionHeadingProps) {
  return (
    <section id={id} className="flex flex-col gap-8">
      <h2 className="flex items-end text-6xl lg:text-7xl font-bold font-serif">
        {title}
        <span className="block rounded-full w-3 h-3 bg-blue-300" />
      </h2>
      {children}
    </section>
  );
}
