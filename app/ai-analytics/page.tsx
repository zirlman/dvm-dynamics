import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AIAnalyticsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              AI & Analytics Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Unlock the power of your data with {Site.name}&apos;s cutting-edge
              AI and analytics solutions.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Predictive Analytics
                </h2>
                <p className="text-muted-foreground">
                  Transform historical data into future insights. Our predictive
                  analytics solutions help businesses anticipate market trends,
                  customer behavior, and operational challenges before they
                  happen, enabling proactive decision-making.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Machine Learning Models
                </h2>
                <p className="text-muted-foreground">
                  Custom machine learning models designed for your specific
                  business needs. Whether it&apos;s customer segmentation,
                  recommendation systems, or process optimization, our ML
                  solutions deliver tangible business value through automation
                  and intelligence.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Natural Language Processing
                </h2>
                <p className="text-muted-foreground">
                  Leverage the power of NLP to analyze text data, automate
                  communication, and gain deeper insights from unstructured
                  information. From sentiment analysis to intelligent chatbots,
                  we help you make sense of language data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Computer Vision
                </h2>
                <p className="text-muted-foreground">
                  Transform visual data into actionable intelligence. Our
                  computer vision solutions enable automated quality control,
                  security monitoring, object recognition, and more, helping
                  your business see opportunities others miss.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Business Intelligence
                </h2>
                <p className="text-muted-foreground">
                  Turn data into clear, actionable insights with our business
                  intelligence platforms. We create intuitive dashboards and
                  reporting tools that democratize data across your
                  organization, enabling informed decision-making at all levels.
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
