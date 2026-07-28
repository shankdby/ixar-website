"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-10 overflow-hidden">
      {/* Background Grid Pattern overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Company Profile & National Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/images/ixar_logo.png" 
                alt="IXAR Logo" 
                className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                  IXAR Robotic Solutions
                </span>
                <span className="text-[10px] text-sky-300 tracking-widest uppercase mt-0.5 font-mono">
                  IIT Bombay & IIT Madras Alumni Startup
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An IIT Bombay & IIT Madras alumni startup building next-generation underwater ROVs, magnetic wheel crawlers, and eco-friendly ship hull cleaning robots to replace human risk in extreme environments.
            </p>

            {/* Make in India & Startup India National Badges */}
            <div className="flex items-center space-x-4 pt-2">
              <div className="bg-white p-2.5 rounded-xl border border-slate-700 shadow-md">
                <img 
                  src="/images/make_in_india.png" 
                  alt="Make in India" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-700 shadow-md">
                <img 
                  src="/images/startup_india.png" 
                  alt="Startup India" 
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center space-x-3 pt-2">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/ixar-robotic-solutions" 
                target="_blank" 
                rel="noreferrer" 
                title="LinkedIn - IXAR Robotic Solutions"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                title="Instagram - IXAR Robotics"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                title="YouTube - IXAR Robotics"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-cyan-400 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186c-.275-1.026-1.082-1.833-2.108-2.108-1.86-.5-9.39-.5-9.39-.5s-7.53 0-9.39.5c-1.026.275-1.833 1.082-2.108 2.108-.5 1.86-.5 5.814-.5 5.814s0 3.954.5 5.814c.275 1.026 1.082 1.833 2.108 2.108 1.86.5 9.39.5 9.39.5s7.53 0 9.39-.5c1.026-.275 1.833-1.082 2.108-2.108.5-1.86.5-5.814.5-5.814s0-3.954-.5-5.814zm-13.498 9.314v-7l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919575763347" 
                target="_blank" 
                rel="noreferrer" 
                title="WhatsApp Direct Contact"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Applications (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
              Applications
            </h4>
            <ul className="space-y-2">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <Link 
                    href={`/industries/${ind.slug}`} 
                    className="text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fleet (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
              Product Fleet
            </h4>
            <ul className="space-y-2">
              {products.map((prod) => (
                <li key={prod.slug}>
                  <Link 
                    href={`/products/${prod.slug}`} 
                    className="text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Detailed Address & Direct Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
              Headquarters & Contact
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              {/* Address */}
              <div className="flex items-start space-x-2.5">
                <MapPin className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  Bhusa Udyog Bhavan, 201, Tokersay Jivraj Road, Sewree West, Sewri West, Shivaji Nagar, Mumbai, Maharashtra 400015
                </span>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-2.5">
                <Mail className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col leading-relaxed">
                  <span><strong className="text-slate-300">Mail ID:</strong> ixarroboticsolutions@gmail.com</span>
                  <span>info@ixar.com • info@ixarrobotics.com</span>
                </div>
              </div>

              {/* Phone / Mobile */}
              <div className="flex items-start space-x-2.5">
                <Phone className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col leading-relaxed">
                  <span><strong className="text-slate-300">Mo:</strong> +91 95757 63347</span>
                  <span><strong>Tel:</strong> +91 22 2576 4000</span>
                </div>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-mono font-bold text-slate-300 uppercase">Subscribe to Technical Reports</span>
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  placeholder="Engineering Email" 
                  required
                  className="bg-slate-800 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 rounded-l-lg w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-3.5 py-2 rounded-r-lg transition-colors duration-300"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
              {subscribed && (
                <span className="text-[10px] text-cyan-400 font-mono block">
                  Subscription request logged. Thank you.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} IXAR Robotic Solutions Private Limited. All rights reserved.</span>
            <div className="flex space-x-4">
              <Link href="/company/about" className="hover:text-slate-300">About Us</Link>
              <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            </div>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs uppercase tracking-wider font-mono text-slate-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
