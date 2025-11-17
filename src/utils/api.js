// src/utils/api.js

const API_KEY = 'a5b867fb8b9a7cbf7b34d7543e7d82a1';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  if (!response.ok) throw new Error('Gagal mengambil data film');
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) throw new Error('Gagal mengambil detail film');
  return response.json();
};

export const fetchMovieRecommendations = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`);
    if (!response.ok) {
      console.warn(`Rekomendasi untuk film ${movieId} tidak ditemukan.`);
      return { results: [] }; // Return array kosong jika error
    }
    const data = await response.json();
    return data; // Ini berisi { page, results, total_pages, ... }
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return { results: [] };
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    if (!response.ok) throw new Error('Gagal mengambil data cast');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching credits:", error);
    return { cast: [], crew: [] };
  }
};