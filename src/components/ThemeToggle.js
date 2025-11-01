import React, { useEffect, useState } from 'react';

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => {
    try{
      const stored = localStorage.getItem('vu-theme');
      if(stored) return stored;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }catch(e){
      return 'light';
    }
  });

  useEffect(()=>{
    const root = document.documentElement;
    if(theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    try{ localStorage.setItem('vu-theme', theme); }catch(e){}
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <button aria-label="Switch to light theme" title="Light" onClick={() => setTheme('light')} className={`px-2 py-1 rounded ${theme === 'light' ? 'ring-2 ring-indigo-400' : ''}`}>
        ☀️
      </button>
      <button aria-label="Switch to dark theme" title="Dark" onClick={() => setTheme('dark')} className={`px-2 py-1 rounded ${theme === 'dark' ? 'ring-2 ring-indigo-400' : ''}`}>
        🌙
      </button>
    </div>
  )
}
