import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

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

      <div className="flex flex-col gap-8">
        <h2 className="flex items-end text-6xl lg:text-7xl font-bold font-serif">
          Success! Message sent
          <span className="block rounded-full w-3 h-3 bg-blue-300" />
        </h2>
        <p className="text-lg text-muted-foreground tracking-tight">
          Thank you for your message. I will get back to you as soon as
          possible.
        </p>
      </div>
    </div>
  );
}
