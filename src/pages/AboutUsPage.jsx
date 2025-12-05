// src/pages/AboutUsPage.jsx

import React from 'react';

const AboutUsPage = () => {
  // Mock Data Statistik
  const stats = [
    { label: "Film Action", value: "78%", description: "Paling banyak ditonton oleh pengguna." },
    { label: "Film Romantis", value: "62%", description: "Populer di kalangan remaja dan pasangan." },
    { label: "Film Horor", value: "45%", description: "Lebih sering ditonton di malam hari." },
    { label: "Film Animasi", value: "89%", description: "Disukai oleh keluarga dan anak-anak." },
    { label: "Film Dokumenter", value: "33%", description: "Tren meningkat sejak 2023." }
  ];

  // Profil Founder
  const profile = {
    name: "Corleone",
    role: "Founder & CEO",
    bio: "Pencinta film sejak kecil, lulusan Film Studies di UI. Mengembangkan Cineverse karena ingin membantu orang menemukan film terbaik tanpa ribet.",
    image: "https://placehold.co/200x200/1e293b/ffffff?text=AW&font=montserrat"
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section with Cinema Background */}
      <div className="relative mb-8 pt-20"> {/* ⬅️ pt-20 untuk menghindari tabrakan dengan navbar fixed */}
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          }}
        ></div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Partikel Efek Halus */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(75,85,99,0.2)_0%,transparent_50%)]"></div>
          <div className="w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(147,188,255,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-lg animate-fadeIn">
            Tentang Kami
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Cineverse lahir dari cinta terhadap sinema dan keinginan untuk membantu penonton menemukan film terbaik sesuai mood mereka.
          </p>
        </div>
      </div>

      {/* Statistik Penonton Film */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Statistik Penonton Film</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg text-center hover:shadow-md transition">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-800 dark:text-white mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Profil Founder */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Tentang Pendiri</h2>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 overflow-hidden">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-1">{profile.name}</h3>
          <p className="text-sm text-green-600 dark:text-green-400 mb-3">{profile.role}</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>

      {/* Hubungi Kami */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Hubungi Kami</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Punya pertanyaan, saran, atau ingin kolaborasi? Jangan ragu untuk menghubungi kami!
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-2H5v2z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">contact@cineverse.com</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493a1 1 0 01-.502.95m0 0a2 2 0 012 2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493a1 1 0 01-.502.95m0 0a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.28a1 1 0 01.684-.948l4.493-1.498a1 1 0 01.95.502l4.493 1.498a1 1 0 01.948-.684V19.92a2 2 0 01-2-2h-2.28a1 1 0 01-.948-.684l-4.493-1.498a1 1 0 01-.502-.95l-1.498-4.493a1 1 0 01-.502-.95" />
            </svg>
            <span className="text-gray-700 dark:text-gray-300">+62 123 4567 890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;