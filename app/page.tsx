import { About } from "@/components/sections/about";
import { ContactMe } from "@/components/common/contact-me";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="container relative min-h-screen flex flex-col gap-12 w-full">
      <Hero />
      <main className="flex flex-1 flex-col w-full px-6 sm:px-12 gap-12">
        <About />
        <Projects />
        <Experience />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
