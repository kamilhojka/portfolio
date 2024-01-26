import Image from "next/image";

import ContactMeLightSVG from "@/public/assets/contactme.svg";
import ContactMeDarkSVG from "@/public/assets/contactme-dark.svg";
import { cn } from "@/lib/utils";

const ImageProperties = {
  width: 960,
  height: 104,
  animation:
    "bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_8px] duration-500 ease-in-out pb-4",
};

export function ContactMe() {
  return (
    <div className="flex flex-col mt-24 gap-8">
      <h4 className="text-xl font-medium text-center text-muted-foreground">
        If you have questions? Or maybe you want to cooperate?
      </h4>
      <a
        aria-label="Contact Me"
        className="inline-flex relative cursor-pointer"
      >
        <Image
          width={ImageProperties.width}
          height={ImageProperties.height}
          src={ContactMeLightSVG}
          alt="Contact Me"
          decoding="async"
          loading="lazy"
          className={cn(
            "w-full transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0",
            ImageProperties.animation
          )}
        />
        <Image
          width={ImageProperties.width}
          height={ImageProperties.height}
          src={ContactMeDarkSVG}
          alt="Contact Me"
          decoding="async"
          loading="lazy"
          className={cn(
            "absolute w-full transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100",
            ImageProperties.animation
          )}
        />
      </a>
    </div>
  );
}
