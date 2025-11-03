import React from 'react';

export default function SignLanguageSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:gap-12 flex-row-reverse">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400.png?text=Sign+Language+to+Speech"
              alt="Sign Language to Speech"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Sign Language to Speech: Bridging Communication Gaps
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our VisionUltra Goggles empower individuals who use sign language to communicate effortlessly with others. The device accurately converts sign language gestures into spoken words in real-time, supporting over 20 native languages including Tamil, Malayalam, Kannada, Hindi, and English.
            </p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Real-time conversion of sign language to speech.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Support for 20+ native languages, fostering wider inclusivity.</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Enables natural and fluid conversations.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
