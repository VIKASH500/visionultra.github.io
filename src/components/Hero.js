import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const pct = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0),1);
      controls.start({ opacity: 0.6 + pct * 0.4, y: -15 * (1-pct) });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  return (
    <section className="relative overflow-hidden">
      {/* decorative background stripe similar to product pages */}
      <div className="absolute inset-0 -z-10">
        <div className="h-64 md:h-80 bg-gradient-to-b from-white to-transparent" aria-hidden></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* centered page heading row */}
        <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="md:col-span-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block">Vision Ultra Goggles</span>
            <span className="block">Coming Soon</span>
          </h1>
        </motion.div>

        {/* left column - copy */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="md:col-span-6 lg:col-span-7">
          <p className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-prose">A seamless blend of style, privacy and advanced AI to help people connect, perceive and move through the world with new confidence.</p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#technology" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--meta-blue)] text-white text-sm font-medium shadow">Buy now</motion.a>
            <motion.a whileHover={{ scale: 1.02 }} href="#learn" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 text-slate-900 text-sm">Learn more</motion.a>
          </div>
        </motion.div>

        {/* right column - product */}
        <motion.div animate={controls} initial={{ opacity: 0.9, y: 0 }} transition={{ duration: 0.6 }} className="md:col-span-6 lg:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-[520px] md:max-w-none md:w-[520px] rounded-3xl glass p-4 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-50">
              {/* try model-viewer first, fallback to poster image */}
              <model-viewer src="/models/product.glb" alt="VisionUltra Smart Glasses 3D model" ar ar-modes="webxr scene-viewer quick-look" auto-rotate camera-controls style={{width:'100%',height:'100%'}} poster="/product-poster.png"></model-viewer>
              <img src="/product-poster.png" alt="VisionUltra product" className="hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
