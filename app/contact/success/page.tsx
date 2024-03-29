import { Metadata } from "next";

import { GoBackHomeButton } from "@/components/common/go-back-home-button";

export const metadata: Metadata = {
  title: "Message sent!",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col w-full sm:px-12 gap-12 pb-24">
      <GoBackHomeButton />

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
