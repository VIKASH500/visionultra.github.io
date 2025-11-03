import React from 'react';
import { Link } from 'react-router-dom';

export default function PricingSummarySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Transparent Pricing, Flexible Plans
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
          We offer competitive pricing for our individual devices and the all-in-one VisionUltra Pro Max, along with flexible subscription options to make our technology accessible to everyone.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">VU AR</h3>
            <p className="mt-2 text-primary text-3xl font-bold">₹30,000</p>
            <p className="mt-2 text-slate-600">For Deaf individuals</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">VU Specplus</h3>
            <p className="mt-2 text-primary text-3xl font-bold">₹35,000</p>
            <p className="mt-2 text-slate-600">For Mute individuals</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">VU Smart</h3>
            <p className="mt-2 text-primary text-3xl font-bold">₹45,000</p>
            <p className="mt-2 text-slate-600">For Blind individuals</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">VisionUltra Pro Max</h3>
            <p className="mt-2 text-primary text-3xl font-bold">₹60,000</p>
            <p className="mt-2 text-slate-600">All-in-One Device</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-slate-500">* All prices are inclusive of taxes.</p>
        <div className="mt-12">
          <Link
            to="/pricing"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90"
          >
            View All Plans & Customization
          </Link>
        </div>
      </div>
    </section>
  );
}
