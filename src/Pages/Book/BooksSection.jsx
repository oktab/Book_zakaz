import React, { useState, useEffect } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";

function BooksSection() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const urlApi = `http://13.60.234.19:5000/api/v1/admin/books/getBooks/all`; // 🔥 без page/limit

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(urlApi);
        const data = await res.json();
        setBooks(data.data);
      } catch (error) {
        console.error('Xatolik:', error);
      }
    };
    fetchBooks();
  }, []);

  const categories = ['All', ...new Set(books.map(book => book.category))];
  const languages = ['All', ...new Set(books.map(book => book.language))];

  const filteredBooks = books.filter(book => {
    const byCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const byLanguage = selectedLanguage === 'All' || book.language === selectedLanguage;
    const bySearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return byCategory && byLanguage && bySearch;
  });

  return (
    <section>
      <div className='mx-auto w-[1230px] mt-[40px]'>
        <h2 className='text-[48px] font-[600] text-center mb-[20px]'>KITOBLAR</h2>
        <div className='w-[1230px] h-[50px] flex justify-between'>
          <input
            type="text"
            placeholder='Qidirish'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='pl-[20px] text-[18px] w-[455px] h-[50px] border-[#1E3A8A33] border rounded-[10px] focus:outline-0'
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='w-[455px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className='w-[300px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'
          >
            {languages.map((lang, i) => (
              <option key={i} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='mx-auto flex flex-wrap gap-[10px] w-[1230px] mt-[35px]'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
              <div>
                <img src={book.image} alt={book.title} />
                <div className='pl-[8px]'>
                  <h2 className='text-[20px] text-[#202020] font-[700]'>{book.title}</h2>
                  <div className='flex justify-between mt-[15px]'>
                    <div>
                      <p>Formati: {book.format}</p>
                      <p>Kitob betlari soni: {book.pages}</p>
                      <p>Til: {book.language}</p>
                    </div>
                    <IoMdHeartEmpty className='w-[30px] h-[30px]' />
                  </div>
                  <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>
                    Yuklab Olish
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center w-full text-xl mt-10'>Hech narsa topilmadi 😢</p>
        )}
      </div>
    </section>
  );
}

export default BooksSection;
