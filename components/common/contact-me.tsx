import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import ContactMeDarkSVG from "/public/assets/svg/contactme-dark.svg";
import ContactMeLightSVG from "/public/assets/svg/contactme.svg";

const ImageProperties = {
  width: 960,
  height: 104,
  animation:
    "bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_8px] bg-no-repeat hover:bg-[length:100%_8px] duration-500 ease-in-out pb-4",
};

export function ContactMe() {
  return (
    <section id="contact-me" className="flex flex-col py-12 gap-8">
      <p className="text-lg font-medium text-center text-muted-foreground">
        If you have questions? Or maybe you want to cooperate?
      </p>
      <Link
        aria-label="Contact Me"
        href="/contact"
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
      </Link>
    </section>
  );
}
