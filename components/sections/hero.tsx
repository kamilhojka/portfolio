export function Hero() {
  return (
    <section id="hero" className="relative flex flex-col py-12">
      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter gap-2">
        Hi, my name is Kamil
        <span className="font-black text-primary">.</span>
      </h2>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tighter -mt-2">
        I&apos;m a <span className="text-primary">Full Stack Developer</span>
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground pt-8">
        I&apos;ve spent the last 4 years building, managing and scaling
        softwares for company in the furniture industry. After graduation, I am
        trying to find a job where I will be able to use my experience in a new
        environment and find professional fulfillment.
      </p>
    </section>
  );
}
