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
    // Use quadrant positions for better control
    quadrant: 'top-left', // top-left, top-right, bottom-left, bottom-right, center
  },
  {
    tagline: 'Innovating Underwater Robotics for Safer Inspections',
    textColor: 'text-white',
    quadrant: 'top-right',
  },
  {
    tagline: 'Making Complex Underwater Missions Simple',
    textColor: 'text-white',
    quadrant: 'bottom-left',
  },
  {
    tagline: 'Advanced Robotics for Critical Underwater Operations',
    textColor: 'text-white',
    quadrant: 'center',
  },
];

const getPositionClass = (quadrant: string) => {
  switch (quadrant) {
    case 'top-left':
      return 'top-[8%] left-[5%]';
    case 'top-right':
      return 'top-[8%] right-[5%]';
    case 'bottom-left':
      return 'bottom-[20%] left-[5%]';
    case 'bottom-right':
      return 'bottom-[20%] right-[5%]';
    case 'center':
      return 'top-[20%] left-1/2 -translate-x-1/2';
    default:
      return 'top-1/4 left-1/2 -translate-x-1/2';
  }
};

// Typing animation variants
const typingVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: (i: number) => ({
    opacity: 1,
    width: 'auto',
    transition: {
      delay: i * 0.02,
      duration: 0.03,
      ease: 'linear',
    },
  }),
  exit: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};

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
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-block-${currentIndex}`}
            className={`absolute ${getPositionClass(slideContent[currentIndex].quadrant)}`}
            style={{ width: 'auto', maxWidth: '400px' }}
          >
            {/* Heading - shifts position per slide with smooth animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100, damping: 20 }}
              className="mb-4 md:mb-6"
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg leading-tight max-w-2xl">
                IXAR Robotic Solutions
              </h1>
            </motion.div>

            {/* Tagline - typing effect animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="max-w-xl"
            >
              <p className={`text-lg md:text-xl lg:text-2xl font-semibold leading-snug drop-shadow-lg ${slideContent[currentIndex].textColor}`}>
                {slideContent[currentIndex].tagline.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={typingVariants}
                    className="inline-block"
                    style={{ overflow: 'hidden' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
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
