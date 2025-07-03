import React, { useState, useEffect } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import Pagination from '../../Components/pogination/pogination';
import { motion } from 'framer-motion';

function BooksSection() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const booksPerPage = 8;

  const fetchBooks = async () => {
    try {
      const url = `http://13.60.234.19:5000/api/v1/admin/books/getBooks/all?page=${currentPage}&limit=${booksPerPage}`;
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Xatolik:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [currentPage]);

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
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className='pl-[20px] text-[18px] w-[455px] h-[50px] border-[#1E3A8A33] border rounded-[10px] focus:outline-0'
          />

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className='w-[455px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              setCurrentPage(1);
            }}
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ boxShadow: '3px 4px 10px 2px #00000040' }}
              className='w-[300px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px] bg-white'
            >
              <div>
                <img src={book.image} alt={book.title} className='rounded-[10px]' />
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
            </motion.div>
          ))
        ) : (
          <p className='text-center w-full text-xl mt-10'></p>
        )}
      </div>

      <div className="flex w-[1230px] mx-auto justify-end mt-[30px]">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </section>
  );


}

export default BooksSection;
