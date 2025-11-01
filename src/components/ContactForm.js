import React, { useState } from 'react';

export default function ContactForm(){
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // mock submit
    setTimeout(() => setSent(true), 400);
  }

  if(sent) return <div className="p-6 glass rounded">Thanks — we received your message. We'll be in touch soon.</div>

  return (
    <form onSubmit={submit} className="glass p-6 rounded-lg space-y-4">
      <label className="block"><span className="text-sm text-slate-300">Name</span><input required name="name" value={values.name} onChange={handle} className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-white/6"/></label>
      <label className="block"><span className="text-sm text-slate-300">Email</span><input required name="email" type="email" value={values.email} onChange={handle} className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-white/6"/></label>
      <label className="block"><span className="text-sm text-slate-300">Message</span><textarea required name="message" value={values.message} onChange={handle} rows={4} className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-white/6"></textarea></label>
      <div className="text-right"><button type="submit" className="px-4 py-2 bg-indigo-600 rounded">Send Message</button></div>
    </form>
  )
}
