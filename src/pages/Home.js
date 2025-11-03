import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import LiveCaptioningSection from '../components/LiveCaptioningSection';
import SignLanguageSection from '../components/SignLanguageSection';
import NavigationAssistantSection from '../components/NavigationAssistantSection';
import HowItWorksSection from '../components/HowItWorksSection';
import OnlineDemoSection from '../components/OnlineDemoSection';
import ProductLineupSection from '../components/ProductLineupSection';
import PricingSummarySection from '../components/PricingSummarySection';
import CallToActionSection from '../components/CallToActionSection';

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>VIGUX — Empowering Independence Through Technology</title>
        <meta name="description" content="VIGUX is a technology company building AR/VR and AI-powered solutions to empower individuals with disabilities." />
      </Helmet>

      <Hero />
      <ProblemSection />
      <SolutionSection />
      <LiveCaptioningSection />
      <SignLanguageSection />
      <NavigationAssistantSection />
      <HowItWorksSection />
      <OnlineDemoSection />
      <ProductLineupSection />
      <PricingSummarySection />
      <CallToActionSection />
    </div>
  )
}
