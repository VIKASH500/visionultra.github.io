import React from 'react';
import { Link } from 'react-router-dom';

export default function OnlineDemoSection() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Experience VisionUltra Firsthand
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Click the button below to explore interactive demos of our AI models for Speech-to-Text, Sign Language to Speech, and Object Recognition and Navigation.
        </p>
        <div className="mt-8">
          <Link
            to="/demo"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-slate-100"
          >
            Explore Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
