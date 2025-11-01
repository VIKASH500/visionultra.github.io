import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

export default function Contact(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Helmet>
        <title>Contact — VisionUltra</title>
        <meta name="description" content="Contact VisionUltra for partnerships, press, and support. Email visionultrainfo@gmail.com" />
      </Helmet>

      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-slate-300 mt-2">Reach out with partnership enquiries or press: <a href="mailto:visionultrainfo@gmail.com" className="underline">visionultrainfo@gmail.com</a></p>
        <div className="mt-6 glass p-4 rounded">Map placeholder — Map integration can be added here.</div>
      </div>
      <div>
        <ContactForm />
        <div className="text-sm text-slate-400 mt-4">Follow us: <a href="https://instagram.com/vision_ultra_official" className="underline">Instagram</a> • <a href="https://x.com/VisionUltraOffi" className="underline">X</a></div>
      </div>
    </div>
  )
}
