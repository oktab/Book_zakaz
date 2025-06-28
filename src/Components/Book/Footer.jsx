import React from 'react'
import { FaTelegramPlane, FaInstagram, FaYoutube, FaFacebookF  } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
   <footer className="bg-[#1E3A8A] rounded-t-[50px] text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-xl text-white font-bold">TuproqqaTa TAKM</h2>
          <p className="mt-2 w-[314px] font-[400] text-[18px] border">Kutubxonada ko`plab nodir va  noyob adabiyotlar saqlanib kelinmoqda. Bizda elektron kitoblar ham mavjud. Ijtmoiy kanalarmiz orqali murojat qilishlaringgiz mumkin</p>
          <div className="flex space-x-4 mt-[15px]">
            <a href="#" className="border-white border text-white w-10 h-10 flex items-center rounded-[10px] justify-center  hover:bg-gray-300 hover:text-black transition">
              <FaTelegramPlane className="w-5 h-5" />
            </a>
            <a href="#" className="border-white border text-white w-10 h-10 flex items-center rounded-[10px] justify-center  hover:bg-gray-300 hover:text-black transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="border-white border text-white w-10 h-10 flex items-center rounded-[10px] justify-center hover:bg-gray-300 hover:text-black transition">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="border-white border text-white w-10 h-10 flex items-center rounded-[10px] justify-center hover:bg-gray-300 hover:text-black transition">
              <FaFacebookF  className="w-5 h-5" />
            </a>
            <a href="#" className="border-white border text-white w-10 h-10 flex items-center rounded-[10px] justify-center hover:bg-gray-300 hover:text-black transition">
              <BsTwitterX   className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <ul className="space-y-2">
            <li><a href="#" className="text-[24px] font-[inter] hover:text-white transition">Bosh sahifa</a></li>
            <li><a href="#" className="text-[24px] font-[inter] hover:text-white transition">Yangiliklar</a></li>
            <li><a href="#" className="text-[24px] font-[inter] hover:text-white transition">Kitoblar</a></li>
            <li><a href="#" className="text-[24px] font-[inter] hover:text-white transition">Biz haqimizda</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
