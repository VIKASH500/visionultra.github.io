import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ChatbotMock from '../components/ChatbotMock';

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>VisionUltra — We made, You Grow!!</title>
        <meta name="description" content="VisionUltra — AI Smart Glasses blending AR, VR and ML for accessibility and healthcare innovation." />
        <meta name="keywords" content="AI Smart Glasses, Accessibility Technology, AR for Deaf, VisionUltra, Healthcare Innovation" />
        <meta property="og:title" content="VisionUltra — We made, You Grow!!" />
      </Helmet>

      <Hero />
      <Stats />
      <section id="technology" className="mt-12">
        <h2 className="text-2xl font-bold">Technology</h2>
        <p className="text-slate-300 mt-2">We combine AR, VR and Machine Learning to deliver perceptual augmentation and accessibility-first UX.</p>
      </section>
      <ChatbotMock />
    </div>
  )
}
