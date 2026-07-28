import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ShieldCheck, Database, FileText, CheckCircle } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  // Get other case studies for bottom quick navigation
  const otherStudies = caseStudies.filter((cs) => cs.slug !== slug).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Hero Header */}
      <section className="relative py-16 border-b border-sky-200/70 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-700 bg-cyan-100 border border-cyan-200 px-2.5 py-0.5 rounded-full uppercase">
                  {study.industry} Sector
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">
                  Client: {study.client}
                </span>
              </div>
              <h1 className="font-heading text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                {study.title}
              </h1>
            </div>
            <div className="flex items-center space-x-4 bg-white border border-sky-100 px-5 py-3 rounded-xl shadow-sm w-fit">
              <Clock className="h-5 w-5 text-cyan-600 flex-shrink-0" />
              <div className="font-mono text-xs">
                <span className="text-slate-400 block font-bold text-[10px]">DURATION</span>
                <span className="text-slate-900 font-bold">{study.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project content layout */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left column: Metrics, Summary Sidebar */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-md space-y-6">
            <h3 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-sky-100 pb-3">
              Project Parameters
            </h3>
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="text-slate-400 block font-bold text-[10px]">APPLICATION</span>
                <span className="text-slate-800 font-semibold">{study.application}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold text-[10px]">TECHNOLOGY USED</span>
                <span className="text-slate-800 font-semibold">{study.technology}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-bold text-[10px]">ROBOT PLATFORM</span>
                <span className="text-cyan-600 font-bold">{study.robotUsed}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics cards */}
          <div className="grid grid-cols-2 gap-4">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-sky-100 shadow-sm font-mono text-center">
                <span className="text-[10px] text-slate-400 block uppercase leading-tight h-8 flex items-center justify-center font-bold">
                  {m.label}
                </span>
                <span className="text-cyan-600 text-lg md:text-xl font-bold block mt-2">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="p-6 bg-cyan-600 rounded-2xl text-white space-y-4 shadow-lg shadow-cyan-600/20">
            <h4 className="font-heading font-bold text-base">Facing Similar Operational Challenges?</h4>
            <p className="text-xs text-cyan-100 leading-relaxed">
              Consult with our B2B robotic operations team to evaluate your submerged asset inspection requirements.
            </p>
            <Link 
              href="/contact" 
              className="block w-full text-center py-3 bg-white text-cyan-900 rounded-lg text-xs font-heading font-bold uppercase tracking-wider shadow hover:bg-sky-50 transition-colors"
            >
              Get Engineering Proposal
            </Link>
          </div>
        </div>

        {/* Right column: Deep Dive Case Narrative */}
        <div className="lg:col-span-8 space-y-12">
          {/* Main Case Image */}
          <div className="bg-white p-4 rounded-2xl border border-sky-100 shadow-xl overflow-hidden">
            <img 
              src={study.image} 
              alt={study.title} 
              className="w-full h-[360px] object-cover rounded-xl"
            />
          </div>

          {/* Challenge Section */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900">1. Operational Challenge</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900">2. Robotic Solution & Deployment</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Methodology */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900">3. Technical Methodology</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {study.methodology}
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-slate-900">4. Execution Workflow</h2>
            <div className="space-y-3">
              {study.workflow.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs text-slate-700 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Value Delivered */}
          <div className="space-y-4 bg-white p-6 rounded-2xl border border-cyan-200 shadow-md">
            <h2 className="font-heading text-xl font-bold text-slate-900">5. Project Results & Impact</h2>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {study.results}
            </p>
          </div>

          {/* Image Gallery */}
          {study.gallery && study.gallery.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-heading text-xl font-bold text-slate-900">Field Operations Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {study.gallery.map((img, idx) => (
                  <div key={idx} className="bg-white p-2 rounded-xl border border-sky-100 shadow overflow-hidden h-[180px]">
                    <img src={img} alt={`Field log ${idx}`} className="w-full h-full object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Other Case Studies */}
      <section className="py-16 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <h3 className="font-heading font-bold text-xl text-slate-900">Explore More Deployments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherStudies.map((cs) => (
              <Link 
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="bg-white rounded-2xl border border-sky-100 shadow-md hover:shadow-xl hover:border-cyan-300 p-5 flex flex-col justify-between h-[200px] group transition-all duration-300"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-600 uppercase font-bold">{cs.industry}</span>
                  <h4 className="font-heading font-bold text-slate-900 text-sm group-hover:text-cyan-700 transition-colors">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{cs.challenge}</p>
                </div>
                <span className="text-[10px] font-mono font-semibold text-cyan-600 uppercase flex items-center space-x-1 mt-2">
                  <span>View Case Study</span>
                  <ArrowLeft className="h-3 w-3 rotate-180 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
