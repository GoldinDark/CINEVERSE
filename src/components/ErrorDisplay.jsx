// src/components/ErrorDisplay.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorDisplay = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md w-full text-center">
        <svg
          className="w-16 h-16 mx-auto text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Oops! Terjadi Kesalahan</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {message || "Maaf, terjadi masalah saat memuat data. Silakan coba lagi nanti."}
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
          >
            Muat Ulang Halaman
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;