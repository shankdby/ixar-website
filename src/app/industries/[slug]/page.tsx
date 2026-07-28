import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, AlertTriangle, Cpu, ArrowLeft, CheckCircle2 } from "lucide-react";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  // Get related case studies
  const relatedCaseStudies = caseStudies.filter(
    (cs) => cs.industry.toLowerCase() === industry.name.toLowerCase()
  );

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* ─── Full Screen Width Autoplay Video Hero Section for Applications ─── */}
      <section className="relative w-full h-[70vh] md:h-[82vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-16 border-b border-sky-200/70">
        {/* Full-width Autoplay Background Video with Pure Black Background (No image flash) */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-75"
          >
            <source src={industry.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Subtle gradient overlay for text readability without obscuring video */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40 z-10" />
        </div>

        {/* Content Overlay */}
        <div className="max-w-5xl mx-auto px-6 relative z-20 text-center space-y-6">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-400/30 text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors backdrop-blur-md"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Applications / {industry.name}</span>
          </Link>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
            {industry.title}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow">
            {industry.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-xs md:text-sm font-heading font-semibold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-white border border-cyan-400 transition-all shadow-lg shadow-cyan-600/30"
            >
              Request {industry.name} Consultation
            </Link>
            <a
              href="#overview"
              className="px-6 py-3 rounded-lg text-xs md:text-sm font-heading font-semibold uppercase tracking-wider bg-white/90 hover:bg-white text-slate-900 border border-sky-200 transition-all shadow-md backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Ocean Cyan Scan Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 opacity-80 shadow-[0_0_12px_rgba(6,182,212,0.8)] z-20" />
      </section>

      {/* ─── Sector Overview & Key Challenges (PPT Layout) ─── */}
      <section id="overview" className="py-20 max-w-7xl mx-auto px-6 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
              SECTOR OVERVIEW
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">
              Inspecting {industry.name} Infrastructure
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {industry.overview}
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-mono text-xs font-bold tracking-widest uppercase border border-amber-200">
              KEY CHALLENGES & PROBLEMS
            </span>
            <div className="space-y-3">
              {industry.problems.map((prob, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-sky-100 shadow-sm hover:border-amber-300 transition-colors">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-700 leading-relaxed">{prob}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IXAR Robotic Solution */}
        <div className="bg-white p-8 rounded-2xl border border-cyan-200 shadow-xl grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider">
              THE ROBOTIC ADVANTAGE
            </span>
            <h3 className="font-heading text-xl font-bold text-slate-900">
              How IXAR Solves {industry.name} Challenges
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              {industry.solution}
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <Link 
              href="/contact"
              className="w-full text-center px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Get Sector Quote
            </Link>
          </div>
        </div>

        {/* Sub-Sectors Grid */}
        <div className="space-y-8">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 text-center">
            Dedicated {industry.name} Application Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.subIndustries.map((sub, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-sky-100 shadow-md hover:shadow-xl hover:border-cyan-300 p-6 flex flex-col justify-between space-y-4 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-cyan-50 rounded-xl w-fit border border-cyan-100 group-hover:border-cyan-400 transition-colors">
                    <Cpu className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900">{sub.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">{sub.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <Link 
                    href={`/industries/${industry.slug}/${sub.slug}`}
                    className="text-xs font-mono font-bold text-cyan-600 hover:text-cyan-800 uppercase flex items-center space-x-1.5"
                  >
                    <span>Explore Sub-Sector</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section for this Industry */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-20 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/50 to-white">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900">
              {industry.name} Case Studies & Field Deployments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCaseStudies.map((cs) => (
                <Link 
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="bg-white rounded-2xl border border-sky-100 shadow-md hover:shadow-xl hover:border-cyan-300 p-6 flex flex-col justify-between h-[240px] group transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>{cs.client}</span>
                      <span>{cs.duration}</span>
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg group-hover:text-cyan-700 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-cyan-600 uppercase flex items-center space-x-1.5 mt-4">
                    <span>View Project Report</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
