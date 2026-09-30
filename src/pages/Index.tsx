import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Sharper Websites — Professional Web Design, SEO & Hosting in Columbus, Ohio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Sharper Websites delivers professional web design, local SEO, and premium hosting that convert visitors into customers. Serving businesses nationwide from Columbus, Ohio. 614-556-9148.");
    }
  }, []);

  return (

    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Sticky Phone Button (mobile) */}
      <a
        href="tel:614-556-9148"
        className="fixed bottom-6 right-6 z-50 lg:hidden bg-electric text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-electric-light transition-all duration-200 hover:scale-110 pulse-glow"
        aria-label="Call 614-556-9148"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
