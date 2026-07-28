'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-20 border-b border-sky-200/70 bg-gradient-to-b from-sky-900 via-sky-800 to-slate-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-950/70 via-sky-900/50 to-slate-50 z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-sky-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow">
              Case Studies
            </h1>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed drop-shadow">
              Real deployments. Real results. Explore our 12 certified field operations across Energy, Infrastructure, Maritime, and Rescue operations.
            </p>
          </div>
        </div>
      </section>

      {/* 12 Case Studies Grid - Photo & Title Cards */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group bg-white rounded-2xl border border-slate-300 shadow-md hover:shadow-2xl hover:border-cyan-400 p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer"
            >
              {/* Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                {/* Industry Tag */}
                <span className="absolute top-3 left-3 z-20 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-md bg-slate-900/80 text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
                  {cs.industry}
                </span>
              </div>

              {/* Title & Learn More Button */}
              <div className="pt-5 flex items-end justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-slate-900 text-lg sm:text-xl leading-snug group-hover:text-cyan-600 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Client: {cs.client}
                  </p>
                </div>

                <div className="px-5 py-2.5 rounded-lg bg-cyan-600 group-hover:bg-cyan-500 text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-md flex items-center space-x-1.5 flex-shrink-0 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
