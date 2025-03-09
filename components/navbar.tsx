import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Site } from "@/app/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">{Site.name}</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/solutions"
            className="transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="transition-colors hover:text-primary"
          >
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="mailto:contact@dvmdynamics.com?subject=Inquiry%20about%20DVM%20Dynamics%20Services">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
