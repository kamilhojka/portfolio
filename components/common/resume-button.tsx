import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";

import { Button } from "@/components/ui/button";

export function ResumeButton() {
  return (
    <Link href="/resume.pdf" passHref target="_blank">
      <Button className="gap-2 text-md" variant="glossy-outline">
        <IoDocumentText className="h-[1.2rem] w-[1.2rem]" /> Resume
      </Button>
    </Link>
  );
}
