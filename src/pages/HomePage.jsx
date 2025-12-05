// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const data = await fetchPopularMovies(currentPage);
        setMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [currentPage]);

  useEffect(() => {
    let results = movies;

    if (searchTerm) {
      results = results.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'rating') {
      results.sort((a, b) => b.vote_average - a.vote_average);
    } else if (sortBy === 'year') {
      results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }

    setFilteredMovies(results);
  }, [searchTerm, sortBy, movies]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header Section with Cinema Background */}
      {/* Header Section with Cinematic Background */}
    <div className="relative mb-8 pt-20">
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
    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-2 drop-shadow-lg animate-fadeIn">
      Cineverse - Explore Movies
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
      Temukan film terbaik, ulasan jujur, dan rekomendasi personal untuk setiap mood Anda.
    </p>
  </div>
</div>

      {/* Search & Filter */}
      <div className="mb-6">
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className="mb-6">
        <FilterBar onSortChange={setSortBy} />
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
            Tidak ada film yang ditemukan.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

// ✅ EKSPOR DEFAULT — INI YANG PENTING!
export default HomePage;