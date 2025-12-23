import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder auth - replace with real API call
    if (email && password) {
      onLogin && onLogin();
      navigate('/demo');
    } else {
      setError('Please provide email and password.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Log in — vigux.in</title>
      </Helmet>

      <AuthCard
        title="Log in"
        footer={(
          <>
            <div className="mb-2 text-gray-600">Can't Access Your Account?</div>
            <div>
              <span>Don't have an account? </span>
              <Link to="/signup" className="text-purple-600 font-medium hover:underline">Sign Up</Link>
            </div>
          </>
        )}
      >
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm">
            <span className="text-gray-700">Email address</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </label>

          <label className="block text-sm relative">
            <span className="text-gray-700">Password</span>
            <div className="mt-2 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-between text-sm">
            <Link to="/forgot" className="text-purple-600 hover:underline">Forgot password?</Link>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="mt-2 w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white py-3 rounded-lg text-sm font-semibold transition"
          >
            Log in
          </button>
        </form>
      </AuthCard>
    </>
  );
}
