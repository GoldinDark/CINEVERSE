// src/components/FilterBar.jsx

import React from 'react';

const FilterBar = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
      <label className="font-medium text-gray-700 dark:text-gray-300">Urutkan Berdasarkan:</label>
      <select
        onChange={handleSortChange}
        className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <option value="popularity">Populer</option>
        <option value="rating">Rating Tertinggi</option>
        <option value="year">Tahun Rilis Terbaru</option>
      </select>
    </div>
  );
};

export default FilterBar;