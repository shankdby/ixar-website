"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, CheckCircle, Search, Waves, Zap, Cpu, Settings, Gauge, ChevronLeft, ChevronRight } from "lucide-react";

// 4 Hero Slides with sliding images, positions, colors and taglines
// Note: leftDesktop/leftMobile use numeric percentages for ALL slides so Framer Motion can interpolate 7% -> 52% smoothly with ZERO snapping/pause!
const heroSlides = [
  {
    id: 0,
    image: "/media/hero-slide-1.jpg",
    heading: "IXAR Robotic Solutions",
    subheading: "Engineering the Future of Underwater Inspection",
    textColor: "#0f172a", // Dark slate-900 / black
    topDesktop: "14%",
    topMobile: "10%",
    leftDesktop: "7%",
    leftMobile: "5%",
    align: "left" as const,
  },
  {
    id: 1,
    image: "/media/hero-slide-2.jpg",
    heading: "IXAR Robotic Solutions",
    subheading: "Innovating Underwater Robotics for Safer Inspections",
    textColor: "#ffffff", // Crisp white
    topDesktop: "52%",
    topMobile: "45%",
    leftDesktop: "7%",
    leftMobile: "5%",
    align: "left" as const,
  },
  {
    id: 2,
    image: "/media/hero-slide-3.jpg",
    heading: "IXAR Robotic Solutions",
    subheading: "Making Complex Underwater Missions Simple",
    textColor: "#0f172a", // Dark slate-900 / black
    topDesktop: "14%",
    topMobile: "10%",
    leftDesktop: "50%",
    leftMobile: "25%",
    align: "right" as const,
  },
  {
    id: 3,
    image: "/media/hero-slide-4.jpg",
    heading: "IXAR Robotic Solutions",
    subheading: "Advanced Robotics for Critical Underwater Operations",
    textColor: "#0f172a", // Dark slate-900 / black
    topDesktop: "14%",
    topMobile: "10%",
    leftDesktop: "50%",
    leftMobile: "25%",
    align: "right" as const,
  }
];

