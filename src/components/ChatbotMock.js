import React from 'react';

export default function ChatbotMock(){
  return (
    <div className="fixed bottom-6 right-6 w-80 glass p-3 rounded-xl shadow-lg">
      <div className="font-semibold">Vision Assistant</div>
      <div className="text-xs text-slate-300 mt-2">Hi — I'm a prototype assistant. Ask about accessibility features or leave feedback.</div>
      <div className="mt-3 flex gap-2">
        <input aria-label="chat input" placeholder="Type a question..." className="flex-1 px-3 py-2 rounded bg-transparent border border-white/6"/>
        <button className="px-3 py-2 bg-indigo-600 rounded">Send</button>
      </div>
    </div>
  )
}
