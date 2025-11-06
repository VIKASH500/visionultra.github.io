import React from 'react';
import { Helmet } from 'react-helmet-async';
import VikashImage from '../assets/Vikash.jpg';
import ShabinImage from '../assets/Shabin.jpg';

const team = [
  {
    name: 'Vikash Rajendra',
    role: 'CEO & Founder',
    imageUrl: VikashImage,
    bio: 'Founder focused on product and partnerships — leading the research into accessible AR experiences.',
  },
  {
    name: 'Sharbin Charles',
    role: 'Co-Founder',
    imageUrl: ShabinImage,
    bio: 'Co-founder driving engineering and AI models for sign/speech recognition modules.',
  },
];

const timeline = [
  { year: 2021, event: 'Company founded' },
  { year: 2022, event: 'Prototype v1 and pilot studies' },
  { year: 2024, event: 'Clinical partnerships and product refinement' },
];

export default function About() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us — VIGUX</title>
        <meta name="description" content="Learn about the mission, team, and story of VIGUX." />
      </Helmet>

      <main className="py-24">
        {/* Vision Section */}
        <div className="text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Our Vision
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
              To envision a world where technology eliminates barriers, fostering a society where every individual, regardless of their abilities, can communicate, navigate, and participate fully and independently.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mt-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Our Mission
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
              To build a more inclusive world by creating innovative and affordable technology that empowers individuals with disabilities to live more independent and fulfilling lives.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-slate-50 py-24 mt-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              We are a passionate team of innovators dedicated to making a difference.
            </p>
            <div className="mt-12 grid gap-12 sm:grid-cols-2">
              {team.map((person) => (
                <div key={person.name}>
                  <img className="mx-auto h-40 w-40 rounded-full" src={person.imageUrl} alt="" />
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-slate-900">{person.name}</h3>
                    <p className="text-base font-semibold text-primary">{person.role}</p>
                    <p className="mt-2 text-base text-slate-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center">Our Journey</h2>
            <div className="mt-12 flow-root">
              <ul className="-mb-8">
                {timeline.map((item, itemIdx) => (
                  <li key={item.year}>
                    <div className="relative pb-8">
                      {itemIdx !== timeline.length - 1 ? (
                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-200" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-white">
                            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-slate-500">__{item.year}__</p>
                            <p className="font-medium text-slate-900">{item.event}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
