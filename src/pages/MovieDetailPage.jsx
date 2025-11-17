// src/pages/MovieDetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieRecommendations, fetchMovieCredits } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorDisplay from '../components/ErrorDisplay';
import MovieCard from '../components/MovieCard';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [credits, setCredits] = useState({ cast: [], crew: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingRecs, setLoadingRecs] = useState(false);
  const [loadingCast, setLoadingCast] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setMovie(data);

        // Ambil rekomendasi
        setLoadingRecs(true);
        const recs = await fetchMovieRecommendations(id);
        setRecommendations(recs.results || []);

        // Ambil cast & crew
        setLoadingCast(true);
        const cred = await fetchMovieCredits(id);
        setCredits(cred);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setLoadingRecs(false);
        setLoadingCast(false);
      }
    };
    getMovie();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  if (!movie) return <p className="text-center py-10">Film tidak ditemukan.</p>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750?text=No+Image';

  const rating = movie.vote_average.toFixed(1);
  const stars = Math.round(rating / 2);

  // Ambil 5 aktor utama
  const topCast = credits.cast?.slice(0, 5) || [];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Kembali ke Halaman Sebelumnya
      </button>

      {/* Detail Film */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{movie.release_date}</p>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < stars ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-lg font-semibold">({rating}/10)</span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{movie.overview}</p>

            {/* Cast Section */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Cast:</h3>
              {loadingCast ? (
                <div className="flex justify-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
              ) : topCast.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {topCast.map(actor => (
                    <div
                      key={actor.id}
                      className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                    >
                      {actor.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                          alt={actor.name}
                          className="w-16 h-16 rounded-full object-cover mb-2"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-500 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c1.52 0 5.1 1.34 5.1 5H6.9c0-3.66 3.58-5 5.1-5z"/>
                          </svg>
                        </div>
                      )}
                      <p className="text-sm font-medium text-center text-gray-800 dark:text-white truncate max-w-[80px]">
                        {actor.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-300 text-center truncate max-w-[80px]">
                        {actor.character}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 italic">Tidak ada data cast yang tersedia.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rekomendasi Film Serupa */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Rekomendasi Film Serupa</h2>

        {loadingRecs ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          </div>
        ) : recommendations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {recommendations.map(movie => (
              <div
                key={movie.id}
                className="opacity-0 animate-fadeIn transform transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: `${Math.random() * 0.3}s` }}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            Belum ada rekomendasi film serupa untuk saat ini.
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;