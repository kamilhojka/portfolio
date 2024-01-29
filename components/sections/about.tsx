import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/common/section-heading";
import { SKILLS } from "@/constants/skills";

export function About() {
  return (
    <SectionHeading title="About me" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8 ">
        <div className="flex flex-col text-lg text-justify gap-4 justify-center">
          <h3 className="text-lg">
            Hello! My name is Kamil, graduate of the Opole University of
            Technology with a passion for creating software used in the everyday
            flow of enterprise life.
          </h3>
          <p className="text-muted-foreground">
            For 4 years I have been working as a freelancer/independent person
            responsible for software for warehouse management, finances and
            other ERP processes in one of the companies in my city. Thanks to
            this, I gained extensive experience and skills that I will be happy
            to use in new professional challenges. In addition, I am a gym
            enthusiast, and I train regularly to stay in good physical and
            mental shape.
          </p>
          <p className="text-muted-foreground">
            Technologies that I have recently used in my work:
          </p>
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-1 overflow-hidden list-none">
            {SKILLS.map((skill, id) => (
              <li
                key={id}
                className={cn(
                  "text-muted-foreground text-sm",
                  "before:content-['•'] before:mr-2 before:text-primary before:leading-3"
                )}
              >
                {skill.name}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            I&apos;m looking for new positions where I can combine my love of
            code. If you think you have an offer I might like, let&apos;s{" "}
            <Link
              href="/contact"
              className="text-foreground bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] duration-500 ease-in-out"
            >
              get in touch
            </Link>
            .
          </p>
        </div>
        <div className="flex justify-center lg:justify-end items-start">
          <picture className="w-[350px] h-[350px] rounded border-primary border-4 bg-primary">
            <Image
              src="/assets/images/profile-picture.jpg"
              alt="Profile photo"
              width={350}
              height={350}
              className="opacity-80 grayscale transition-all duration-800 ease-in-out hover:opacity-100 hover:grayscale-0"
            />
          </picture>
        </div>
      </div>
    </SectionHeading>
  );
}
