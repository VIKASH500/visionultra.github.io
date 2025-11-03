import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-slate-200 dark:border-white/10 py-6">
      <div className="container mx-auto px-4 text-center text-slate-900">
        <div>© VIGUX {new Date().getFullYear()} | All Rights Reserved.</div>
        <div className="text-sm mt-2">VIGUX — We made, You Grow!! | <a href="mailto:visionultrainfo@gmail.com" className="underline">visionultrainfo@gmail.com</a></div>
      </div>
    </footer>
  );
}
