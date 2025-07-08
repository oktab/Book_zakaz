import React from 'react'
import kutubxona from './../../assets/img/Rectangle 62.png';
import card1 from './../../assets/img/Rectangle 63.png';
import card2 from './../../assets/img/Rectangle 64.png';
import card3 from './../../assets/img/Rectangle 65.png';
import card4 from './../../assets/img/Rectangle 66.png';
import library1 from './../../assets/img/Rectangle 67.png';
import library2 from './../../assets/img/Rectangle 68.png';
function Akm() {
    return (
        <>
            <div className="">
                <div className="mx-auto max-w-[1240px]">
                    <nav className='mt-[150px]'>
                        <h1 className='text-4xl font-bold text-black text-center'>TUPROQQAL'A TUMANI</h1>
                        <h2 className='text-4xl font-bold text-black text-center'>AXBOROT KUTUBXONA MARKAZI HAQIDA MALUMOT</h2>
                    </nav>
                </div>
                <img className='mt-[50px] mx-auto' src={kutubxona} alt="" />
                <div className="mx-auto max-w-[1240px]">
                    <div>
                        <p className='text-black text-[24px] font-bold text-center pt-[30px]'>O'zbekiston Respublikasi Prezidentining 2019 yil 7 iyundagi O'zbekiston Respublikasi aholisiga Axborot-Kutubxona xizmat ko'rsatishni yanada takomillashtirish to'g'risidagi РQ-4З54-sоп qarori ча Xorazm viloyati hokimining 12 iyundagi 2019 yildan 428-Q son qarori, Tuproqqal'a tumani hokimining 202З yil 12 maydagi  25-12-2/8-q/23-sonli qaroriga asosan, Tuman Axborot-kutubxona mаrkаzi 2O2З-уil 15 avgustdan tashkil etilib, o'z faoliyatini boshlagan. </p>
                    </div>
                    <div className=" mt-[30px]">
                        <div className="flex items-center justify-between">
                            <img src={card1} alt="" />
                            <img src={card2} alt="" />
                        </div>
                        <div className="flex items-center justify-between pt-[12px]">
                            <img src={card3} alt="" />
                            <img src={card4} alt="" />
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold text-black text-center mt-[30px]'>Markazda 4 ta bo’lim kitobxonlarga xizmat ko’rsatib kelmoqda.</h1>
                    <div className="mt-[30px]">
                        <h2 className='text-black text-[24px]'>1. Axborot-kommunikatsiya texnologiyalari va Raqamlashtirish xizmati</h2>
                        <h2 className='text-black text-[24px]'>2. Obonement va foydalanuvchilarga xizmat ko’rsatish xizmati</h2>
                        <h2 className='text-black text-[24px]'>3. Axborot-bibliografiya xizmati</h2>
                        <h2 className='text-black text-[24px]'>4. Fondni to’ldirish, saqlash va ularga ishlov berish xizmati</h2>
                    </div>
                    <hr className='py-[2px] bg-gray-300 rounded-md border-none mt-[30px]'/>
                    <div className="mt-[30px]">
                        <h2 className='text-black font-bold text-2xl'>Axborot-kutubxona markazning jami kitob fondi: 35327 ta</h2>
                        <h2 className='text-black font-bold text-2xl'>Elektron kitoblar: 25 000 ta</h2>
                        <h2 className='text-black font-bold text-2xl'>va boshqa turli xil axborotlar.</h2>
                    </div>
                    <div className="flex items-center justify-between mt-[30px]">
                        <img src={library1} alt="" />
                        <img src={library2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Akm