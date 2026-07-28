"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Download, Info, Layers, ArrowRight, ShieldCheck, ZoomIn } from "lucide-react";
import { Product } from "@/data/products";
import { CaseStudy } from "@/data/caseStudies";

interface ProductDetailViewProps {
  product: Product;
  relatedCaseStudies: CaseStudy[];
}

export default function ProductDetailView({ product, relatedCaseStudies }: ProductDetailViewProps) {
  // Collect gallery images strictly for this product
  const galleryImages = [
    product.image,
    ...(product.gallery ?? []),
  ].filter((img, idx, self) => self.indexOf(img) === idx);

  // State for active image shown in main view
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-slate-500 hover:text-cyan-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>

      {/* Main Product Layout */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Product Image Showcase */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-xl flex items-center justify-center h-[420px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 to-transparent" />
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="max-h-[350px] max-w-full object-contain relative z-10 drop-shadow-xl transition-all duration-300 group-hover:scale-105"
            />
            {/* Depth label overlay */}
            <div className="absolute bottom-4 left-4 font-mono text-[10px] font-bold text-cyan-700 border border-cyan-200 px-3 py-1 rounded-full bg-cyan-50 shadow-sm z-20">
              DEPTH RATING: {product.depthRating} METERS
            </div>
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/70 text-white text-[10px] font-mono px-2.5 py-1 rounded-md flex items-center space-x-1">
              <ZoomIn className="h-3 w-3" />
              <span>Click thumbnails to switch image</span>
            </div>
          </div>

          {/* Interactive Image Gallery Thumbnails */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
              Product & Field Deployment Photos (Click to View)
            </span>
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`bg-white p-1.5 rounded-xl border transition-all duration-200 h-20 flex items-center justify-center overflow-hidden cursor-pointer ${
                    selectedImage === imgUrl 
                      ? "border-cyan-600 ring-2 ring-cyan-500/30 shadow-md scale-95" 
                      : "border-sky-100 opacity-75 hover:opacity-100 hover:border-cyan-300"
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`Thumbnail ${idx + 1}`} 
                    className="max-h-full max-w-full object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Product Details & Specs */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
              INDUSTRIAL ROBOTIC PLATFORM
            </span>
            <h1 className="font-heading text-4xl font-bold text-slate-900 tracking-tight">
              {product.name}
            </h1>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              {product.tagline}
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {product.longDescription}
          </p>

          {/* Quick Specs Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-white border border-sky-100 p-3 rounded-xl shadow-sm">
              <span className="text-[9px] text-slate-400 block uppercase font-bold">Weight</span>
              <span className="text-slate-900 font-bold">{product.telemetry.weight}</span>
            </div>
            <div className="bg-white border border-sky-100 p-3 rounded-xl shadow-sm">
              <span className="text-[9px] text-slate-400 block uppercase font-bold">Thrusters</span>
              <span className="text-slate-900 font-bold">{product.telemetry.thrusters} Units</span>
            </div>
            <div className="bg-white border border-sky-100 p-3 rounded-xl shadow-sm">
              <span className="text-[9px] text-slate-400 block uppercase font-bold">Depth Rating</span>
              <span className="text-cyan-600 font-bold">{product.depthRating}m</span>
            </div>
            <div className="bg-white border border-sky-100 p-3 rounded-xl shadow-sm">
              <span className="text-[9px] text-slate-400 block uppercase font-bold">DOF</span>
              <span className="text-slate-900 font-bold">{product.telemetry.dof}</span>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
              Core Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                  <Check className="h-4 w-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider text-center bg-cyan-600 hover:bg-cyan-700 text-white shadow-md shadow-cyan-600/20 transition-all duration-300"
            >
              Request Quote & Custom Loadout
            </Link>
            <a 
              href={product.brochureUrl}
              download
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-heading font-semibold uppercase tracking-wider text-center bg-white border border-sky-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 shadow-sm flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Download className="h-4 w-4 text-cyan-600" />
              <span>Download Specs PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 border-t border-sky-200/70 max-w-7xl mx-auto px-6 space-y-8">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 font-mono text-xs font-bold tracking-widest uppercase border border-cyan-200">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            {product.name} Engineering Datasheet
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-sky-100 shadow-md overflow-hidden">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="bg-sky-50/80 border-b border-sky-100 text-slate-900">
                <th className="p-4 font-bold uppercase tracking-wider w-1/3">Parameter</th>
                <th className="p-4 font-bold uppercase tracking-wider">Specification Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sky-100">
              {product.specs.map((s, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-sky-50/30"}>
                  <td className="p-4 font-semibold text-slate-800">{s.label}</td>
                  <td className="p-4 text-slate-600">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 border-t border-sky-200/70 bg-gradient-to-b from-sky-50/50 to-white">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-mono text-xs font-bold tracking-widest uppercase border border-amber-200">
                FIELD DEPLOYMENTS
              </span>
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                Case Studies Featuring {product.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="bg-white rounded-2xl border border-sky-100 shadow-md hover:shadow-xl hover:border-cyan-300 p-6 flex flex-col justify-between group transition-all duration-300"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-cyan-600 uppercase font-bold">{cs.industry} Sector</span>
                    <h3 className="font-heading font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-cyan-600 flex items-center space-x-1.5 uppercase mt-4">
                    <span>View Case Study Report</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
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
