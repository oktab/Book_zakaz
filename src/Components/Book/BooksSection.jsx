import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import imgCard from './../../assets/Rectangle 3.png';
import locationImg from './../../assets/Снимок экрана 2025-06-27 154032.png';
import Pogination from '../pogination/pogination';

function BooksSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  return (
    <>
        <section>
            <div className='mx-auto w-[1230px] mt-[40px] '>
                <h2 className='text-[48px] font-[600] text-center mb-[20px]'>KITOBLAR</h2>
                <div className='w-[1230px] h-[50px] flex justify-between '>
                    <input type="text" placeholder='Qidirish' className='pl-[20px] text-[18px] w-[455px] h-[50px] border-[#1E3A8A33] border rounded-[10px] focus:outline-0' />
                    <select className='w-[455px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0' name='Saralash'>
                        <option className='pl-[20px] border-b-[1px] border-[#1E3A8A33]' value="Baddiy adabiyotlar">Baddiy adabiyotlar</option>
                        <option className='pl-[20px] border-b-[1px] border-[#1E3A8A33]' value="Rus adabiyotlar">Rus adabiyotlar</option>
                        <option className='pl-[20px] border-b-[1px] border-[#1E3A8A33]' value="O’zbek adabiyotlari">O’zbek adabiyotlari</option>
                        <option className='pl-[20px] border-b-[1px] border-[#1E3A8A33]' value="Prezident asarlari">Prezident asarlari</option>
                        <option className='pl-[20px] border-b-[1px] border-[#1E3A8A33]' value="O’zbek adabiyotlari">O’zbek adabiyotlari</option>
                        <option className='pl-[20px] border-b-[1px] border-[#1E3A8A33]' value="Hikoyalar">Hikoyalar</option>
                    </select>
                    <select className='w-[300px] h-[50px] rounded-[10px] border-[#1E3A8A33] border focus:outline-0' name='Til'>
                        <option value="O’zbekcha">O’zbekcha</option>
                        <option value="Ruscha">Ruscha</option>
                        <option value="Inglizcha">Inglizcha</option>
                    </select>
                </div>
            </div>

            <div className='mx-auto flex flex-wrap gap-[10px] w-[1230px] mt-[35px]'>
                <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                                 <div style={{ boxShadow: '3px 4px 10px 2px #00000040' }} className='w-[300px] h-[501px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px]'>
                    <div>
                        <img src={imgCard} alt="" />
                        <div className='pl-[8px]'>
                        <h2 className='text-[20px] text-[#202020] font-[700] '>Ernest Jeminguey, To’qchilik va yo’qchilik</h2>
                        <div className='flex justify-between mt-[15px]'>
                            <div>
                                <p>Formati: PDF</p>
                                <p>Kitob betlari soni: 123</p>
                            </div>
                            <IoMdHeartEmpty className='w-[30px] h-[30px]'/>
                        </div>
                        <button className='bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]'>Yuklab Olish</button>
                        </div>
                    </div>
                 </div>
                 
            </div>
      {/* <p className="mb-4 text-xl font-semibold">Current Page: {currentPage}</p> */}
        <div className='flex justify-end mt-[20px] w-[1230px] mx-auto'>
            <Pogination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      {/* <p className="text-sm text-gray-500 mt-2">(Свайпай влево или вправо)</p> */}
            <div className='w-[1230px] mx-auto mt-[61px] flex justify-between text-white'>
                <img src={locationImg} className='w-[641px] h-[481px] rounded-[24px]' alt="" />
                <div className='w-[577px] h-[478px] bg-[#1E3A8A] rounded-[10px] flex justify-center items-center'>
                    <div className='w-[444px] '>
                        <h2 className='text-center text-[40px] font-[600]'>Savollaringiz bo’lsa qoldiring</h2>
                        <h2 className='text-[28px] font-[600] text-center'>Biz siz bilan bog’lanamiz</h2>

                        <div className='w-[444px] flex flex-wrap gap-[20px] mt-[20px] '>
                            <input type="text" className='w-[444px] h-[47px] bg-white pl-[22px] border-[#1E3A8A33] border text-black rounded-[10px] focus:outline-0' placeholder='Ismingiz kiriting'/>
                            <input type="text" className='w-[444px] h-[47px] bg-white pl-[22px] border-[#1E3A8A33] border text-black rounded-[10px] focus:outline-0' placeholder='+998-(90)-123 -45-56'/>
                            <textarea className='w-[444px] h-[77px] bg-white pl-[22px] pt-[14px] border-[#1E3A8A33] border text-black rounded-[10px] content-start focus:outline-0' placeholder='Savolingizni kiriting'></textarea>
                            <button className='bg-[#098C81] text-white rounded-[10px] w-[444px] h-[47px] text-[24px] font-[600]'>Jo’natish</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BooksSection
