import React from 'react';
import { useTranslation } from 'react-i18next';

import insta from './../../assets/img/insta.png';
import telegram from './../../assets/img/telegram.png';
import YouTube from './../../assets/img/YouTube.png';
import iks from './../../assets/img/iks.png';
import FaceBook from './../../assets/img/FaceBook.png';

import img1 from './../../assets/img/FooterImg1.png';
import img2 from './../../assets/img/FooterImg2.png';
import img3 from './../../assets/img/FooterImg3.png';
import { Link } from 'react-router';

function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-[#1E3A8A] mt-[100px] rounded-tl-[50px] rounded-tr-[50px] h-[355px]">
                <div className="max-w-[1177px] w-full mx-auto h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Chap blok */}
                        <div>
                            <h1 className="text-3xl text-white font-bold">{t('footer_title')}</h1>
                            <div className="w-[304px] pt-[10px]">
                                <h1 className="text-white font-inter">
                                    {t('footer_description')}
                                </h1>
                            </div>
                            <div className="flex items-center pt-[20px] gap-4">
                                <img src={insta} alt="Instagram" />
                                <img src={telegram} alt="Telegram" />
                                <img src={YouTube} alt="YouTube" />
                                <img src={iks} alt="X" />
                                <img src={FaceBook} alt="Facebook" />
                            </div>
                        </div>

                        {/* O'rta blok */}
                        <div>
                            <li className="text-white text-3xl pt-[20px] cursor-pointer list-none"><Link to="/">{t('home')}</Link></li>
                            <li className="text-white text-3xl pt-[20px] cursor-pointer list-none"><Link to="/news">{t('news')}</Link></li>
                            <li className="text-white text-3xl pt-[20px] cursor-pointer list-none"><Link to="/books">{t('books')}</Link></li>
                            <li className="text-white text-3xl pt-[20px] cursor-pointer list-none"><Link to="/managment">{t('rahbariyat')}</Link></li>
                        </div>

                        {/* O'ng blok */}
                        <div>
                            <h1 className="text-white text-3xl font-bold">{t('contact_us')}</h1>
                            <div className="flex items-start gap-[15px] w-[340px] pt-[30px]">
                                <img src={img1} alt="Manzil" />
                                <h1 className="text-white font-inter">
                                    {t('address')}
                                </h1>
                            </div>
                            <div className="flex items-center gap-[15px] w-[340px] pt-[30px]">
                                <img src={img2} alt="Telefon" />
                                <h1 className="text-white font-inter">+998 77 317 14 05</h1>
                            </div>
                            <div className="flex items-center gap-[15px] w-[340px] pt-[30px]">
                                <img src={img3} alt="Email" />
                                <h1 className="text-white font-inter">tuproqqalatumaniaxborotkutubxo@gmail.com</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;