import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Signup(){
  return (
    <div className="max-w-md mx-auto glass p-6 rounded-lg">
      <Helmet>
        <title>Sign Up — VisionUltra</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Create account</h1>
      <form className="space-y-4">
        <label className="block"><span className="text-sm text-slate-700">Full name</span><input required className="mt-1 w-full px-3 py-2 rounded border"/></label>
        <label className="block"><span className="text-sm text-slate-700">Email</span><input required type="email" className="mt-1 w-full px-3 py-2 rounded border"/></label>
        <label className="block"><span className="text-sm text-slate-700">Password</span><input required type="password" className="mt-1 w-full px-3 py-2 rounded border"/></label>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-indigo-600 text-slate-900 rounded">Create account</button>
          <a href="/login" className="text-sm underline">Already have an account?</a>
        </div>
      </form>
    </div>
  )
}
