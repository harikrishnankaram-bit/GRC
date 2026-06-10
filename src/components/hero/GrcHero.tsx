import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Localized copies of main project high-fidelity slide assets
import heroAiDriven from "../../assets/hero-ai-driven.jpg";
import heroSoc from "../../assets/hero-soc.jpg";
import heroVerify from "../../assets/hero-verify.jpg";
import heroIntegration from "../../assets/hero-integration.jpg";
import heroDrone from "../../assets/hero-drone.jpg";
import heroFacility from "../../assets/verticals-facility.jpg";
import heroCommand from "../../assets/command_center_1.jpg";

const grcSlides = [
  {
    badge: "Our Strategic Evolution",
    title: "From Reactive Audits to",
    highlight: "Real-Time GRC Overwatch",
    titleEnd: "",
    description: "We are transforming traditional static compliance checks into a dynamic, AI-driven asset for 100% corporate posture confidence.",
    image: heroAiDriven,
  },
  {
    badge: "Integrated GRC Framework",
    title: "Technology-Led",
    highlight: "Strategic Governance",
    titleEnd: "Structures",
    description: "Consolidate risk advisory, internal audit protocols, and strategic compliance controls into a single, unified enterprise dashboard.",
    image: heroIntegration,
  },
  {
    badge: "Continuous Overwatch",
    title: "Real-Time Data Security &",
    highlight: "Regulatory Auditing",
    titleEnd: "",
    description: "Proactively audit technical security controls and statutory mandates (RBI, SEBI, DPDP Act) under elite continuous supervision.",
    image: heroSoc,
  },
  {
    badge: "Third-Party Assurance",
    title: "Supply Chain Due Diligence &",
    highlight: "Vendor Risk",
    titleEnd: "Management",
    description: "Secure your enterprise ecosystem with rigorous pre-engagement vendor audits, policy checkmarks, and regulatory due diligence.",
    image: heroVerify,
  },
  {
    badge: "Industrial Compliance",
    title: "EHS Risk &",
    highlight: "Factory Act Auditing",
    titleEnd: "Procedures",
    description: "Complete statutory management for Environment, Health, Safety, and physical manufacturing compliance frameworks (ISO 45001).",
    image: heroDrone,
  },
  {
    badge: "Statutory Labor Advisory",
    title: "Enterprise Labor Laws &",
    highlight: "Operational Assurances",
    titleEnd: "",
    description: "End-to-end mapping and strategic execution of complex labor laws, statutory filings, and employee governance protocols.",
    image: heroFacility,
  },
  {
    badge: "Govenics Trust Grid",
    title: "Centralized Enterprise",
    highlight: "Governance & Compliance",
    titleEnd: "Hub",
    description: "24/7 centralized oversight of compliance health, critical policy deviations, and data privacy leaks across all business units.",
    image: heroCommand,
  },
];

export const GrcHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % grcSlides.length);
    }, 5500);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isHovered) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isHovered, startAutoPlay, stopAutoPlay]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAutoPlay();
    setActiveIndex((prev) => (prev - 1 + grcSlides.length) % grcSlides.length);
    if (!isHovered) startAutoPlay();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    stopAutoPlay();
    setActiveIndex((prev) => (prev + 1) % grcSlides.length);
    if (!isHovered) startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
    if (!isHovered) startAutoPlay();
  };

  // Stagger variants for slide contents
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const elementVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-[92dvh] md:h-[92dvh] flex items-center bg-white overflow-hidden pt-24 pb-16 md:py-0 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Carousel Container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${grcSlides[activeIndex].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Double White Gradients overlay for elite light layout integration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent/10 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />

      {/* Decorative Grid Lines to match the clean grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,82,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,82,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] z-10 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center justify-center text-center w-full h-full">
        <div className="max-w-3xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="space-y-6 md:space-y-7 flex flex-col items-center text-center"
            >
              {/* Premium GRC Badge */}
              <motion.div
                variants={elementVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100/90 border border-slate-200 rounded-full shadow-sm"
              >
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-extrabold text-slate-700 tracking-[0.2em] uppercase">
                  {grcSlides[activeIndex].badge}
                </span>
              </motion.div>

              {/* Slide Heading with Highlight */}
              <motion.h1
                variants={elementVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight font-heading"
              >
                {grcSlides[activeIndex].title}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent block sm:inline">
                  {grcSlides[activeIndex].highlight}
                </span>{" "}
                {grcSlides[activeIndex].titleEnd}
              </motion.h1>

              {/* Slide Description */}
              <motion.p
                variants={elementVariants}
                className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed font-medium"
              >
                {grcSlides[activeIndex].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={elementVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
              >
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-blue-500/20 hover:scale-[1.02]">
                    Schedule GRC Audit <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href="#industries" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 rounded-2xl text-sm font-bold tracking-wide transition-all hover:scale-[1.02]">
                    Explore Verticals
                  </button>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={elementVariants}
                className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-6 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 border-t border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span className="text-slate-600">100% Statutory Assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span className="text-slate-600">15+ Enterprise Industries</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span className="text-slate-600">SLA & Cyber Guaranteed</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows */}
      <div className="absolute right-8 bottom-12 z-20 hidden md:flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-blue-600 border border-slate-200 rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {grcSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-10 bg-blue-600"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeIndex === index && (
              <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40" />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar showing active indicator level */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 z-20">
        <div
          className="h-full bg-blue-600 transition-all duration-700 ease-out"
          style={{ width: `${((activeIndex + 1) / grcSlides.length) * 100}%` }}
        />
      </div>
    </section>
  );
};
