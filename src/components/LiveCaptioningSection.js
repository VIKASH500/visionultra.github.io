import React from 'react';
import DeafImage from '../assets/Deaf.png';

export default function LiveCaptioningSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <img
              src={DeafImage}
              alt="Live Captioning"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Live Captioning: Speech-to-Text in Real-Time
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              For individuals with hearing impairments, our VisionUltra Goggles provide live captioning, converting spoken words into text that appears directly in front of the user's eyes. This innovative feature ensures that conversations, lectures, and everyday interactions are fully accessible and understandable.
            </p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Real-time transcription for seamless communication.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Text displayed directly in the user's field of vision.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Enhances participation in social and professional settings.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
