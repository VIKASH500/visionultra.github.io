import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function SpeechToTextDemo() {
  const [speechInput, setSpeechInput] = useState('');
  const [textOutput, setTextOutput] = useState('');

  const simulateSpeechToText = () => {
    if (speechInput.trim() === '') {
      setTextOutput('Please speak something into the microphone.');
      return;
    }
    setTextOutput(`(Simulated) You said: "${speechInput}"`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-slate-900">Live Captioning (Speech-to-Text)</h3>
      <p className="mt-4 text-slate-600">Experience real-time transcription of spoken words.</p>
      <div className="mt-6">
        <textarea
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
          rows="3"
          placeholder="Simulate speech input here..."
          value={speechInput}
          onChange={(e) => setSpeechInput(e.target.value)}
        ></textarea>
        <button
          className="mt-4 inline-block bg-primary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-opacity-90"
          onClick={simulateSpeechToText}
        >
          Simulate Speech
        </button>
      </div>
      <div className="mt-6 p-4 bg-slate-50 rounded-md">
        <p className="text-slate-700 font-medium">Live Caption:</p>
        <p className="text-slate-800 mt-2">{textOutput || 'Waiting for speech...'}</p>
      </div>
    </div>
  );
}

function SignLanguageToSpeechDemo() {
  const [signInput, setSignInput] = useState('');
  const [speechOutput, setSpeechOutput] = useState('');
  const [language, setLanguage] = useState('English');

  const simulateSignToSpeech = () => {
    if (signInput.trim() === '') {
      setSpeechOutput('Please perform a sign.');
      return;
    }
    setSpeechOutput(`(Simulated) Sign for "${signInput}" translated to ${language} speech.`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-slate-900">Sign Language to Speech Conversion</h3>
      <p className="mt-4 text-slate-600">See how sign language is converted into spoken words in various languages.</p>
      <div className="mt-6">
        <textarea
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
          rows="3"
          placeholder="Simulate sign language input here (e.g., 'Hello', 'Thank You')..."
          value={signInput}
          onChange={(e) => setSignInput(e.target.value)}
        ></textarea>
        <div className="mt-4 flex items-center gap-4">
          <select
            className="p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Tamil</option>
            <option>Malayalam</option>
            <option>Kannada</option>
            <option>Hindi</option>
          </select>
          <button
            className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-opacity-90"
            onClick={simulateSignToSpeech}
          >
            Simulate Conversion
          </button>
        </div>
      </div>
      <div className="mt-6 p-4 bg-slate-50 rounded-md">
        <p className="text-slate-700 font-medium">Spoken Output:</p>
        <p className="text-slate-800 mt-2">{speechOutput || 'Waiting for sign...'}</p>
      </div>
    </div>
  );
}

function ObjectRecognitionNavigationDemo() {
  const [environment, setEnvironment] = useState('');
  const [voiceCommand, setVoiceCommand] = useState('');
  const [navigationOutput, setNavigationOutput] = useState('');

  const simulateNavigation = () => {
    if (environment.trim() === '') {
      setNavigationOutput('Please describe your environment.');
      return;
    }
    if (voiceCommand.trim() === '') {
      setNavigationOutput('Please give a voice command.');
      return;
    }
    setNavigationOutput(`(Simulated) In a ${environment}, navigating based on "${voiceCommand}". Alert: Obstacle detected 5 feet ahead!`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-slate-900">AI Voice-Guided Navigation & Alert System</h3>
      <p className="mt-4 text-slate-600">Experience intelligent navigation and real-time hazard alerts.</p>
      <div className="mt-6 space-y-4">
        <textarea
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
          rows="2"
          placeholder="Describe your current environment (e.g., 'busy street', 'office hallway')..."
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-3 border border-slate-300 rounded-md focus:ring-primary focus:border-primary"
          placeholder="Give a voice command (e.g., 'Find the exit', 'Navigate to the coffee shop')..."
          value={voiceCommand}
          onChange={(e) => setVoiceCommand(e.target.value)}
        />
        <button
          className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-opacity-90"
          onClick={simulateNavigation}
        >
          Simulate Navigation
        </button>
      </div>
      <div className="mt-6 p-4 bg-slate-50 rounded-md">
        <p className="text-slate-700 font-medium">Navigation Output:</p>
        <p className="text-slate-800 mt-2">{navigationOutput || 'Waiting for input...'}</p>
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <div className="bg-white py-24">
      <Helmet>
        <title>Live Demo — VIGUX</title>
        <meta name="description" content="Experience interactive demos of VisionUltra Goggles' core features." />
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Experience VisionUltra
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
            Interact with our simulated AI models to understand the transformative power of VisionUltra Goggles.
          </p>
        </div>

        <div className="mt-20 space-y-16">
          <SpeechToTextDemo />
          <SignLanguageToSpeechDemo />
          <ObjectRecognitionNavigationDemo />
        </div>
      </div>
    </div>
  );
}
