import React from 'react';

export default function TeamCard({ name, role, bio }){
  return (
    <div className="glass p-4 rounded-lg">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-slate-600 dark:text-slate-900">{role}</div>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-900">{bio}</p>
    </div>
  )
}
