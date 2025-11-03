import React from 'react';
import { Helmet } from 'react-helmet-async';

const stats = [
  { label: 'Reduction in workplace discrimination', value: '40%' },
  { label: 'Improvement in city accessibility', value: '30%' },
  { label: 'Users to be impacted within 5 years', value: '10,000+' },
];

const testimonials = [
  {
    quote: 'These glasses gave me the confidence to travel independently. I feel like I have my freedom back.',
    author: 'A. User',
  },
  {
    quote: 'As a healthcare provider, I see the immense potential of this technology to improve the lives of my patients.',
    author: 'Dr. B. Charles',
  },
];

export default function Impact() {
  return (
    <div className="bg-white py-24">
      <Helmet>
        <title>Our Impact — VIGUX</title>
        <meta name="description" content="Learn about the impact of VIGUX\'s work on individuals and society." />
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Creating a More Inclusive World
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
            We are committed to making a measurable impact on the lives of individuals with disabilities and on society as a whole.
          </p>
        </div>

        <div className="mt-20">
          <dl className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="relative text-center">
                <dt>
                  <p className="text-5xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-2 text-lg font-medium leading-6 text-slate-600">{stat.label}</p>
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">What People Are Saying</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.quote} className="bg-slate-50 p-8 rounded-lg shadow-lg">
                <blockquote className="text-lg text-slate-900">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
