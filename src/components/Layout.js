import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a className="sr-only focus:not-sr-only focus:outline-none" href="#main">Skip to content</a>
      <Header />
      <main id="main" className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
