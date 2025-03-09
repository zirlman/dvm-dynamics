import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground">
              {Site.name} delivers specialized solutions across multiple
              industries, helping businesses thrive in the digital era.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Finance & Banking
                </h2>
                <p className="text-muted-foreground">
                  Digital transformation solutions for financial institutions,
                  including secure payment systems, fraud detection algorithms,
                  and customer experience platforms that meet strict regulatory
                  requirements.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">Healthcare</h2>
                <p className="text-muted-foreground">
                  HIPAA-compliant solutions that streamline patient care,
                  optimize resource allocation, and enhance data security. Our
                  healthcare systems improve operational efficiency while
                  prioritizing patient outcomes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Retail & E-commerce
                </h2>
                <p className="text-muted-foreground">
                  Omnichannel retail solutions that provide seamless customer
                  experiences across digital and physical touchpoints. From
                  inventory management to personalized marketing, we help
                  retailers thrive in competitive markets.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Manufacturing
                </h2>
                <p className="text-muted-foreground">
                  Smart manufacturing solutions that leverage IoT, AI, and data
                  analytics to optimize production processes, reduce downtime,
                  and increase quality control across the supply chain.
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
