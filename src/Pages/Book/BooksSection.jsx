import React, { useState } from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import imgCard from './../../assets/img/BookIMG.png';
import locationImg from './../../assets/img/LocationIMG.png';
import Pagination from '../../Components/pogination/pogination';
import Rahbariat from '../Rahbariat';

function BooksSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  // Пример массива книг
  const books = Array(30).fill({
    title: "Ernest Jeminguey, To’qchilik va yo’qchilik",
    format: "PDF",
    pages: 123,
    image: imgCard
  });

  const totalPages = Math.ceil(books.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const selectedBooks = books.slice(startIndex, startIndex + booksPerPage);

  return (
    <>
      <section>
        <div className='mx-auto w-[1230px] mt-[40px]'>
          <h2 className='text-[48px] font-[600] text-center mb-[20px]'>KITOBLAR</h2>
          <div className='w-[1230px] h-[50px] flex justify-between'>
            <input type="text" placeholder='Qidirish' className='pl-[20px] text-[18px] w-[455px] h-[50px] border-[#1E3A8A33] border rounded-[10px] focus:outline-0' />
            <select className='w-[455px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'>
              <option value="Baddiy adabiyotlar">Baddiy adabiyotlar</option>
              <option value="Rus adabiyotlar">Rus adabiyotlar</option>
              <option value="O’zbek adabiyotlari">O’zbek adabiyotlari</option>
              <option value="Prezident asarlari">Prezident asarlari</option>
              <option value="Hikoyalar">Hikoyalar</option>
            </select>
            <select className='w-[300px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0'>
              <option value="O’zbekcha">O’zbekcha</option>
              <option value="Ruscha">Ruscha</option>
              <option value="Inglizcha">Inglizcha</option>
            </select>
          </div>
        </div>

        {/* Карточки книг */}
        <div className='mx-auto flex flex-wrap gap-[10px] w-[1230px] mt-[35px]'>
          {selectedBooks.map((book, index) => (
            <div key={index} style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
              <div>
                <img src={book.image} alt="" />
                <div className='pl-[8px]'>
                  <h2 className='text-[20px] text-[#202020] font-[700]'>{book.title}</h2>
                  <div className='flex justify-between mt-[15px]'>
                    <div>
                      <p>Formati: {book.format}</p>
                      <p>Kitob betlari soni: {book.pages}</p>
                    </div>
                    <IoMdHeartEmpty className='w-[30px] h-[30px]' />
                  </div>
                  <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация со свайпом */}
        <div className="flex w-[1230px] mx-auto justify-end mt-[30px]">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
          {/* <p className="text-sm text-gray-500 mt-2">(Свайпай yoki bos)</p> */}
        </div>
      </section>
    </>
  );
}

export default BooksSection;
