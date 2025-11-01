import React from 'react';

export default function TeamCard({ name, role, bio }){
  return (
    <div className="glass p-4 rounded-lg">
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-slate-300">{role}</div>
      <p className="mt-2 text-sm text-slate-200">{bio}</p>
    </div>
  )
}
