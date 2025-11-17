// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 text-gray-300 relative overflow-hidden">
      {/* Efek partikel halus (optional, tetap ringan) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(75,85,99,0.2)_0%,transparent_50%)]"></div>
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(147,188,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Konten utama */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Left: Copyright & Logo */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="text-2xl font-bold text-yellow-400">Cineverse</span>
            <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-400">v1.0</span>
          </div>
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Cineverse. All rights reserved.
          </p>
        </div>

        {/* Center: Navigasi Footer */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-light">
          <a href="/" className="hover:text-yellow-400 transition duration-200 hover:underline">Home</a>
          <a href="/about" className="hover:text-yellow-400 transition duration-200 hover:underline">About Us</a>
          <a href="https://letterboxd.com/" className="hover:text-yellow-400 transition duration-200 hover:underline">Want to review a movie ??</a>
          <a href="#" className="hover:text-yellow-400 transition duration-200 hover:underline">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 justify-center md:justify-end">
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-200"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.603 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-yellow-400 transition duration-200"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.026 3.026 0 0 0-.974-2.173C21.952 3.194 20.49 2.5 18.93 2.5c-1.45 0-2.912.69-3.974 2.186-1.062 1.496-1.618 3.638-1.618 5.88 0 2.242.556 4.384 1.618 5.88 1.062 1.496 2.524 2.186 3.974 2.186 1.46 0 2.922-.69 3.974-2.186 1.062-1.496 1.618-3.638 1.618-5.88 0-2.242-.556-4.384-1.618-5.88zm-11.684 9.696v-6.468l5.568 3.234-5.568 3.234z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Garis dekoratif di atas footer (seperti di navbar) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;