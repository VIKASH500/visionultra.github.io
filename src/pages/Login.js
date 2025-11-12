import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Admin' && password === '1234') {
      onLogin();
      navigate('/demo');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="max-w-md mx-auto glass p-6 rounded-lg">
      <Helmet>
        <title>Login — VisionUltra</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm text-slate-700">Username</span>
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Password</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded border"
          />
        </label>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex items-center justify-between">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-slate-900 rounded">Sign in</button>
          <a href="/signup" className="text-sm underline">Create an account</a>
        </div>
      </form>
    </div>
  )
}
