import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NewFull() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const newsItem = state?.newsItem;

  if (!newsItem) {
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 text-xl">Maʼlumot topilmadi.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Ortga qaytish
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1177px] mx-auto px-4 pt-[120px]">
      <h2 className="text-center text-black font-bold text-[48px] mb-4">
        YANGILIKLAR
      </h2>
      <p className="text-center text-[36px] font-medium mb-8">
        “{newsItem.title}”
      </p>

      <div className="flex flex-wrap justify-between gap-y-6 mb-6">
        {newsItem.images?.map((img, index) => (
          <div
            key={index}
            className="w-full sm:w-[48%] h-[595px] overflow-hidden rounded"
          >
            <img
              src={img}
              alt={`news-img-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-[#000000] text-[32px] mb-10">
        {newsItem.context}
      </p>

      <p className="text-right text-[32px] font-bold text-[#000000]">
        {newsItem.publication_date}
      </p>
    </div>
  );
}

export default NewFull;
