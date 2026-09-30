import { CheckCircle, Medal, Users, Globe, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: Medal, title: "10+ Years Experience", desc: "Over a decade of delivering exceptional web solutions for businesses of all sizes." },
  { icon: Users, title: "Happy Clients", desc: "Trusted by businesses across the USA to create their online presence and drive real growth." },
  { icon: Globe, title: "Fast & Reliable", desc: "Lightning-fast websites with 99%+ uptime guarantee on our premium hosting infrastructure." },
  { icon: ShieldCheck, title: "Secure Solutions", desc: "Enterprise-level security to protect your website and customer data from online threats." },
];

const checkItems = [
  "Professional web design that converts visitors into customers",
  "Local SEO optimization to dominate search results",
  "Mobile-responsive designs that work on all devices",
  "State-of-the-art hosting with daily backups",
  "24/7 support and ongoing maintenance",
  "Google Ads management for maximum ROI",
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Smiles" },
  { value: "99%", label: "Uptime Guarantee" },
  { value: "100%", label: "Value" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-electric font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Get The <span className="text-electric">Edge</span> Your Business Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The game has changed. It's all about that first impression and being seen when people search for your industry on Google. We help businesses stand out online.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — Story */}
          <article itemScope itemType="https://schema.org/AboutPage">
            <h3 className="text-2xl font-bold text-navy mb-4" itemProp="headline">Serving Clients for Over 10 Years</h3>
            <p className="text-muted-foreground leading-relaxed mb-4" itemProp="text">
              Since our founding, Sharper Websites has been dedicated to helping businesses succeed online. We combine cutting-edge web design with proven SEO strategies and reliable hosting solutions to give our clients the competitive edge they need.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8" itemProp="text">
              Our team understands that your website is often the first impression potential customers have of your business. That's why we focus on creating websites that not only look amazing but also drive real results — more calls, more leads, more revenue.
            </p>
            <ul className="space-y-3 mb-8">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-electric-light transition-all duration-200 hover:shadow-glow"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </article>

          {/* Right — Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-electric" />
                  </div>
                  <h4 className="font-bold text-navy mb-2 text-sm">{f.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-navy rounded-2xl grid grid-cols-2 md:grid-cols-4 py-8 px-4 gap-y-8 md:gap-y-0 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <p className="text-3xl lg:text-4xl font-extrabold text-electric mb-1">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
