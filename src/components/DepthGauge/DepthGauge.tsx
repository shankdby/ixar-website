"use client";

import React from "react";
import { useScrollDepth } from "@/hooks/useScrollDepth";
import { Compass, Eye, ShieldAlert } from "lucide-react";

export default function DepthGauge() {
  const { scrollPercent, currentDepth } = useScrollDepth(200);

  const getZone = (depth: number) => {
    if (depth < 40) return { name: "SUNLIGHT ZONE", zone: "Epipelagic", desc: "High Visibility / Active Currents" };
    if (depth < 120) return { name: "TWILIGHT ZONE", zone: "Mesopelagic", desc: "Low Light / Thermocline Layer" };
    return { name: "MIDNIGHT ZONE", zone: "Bathypelagic", desc: "Zero Sunlight / Critical Pressure" };
  };

  const activeZone = getZone(currentDepth);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center">
      {/* Vertical Slider Bar */}
      <div className="relative w-14 h-80 bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-full flex flex-col justify-between items-center py-4 px-2 overflow-hidden shadow-lg">
        {/* Fill level overlay */}
        <div 
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none transition-all duration-300"
          style={{ height: `${scrollPercent}%` }}
        />

        {/* Dynamic sliding ROV icon */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-100 flex items-center justify-center"
          style={{ top: `calc(${scrollPercent}% * 0.82 + 5%)` }}
        >
          <img 
            src="/images/products/slide_43_img_1.png" 
            alt="ROV Indicator" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(0,245,255,0.9)] animate-pulse-slow"
          />
        </div>

        {/* Depth Markers */}
        <span className="text-[9px] font-mono text-cyan-300 font-bold z-10">0m</span>
        <span className="text-[9px] font-mono text-slate-400 z-10">-</span>
        <span className="text-[9px] font-mono text-cyan-300 font-bold z-10">50m</span>
        <span className="text-[9px] font-mono text-slate-400 z-10">-</span>
        <span className="text-[9px] font-mono text-cyan-300 font-bold z-10">100m</span>
        <span className="text-[9px] font-mono text-slate-400 z-10">-</span>
        <span className="text-[9px] font-mono text-cyan-300 font-bold z-10">150m</span>
        <span className="text-[9px] font-mono text-slate-400 z-10">-</span>
        <span className="text-[9px] font-mono text-cyan-300 font-bold z-10">200m</span>
      </div>
    </div>
  );
}
