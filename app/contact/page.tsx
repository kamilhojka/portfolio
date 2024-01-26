import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-12 py-12">
      <Link href="/">
        <Button variant="default" className="w-20">
          Home
        </Button>
      </Link>
      Contact page
    </div>
  );
}
