"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Briefcase, Plus, Minus, Send, Check } from "lucide-react";
import { timelineMilestones, jobOpenings, faqs } from "@/data/team";

export default function CareersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applyForm, setApplyForm] = useState({ name: "", email: "", resume: "", note: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyForm.name && applyForm.email) {
      setSubmitted(true);
      setApplyForm({ name: "", email: "", resume: "", note: "" });
      setTimeout(() => {
        setSubmitted(false);
        setSelectedJob(null);
      }, 5000);
    }
  };

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
      <section className="max-w-4xl mx-auto px-6 pt-12 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
          CAREERS & MILESTONES
        </span>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Join the Subsea Robotics Frontier
        </h1>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          From incubation at IIT Bombay to executing major offshore refinery inspection projects, discover our journey and explore active openings in software, mechanical design, and NDT field operations.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-6 pt-20 space-y-12">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 text-center">
          Our Milestones & History
        </h2>
        <div className="relative border-l-2 border-sky-200 ml-4 md:ml-1/2 space-y-10 py-4">
          {timelineMilestones.map((ms, idx) => (
            <div 
              key={idx}
              className={`relative md:w-1/2 pl-8 md:pl-0 ${
                idx % 2 === 0 
                  ? "md:ml-auto md:pl-10" 
                  : "md:mr-auto md:pr-10 md:text-right md:left-0 md:translate-x-[-100%]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[10px] md:left-auto md:right-[-10px] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center shadow">
                <div className="w-2 h-2 rounded-full bg-cyan-600" />
              </div>
              <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-md space-y-2">
                <div className="font-mono text-cyan-600 text-sm font-bold">{ms.year}</div>
                <h3 className="font-heading font-semibold text-slate-900 text-sm">{ms.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ms.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Job Listings */}
      <section className="max-w-5xl mx-auto px-6 pt-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
            WE ARE HIRING
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Open Engineering Positions
          </h2>
        </div>

        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div 
              key={job.id}
              className="bg-white rounded-2xl border border-sky-100 shadow-md p-6 space-y-4 hover:border-cyan-300 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono mt-1">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="h-3.5 w-3.5 text-cyan-600" />
                      <span>{job.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5 text-cyan-600" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-cyan-600" />
                      <span>{job.type}</span>
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="px-5 py-2.5 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider bg-cyan-600 hover:bg-cyan-700 text-white shadow transition-all"
                >
                  {selectedJob === job.id ? "Close Details" : "Apply Position"}
                </button>
              </div>

              {selectedJob === job.id && (
                <div className="pt-4 border-t border-slate-100 space-y-6">
                  <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
                  
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono font-bold text-slate-900 uppercase">Key Requirements:</span>
                    <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form */}
                  <form onSubmit={handleApplySubmit} className="bg-sky-50/70 p-6 rounded-xl border border-sky-100 space-y-4">
                    <h4 className="font-heading font-bold text-sm text-slate-900">Submit Application for {job.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Full Name *" 
                        required 
                        value={applyForm.name}
                        onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                        className="bg-white border border-sky-200 px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address *" 
                        required 
                        value={applyForm.email}
                        onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                        className="bg-white border border-sky-200 px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                      />
                    </div>
                    <input 
                      type="url" 
                      placeholder="Resume / LinkedIn URL *" 
                      required 
                      value={applyForm.resume}
                      onChange={(e) => setApplyForm({ ...applyForm, resume: e.target.value })}
                      className="w-full bg-white border border-sky-200 px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                    />
                    <textarea 
                      placeholder="Brief note about your engineering background..."
                      rows={3}
                      value={applyForm.note}
                      onChange={(e) => setApplyForm({ ...applyForm, note: e.target.value })}
                      className="w-full bg-white border border-sky-200 px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
                    />
                    <button 
                      type="submit" 
                      className="px-6 py-2.5 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider bg-cyan-600 hover:bg-cyan-700 text-white shadow flex items-center space-x-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Application</span>
                    </button>
                    {submitted && (
                      <div className="p-3 bg-cyan-100 border border-cyan-200 rounded-lg text-xs text-cyan-800 font-semibold flex items-center space-x-2">
                        <Check className="h-4 w-4 text-cyan-700" />
                        <span>Application received! Our recruiting team will get in touch shortly.</span>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 pt-24 space-y-8">
        <h2 className="font-heading text-2xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-sky-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-heading font-semibold text-sm text-slate-900 flex justify-between items-center hover:bg-sky-50/50 transition-colors"
              >
                <span>{faq.question}</span>
                {openFaqIndex === idx ? <Minus className="h-4 w-4 text-cyan-600" /> : <Plus className="h-4 w-4 text-slate-400" />}
              </button>
              {openFaqIndex === idx && (
                <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
