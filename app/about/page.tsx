import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground">
              {Site.name} is a forward-thinking software development company
              dedicated to helping businesses navigate the complex digital
              landscape.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the catalyst for digital innovation, empowering
                  businesses to harness technology for sustainable growth and
                  meaningful impact in an increasingly connected world.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Our Mission
                </h2>
                <p className="text-muted-foreground">
                  To deliver transformative software solutions that solve
                  complex business challenges, optimize operations, and create
                  exceptional user experiences through innovation, expertise,
                  and unwavering commitment to quality.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">Our Values</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-semibold">Innovation:</span> We
                    embrace emerging technologies and creative problem-solving.
                  </li>
                  <li>
                    <span className="font-semibold">Excellence:</span> We
                    maintain the highest standards in everything we do.
                  </li>
                  <li>
                    <span className="font-semibold">Collaboration:</span> We
                    believe in the power of teamwork and partnership.
                  </li>
                  <li>
                    <span className="font-semibold">Integrity:</span> We operate
                    with transparency, honesty, and ethical responsibility.
                  </li>
                  <li>
                    <span className="font-semibold">Client Success:</span> Your
                    success is our ultimate measure of achievement.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Our Leadership
                </h2>
                <p className="text-muted-foreground">
                  Our leadership team brings together decades of experience in
                  software development, business strategy, and industry
                  expertise. Together, we guide our talented team in delivering
                  exceptional solutions that meet the evolving needs of our
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
