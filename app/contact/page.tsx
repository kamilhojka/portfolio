import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Contact } from "@/components/sections/contact";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-12 py-12">
      <Link href="/" className="max-w-fit group">
        <Button variant="link-without-hover" className="relative gap-2">
          <ArrowLeftIcon
            className="absolute left-0 animate-forward"
            width={25}
            height={25}
          />
          <span className="mt-[2px] text-medium ml-11 bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-500 ease-in-out">
            Go back home
          </span>
        </Button>
      </Link>
      <Contact />
    </div>
  );
}
