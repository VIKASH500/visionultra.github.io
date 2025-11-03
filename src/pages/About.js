import React from 'react';
import { Helmet } from 'react-helmet-async';
import TeamCard from '../components/TeamCard';

export default function About(){
  return (
    <div className="space-y-6">
      <Helmet>
        <title>About — VIGUX</title>
        <meta name="description" content="About VIGUX — mission, vision, team and timeline for our accessibility-first AR/VR wearable." />
      </Helmet>

      <div>
  <h1 className="text-3xl font-bold">About VIGUX</h1>
        <p className="text-slate-700 dark:text-slate-900 mt-2">Mission: Use technology to deliver equal access and independence for all.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamCard name="Vikash Rajendran" role="CEO & Founder" bio="Founder focused on product and partnerships — leading the research into accessible AR experiences." />
        <TeamCard name="Sharbin Charles" role="Co-Founder" bio="Co-founder driving engineering and AI models for sign/speech recognition modules." />
      </div>

      <div className="glass p-6 rounded-lg">
        <h3 className="font-semibold">Timeline</h3>
        <ol className="mt-3 text-slate-700 dark:text-slate-900 list-decimal list-inside">
          <li>2021 — Company founded</li>
          <li>2022 — Prototype v1 and pilot studies</li>
          <li>2024 — Clinical partnerships and product refinement</li>
        </ol>
      </div>
    </div>
  )
}
