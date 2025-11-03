import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'VU AR',
    tagline: 'For the Deaf',
    description: 'Live captioning and visual aids.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=VU+AR',
  },
  {
    name: 'VU Specplus',
    tagline: 'For the Mute',
    description: 'Sign language to speech conversion.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=VU+Specplus',
  },
  {
    name: 'VU Smart',
    tagline: 'For the Blind',
    description: 'AI voice-guided navigation and alerts.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=VU+Smart',
  },
  {
    name: 'VisionUltra Pro Max',
    tagline: 'All-in-One Device',
    description: 'Combines all features for comprehensive support.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=VisionUltra+Pro+Max',
  },
];

export default function ProductLineupSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Our Product Lineup
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          We offer a range of VisionUltra Goggles tailored to specific needs, as well as an all-in-one solution for comprehensive support.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
              <p className="text-primary font-medium">{product.tagline}</p>
              <p className="mt-2 text-slate-600">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/pricing"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90"
          >
            View Detailed Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
