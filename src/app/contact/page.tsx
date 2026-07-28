"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { industries } from "@/data/industries";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    details: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.industry) newErrors.industry = "Please select an industry sector.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", company: "", industry: "", details: "" });
      setTimeout(() => setSuccess(false), 8000);
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

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
              OPERATIONS DESK
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Request a Technical Demonstration
            </h1>
            <p className="text-slate-600 text-xs leading-relaxed">
              We coordinate technical trials and field deployments out of our R&D center at the IIT Bombay Research Park. Reach out to schedule a feasibility audit for your submerged assets.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
              <div className="p-2 bg-cyan-50 border border-cyan-100 rounded-lg mt-0.5">
                <MapPin className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-xs">
                <span className="text-slate-900 font-bold block mb-1">Corporate HQ & Lab</span>
                <p className="text-slate-600 leading-relaxed">
                  Society for Innovation & Entrepreneurship (SINE),<br />
                  CSRE Building, IIT Bombay, Powai, Mumbai - 400076
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
              <div className="p-2 bg-cyan-50 border border-cyan-100 rounded-lg mt-0.5">
                <Phone className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-xs">
                <span className="text-slate-900 font-bold block mb-1">Direct Lines</span>
                <p className="text-slate-600 leading-relaxed">
                  Operations: +91 22 2576 4000<br />
                  Mobile / WhatsApp: +91 95757 63347
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
              <div className="p-2 bg-cyan-50 border border-cyan-100 rounded-lg mt-0.5">
                <Mail className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-xs">
                <span className="text-slate-900 font-bold block mb-1">Engineering Mail</span>
                <p className="text-slate-600 leading-relaxed">
                  info@ixarrobotics.com<br />
                  ixarroboticsolutions@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-sky-100 shadow-sm">
              <div className="p-2 bg-cyan-50 border border-cyan-100 rounded-lg mt-0.5">
                <Clock className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-xs">
                <span className="text-slate-900 font-bold block mb-1">Field Readiness</span>
                <p className="text-slate-600 leading-relaxed">
                  24/7 Rapid Deployment Teams available for emergency refinery, dam, and vessel inspection call-outs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-sky-100 shadow-xl space-y-6">
          <div className="space-y-2 border-b border-sky-100 pb-4">
            <h2 className="font-heading text-xl font-bold text-slate-900">B2B Inspection & Tender Inquiry Form</h2>
            <p className="text-xs text-slate-500">Provide details about your site location, water depth, and structural asset type.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Inspector General / Chief Engineer" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.name ? "border-red-500" : "border-sky-200"} px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600`}
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                  Corporate Email *
                </label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.email ? "border-red-500" : "border-sky-200"} px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600`}
                />
                {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                  Phone / WhatsApp *
                </label>
                <input 
                  type="text" 
                  placeholder="+91 98765 43210" 
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.phone ? "border-red-500" : "border-sky-200"} px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600`}
                />
                {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                  Company / Organization *
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Reliance, ONGC, Indian Navy" 
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={`w-full bg-slate-50 border ${errors.company ? "border-red-500" : "border-sky-200"} px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600`}
                />
                {errors.company && <span className="text-[10px] text-red-500 mt-1 block">{errors.company}</span>}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                Industry Sector *
              </label>
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className={`w-full bg-slate-50 border ${errors.industry ? "border-red-500" : "border-sky-200"} px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600`}
              >
                <option value="">Select Industry...</option>
                {industries.map((ind) => (
                  <option key={ind.slug} value={ind.slug}>{ind.name}</option>
                ))}
                <option value="defense">Defense / Indian Military</option>
                <option value="other">Custom Mechanical Design</option>
              </select>
              {errors.industry && <span className="text-[10px] text-red-500 mt-1 block">{errors.industry}</span>}
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                Inspection Details & Scope
              </label>
              <textarea 
                rows={4}
                placeholder="Describe asset type (e.g. Cooling tower sump, intake penstock, ship hull), depth requirement, and NDT needs..."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full bg-slate-50 border border-sky-200 px-3.5 py-2.5 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-heading font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Submit Inspection Inquiry</span>
            </button>

            {success && (
              <div className="p-4 bg-cyan-100 border border-cyan-200 rounded-xl text-xs text-cyan-900 font-semibold flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold">Inquiry Successfully Transmitted!</span>
                  <span>Our technical engineering desk at IIT Bombay will respond within 4 business hours.</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
