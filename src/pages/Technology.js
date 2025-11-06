import React from 'react';
import { Helmet } from 'react-helmet-async';
import DeafImage from '../assets/Deaf.png';
import DumbImage from '../assets/Dumb.png';
import BlindImage from '../assets/Blind.png';

const features = [
  {
    name: 'Speech-to-Text',
    description: 'Our advanced speech-to-text engine provides real-time, low-latency transcription of spoken language. The text is displayed discreetly within the user\'s field of view, allowing for seamless conversation and comprehension in any environment.',
    imageUrl: DeafImage,
  },
  {
    name: 'Sign Recognition',
    description: 'Using a state-of-the-art on-device machine learning model, our goggles can recognize sign language in real-time and translate it into audible speech or text. This feature empowers the deaf and hard of hearing to communicate effortlessly with the world around them.',
    imageUrl: DumbImage,
  },
  {
    name: 'Augmented Perception',
    description: 'For users with visual impairments, our augmented perception technology provides contextual object detection and navigation cues. The goggles identify objects in the environment and provide audio feedback, enhancing spatial awareness and safety.',
    imageUrl: BlindImage,
  },
];

export default function Technology() {
  return (
    <div className="bg-white py-24">
      <Helmet>
        <title>Our Technology — VIGUX</title>
        <meta name="description" content="Learn about the innovative technology behind VIGUX\'s Vision AI Goggles." />
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            The Technology Behind Our Vision
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
            We leverage cutting-edge advancements in AR, VR, and AI to create a truly transformative experience.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {features.map((feature, index) => (
            <div key={feature.name} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <img src={feature.imageUrl} alt={feature.name} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold text-slate-900">{feature.name}</h2>
                <p className="mt-4 text-lg text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
