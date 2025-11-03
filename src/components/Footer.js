import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/vision_ultra_official', icon: (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.507.01-4.73.068-2.79.128-3.976 1.31-4.104 4.104-.058 1.22-.069 1.567-.069 4.73s.01 3.51.068 4.73c.128 2.794 1.31 3.976 4.104 4.104 1.22.058 1.58.068 4.73.068s3.51-.01 4.73-.068c2.794-.128 3.976-1.31 4.104-4.104.058-1.22.068-1.567.068-4.73s-.01-3.51-.068-4.73c-.128-2.794-1.31-3.976-4.104-4.104-1.22-.058-1.58-.068-4.73-.068zm0 2.882a5.15 5.15 0 100 10.3 5.15 5.15 0 000-10.3zm0 8.498a3.348 3.348 0 110-6.696 3.348 3.348 0 010 6.696zm5.19-8.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" /></svg> },
  { name: 'X', href: 'https://x.com/VisionUltraOffi', icon: (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-slate-400">&copy; {new Date().getFullYear()} VIGUX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
