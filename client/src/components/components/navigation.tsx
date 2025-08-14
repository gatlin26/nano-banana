import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Wand2 } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/generator", label: "Generator" },
    { href: "/showcase", label: "Showcase" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Wand2 className="text-2xl text-banana-500" />
              <span className="text-xl font-bold text-gray-900">Nano Banana</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`transition-colors ${
                  location === item.href 
                    ? "text-banana-500" 
                    : "text-gray-700 hover:text-banana-500"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:block text-banana-600 hover:text-banana-700">
              Sign In
            </Button>
            <Link href="/generator">
              <Button className="bg-banana-500 text-white hover:bg-banana-600">
                Try Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
