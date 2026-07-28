'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    image: '/carousel-1.png',
    tagline: 'Engineering the Future',
    title: 'Advanced Underwater Robotics',
    description:
      'Autonomous inspection, mapping, and sensing solutions for demanding marine environments.',
  },
  {
    image: '/carousel-2.png',
    tagline: 'Precision • Reliability',
    title: 'Built for Extreme Conditions',
    description:
      'High-performance robotic platforms designed for offshore and industrial operations.',
  },
  {
    image: '/carousel-3.png',
    tagline: 'Innovation in Motion',
    title: 'Smarter Ocean Exploration',
    description:
      'AI-powered navigation and data acquisition for next-generation marine missions.',
  },
  {
    image: '/carousel-4.png',
    tagline: 'From Vision to Reality',
    title: 'Custom Robotics Solutions',
    description:
      'End-to-end engineering services for autonomous systems and underwater technology.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {slide.tagline}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              {slide.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400">
                Explore Solutions
              </button>
              <button className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              current === i ? 'w-10 bg-cyan-400' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

