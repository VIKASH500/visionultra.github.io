import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Technology(){
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Technology — VisionUltra</title>
        <meta name="description" content="Learn about VisionUltra's AR, VR and ML features: speech-to-text, sign recognition and augmented perception." />
      </Helmet>

      <h1 className="text-3xl font-bold">Technology</h1>
      <p className="text-slate-300 mt-2">Our AI Smart Glasses blend on-device ML for sign recognition, real-time speech-to-text, and AR overlays that provide situational context for low-vision users.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass p-4 rounded">
          <h3 className="font-semibold">Speech-to-Text</h3>
          <p className="text-sm text-slate-300 mt-2">Low-latency transcription shown in the user's field of view.</p>
        </div>
        <div className="glass p-4 rounded">
          <h3 className="font-semibold">Sign Recognition</h3>
          <p className="text-sm text-slate-300 mt-2">Real-time sign language recognition converted to audio or text.</p>
        </div>
        <div className="glass p-4 rounded">
          <h3 className="font-semibold">Augmented Perception</h3>
          <p className="text-sm text-slate-300 mt-2">Contextual object detection and navigation cues for blind users.</p>
        </div>
      </div>
    </div>
  )
}
