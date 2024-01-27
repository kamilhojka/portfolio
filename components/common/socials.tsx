import Link from "next/link";

import { SOCIALS } from "@/constants/socials";
import { Icon } from "@/components/common/icon";

export function Socials() {
  return (
    <div className="flex gap-4">
      {SOCIALS.map((social) => (
        <Link
          key={social.name}
          href={social.url}
          className="text-primary-foreground hover:text-primary-foreground/80"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name={social.name} className="w-[24px] h-[24px]" />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
}
