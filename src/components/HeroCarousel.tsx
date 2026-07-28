'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/carousel-1.png',
  '/carousel-2.png',
  '/carousel-3.png',
  '/carousel-4.png',
];

const slideContent = [
  {
    tagline: 'Engineering the Future of Underwater Inspection',
    textColor: 'text-white',
    position: 'top-1/3',
  },
  {
    tagline: 'Innovating Underwater Robotics for Safer Inspections',
    textColor: 'text-white',
    position: 'top-2/3',
  },
  {
    tagline: 'Making Complex Underwater Missions Simple',
    textColor: 'text-white',
    position: 'top-1/2',
  },
  {
    tagline: 'Advanced Robotics for Critical Underwater Operations',
    textColor: 'text-white',
    position: 'top-1/3',
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  // Resume autoplay after 10 seconds of manual interaction
  useEffect(() => {
    if (!isAutoPlay) {
      const timer = setTimeout(() => setIsAutoPlay(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlay]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Carousel slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none px-6">
        {/* Always visible heading at top */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
                IXAR Robotic<br />Solutions
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic tagline - positioned based on slide */}
        <div 
          className={`absolute left-1/2 -translate-x-1/2 w-full max-w-4xl transition-all duration-700 ${
            slideContent[currentIndex].position
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`tagline-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className={`text-center ${slideContent[currentIndex].textColor}`}
            >
              <p className="text-lg md:text-2xl lg:text-3xl font-semibold leading-tight drop-shadow-lg">
                {slideContent[currentIndex].tagline}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
