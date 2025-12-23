import React from 'react';
import { Link } from 'react-router-dom';

function SocialButton({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={"flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition transform hover:-translate-y-0.5 active:scale-95 " + className}
    >
      {children}
    </button>
  );
}

export default function AuthCard({ title, children, footer }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F7F6FB] to-[#FBFBFF] px-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">{title}</h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <SocialButton className="flex-1 border border-gray-200 bg-white text-slate-700 hover:shadow">
                <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M44.5 20H24v8.5h11.9C34.2 33.7 30 36 24 36c-8.5 0-15.5-7-15.5-15.5S15.5 5 24 5c4 0 6.8 1.5 9 3.5l6.3-6.1C36 0.8 30.6 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c13.3 0 24-10.7 24-24 0-1.6-.2-3.1-.5-4.5z" fill="#4285F4"/>
                </svg>
                Google
              </SocialButton>

              <SocialButton className="flex-1 bg-[#1877F2] text-white hover:brightness-95">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12H22z"/>
                </svg>
                Facebook
              </SocialButton>

              <SocialButton className="flex-1 bg-slate-800 text-white hover:brightness-90">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 .1 2 .1 1.1 1.9 3 1.4 3.7 1 .1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" fill="#fff"/>
                </svg>
                GitHub
              </SocialButton>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <div className="text-sm text-gray-400 uppercase">or</div>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div>{children}</div>
          </div>

          {footer && (
            <div className="mt-6 text-center text-sm text-gray-500">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
