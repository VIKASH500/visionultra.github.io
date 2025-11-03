import React from 'react';

export default function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          The Technology Behind VisionUltra
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          VisionUltra Goggles are powered by a sophisticated blend of Augmented Reality (AR), Virtual Reality (VR), and Artificial Intelligence (AI) to deliver a seamless and intuitive experience.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Augmented Reality (AR)</h3>
            <p className="mt-4 text-slate-600">Overlays digital information onto the real world, providing contextual cues and visual assistance without obstructing natural vision.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Virtual Reality (VR)</h3>
            <p className="mt-4 text-slate-600">Utilized for immersive training simulations and controlled environments, helping users adapt to new assistive technologies safely.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Artificial Intelligence (AI)</h3>
            <p className="mt-4 text-slate-600">Drives real-time speech-to-text, sign language recognition, object detection, and intelligent navigation, constantly learning and improving.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