const clientLogos = [
  { name: "Reliance Industries", src: "/images/logos/logo_1.png", url: "https://www.ril.com" },
  { name: "Indian Railways", src: "/images/logos/logo_2.png", url: "https://indianrailways.gov.in" },
  { name: "ONGC", src: "/images/logos/logo_3.png", url: "https://www.ongcindia.com" },
  { name: "Indian Army", src: "/images/logos/logo_4.png", url: "https://indianarmy.nic.in" },
  { name: "Greenko", src: "/images/logos/logo_5.png", url: "https://www.greenkogroup.com" },
  { name: "Larsen & Toubro", src: "/images/logos/logo_6.png", url: "https://www.larsentoubro.com" },
  { name: "IndianOil", src: "/images/logos/logo_7.png", url: "https://iocl.com" },
  { name: "Finolex Industries", src: "/images/logos/logo_8.png", url: "https://finolexpipes.com" },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [displayedSubheading, setDisplayedSubheading] = useState(heroSlides[0].subheading);
  const [isMobile, setIsMobile] = useState(false);

  // Animation phase: 'IDLE' | 'BACKSPACING' | 'TYPING'
  const [animState, setAnimState] = useState<"IDLE" | "BACKSPACING" | "TYPING">("IDLE");
  const targetSlideRef = useRef<number>(0);

  // Track viewport width for smooth mobile vs desktop coordinates
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentSlide = heroSlides[currentSlideIndex];

  // Silky Smooth Typewriter State Machine Ticker
  const triggerTransition = useCallback((nextIdx: number) => {
    if (animState !== "IDLE" || nextIdx === currentSlideIndex) return;
    targetSlideRef.current = nextIdx;
    setAnimState("BACKSPACING");
  }, [animState, currentSlideIndex]);

  // Backspacing Effect
  useEffect(() => {
    if (animState !== "BACKSPACING") return;

    if (displayedSubheading.length > 0) {
      const timer = setTimeout(() => {
        setDisplayedSubheading((prev) => prev.slice(0, -1));
      }, 14); // Ultra-fast smooth erasing
      return () => clearTimeout(timer);
    } else {
      // Finished erasing -> update slide index & start typing immediately (zero pause/snap!)
      setCurrentSlideIndex(targetSlideRef.current);
      setAnimState("TYPING");
    }
  }, [animState, displayedSubheading]);

  // Typing Effect
  useEffect(() => {
    if (animState !== "TYPING") return;

    const targetText = heroSlides[currentSlideIndex].subheading;
    if (displayedSubheading.length < targetText.length) {
      const timer = setTimeout(() => {
        setDisplayedSubheading(targetText.slice(0, displayedSubheading.length + 1));
      }, 25); // ~40fps typing speed
      return () => clearTimeout(timer);
    } else {
      // Finished typing -> return to IDLE
      setAnimState("IDLE");
    }
  }, [animState, displayedSubheading, currentSlideIndex]);

  // Auto-advance slideshow after viewing idle slide for 5 seconds
  useEffect(() => {
    if (animState !== "IDLE") return;

    const autoTimer = setTimeout(() => {
      const nextIdx = (currentSlideIndex + 1) % heroSlides.length;
      triggerTransition(nextIdx);
    }, 5000);

    return () => clearTimeout(autoTimer);
  }, [animState, currentSlideIndex, triggerTransition]);

  const stats = [
    { label: "Year Incorporated", value: "2020", prefix: "" },
    { label: "Refinery Sumps Audited", value: "20+", prefix: "" },
    { label: "Depth Rating Capability", value: "200", prefix: "Meters" },
    { label: "Incubated At", value: "IIT Bombay", prefix: "" }
  ];

  // Dynamic layout coordinates based on device viewport
  const currentTop = isMobile ? currentSlide.topMobile : currentSlide.topDesktop;
  const currentLeft = isMobile ? currentSlide.leftMobile : currentSlide.leftDesktop;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      {/* ─── Hero Section with Dynamic Sliding Background & Framer Motion Moving Text ─── */}
      <section className="relative h-[88vh] md:h-[92vh] w-full overflow-hidden pt-16 bg-slate-950 flex items-center justify-center">
        {/* Background Stack with Hardware Accelerated Opacity Crossfade */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlideIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              style={{ willChange: "opacity" }}
            >
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-full object-cover object-center transform-gpu"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Dynamic Framer Motion Animated Text Container */}
        <motion.div
          animate={{
            top: currentTop,
            left: currentLeft,
            color: currentSlide.textColor,
          }}
          transition={{
            duration: 0.85,
            ease: [0.25, 1, 0.5, 1], // GPU optimized cubic curve
          }}
          className={`absolute z-20 w-[88vw] sm:w-[480px] md:w-[600px] px-2 sm:px-4 pointer-events-auto flex flex-col ${
            currentSlide.align === "right" ? "items-end text-right" : "items-start text-left"
          }`}
          style={{
            textAlign: currentSlide.align,
            willChange: "top, left, color",
          }}
        >
          {/* Heading - Moves to different location and changes font color according to picture */}
          <motion.h1
            animate={{ color: currentSlide.textColor }}
            transition={{ duration: 0.8 }}
            className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-md"
          >
            {currentSlide.heading}
          </motion.h1>

          {/* Subheading - Backspaces itself and types again at the new location, aligned with heading */}
          <div className="mt-2.5 sm:mt-3 min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
            <p className="font-heading text-base sm:text-xl md:text-2xl font-medium leading-snug sm:leading-relaxed drop-shadow opacity-95">
              {displayedSubheading}
              <span className="inline-block w-0.5 h-4 sm:h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className={`flex flex-wrap items-center gap-3 pt-4 sm:pt-6 ${currentSlide.align === "right" ? "justify-end" : "justify-start"}`}>
            <Link 
              href="/contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs md:text-sm font-heading font-semibold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-white border border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-600/30 active:scale-95"
            >
              Get Quote
            </Link>
            <Link 
              href="/company/about"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs md:text-sm font-heading font-semibold uppercase tracking-wider bg-white/90 hover:bg-white text-slate-900 border border-sky-200 transition-all duration-300 shadow-md backdrop-blur-sm active:scale-95"
            >
              About IXAR
            </Link>
          </div>
        </motion.div>

        {/* Slide Navigation Controls & Indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3 bg-slate-950/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
          <button
            onClick={() => triggerTransition((currentSlideIndex - 1 + heroSlides.length) % heroSlides.length)}
            disabled={animState !== "IDLE"}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
          
          <div className="flex items-center space-x-2">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => triggerTransition(idx)}
                disabled={animState !== "IDLE"}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlideIndex === idx
                    ? "w-6 sm:w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                    : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => triggerTransition((currentSlideIndex + 1) % heroSlides.length)}
            disabled={animState !== "IDLE"}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
        </div>

        {/* Ocean Wave / Cyan Scan Accent at bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 opacity-80 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
      </section>

      {/* Statistics Section - Light Card Banner */}
      <section className="py-10 border-y border-sky-200/80 bg-white/90 shadow-sm backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="font-mono text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-cyan-600">
                {stat.value}
                {stat.prefix && <span className="text-sm font-normal text-slate-500 ml-1">{stat.prefix}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PPT Slide 7 Feature Pillars & Subsea Video HUD Player ─── */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
            ADVANCED SUBSEA CAPABILITIES
          </span>
          <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">
            Inspection Systems Engineered for Extreme Visibility & Precision
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Combining high-intensity LED illuminators, Sonar imaging, and real-time AI video analytics to inspect underwater assets safely.
          </p>
        </div>

        {/* 3 Key Feature Columns (PPT Slide 7) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md space-y-4 hover:shadow-xl hover:border-cyan-300 transition-all text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto text-cyan-600">
              <Search className="h-7 w-7" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg">Underwater Asset Evaluation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inspect your underwater assets, before/after-building, maintenance, and structural audits with high-precision camera payloads.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md space-y-4 hover:shadow-xl hover:border-cyan-300 transition-all text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto text-cyan-600">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg">Value-Driven & Game Changing Cost</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pricing varies based on condition and scope of work. With our advanced robotic and AI solutions, you can efficiently inspect and safeguard your underwater assets.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md space-y-4 hover:shadow-xl hover:border-cyan-300 transition-all text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto text-cyan-600">
              <Waves className="h-7 w-7" />
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg">Turbid & Low Visibility Inspection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Advanced lighting and imaging systems enable inspections in turbid water, confined spaces, and low-visibility environments where conventional methods are ineffective.
            </p>
          </div>
        </div>

        {/* Video & Report Management HUD Container (PPT Slide 7) */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden text-white space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
                VIDEO & REPORT MANAGEMENT • LIVE ROV FEED
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              1080p SUBSEA FEED • TELEMETRY SENSORS ACTIVE
            </span>
          </div>

          {/* Video Player with Live Subsea Telemetry Overlay HUD */}
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-800">
            <video 
              controls 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
              poster="/media/Best Pic.png"
            >
              <source src="/media/Untitled design.mp4" type="video/mp4" />
              <source src="/media/Energy Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </section>

      {/* Incubation & Military Support About block (PPT Slide 8) */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
            WHO WE ARE
          </div>
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Replacing Diver Risk with Precision Robotics
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Founded by IIT Bombay and IIT Madras alumni, IXAR Robotic Solutions is a fast-growing defense-aligned startup. We build rugged, proprietary underwater Remotely Operated Vehicles (ROVs) and surface climbing magnetic crawlers designed to handle critical inspection missions.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our technology covers non-destructive testing (NDT), structural diagnostics, and customized mechanical integrations. We are proud to support the Indian Army and various corporate energy giants in auditing high-risk submersible infrastructure.
          </p>
          <div className="pt-2 flex items-center space-x-3 text-cyan-700 font-mono text-sm font-semibold">
            <CheckCircle className="h-5 w-5 text-cyan-600" />
            <span>Proudly Serving Indian Defense & Enterprise Clients</span>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-sky-100 bg-white p-4 shadow-xl flex items-center justify-center h-[340px]">
          <img 
            src="/media/ROV underwater M2.png" 
            alt="IXAR ROV Underwater Mission" 
            className="max-h-full max-w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* ─── Trusted By — Separate Moving Logos Ticker (PPT Slide 8) ──────────────────────────────── */}
      <section className="py-16 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/60 to-white overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Trusted By</span>
          <h3 className="font-heading text-2xl font-bold text-slate-900 mt-1">Our Clients &amp; Partners</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-3 rounded-full" />
        </div>

        {/* Infinite Moving Logo Ticker */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-sky-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-sky-50 to-transparent z-10" />
          
          <div className="marquee-track overflow-hidden py-2">
            <div className="animate-marquee flex items-center gap-8 w-max">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <a
                  key={idx}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${logo.name} official website`}
                  className="bg-white px-6 py-4 rounded-xl border border-sky-100 shadow-md hover:shadow-xl hover:border-cyan-400 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[170px] h-20 flex-shrink-0 group cursor-pointer"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 max-w-[130px] w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose IXAR (Value Proposition) */}
      <section className="py-24 border-t border-sky-200/70 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
            ENGINEERING EDGE
          </div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">
            Designed to Go Deeper, Perform Safer
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Why defense departments and industrial giants choose IXAR for underwater inspection and structural integrity audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Zap className="h-6 w-6 text-cyan-400" />,
              badge: "24/7 CONTINUOUS POWER",
              title: "AC-Powered Endurance",
              body: "Proprietary surface-tether AC power systems allow 24/7 continuous operations with no battery swap downtime — ideal for extended refinery and dam audits."
            },
            {
              icon: <Cpu className="h-6 w-6 text-cyan-400" />,
              badge: "HOT-SWAPPABLE SENSORS",
              title: "Multi-Payload Compatible",
              body: "Modular tool interfaces accept UT probes, ECT arrays, water samplers, manipulator arms, and sonar payloads — all hot-swappable between dives."
            },
            {
              icon: <Settings className="h-6 w-6 text-cyan-400" />,
              badge: "RECONFIGURABLE CHASSIS",
              title: "Modular Architecture",
              body: "Reconfigurable chassis allows rapid field adaptation. Swap sensor pods, arm brackets, and tether reels without specialist tools between inspection dives."
            },
            {
              icon: <Gauge className="h-6 w-6 text-cyan-400" />,
              badge: "0 - 200m DEPTH RATED",
              title: "Deep Depth Rating",
              body: "Our fleet covers 0–200 m depth range. From shallow tank work to offshore platform structural surveys at 200 m, there is an IXAR platform rated for the job."
            },
          ].map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-md space-y-4 hover:shadow-xl hover:border-cyan-300 transition-all duration-300 group">
              <div className="flex items-center justify-between">
                <div className="p-3.5 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-xl border border-cyan-500/30 shadow-md shadow-cyan-950/20 group-hover:border-cyan-400 transition-colors">
                  {feat.icon}
                </div>
                <span className="text-[9px] font-mono font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded uppercase">
                  {feat.badge}
                </span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">{feat.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{feat.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Vibrant Ocean Banner */}
      <section className="py-20 border-t border-sky-200/70 bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-950 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow">
            Ready to Audit Your Submerged Assets?
          </h2>
          <p className="text-sm text-sky-100 leading-relaxed max-w-xl mx-auto">
            Discuss your engineering requirements with our technical operations team. We provide certified B2B inspection services and customized robotic loadouts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="px-8 py-3.5 w-full sm:w-auto rounded-lg text-sm font-heading font-semibold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg transition-all duration-300"
            >
              Request Technical Consultation
            </Link>
            <Link 
              href="/company/about"
              className="px-8 py-3.5 w-full sm:w-auto rounded-lg text-sm font-heading font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
