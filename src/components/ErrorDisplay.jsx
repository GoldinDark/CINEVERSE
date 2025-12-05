// src/components/ErrorDisplay.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorDisplay = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      ></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Partikel Efek Halus */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(75,85,99,0.2)_0%,transparent_50%)]"></div>
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(147,188,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-lg animate-fadeIn">
            404
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Oops! Halaman yang Anda cari tidak ditemukan.
          </p>
          <p className="text-sm text-gray-400 mb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            {message || "Maaf, terjadi kesalahan saat memuat halaman."}
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;