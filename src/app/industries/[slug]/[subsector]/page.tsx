"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, Wrench, Target } from "lucide-react";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { products } from "@/data/products";


interface SubsectorPageProps {
  params: Promise<{ slug: string; subsector: string }>;
}

const subsectorServices: Record<string, string[]> = {
  "oil-and-gas": [
    "Cooling tower sump visual & NDT inspection without dewatering",
    "Offshore pipeline ultrasonic thickness mapping",
    "Subsea storage tank structural integrity assessment",
    "Chemical sump liner condition surveys (acid-resistant ROV)",
    "Separator vessel and intake basin inspections",
  ],
  "hydro-dam": [
    "Penstock and intake gate internal condition surveys",
    "Dam face and spillway concrete crack mapping",
    "Reservoir sedimentation and debris assessment",
    "Underwater valve and gate seal integrity checks",
    "Turbine draft tube visual inspection",
  ],
  "offshore-wind": [
    "Monopile foundation scour and corrosion surveys",
    "Transition piece weld inspection with ECT probes",
    "Subsea cable route condition assessment",
    "J-tube and cable pull-in visual audits",
    "Platform leg splash-zone thickness mapping",
  ],
  nuclear: [
    "Spent fuel pool visual surveillance and inspection",
    "Reactor cooling water intake pipe surveys",
    "Emergency core cooling system (ECCS) channel mapping",
    "Storage pool concrete liner and joint inspections",
    "Nuclear facility drainage and condensate tank audits",
  ],
  dam: [
    "Submerged concrete surface condition surveys",
    "Intake tower structural and gate seal inspections",
    "Spillway floor and sill crack identification",
    "Reservoir anchor bolt and tie-rod assessment",
    "Stoplogs and trash rack debris removal support",
  ],
  bridge: [
    "Bridge pier and pile scour depth mapping (sonar)",
    "Submerged concrete crack measurement (laser scaler)",
    "Pile cap structural integrity inspection",
    "Submerged rebar exposure and corrosion assessment",
    "River bed sediment profile surveys",
  ],
  "water-utility": [
    "Live potable water reservoir inspection (no draining)",
    "Storage tank joint seal and liner integrity surveys",
    "Pump station sump debris and condition checks",
    "Intake pipe blockage identification and mapping",
    "Microbial & sediment sample collection",
  ],
  telecommunication: [
    "Submarine cable external damage and burial depth surveys",
    "Cable landing station seabed condition mapping",
    "Underwater conduit and cable protection inspection",
    "Cable route environmental assessment",
    "Pre-laying seabed survey support",
  ],
  shipping: [
    "In-water hull survey (IWS) in lieu of dry-docking",
    "Hull plate thickness mapping via magnetic crawler",
    "Propeller, rudder and shaft visual inspections",
    "Biofouling assessment and cleaning readiness surveys",
    "Sea chest grating and keel inspections",
  ],
  ports: [
    "Quay wall and berth structural condition surveys",
    "Fender bracket and mooring pile inspections",
    "Underwater fender panel damage assessment",
    "Jetty pile splash-zone corrosion mapping",
    "Harbor seabed debris identification and mapping",
  ],
  "shipbuilding-and-repair": [
    "Dry dock and wet dock hull weld inspection",
    "Steel plate thickness and pit mapping (UT)",
    "Ballast tank internal visual survey and NDT",
    "Quality control inspection during new construction",
    "Pre-delivery in-water survey for class certification",
  ],
  "marine-construction": [
    "Offshore platform leg and caisson inspection",
    "Breakwater and seawall concrete condition surveys",
    "Marine terminal berth and pile structural audits",
    "Subsea pipeline installation support inspections",
    "Post-installation seabed and foundation checks",
  ],
  "net-inspection": [
    "Aquaculture cage net hole and tear detection",
    "Mooring line and anchor pile condition surveys",
    "Cage bottom debris identification and retrieval",
    "Net biofouling mapping for cleaning scheduling",
    "Submerged feeding equipment condition checks",
  ],
  rescue: [
    "Emergency underwater search and object localization",
    "Submerged vehicle and equipment identification",
    "Real-time video relay for rescue team situational awareness",
    "Confined underwater space access (storm drains, channels)",
    "Harbor and river bed security sweeps",
  ],
  "sediment-and-water-sampling": [
    "Triggered water sample collection at precise depths",
    "Sediment core sampling in lakes and reservoirs",
    "Industrial effluent discharge monitoring",
    "Offshore environmental baseline surveys",
    "Tailing pond toxicity assessment sampling",
  ],
  "search-operations": [
    "Sonar-based object localization in turbid water",
    "Lost equipment and cargo recovery operations",
    "Underwater evidence documentation and photography",
    "Archaeological site preliminary survey",
    "Pre-construction site clearance inspections",
  ],
};

