"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Shield, Anchor, Wind, Flame, Cpu, Ship, Activity, Award } from "lucide-react";
import { industries } from "@/data/industries";
import { products } from "@/data/products";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Track scrolling to add glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const getIndustryIcon = (slug: string) => {
    switch (slug) {
      case "energy": return <Flame className="h-5 w-5 text-amber-accent" />;
      case "infrastructure": return <Activity className="h-5 w-5 text-neon-cyan" />;
      case "maritime": return <Anchor className="h-5 w-5 text-cyan-teal" />;
      case "fisheries-and-aquaculture": return <Wind className="h-5 w-5 text-emerald-400" />;
      case "search-and-rescue": return <Shield className="h-5 w-5 text-red-400" />;
      default: return <Cpu className="h-5 w-5 text-neon-cyan" />;
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-sky-100 py-3.5"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <img
              src="/images/ixar_logo.png"
              alt="IXAR Robotic Solutions"
              className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-base tracking-wide transition-colors duration-300 text-slate-900 group-hover:text-cyan-600">
                IXAR
              </span>
              <span className="text-[9px] tracking-widest uppercase text-slate-500">
                Robotic Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-200 ${
                pathname === "/" 
                  ? "text-cyan-600 font-bold" 
                  : "text-slate-700 hover:text-cyan-600"
              }`}
            >
              Home
            </Link>

            {/* Industries Mega Menu Link */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-heading text-sm font-semibold tracking-wide flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                  pathname.startsWith("/industries") 
                    ? "text-cyan-600 font-bold" 
                    : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                <span>Applications</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "industries" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-[600px] bg-white rounded-2xl p-6 grid grid-cols-2 gap-4 shadow-2xl border border-sky-100 z-50"
                  >
                    {industries.map((ind) => (
                      <Link 
                        key={ind.slug} 
                        href={`/industries/${ind.slug}`}
                        className="flex items-start space-x-3 p-3 rounded-xl hover:bg-sky-50 transition-colors duration-200 group/item"
                      >
                        <div className="mt-1 p-2 rounded-lg bg-sky-100/70 group-hover/item:bg-cyan-100">
                          {getIndustryIcon(ind.slug)}
                        </div>
                        <div>
                          <div className="font-heading text-sm font-semibold text-slate-900 group-hover/item:text-cyan-700">{ind.name}</div>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">{ind.description}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Products Mega Menu Link */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-heading text-sm font-semibold tracking-wide flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                  pathname.startsWith("/products") 
                    ? "text-cyan-600 font-bold" 
                    : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "products" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-3 w-[650px] bg-white rounded-2xl p-6 grid grid-cols-2 gap-4 shadow-2xl border border-sky-100 z-50"
                  >
                    {products.map((prod) => (
                      <Link 
                        key={prod.slug} 
                        href={`/products/${prod.slug}`}
                        className="flex items-start space-x-4 p-3 rounded-xl hover:bg-sky-50 transition-colors duration-200 group/item"
                      >
                        <div className="relative w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center p-1 border border-sky-100 group-hover/item:border-cyan-300">
                          <img src={prod.image} alt={prod.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div>
                          <div className="font-heading text-sm font-semibold text-slate-900 group-hover/item:text-cyan-700 flex items-center">
                            {prod.name}
                            <span className="text-[10px] ml-2 text-cyan-700 bg-cyan-50 border border-cyan-200 px-1.5 py-0.2 rounded font-mono font-normal">
                              {prod.depthRating}m
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 leading-relaxed">{prod.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Case Studies Link */}
            <Link 
              href="/case-studies/cooling-tower-sump-inspection" 
              className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-200 ${
                pathname.startsWith("/case-studies") 
                  ? "text-cyan-600 font-bold" 
                  : "text-slate-700 hover:text-cyan-600"
              }`}
            >
              Case Studies
            </Link>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`font-heading text-sm font-semibold tracking-wide flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                  pathname.startsWith("/company") 
                    ? "text-cyan-600 font-bold" 
                    : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "company" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-[220px] bg-white rounded-2xl p-3 flex flex-col space-y-1 shadow-2xl border border-sky-100 z-50"
                  >
                    <Link 
                      href="/company/about"
                      className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-sky-50 text-sm font-medium text-slate-700 hover:text-cyan-700 transition-colors duration-200"
                    >
                      <Award className="h-4 w-4 text-cyan-600" />
                      <span>About Us</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-cyan-600 transition-colors duration-200 cursor-pointer"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link 
              href="/contact" 
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-heading font-semibold text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg shadow-md shadow-cyan-600/20 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-400 hover:text-neon-cyan transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full glass-panel border-t border-navy-light bg-abyss/95 px-6 py-4"
            >
              <div className="max-w-3xl mx-auto flex items-center space-x-3">
                <Search className="h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search products, case studies, industries..." 
                  className="w-full bg-transparent border-none text-white focus:outline-none placeholder-gray-500 font-sans text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="text-xs text-gray-400 hover:text-white uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm glass-panel bg-abyss/98 z-40 p-8 flex flex-col space-y-6 lg:hidden"
            >
              <div className="flex justify-between items-center pb-6 border-b border-navy-light">
                <span className="font-heading font-bold text-white tracking-wide">NAVIGATION</span>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 overflow-y-auto flex-1 pr-2">
                <Link href="/" className="font-heading text-lg font-medium text-white p-2 rounded hover:bg-navy-light/30">
                  Home
                </Link>

                {/* Applications Mobile */}
                <div>
                  <button 
                    onClick={() => toggleDropdown("industries")}
                    className="w-full font-heading text-lg font-medium text-white flex justify-between items-center p-2 rounded hover:bg-navy-light/30 text-left"
                  >
                    <span>Applications</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === "industries" && (
                    <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-navy-light">
                      {industries.map((ind) => (
                        <Link 
                          key={ind.slug} 
                          href={`/industries/${ind.slug}`}
                          className="text-sm text-gray-400 hover:text-neon-cyan py-1"
                        >
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Products Mobile */}
                <div>
                  <button 
                    onClick={() => toggleDropdown("products")}
                    className="w-full font-heading text-lg font-medium text-white flex justify-between items-center p-2 rounded hover:bg-navy-light/30 text-left"
                  >
                    <span>Products</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === "products" && (
                    <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-navy-light">
                      {products.map((prod) => (
                        <Link 
                          key={prod.slug} 
                          href={`/products/${prod.slug}`}
                          className="text-sm text-gray-400 hover:text-neon-cyan py-1"
                        >
                          {prod.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Case Studies Mobile */}
                <Link href="/case-studies/cooling-tower-sump-inspection" className="font-heading text-lg font-medium text-white p-2 rounded hover:bg-navy-light/30">
                  Case Studies
                </Link>

                {/* Company Mobile */}
                <div>
                  <button 
                    onClick={() => toggleDropdown("company")}
                    className="w-full font-heading text-lg font-medium text-white flex justify-between items-center p-2 rounded hover:bg-navy-light/30 text-left"
                  >
                    <span>Company</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === "company" && (
                    <div className="pl-4 mt-2 flex flex-col space-y-2 border-l border-navy-light">
                      <Link href="/company/about" className="text-sm text-gray-400 hover:text-neon-cyan py-1">About Us</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-navy-light">
                <Link 
                  href="/contact" 
                  className="block w-full text-center py-3 font-heading font-semibold text-abyss bg-neon-cyan rounded hover:bg-white transition-all duration-300"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
