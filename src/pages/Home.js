import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Features from '../components/Features';

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>VIGUX — Empowering Independence Through Technology</title>
        <meta name="description" content="VIGUX is a technology company building AR/VR and AI-powered solutions to empower individuals with disabilities." />
      </Helmet>

      <Hero />
      <Features />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              To build a more inclusive world by creating innovative and affordable technology that empowers individuals with disabilities to live more independent and fulfilling lives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-5xl font-extrabold">680M+</p>
              <p className="mt-2 text-lg font-medium">People with disabilities worldwide</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">40%</p>
              <p className="mt-2 text-lg font-medium">Reduction in workplace discrimination</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">30%</p>
              <p className="mt-2 text-lg font-medium">Improvement in city accessibility</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
