import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'VU AR (Deaf)',
    price: '₹30,000',
    description: 'Individual goggles designed for the deaf, providing live captioning and visual aids.',
    features: [
      'Live captioning (Speech-to-Text)',
      'Visual alerts',
      'Customizable display',
    ],
  },
  {
    name: 'VU Specplus (Dumb)',
    price: '₹35,000',
    description: 'Individual goggles for the mute, enabling sign language to speech conversion in multiple languages.',
    features: [
      'Sign language to speech conversion',
      '20+ native languages supported',
      'Real-time translation',
    ],
  },
  {
    name: 'VU Smart (Blind)',
    price: '₹45,000',
    description: 'Individual goggles for the blind, offering AI voice-guided navigation and an alert system.',
    features: [
      'AI voice commands',
      'Navigation assistance',
      'Harm alert system',
      'Object recognition',
    ],
  },
  {
    name: 'VisionUltra Pro Max (All-in-One)',
    price: '₹60,000',
    description: 'The ultimate device combining all features for comprehensive support across all disabilities.',
    features: [
      'All features of VU AR, VU Specplus, and VU Smart',
      'Seamless integration',
      'Enhanced processing power',
    ],
  },
];

const subscriptionPlans = [
  { duration: '3 Months', discount: '5%' },
  { duration: '6 Months', discount: '10%' },
  { duration: '12 Months', discount: '15%' },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24">
      <Helmet>
        <title>Pricing & Plans — VIGUX</title>
        <meta name="description" content="Explore pricing, customization, and subscription plans for VisionUltra Goggles." />
      </Helmet>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Flexible Pricing & Plans
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
            Choose the VisionUltra Goggles that best suit your needs, with options for individual devices, an all-in-one solution, and flexible subscription plans.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">Our Products</h2>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-4 flex items-baseline text-slate-900">
                      <span className="text-4xl font-extrabold tracking-tight">{product.price}</span>
                      <span className="ml-1 text-xl font-semibold">*</span>
                    </p>
                    <p className="mt-4 text-base text-slate-600">{product.description}</p>
                    <ul className="mt-6 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base text-slate-600">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">* All prices are inclusive of taxes.</p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">Subscription Plans</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 text-center">
            Enjoy additional savings with our flexible subscription options.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionPlans.map((plan) => (
              <div key={plan.duration} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-slate-50 p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">{plan.duration} Plan</h3>
                <p className="mt-4 text-4xl font-extrabold text-primary">{plan.discount}</p>
                <p className="mt-2 text-base text-slate-600">Discount on total purchase</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Customization Options</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            We understand that every individual's needs are unique. Contact us to discuss personalized customization options for your VisionUltra Goggles based on specific disability requirements.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90">
              Contact for Customization
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
