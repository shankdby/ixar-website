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
              Real deployments. Real results. Explore our field operations across Energy, Infrastructure, Maritime, and Industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
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
                <h3 className="font-heading font-bold text-slate-900 text-sm leading-snug group-hover:text-amber-700 transition-colors duration-200 line-clamp-2">
                  {cs.title}
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
      </section>
    </div>
  );
}
