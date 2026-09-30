import { Phone, Mail, MapPin } from "lucide-react";

const logoUrl = "https://vibe.filesafe.space/1776947140561926129/assets/f19c39ba-2a00-4b3b-a639-0c6eb332ee4c.png";

const services = ["Web Design", "Local SEO", "Web Hosting", "Google Ads", "Website Security"];
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src={logoUrl}
              alt="Sharper Websites"
              className="h-8 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional web design, SEO, and hosting solutions that help businesses grow online. Serving clients nationwide with 10+ years of experience.
            </p>
            <div className="space-y-2.5">
              <a href="tel:614-556-9148" className="flex items-center gap-2.5 text-white/60 hover:text-electric transition-colors text-sm group">
                <Phone className="w-4 h-4 text-electric" />
                614-556-9148
              </a>
              <a href="mailto:info@sharperwebsites.com" className="flex items-center gap-2.5 text-white/60 hover:text-electric transition-colors text-sm">
                <Mail className="w-4 h-4 text-electric" />
                info@sharperwebsites.com
              </a>
              <span className="flex items-center gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-electric" />
                Columbus, Ohio
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="/#services" className="text-white/60 hover:text-electric transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/60 hover:text-electric transition-colors text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2025 Sharper Websites. All rights reserved.</p>
          <p className="text-white/40 text-sm">Crafted with precision in Columbus, Ohio</p>
        </div>
      </div>
    </footer>
  );
}
