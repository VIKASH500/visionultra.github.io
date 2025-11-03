import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-slate-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Abstract technology background"
        />
        <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true" />
      </div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block">Empowering Independence</span>
            <span className="block text-accent">Through Technology</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-white">Coming Soon</h2>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            Vision AI Goggles integrate AR, VR, and AI to facilitate communication and navigation for people with hearing, speech, and visual impairments.
          </p>
          <div className="mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#technology"
              className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
