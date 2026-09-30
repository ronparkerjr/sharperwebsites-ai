import { ArrowRight, Star, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", website: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData: Record<string, string> = {
      email: form.email,
      phone: form.phone,
    };
    const formLabels: Record<string, string> = {
      email: "Email",
      phone: "Phone",
    };

    const nameParts = form.name.trim().split(" ");
    if (nameParts[0]) {
      formData.first_name = nameParts[0];
      formLabels.first_name = "First Name";
    }
    if (nameParts.length > 1) {
      formData.last_name = nameParts.slice(1).join(" ");
      formLabels.last_name = "Last Name";
    }
    
    if (form.website.trim()) {
      formData.website = form.website.trim();
      formLabels.website = "Website";
    }
    
    if (form.message.trim()) {
      formData.calendar_notes = form.message.trim();
      formLabels.calendar_notes = "Message";
    }

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "Hero Quote Form",
      formData,
      formLabels,
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_98f12806b5f3460bb76cb3df533b1727",
      locationId: "OuUMs2iYrQC7upFiztWF",
      sessionId: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
      },
    };

    // 1. Send to CRM
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        version: "2021-07-28",
      },
      body: JSON.stringify(trackingPayload),
    }).catch(() => {});

    // 2. Send to Gmail via FormSubmit
    fetch("https://formsubmit.co/ajax/rjparkerjr@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        website: form.website,
        message: form.message,
        _subject: "New Quote Request from Sharper Websites",
      }),
    }).catch(() => {});

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", website: "", message: "" });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-electric/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-electric/8 blur-3xl" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)] lg:min-h-0 lg:py-32">
          {/* Left — Hero Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full">
              <Star className="w-3.5 h-3.5 text-electric fill-electric" />
              10+ Years of Excellence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
              <span className="relative inline-block">
                <span className="text-electric">Sharper</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 18"
                  className="absolute -bottom-2 left-0 w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 10 Q30 3, 60 10 Q90 17, 120 9 Q150 2, 180 10 Q200 15, 216 9"
                    fill="none"
                    stroke="hsl(var(--electric))"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="swoosh-path"
                  />
                </svg>
              </span>{" "}Websites<br />
              That Drive Results
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Professional web design, local SEO, and state-of-the-art hosting solutions. Get the edge your business needs with websites that convert visitors into paying customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-electric-light transition-all duration-200 hover:shadow-glow hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                View Portfolio
              </Link>
            </div>

            {/* Phone number prominently displayed */}
            <a
              href="tel:614-556-9148"
              className="inline-flex items-center gap-3 text-white hover:text-electric transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-electric/20 border border-electric/40 flex items-center justify-center group-hover:bg-electric/30 transition-colors">
                <Phone className="w-5 h-5 text-electric" />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider">Call Us Now</p>
                <p className="text-xl font-bold text-white">614-556-9148</p>
              </div>
            </a>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-white/10">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "100+", label: "Happy Clients" },
                { value: "99%", label: "Uptime Guarantee" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-electric">{stat.value}</p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quote Form */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-navy mb-1">Request a Quote</h2>
              <p className="text-sm text-muted-foreground mb-6">Fill in the form and we'll get back to you quickly.</p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-electric" />
                  </div>
                  <p className="font-bold text-navy text-lg">Thank you!</p>
                  <p className="text-muted-foreground text-sm mt-1">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Your Website Address"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-sm"
                  />
                  <textarea
                    placeholder="Message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/50 focus:border-electric transition-all text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-electric text-white font-semibold py-3.5 rounded-lg hover:bg-electric-light transition-all duration-200 hover:shadow-glow text-sm"
                  >
                    Get A Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
