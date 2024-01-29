import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ProjectMetadata } from "@/lib/projects";

export function PostPreview(props: ProjectMetadata) {
  return (
    <Link href={`/projects/${props.slug}`}>
      <div className="relative h-[200px] lg:h-fit overflow-hidden rounded-md border-2 dark:border-primary-foreground hover:dark:border-primary hover:border-primary group transition-all duration-800 ease-in-out">
        <div className="absolute inset-0 -z-10 lg:relative">
          <Image
            src={props.image}
            alt={props.imageAlt}
            className="object-fill object-center opacity-30 dark:opacity-10 transition-all duration-800 ease-in-out grayscale lg:group-hover:opacity-100 group-hover:opacity-20 group-hover:grayscale-0"
            width={1000}
            height={1000}
          />
          <Badge
            className="absolute inset-2 w-fit h-fit"
            variant="reverse-group"
          >
            {props.purpose}
          </Badge>
        </div>
        <div className="z-10 flex flex-col p-4 h-full justify-end lg:justify-center">
          <h2 className="font-serif text-2xl font-bold text-foreground tracking-tight leading-6 mb-2">
            {props.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {props.technologies.map((technology: string, id: number) => (
              <p
                key={id}
                className="text-xs font-mono font-medium text-foreground/70"
              >
                {technology}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
