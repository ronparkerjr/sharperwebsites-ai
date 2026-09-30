import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const logoUrl = "https://vibe.filesafe.space/1776947140561926129/assets/f19c39ba-2a00-4b3b-a639-0c6eb332ee4c.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src={logoUrl}
              alt="Sharper Websites"
              className="h-8 lg:h-9 w-auto brightness-0 invert"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-electric transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:614-556-9148"
              className="flex items-center gap-2.5 text-lg font-bold text-white hover:text-electric transition-colors duration-200 group"
            >
              <div className="bg-electric/20 p-2 rounded-full group-hover:bg-electric/30 transition-colors">
                <Phone className="w-4 h-4 text-electric" />
              </div>
              614-556-9148
            </a>
            <a
              href="#contact"
              className="bg-electric text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-electric-light transition-all duration-200 hover:shadow-glow"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy border-t border-white/10 py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-electric hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-4 mt-2 px-4 space-y-3">
              <a
                href="tel:614-556-9148"
                className="flex items-center justify-center gap-2.5 text-white text-lg font-bold hover:text-electric transition-colors py-2"
              >
                <div className="bg-electric/20 p-2 rounded-full">
                  <Phone className="w-4 h-4 text-electric" />
                </div>
                614-556-9148
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-electric text-white font-semibold px-5 py-3 rounded-lg hover:bg-electric-light transition-colors"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
