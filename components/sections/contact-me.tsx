import Image from "next/image";

import ContactMeLightSVG from "@/public/assets/contactme.svg";
import ContactMeDarkSVG from "@/public/assets/contactme-dark.svg";

const ImageProperties = {
  width: 960,
  height: 104,
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
          className="w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Image
          width={ImageProperties.width}
          height={ImageProperties.height}
          src={ContactMeDarkSVG}
          alt="Contact Me"
          decoding="async"
          loading="lazy"
          className="absolute w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </a>
    </div>
  );
}
