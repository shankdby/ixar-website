import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Compass, Target, HelpCircle, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pb-20 bg-slate-50 text-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-12 text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
          ABOUT IXAR ROBOTICS
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Made in India Subsea Inspection Solutions
        </h1>
        <p className="text-slate-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          IXAR Robotic Solutions is an IIT Bombay and IIT Madras alumni start-up. We build advanced underwater Remotely Operated Vehicles (ROVs) and magnetic wall crawlers from the ground up, delivering high-precision NDT inspections without the risk and cost of manual diver teams.
        </p>
      </section>

      {/* Mission & Incubation */}
      <section className="max-w-7xl mx-auto px-6 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 bg-cyan-50 rounded-xl w-fit border border-cyan-100">
              <Target className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To design, develop, and manufacture robust, high-fidelity underwater robotic systems in India that replace human divers in hazardous zones. We aim to make subsea inspections, ultrasonic thickness logging, and structural audits safer, faster, and highly accurate.
            </p>
          </div>
          <div className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-wider">
            IXAR ROBOTICS • ESTABLISHED 2020
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 bg-cyan-50 rounded-xl w-fit border border-cyan-100">
              <Award className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">IIT Incubated Start-up</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Incubated at the IIT Bombay Society for Innovation and Entrepreneurship (SINE), IXAR combines research-first academic engineering with rugged field operations. Backed by alumni network and deep research expertise, we handle complex multi-crore industrial NDT testing contracts.
            </p>
          </div>
          <div className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-wider">
            IIT BOMBAY & IIT MADRAS NETWORK
          </div>
        </div>
      </section>
    </div>
  );
}
