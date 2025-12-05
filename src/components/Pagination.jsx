// src/components/Pagination.jsx

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  const maxPagesToShow = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center mt-8 gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          currentPage === 1
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gray-800 text-blue-400 hover:bg-gray-700'
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            page === currentPage
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-blue-400 hover:bg-gray-700'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          currentPage === totalPages
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gray-800 text-blue-400 hover:bg-gray-700'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;