import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Impact(){
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Impact — VisionUltra</title>
        <meta name="description" content="Impact stories and testimonials demonstrating how VisionUltra improves independence and accessibility." />
      </Helmet>

      <h1 className="text-3xl font-bold">Impact</h1>
      <p className="text-slate-700 dark:text-slate-900">Real-life use cases and testimonials from users and healthcare partners.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass p-4 rounded">
          <div className="font-semibold">Testimonial</div>
          <p className="text-sm text-slate-600 dark:text-slate-900 mt-2">"These glasses gave me confidence to travel independently." — User</p>
        </div>
        <div className="glass p-4 rounded">
          <div className="font-semibold">Clinical Study</div>
          <p className="text-sm text-slate-600 dark:text-slate-900 mt-2">80% improvement in task completion in a recent pilot.</p>
        </div>
      </div>

      <blockquote className="glass p-4 rounded italic">"Technology should bring everyone forward — inclusion by design."</blockquote>
    </div>
  )
}
