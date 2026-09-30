import { Palette, Smartphone, Search, Server, BarChart2, Shield, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Professional Web Design",
    description: "Eye-catching, responsive designs that turn heads and convert visitors into customers. Every website is crafted to perfection.",
    features: ["Custom Design", "Mobile Responsive", "Modern UI/UX", "Brand Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Tablet Friendly",
    description: "Responsive websites that look amazing on all devices. Your site will automatically adapt to any screen size.",
    features: ["Cross-Device Testing", "Touch Optimization", "Fast Loading", "App-Like Experience"],
  },
  {
    icon: Search,
    title: "Local SEO Optimization",
    description: "Get found by customers searching for your services in your local market. Dominate local search results.",
    features: ["Google My Business", "Local Keywords", "Citation Building", "Review Management"],
  },
  {
    icon: Server,
    title: "Premium Web Hosting",
    description: "Lightning-fast, secure hosting with 99%+ uptime guarantee. Built on state-of-the-art infrastructure.",
    features: ["SSD Storage", "Daily Backups", "SSL Certificates", "24/7 Monitoring"],
  },
  {
    icon: BarChart2,
    title: "Google Ads Management",
    description: "Professional Google Ads campaigns that drive qualified leads and maximize your advertising ROI.",
    features: ["Keyword Research", "Ad Creation", "Bid Management", "Performance Tracking"],
  },
  {
    icon: Shield,
    title: "Website Security",
    description: "Comprehensive security solutions to protect your website from threats and ensure peace of mind.",
    features: ["Malware Scanning", "Firewall Protection", "Security Updates", "Threat Monitoring"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-electric font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Complete <span className="text-electric">Digital</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From stunning web design to powerful SEO and reliable hosting, we provide everything your business needs to succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group bg-card border border-border rounded-2xl p-7 card-hover hover:border-electric/30"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-5 group-hover:bg-electric group-hover:border-electric transition-all duration-300">
                  <Icon className="w-6 h-6 text-electric group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2" itemProp="name">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5" itemProp="description">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-electric flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-electric font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                >
                  Get A Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-navy-mid transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