const subsectorProducts: Record<string, string[]> = {
  "oil-and-gas": ["rov-genesis", "rov-titan", "magnetic-crawlers"],
  "hydro-dam": ["rov-genesis", "rov-volt", "rov-vector"],
  "offshore-wind": ["rov-vector", "rov-titan"],
  nuclear: ["rov-volt", "rov-genesis"],
  dam: ["rov-genesis", "rov-volt"],
  bridge: ["rov-vector", "rov-volt"],
  "water-utility": ["rov-volt", "rov-genesis"],
  telecommunication: ["rov-vector"],
  shipping: ["ship-hull-cleaner", "magnetic-crawlers"],
  ports: ["rov-titan", "rov-vector"],
  "shipbuilding-and-repair": ["magnetic-crawlers", "rov-volt"],
  "marine-construction": ["rov-titan", "rov-vector"],
  "net-inspection": ["rov-volt"],
  rescue: ["rov-vector", "rov-volt"],
  "sediment-and-water-sampling": ["rov-volt", "rov-genesis"],
  "search-operations": ["rov-vector", "rov-genesis"],
};

export default async function SubsectorPage({ params }: SubsectorPageProps) {
  const { slug, subsector } = await params;

  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const sub = industry.subIndustries.find((s) => s.slug === subsector);
  if (!sub) notFound();

  const services = subsectorServices[subsector] ?? industry.services;
  const productSlugs = subsectorProducts[subsector] ?? [];
  const relatedProducts = products.filter((p) => productSlugs.includes(p.slug));
  const relatedCases = caseStudies.filter((cs) =>
    cs.industry.toLowerCase() === industry.name.toLowerCase()
  ).slice(0, 2);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans pb-24">
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      {/* Hero Banner with Full Screen Width Video Background */}
      <section className="relative w-full h-[65vh] md:h-[75vh] flex items-end overflow-hidden border-b border-cyan-500/20 pt-16 bg-slate-950">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            poster={sub.image}
          >
            <source src={industry.heroVideo} type="video/mp4" />
            <source src="/media/Carpi TRC ROV Inspection.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60 z-10" />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-12 w-full space-y-4 text-left">
          <nav className="flex items-center space-x-2 text-[11px] font-mono font-semibold text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/industries/${industry.slug}`} className="hover:text-cyan-400 transition-colors capitalize">
              {industry.name}
            </Link>
            <span>/</span>
            <span className="text-white font-bold">{sub.name}</span>
          </nav>
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-mono text-[10px] font-bold tracking-widest uppercase">
              {industry.name} Sector
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              {sub.name}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed font-sans drop-shadow">
              Robotic inspection and assessment services for {sub.name.toLowerCase()} operations.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Services */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase">Overview</span>
            <h2 className="font-heading text-3xl font-bold text-white">
              Subsea Solutions for {sub.name}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{sub.description}</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-xs font-heading font-bold uppercase tracking-wider bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg transition-all duration-300"
          >
            <span>Request Technical Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="h-5 w-5 text-cyan-400" />
            <h3 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
              Inspection Services Scope
            </h3>
          </div>
          <div className="space-y-3">
            {services.map((svc, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-md">
                <CheckCircle className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-slate-300 leading-relaxed font-sans">{svc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 border-t border-cyan-500/20 max-w-7xl mx-auto px-6 space-y-10 relative z-10 text-left">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase">EQUIPMENT</span>
            <h2 className="font-heading text-2xl font-bold text-white">
              Recommended Robotic Platforms for {sub.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((prod) => (
              <Link
                key={prod.slug}
                href={`/products/${prod.slug}`}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-400 p-6 flex flex-col space-y-4 group transition-all duration-300 shadow-xl"
              >
                <div className="h-36 flex items-center justify-center bg-slate-950 rounded-xl border border-slate-800">
                  <img src={prod.image} alt={prod.name} className="max-h-28 max-w-full object-contain" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {prod.name}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">{prod.depthRating}m Depth Rated</span>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">{prod.tagline}</p>
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 flex items-center space-x-1.5 mt-auto uppercase">
                  <span>View Specifications</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
