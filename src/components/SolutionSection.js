import React from 'react';

export default function SolutionSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Introducing VisionUltra Goggles
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          Our innovative VisionUltra Goggles integrate Augmented Reality (AR), Virtual Reality (VR), and Artificial Intelligence (AI) to provide a comprehensive solution for individuals with hearing, speech, and visual impairments.
        </p>
        <div className="mt-12 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400.png?text=VisionUltra+Goggles"
            alt="VisionUltra Goggles"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
