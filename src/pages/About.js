import React from 'react';
import { Helmet } from 'react-helmet-async';
import VikashImage from '../assets/Vikash.jpg';
import ShabinImage from '../assets/Shabin.jpg';

const team = [
  {
    name: 'Vikash Rajendra',
    role: 'CEO & Founder',
    imageUrl: VikashImage,
    //bio: 'Founder focused on product and partnerships — leading the research into accessible AR experiences.',
  },
  {
    name: 'Sharbin Charles',
    role: 'Co-Founder',
    imageUrl: ShabinImage,
    //bio: 'Co-founder driving engineering and AI models for sign/speech recognition modules.',
  },
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


      </main>
    </div>
  );
}
