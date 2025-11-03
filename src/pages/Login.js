import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Login(){
  return (
    <div className="max-w-md mx-auto glass p-6 rounded-lg">
      <Helmet>
        <title>Login — VisionUltra</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <label className="block"><span className="text-sm text-slate-700 dark:text-slate-300">Email</span><input required type="email" className="mt-1 w-full px-3 py-2 rounded border"/></label>
        <label className="block"><span className="text-sm text-slate-700 dark:text-slate-300">Password</span><input required type="password" className="mt-1 w-full px-3 py-2 rounded border"/></label>
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Sign in</button>
          <a href="/signup" className="text-sm underline">Create an account</a>
        </div>
      </form>
    </div>
  )
}
