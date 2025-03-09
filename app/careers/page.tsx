import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Build your career with {Site.name} and help shape the future of
              technology.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Why Work With Us
                </h2>
                <p className="text-muted-foreground">
                  At {Site.name}, we believe in fostering a culture of
                  innovation, continuous learning, and work-life balance. We
                  offer competitive compensation, flexible work arrangements,
                  and the opportunity to work on cutting-edge projects that make
                  a real impact.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Our Culture
                </h2>
                <p className="text-muted-foreground">
                  We pride ourselves on a collaborative environment where
                  diverse perspectives are valued and every team member has the
                  opportunity to contribute meaningfully. Our inclusive culture
                  empowers individuals to grow professionally while being part
                  of something greater.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Open Positions
                </h2>

                <div className="border rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-xl">
                    Senior Frontend Developer
                  </h3>
                  <p className="text-muted-foreground">
                    We&apos;re looking for an experienced frontend developer
                    with expertise in React, Next.js, and modern web
                    technologies to join our team and help build exceptional
                    user experiences.
                  </p>
                  <a
                    href={`mailto:${Site.mail}?subject=Application%20for%20Senior%20Frontend%20Developer%20Position`}
                    className="text-primary font-medium hover:underline"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="border rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-xl">AI/ML Engineer</h3>
                  <p className="text-muted-foreground">
                    Join our AI team to develop innovative machine learning
                    solutions that solve complex business problems for our
                    clients across various industries.
                  </p>
                  <a
                    href={`mailto:${Site.mail}?subject=Application%20for%20AI/ML%20Engineer%20Position`}
                    className="text-primary font-medium hover:underline"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="border rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-xl">DevOps Specialist</h3>
                  <p className="text-muted-foreground">
                    Help us build robust CI/CD pipelines and manage cloud
                    infrastructure to support our fast-growing portfolio of
                    projects and services.
                  </p>
                  <a
                    href={`mailto:${Site.mail}?subject=Application%20for%20DevOps%20Specialist%20Position`}
                    className="text-primary font-medium hover:underline"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Don&apos;t See a Fit?
                </h2>
                <p className="text-muted-foreground">
                  We&apos;re always looking for talented individuals to join our
                  team. Send your resume and a cover letter explaining why
                  you&apos;d be a great fit for {Site.name}.
                </p>
                <a
                  href={`mailto:${Site.mail}?subject=General%20Application`}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Submit General Application
                </a>
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
