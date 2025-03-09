import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover how {Site.name} can transform your business with our
              cutting-edge solutions.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Custom Software Development
                </h2>
                <p className="text-muted-foreground">
                  Tailored software solutions designed to meet your unique
                  business needs. Our team of expert developers creates
                  scalable, high-performance applications that drive
                  productivity and growth.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  AI & Machine Learning
                </h2>
                <p className="text-muted-foreground">
                  Harness the power of artificial intelligence to gain valuable
                  insights from your data. Our AI solutions help automate
                  processes, predict trends, and make data-driven decisions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Cloud Migration & Infrastructure
                </h2>
                <p className="text-muted-foreground">
                  Seamlessly move your operations to the cloud with our expert
                  migration services. We ensure secure, scalable, and
                  cost-effective cloud infrastructure tailored to your business
                  requirements.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Blockchain & Crypto Solutions
                </h2>
                <p className="text-muted-foreground">
                  Leverage blockchain technology for secure, transparent, and
                  efficient operations. From smart contracts to cryptocurrency
                  integration, we provide innovative blockchain solutions.
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
