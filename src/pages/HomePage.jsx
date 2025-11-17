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
      <div className="relative mb-8 pt-20"> {/* ⬅️ pt-20 untuk menghindari tabrakan dengan navbar fixed */}
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
          }}
        ></div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Cineverse - Explore Movies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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

export default HomePage;