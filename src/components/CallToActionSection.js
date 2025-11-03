import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToActionSection() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Ready to Transform Lives?
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">
          Join us in empowering individuals with disabilities. Explore our products, try a demo, or contact us for partnership opportunities.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/pricing"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-slate-100"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
