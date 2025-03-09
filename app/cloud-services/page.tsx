import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Cloud Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Scale your business with {Site.name}&apos;s comprehensive cloud
              solutions.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Cloud Migration
                </h2>
                <p className="text-muted-foreground">
                  Seamlessly transition your infrastructure to the cloud with
                  our expert migration services. We ensure minimal disruption
                  while maximizing the benefits of cloud technology, from
                  reduced costs to increased flexibility and scalability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Cloud-Native Development
                </h2>
                <p className="text-muted-foreground">
                  Build applications designed specifically for cloud
                  environments. Our cloud-native approach leverages
                  microservices, containers, and serverless architectures to
                  create resilient, scalable, and easily maintainable
                  applications.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Multi-Cloud Strategy
                </h2>
                <p className="text-muted-foreground">
                  Develop a strategic approach to using multiple cloud
                  providers. We help you optimize workload placement across AWS,
                  Azure, Google Cloud, and others to minimize risk, avoid vendor
                  lock-in, and leverage the best features of each platform.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Cloud Security
                </h2>
                <p className="text-muted-foreground">
                  Protect your cloud infrastructure with comprehensive security
                  solutions. From access management and encryption to threat
                  detection and response, we ensure your cloud environment meets
                  the highest security standards.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Cost Optimization
                </h2>
                <p className="text-muted-foreground">
                  Maximize the value of your cloud investment. Our optimization
                  services identify unused resources, recommend right-sizing
                  strategies, and implement automated scaling to ensure
                  you&apos;re never paying more than necessary for your cloud
                  infrastructure.
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
