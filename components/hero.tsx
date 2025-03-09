import { Site } from "@/app/constants";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Innovate Faster with
          <br />
          {Site.name}
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering businesses with cutting-edge software solutions. From
          AI-driven analytics to seamless cloud integrations, we&apos;re shaping
          the future of technology.
        </p>
      </div>
    </section>
  );
}
