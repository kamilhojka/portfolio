import { About } from "@/components/sections/about";
import { ContactMe } from "@/components/common/contact-me";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col w-full pt-6 sm:px-12 gap-24">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <ContactMe />
    </main>
  );
}
