import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import AuthCard from '../components/AuthCard';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill all required fields.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    // placeholder - replace with API call
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>Sign up — vigux.in</title>
      </Helmet>

      <AuthCard
        title="Sign up"
        footer={(
          <div>
            Already have an account? <Link to="/login" className="text-purple-600 font-medium hover:underline">Log in</Link>
          </div>
        )}
      >
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </label>

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

          <label className="block text-sm">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </label>

          <label className="block text-sm">
            <span className="text-gray-700">Confirm Password</span>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </label>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="mt-2 w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white py-3 rounded-lg text-sm font-semibold transition"
          >
            Create account
          </button>
        </form>
      </AuthCard>
    </>
  );
}
