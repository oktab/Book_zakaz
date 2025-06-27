import React from 'react'
import logo from './../../assets/logo.png';
function Nav() {
  return (
    <nav className='bg-[#1E3A8A] flex justify-around items-center pt-[27px]'>   
        <div className='flex w-[300px] items-center '>
            <img src={logo} className='' alt="" />
            <div className=' h-[94px]'>
                <h2 className='text-[20px] font-[600] leading-[1.1] text-white font-[Inter]'>Tuproqqal’a tumani Axborot kutubxona  markazi</h2>
            </div>
        </div>
        <ul className='flex text-white text-[24px] font-[600px] gap-[29px]  h-[65px]'>
            <li>Bosh sahifa</li>
            <li>Yangiliklar</li>
            <li>Kitoblar</li>
        </ul>

        <button></button>
    </nav>
  )
}

export default Nav
