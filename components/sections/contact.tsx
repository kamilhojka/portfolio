import { SectionHeading } from "@/components/common/section-heading";
import { ContactForm } from "../common/contact-form";

export function Contact() {
  return (
    <SectionHeading title="Contact" id="contact">
      <div className="flex flex-col gap-8">
        <p className="text-lg text-muted-foreground tracking-tight">
          Get in touch or shoot me an email directly on{" "}
          <span className="font-medium text-foreground">
            hello@kamilhojka.com
          </span>
        </p>
        <ContactForm />
      </div>
    </SectionHeading>
  );
}
