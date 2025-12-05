import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import AboutUsPage from './pages/AboutUsPage'; // Buat komponen ini
import FavoritesPage from './pages/FavoritesPage'; // Buat komponen ini
import Footer from './components/Footer'; // Buat komponen ini
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<ErrorDisplay message="Halaman tidak ditemukan." />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;