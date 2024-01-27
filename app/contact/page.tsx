import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-12 py-12">
      <Link href="/" className="max-w-fit">
        <Button variant="link" className="relative gap-2">
          <ArrowLeftIcon
            className="absolute left-0 animate-forward"
            width={25}
            height={25}
          />
          <span className="mt-[2px] text-medium ml-11">Go back home</span>
        </Button>
      </Link>
      <Contact />
    </div>
  );
}
