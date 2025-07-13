import React, { useState, useEffect } from 'react';
import BookCard from '../Book/CardBooks';
import BooksFilter from '../Book/BooksFilter';
import Pagination from '../../Components/pogination/pogination';
import useBooksStore from '../../store/useBooksStore';

const BooksSection = () => {
  const {
    books, setBooks,
    totalPages, setTotalPages,
    currentPage, setCurrentPage,
    setLikedBooks
  } = useBooksStore();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`https://lib.qaxramonov.uz/api/v1/admin/books/getBooks/all?page=${currentPage}&limit=8`);
        const data = await res.json();
        setBooks(data.data);
        setTotalPages(data.totalPages);

        const initialLikes = {};
        data.data.forEach(book => {
          initialLikes[book.id] = book.isLiked || false;
        });
        setLikedBooks(initialLikes);
      } catch (error) {
        console.error('Xatolik:', error);
      }
    };
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
        <BooksFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          categories={categories}
          languages={languages}
        />
      </div>

      <div className='mx-auto flex flex-wrap gap-[10px] w-[1230px] mt-[35px]'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))
        ) : (
          <p className='text-center w-full text-xl mt-10'>Kitoblar topilmadi.</p>
        )}
      </div>

      <div className="flex w-[1230px] mx-auto justify-end mt-[30px]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default BooksSection;
