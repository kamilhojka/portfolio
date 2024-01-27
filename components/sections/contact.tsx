import { SectionHeading } from "@/components/common/section-heading";

export function Contact() {
  return (
    <SectionHeading title="Contact" id="contact">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col text-lg text-justify gap-4 justify-center">
          <h3 className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <p className="text-muted-foreground">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-muted-foreground">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </SectionHeading>
  );
}
