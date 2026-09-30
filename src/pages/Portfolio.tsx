import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from "lucide-react";

// Duplicate of the images from PortfolioSection so they can be edited independently
const galleryImages = [
  {
    src: "/vortexwaterpros.jpg",
    alt: "Vortex Water Pros water treatment website design",
    label: "Vortex Water Pros",
    url: "https://vortexwaterpros.com/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/d30a544e-9a7f-406a-8361-61559fe1acfd.png",
    alt: "Columbus Masonry website design",
    label: "Columbus Masonry",
    url: "https://columbusmasonry.com/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/adc7bfeb-4cf2-44cf-9495-bbf514596e21.png",
    alt: "Ocean Bay Junk Removal website design",
    label: "Ocean Bay Junk Removal",
    url: "https://oceanbay-junkremoval.com/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/ea423040-d191-420d-9a9c-41a57592fada.png",
    alt: "Elite Home Renovations website design",
    label: "Elite Home Renovations",
    url: "https://hellohomerenovations.com/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/b29eb8aa-006a-48af-82a8-5548b43daa0d.png",
    alt: "Match Point Pickleball Club website design",
    label: "Match Point Pickleball Club",
    url: "https://matchpointpickleballclub.com/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/assets/217882a7-c51b-4d80-95a6-ca0d6156bab3.jpg",
    alt: "Firestone Masonry website design",
    label: "Firestone Masonry",
    url: "https://firestonemasonry.com/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/ea35faa4-b5ae-4d3a-b972-0be079537456.png",
    alt: "WFF Memorial website design",
    label: "WFF Memorial",
    url: "https://wffmemorial.org/",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/a2bf27df-b6ec-4224-bf16-77bb5f7e5603.png",
    alt: "Junk Removal King website design",
    label: "Junk Removal King",
    url: "https://junkremovalking.com",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/assets/2129fbd4-8939-4183-acad-617e04af92d6.jpg",
    alt: "Gerth Law website design",
    label: "Gerth Law",
    url: "https://gerthlaw.com",
  },
  {
    src: "https://vibe.filesafe.space/1776947140561926129/attachments/6384a1b4-6690-4f45-abe5-f3902fe89fea.png",
    alt: "Sotos Drywall website design",
    label: "Sotos Drywall",
    url: "https://sotosdrywallllc.com",
  },
];

export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goPrev, goNext]);

  // Ensure window is scrolled to top on mount and set SEO metadata
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Portfolio — Sharper Websites | Web Design Columbus, Ohio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the complete portfolio of Sharper Websites. We build stunning, responsive, and high-converting websites for businesses nationwide.");
    }
    
    // Cleanup on unmount
    return () => {
      document.title = "Sharper Websites — Professional Web Design, SEO & Hosting in Columbus, Ohio";
      if (metaDesc) {
        metaDesc.setAttribute("content", "Sharper Websites delivers professional web design, local SEO, and premium hosting that convert visitors into customers. Serving businesses nationwide from Columbus, Ohio. 614-556-9148.");
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pb-24">
        {/* Dark Header Section for Navbar readability */}
        <div className="bg-navy pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center relative mb-14">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-electric font-semibold text-sm uppercase tracking-widest mb-3">Our Work</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">Complete Portfolio</h1>
            <p className="text-white/80 text-lg">
              Explore our full collection of professional website designs.<br />
              We build sites that look great and drive results.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative rounded-2xl overflow-hidden aspect-video bg-muted border border-border hover:border-electric/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer text-left w-full"
                aria-label={`View ${img.label} in lightbox`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white font-semibold text-sm">{img.label}</span>
                    <div className="w-8 h-8 rounded-full bg-electric flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio image lightbox"
          >
            {/* Top Right Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
              {galleryImages[lightboxIndex].url && (
                <a
                  href={galleryImages[lightboxIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-electric text-white px-4 py-2 rounded-lg font-medium hover:bg-electric-light transition-colors duration-200 shadow-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </a>
              )}
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-black/40 px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-electric/80 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image */}
            <div
              className="relative max-w-7xl w-full mx-auto px-14 sm:px-24 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                key={lightboxIndex}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] lg:max-h-[88vh] object-contain rounded-xl shadow-2xl animate-fade-in"
              />
              {/* Label */}
              <div className="mt-4 text-center text-white/90 font-semibold text-sm sm:text-base tracking-wide bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
                {galleryImages[lightboxIndex].label}
              </div>
            </div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-electric/80 flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-0 right-0 w-full flex justify-center">
              <div className="flex gap-2 px-4 overflow-x-auto max-w-full pb-2 scrollbar-hide items-center justify-start sm:justify-center">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-12 h-8 sm:w-16 sm:h-10 rounded-md overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                      i === lightboxIndex
                        ? "border-electric scale-110 shadow-glow"
                        : "border-white/20 opacity-50 hover:opacity-80"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
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
}
