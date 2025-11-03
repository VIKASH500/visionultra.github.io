import React from 'react';

const features = [
  {
    name: 'Speech-to-Text',
    description: 'Real-time transcription of spoken language, displayed discreetly in the user\'s field of view.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
    ),
  },
  {
    name: 'Sign Recognition',
    description: 'Translates sign language into audible speech or text, enabling seamless communication.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m-2.828 9.9a9 9 0 010-12.728"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h.01"></path></svg>
    ),
  },
  {
    name: 'Augmented Perception',
    description: 'Provides contextual object detection and navigation cues for users with visual impairments.',
    icon: (
      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    ),
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            A New Way to Perceive the World
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our technology is designed to empower individuals by breaking down communication and navigation barriers.
          </p>
        </div>
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">{feature.name}</h3>
                  <p className="mt-5 text-base text-slate-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
