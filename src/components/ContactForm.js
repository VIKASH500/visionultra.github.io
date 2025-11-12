import React, { useState } from 'react';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handle = e => setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// ... inside the submit function
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Success:', data);
      setStatus('sent');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <div className="p-6 glass rounded">Thanks — we received your message. We'll be in touch soon.</div>;
  }

  return (
    <form onSubmit={submit} className="glass p-6 rounded-lg space-y-4">
      <label className="block">
        <span className="text-sm text-slate-700 dark:text-slate-300">Name</span>
        <input required name="name" value={values.name} onChange={handle} className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-white/6" />
      </label>
      <label className="block">
        <span className="text-sm text-slate-700 dark:text-slate-300">Email</span>
        <input required name="email" type="email" value={values.email} onChange={handle} className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-white/6" />
      </label>
      <label className="block">
        <span className="text-sm text-slate-700 dark:text-slate-300">Message</span>
        <textarea required name="message" value={values.message} onChange={handle} rows={4} className="mt-1 w-full px-3 py-2 rounded bg-transparent border border-white/6"></textarea>
      </label>
      <div className="text-right">
        <button type="submit" disabled={status === 'sending'} className="px-4 py-2 bg-indigo-600 rounded disabled:bg-indigo-400">
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {status === 'error' && (
        <div className="text-red-500 text-sm text-right">
          Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
}
