"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, CheckCircle, Award, Plug, Boxes, Wrench, Waves, Search, Activity, Compass, Eye, Zap, Cpu, Settings, Gauge } from "lucide-react";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

// Sub-sector application cards — using high-resolution media images
const applicationCards = [
  { name: "Oil & Gas",       image: "/media/Offshore & Energy Assets.jpg", href: "/industries/energy/oil-and-gas" },
  { name: "Hydro Dam",       image: "/media/Hydro Dam.jpg", href: "/industries/energy/hydro-dam" },
  { name: "Offshore Wind",   image: "/media/Offshore Wind.jpg", href: "/industries/energy/offshore-wind" },
  { name: "Nuclear",         image: "/media/Nuclear.jpg", href: "/industries/energy/nuclear" },
  { name: "Bridges",         image: "/media/Bridge.jpg", href: "/industries/infrastructure/bridge" },
  { name: "Dams",            image: "/media/Dam.jpg", href: "/industries/infrastructure/dam" },
  { name: "Shipping",        image: "/media/Ship Inspection.jpg", href: "/industries/maritime/shipping" },
  { name: "Ports",           image: "/media/ROV Port.png", href: "/industries/maritime/ports" },
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
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [activeCycleIndex, setActiveCycleIndex] = useState(0);

  const taglines = [
    "Engineering the Future of Underwater Inspection",
    "Innovating Underwater Robotics for Safer Inspections",
    "Making Complex Underwater Missions Simple",
    "Advanced Robotics for Critical Underwater Operations"
  ];

  // Rotate hero taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % taglines.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Year Incorporated", value: "2020", prefix: "" },
    { label: "Refinery Sumps Audited", value: "20+", prefix: "" },
    { label: "Depth Rating Capability", value: "200", prefix: "Meters" },
    { label: "Incubated At", value: "IIT Bombay", prefix: "" }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      {/* Hero Section - Light Ocean Theme */}
      <section className="relative h-[88vh] flex items-center justify-center overflow-hidden pt-12 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/70 via-sky-900/50 to-slate-50 z-10" />
          <img 
            src="/media/Best Pic.png" 
            alt="Deep Sea Submersible ROV" 
            className="w-full h-full object-cover object-center scale-105 opacity-45"
          />
          {/* Light Ambient Rays */}
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-xs font-mono font-semibold tracking-wide text-cyan-300 uppercase shadow-lg shadow-cyan-950/50"
          >
            <Award className="h-4 w-4 text-cyan-400" />
            <span>IIT Bombay & IIT Madras Alumni Startup</span>
          </motion.div>

          {/* Dynamic Heading */}
          <div className="space-y-4 max-w-4xl mx-auto h-[120px] md:h-[160px] flex items-center justify-center">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
              {taglines[activeCycleIndex]}
            </h1>
          </div>

          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
            IXAR Robotic Solutions designs and builds world-class underwater ROVs and vertical magnetic crawlers from scratch. We replace human divers in hazardous zones, delivering premium inspections in less time with superior NDT data.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-heading font-semibold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-white border border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-600/30"
            >
              Get Inspection Quote
            </Link>
            <a 
              href="#fleet"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-heading font-semibold uppercase tracking-wider bg-white/90 hover:bg-white text-sky-900 border border-sky-200 transition-all duration-300 shadow-md"
            >
              Explore Our Fleet
            </a>
          </div>
        </div>

        {/* Ocean Wave / Cyan Scan Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 opacity-60 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
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

      {/* ─── PPT Slide 7 Feature Pillars & Subsea Video HUD Player (BlueRobotics / EyeROV reference) ─── */}
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
              <source src="/media/Energy Video.mp4" type="video/mp4" />
              <source src="/media/Record 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subsea Telemetry Overlay HUD */}
            <div className="absolute top-4 left-4 right-4 pointer-events-none flex justify-between font-mono text-[11px] text-cyan-300 drop-shadow-md bg-slate-950/70 backdrop-blur px-4 py-2 rounded-lg border border-cyan-500/30">
              <span>Temperature: 30.1°C</span>
              <span>2026-07-26 11:48:53</span>
              <span>Depth: -0.4m</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-between font-mono text-[11px] text-cyan-300 drop-shadow-md bg-slate-950/70 backdrop-blur px-4 py-2 rounded-lg border border-cyan-500/30">
              <span>Heading: 284°</span>
              <span>Lat: 19.0760° N | Lon: 72.8777° E</span>
              <span>Pitch: 0°</span>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation & Military Support About block */}
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

      {/* Fleet Showcase (Interactive) - Crisp Light Theme */}
      <section id="fleet" className="py-24 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
              PRODUCT FLEET
            </div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">
              Advanced Underwater & Climbing Systems
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore our line-up of industrial inspection systems. Click on any unit to load real-time telemetry specs, loadout options, and dimensional models.
            </p>
          </div>

          {/* Switcher Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Product Tabs */}
            <div className="flex flex-col space-y-3">
              {products.map((prod) => (
                <button
                  key={prod.slug}
                  onClick={() => setSelectedProduct(prod)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedProduct.slug === prod.slug
                      ? "bg-cyan-600 border-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                      : "bg-white border-sky-100 text-slate-700 hover:border-cyan-300 hover:bg-sky-50/50 shadow-sm"
                  }`}
                >
                  <div className="font-heading font-semibold text-sm">{prod.name}</div>
                  <div className={`text-[11px] mt-1 line-clamp-1 ${selectedProduct.slug === prod.slug ? "text-cyan-100" : "text-slate-500"}`}>
                    {prod.tagline}
                  </div>
                </button>
              ))}
            </div>

            {/* Spec Details Panel */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-sky-100 shadow-xl">
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-sky-100 h-[270px]">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="max-h-[220px] max-w-full object-contain animate-float drop-shadow-md"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">{selectedProduct.name}</h3>
                  <span className="text-xs font-mono font-semibold text-cyan-600 mt-1 block tracking-wider uppercase">
                    {selectedProduct.depthRating}m Depth Rated
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-2 gap-4 font-mono text-xs border-t border-b border-sky-100 py-4">
                  <div>
                    <span className="text-slate-400 block text-[10px]">WEIGHT</span>
                    <span className="text-slate-800 font-semibold">{selectedProduct.telemetry.weight}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DIMENSIONS</span>
                    <span className="text-slate-800 font-semibold">{selectedProduct.telemetry.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">THRUSTERS</span>
                    <span className="text-slate-800 font-semibold">{selectedProduct.telemetry.thrusters} Units</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DEGREES OF FREEDOM</span>
                    <span className="text-slate-800 font-semibold">{selectedProduct.telemetry.dof}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    href={`/products/${selectedProduct.slug}`}
                    className="inline-flex items-center space-x-2 text-xs font-heading font-semibold uppercase tracking-wider text-cyan-600 hover:text-cyan-800 transition-colors duration-200"
                  >
                    <span>View Specifications & Brochure</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
            TARGET SECTORS
          </div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">
            Industrial Applications & Inspections
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We deliver underwater inspection and non-destructive survey solutions tailored to the strict engineering requirements of critical industrial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <Link 
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-md hover:shadow-xl hover:border-cyan-300 flex flex-col h-[350px] group transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={ind.heroImage} 
                  alt={ind.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 right-6 font-heading text-lg font-bold text-white drop-shadow-md">
                  {ind.name}
                </h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {ind.description}
                </p>
                <span className="text-[11px] font-mono font-semibold text-cyan-600 flex items-center space-x-1.5 mt-4 uppercase">
                  <span>View Services</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Case Studies Card Grid (All 8 Case Studies Shown) ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-mono text-[10px] font-bold tracking-widest uppercase border border-amber-200">
              Field Operations
            </span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Case Studies</h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Real deployments. Real results. Click any project you recognise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white rounded-2xl border border-sky-100 shadow-md hover:shadow-xl hover:border-amber-300 overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  {/* Industry badge */}
                  <span className="absolute top-3 left-3 z-20 text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-amber-500 text-white shadow">
                    {cs.industry}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                  <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug group-hover:text-amber-700 transition-colors duration-200">
                    {cs.title}...
                  </h3>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500">{cs.duration}</span>
                    <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-cyan-600 uppercase hover:text-cyan-800 transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Applications Sub-Sector Grid ─────────────────────────────────────── */}
      <section className="py-24 border-t border-sky-200/70 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
              Applications
            </span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Industries We Serve</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Click any sector to explore how our robotic platforms are deployed across Energy, Infrastructure, and Maritime operations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {applicationCards.map((card) => (
              <Link
                key={card.name}
                href={card.href}
                className="group relative rounded-xl overflow-hidden border border-sky-100 shadow-md hover:shadow-xl h-52 flex items-end cursor-pointer transition-all duration-300"
              >
                {/* Background image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                {/* Hover cyan border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400 rounded-xl transition-all duration-300" />
                {/* Label */}
                <div className="relative z-10 p-4 w-full">
                  <span className="font-heading font-bold text-sm text-white group-hover:text-cyan-300 transition-colors duration-200">
                    {card.name}
                  </span>
                  <div className="flex items-center space-x-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-mono text-cyan-300 uppercase">Explore</span>
                    <ArrowRight className="h-3 w-3 text-cyan-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trusted By — Separate Moving Logos Ticker ──────────────────────────────── */}
      <section className="py-16 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/60 to-white overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Trusted By</span>
          <h3 className="font-heading text-2xl font-bold text-slate-900 mt-1">Our Clients &amp; Partners</h3>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-3 rounded-full" />
        </div>

        {/* Infinite Moving Logo Ticker with SEPARATE logo cards */}
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
