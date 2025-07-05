import React, { useRef, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchStartX - touchEndX;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0 && currentPage < totalPages) {
          onPageChange(currentPage + 1);
        } else if (deltaX < 0 && currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      }
    };

    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentPage, totalPages, onPageChange]);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div ref={containerRef} className="flex justify-center items-center space-x-2 py-4 select-none">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="w-10 h-10 flex justify-center items-center rounded-xl border text-teal-700 hover:bg-teal-100"
      >
        «
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex justify-center items-center rounded-xl border font-semibold 
            ${currentPage === page ? 'bg-teal-700 text-white' : 'text-teal-700 hover:bg-teal-100'}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="w-10 h-10 flex justify-center items-center rounded-xl border text-teal-700 hover:bg-teal-100"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
