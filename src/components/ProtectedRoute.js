import React from 'react';
import { Link } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // Simple admin check using localStorage flag set at login
  const isAdmin = typeof window !== 'undefined' && localStorage.getItem('isAdmin') === 'true';

  if (isAdmin) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-slate-800">Access denied</h2>
        <p className="mt-4 text-slate-600">The pricing and admin details are restricted to site administrators.</p>
        <div className="mt-6">
          <Link to="/login" className="inline-block bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700">Log in as Admin</Link>
        </div>
      </div>
    </div>
  );
}
