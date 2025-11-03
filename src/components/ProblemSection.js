import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Addressing a Massive Unmet Need
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          Over 680 million people worldwide live with hearing, speech, or visual impairments, with over 80 million affected in India alone. These individuals often face significant barriers to communication, navigation, and independence, leading to social isolation and limited opportunities.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Communication Barriers</h3>
            <p className="mt-4 text-slate-600">Difficulty in real-time conversations, especially for the deaf and mute.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Navigation Challenges</h3>
            <p className="mt-4 text-slate-600">Limited independence for the blind in unfamiliar environments.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Lack of Inclusivity</h3>
            <p className="mt-4 text-slate-600">Social isolation and reduced access to education and employment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
