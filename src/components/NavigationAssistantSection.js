import React from 'react';
import BlindImage from '../assets/Blind.png';

export default function NavigationAssistantSection() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <img
              src={BlindImage}
              alt="AI Navigation Assistant"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              AI Voice-Guided Navigation & Alert System
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              For individuals with visual impairments, VisionUltra Goggles offer an intelligent AI voice-guided navigation assistant. Users can issue voice commands to navigate their surroundings, and the system provides real-time audio cues. Crucially, an integrated alert system detects potential hazards and warns the user, significantly enhancing safety and independence.
            </p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Voice-activated navigation for effortless movement.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Real-time hazard detection and audio alerts for enhanced safety.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Empowers blind individuals with greater independence and confidence.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
