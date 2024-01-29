import { ContactForm } from "@/components/common/contact-form";
import { SectionHeading } from "@/components/common/section-heading";

export function Contact() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  return (
    <SectionHeading title="Contact" id="contact">
      <div className="flex flex-col gap-8">
        <p className="text-lg text-muted-foreground tracking-tight">
          {formspreeId
            ? "Get in touch or "
            : "Unfortunately the form is broken. Just "}
          shoot me an email directly on{" "}
          <a
            href="mailto:hello@kamilhojka.com"
            className="font-medium text-foreground bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] duration-500 ease-in-out"
          >
            hello@kamilhojka.com
          </a>
        </p>
        {formspreeId && <ContactForm />}
      </div>
    </SectionHeading>
  );
}
