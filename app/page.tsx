import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="container relative min-h-screen flex flex-col gap-12 w-full">
      <Hero />
      <main className="flex flex-1"></main>
      <Footer />
    </div>
  );
}
