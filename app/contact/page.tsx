import { Contact } from "@/components/sections/contact";
import { GoBackHomeButton } from "@/components/common/go-back-home-button";

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-12 pb-24">
      <GoBackHomeButton />
      <Contact />
    </div>
  );
}
