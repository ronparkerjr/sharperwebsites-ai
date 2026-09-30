import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      formId: "Contact Form",
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
    }).catch((err) => console.error("Form tracking error:", err));

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
        _subject: "New Contact Message from Sharper Websites",
      }),
    }).catch(() => {});

    // Simulate network delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", website: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-electric/40 focus:border-electric transition-all text-sm";

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-electric font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Get a Free <span className="text-electric">Quote</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to take your business to the next level? Contact us today for a free custom quote for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info — left sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Phone */}
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-0.5">
                    <a href="tel:614-556-9148" className="hover:text-electric transition-colors">Call Us</a>
                  </h3>
                  <a href="tel:614-556-9148" className="text-2xl font-extrabold text-electric hover:text-electric-light transition-colors block">
                    614-556-9148
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Mon–Fri 9AM–5PM EST</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-0.5">
                    <a href="mailto:info@sharperwebsites.com" className="hover:text-electric transition-colors">Email Us</a>
                  </h3>
                  <a href="mailto:info@sharperwebsites.com" className="text-sm text-electric hover:text-electric-light transition-colors break-all">
                    info@sharperwebsites.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Please let us know how we can help.</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-electric" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-0.5">Location</h3>
                  <p className="font-semibold text-foreground">Columbus, Ohio</p>
                  <p className="text-sm text-muted-foreground mt-1">Serving the USA and Beyond!</p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-navy rounded-2xl p-6 text-center">
              <p className="text-white font-semibold mb-1">Ready to start?</p>
              <p className="text-white/60 text-sm mb-4">Call us directly for a fast quote.</p>
              <a
                href="tel:614-556-9148"
                className="inline-flex items-center gap-2 bg-electric text-white font-bold px-5 py-3 rounded-xl hover:bg-electric-light transition-all duration-200 hover:shadow-glow text-sm"
              >
                <Phone className="w-4 h-4" />
                614-556-9148
              </a>
            </div>
          </div>

          {/* Contact Form — right */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-electric/10 border-2 border-electric/30 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-electric" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll review your request and get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-electric font-semibold text-sm hover:text-electric-light transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Phone <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(614) 000-0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Your Website Address
                        </label>
                        <input
                          type="text"
                          placeholder="https://yoursite.com"
                          value={form.website}
                          onChange={(e) => setForm({ ...form, website: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project, goals, and how we can help you..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-electric text-white font-semibold py-4 rounded-xl hover:bg-electric-light transition-all duration-200 hover:shadow-glow flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
