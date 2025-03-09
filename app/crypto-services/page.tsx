import { Site } from "@/app/constants";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function CryptoServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Crypto & Blockchain Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the future of digital transactions with {Site.name}&apos;s
              blockchain expertise.
            </p>

            <div className="space-y-12 pt-8">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Smart Contract Development
                </h2>
                <p className="text-muted-foreground">
                  Create secure, reliable smart contracts for your business
                  applications. Our blockchain experts design, develop, and
                  audit smart contracts that automate processes, reduce costs,
                  and eliminate intermediaries across various use cases.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Cryptocurrency Integration
                </h2>
                <p className="text-muted-foreground">
                  Seamlessly integrate cryptocurrency payment options into your
                  existing business systems. We help you accept, manage, and
                  process cryptocurrency transactions securely, opening your
                  business to the growing crypto economy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Decentralized Applications (dApps)
                </h2>
                <p className="text-muted-foreground">
                  Develop cutting-edge decentralized applications that leverage
                  blockchain&apos;s unique capabilities. From decentralized
                  finance (DeFi) solutions to NFT marketplaces, we build dApps
                  that offer transparency, security, and new business models.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Blockchain Consulting
                </h2>
                <p className="text-muted-foreground">
                  Navigate the complex blockchain landscape with expert
                  guidance. Our consulting services help you identify the right
                  blockchain solutions for your business needs, develop
                  implementation strategies, and understand regulatory
                  considerations.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-bold text-2xl leading-tight">
                  Tokenization
                </h2>
                <p className="text-muted-foreground">
                  Transform traditional assets into digital tokens on the
                  blockchain. Our tokenization solutions enable new forms of
                  ownership, investment, and value transfer for real estate,
                  art, securities, and other assets, creating liquidity and
                  market access.
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
