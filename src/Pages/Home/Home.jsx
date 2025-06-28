import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Select from 'react-select';

import './../../i18n.js';
import Yangiliklar from './../../Components/Yangiliklar/New.jsx';

import eng from './../../assets/img/eng.png';
import rus from './../../assets/img/rus.png';
import uzb from './../../assets/img/uzb.png';
import logo from './../../assets/img/logo.png';
import BgImg from './../../assets/img/BgImg.png';

import '@fontsource/inter';

const langOptions = [
    {
        value: 'en',
        label: (
            <div className="flex items-center gap-2">
                <img src={eng} alt="English" className="w-6 h-6 rounded-full" />
                <span>English</span>
            </div>
        )
    },
    {
        value: 'ru',
        label: (
            <div className="flex items-center gap-2">
                <img src={rus} alt="Русский" className="w-6 h-6 rounded-full" />
                <span>Русский</span>
            </div>
        )
    },
    {
        value: 'uz',
        label: (
            <div className="flex items-center gap-2">
                <img src={uzb} alt="O'zbekcha" className="w-6 h-6 rounded-full" />
                <span>O’zbekча</span>
            </div>
        )
    }
];

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/* HEADER */}
            <header className="bg-[#1E3A8A] h-[119px] fixed top-0 w-full z-50 shadow-md flex items-center">
                <div className="max-w-[1177px] mx-auto w-full flex justify-between items-center text-white font-inter">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Logo" />
                        <h1 className="text-2xl leading-tight">
                            Tuproqqal’a tumani <br /> Axborot kutubxona <br /> markazi
                        </h1>
                    </div>

                    <ul className="flex gap-8 text-2xl font-bold">
                        <li className="cursor-pointer"><Link to="/">{t('home')}</Link></li>
                        <li className="cursor-pointer"><Link to="/news">{t('news')}</Link></li>
                        <li className="cursor-pointer"><Link to="/books">{t('books')}</Link></li>
                        <li className="cursor-pointer"><Link to="/managment">{t('rahbariyat')}</Link></li>
                    </ul>

                    <div className="min-w-[160px]">
                        <Select
                            options={langOptions}
                            defaultValue={langOptions.find(opt => opt.value === i18n.language)}
                            onChange={(selectedOption) => i18n.changeLanguage(selectedOption.value)}
                            className="text-black font-inter"
                            isSearchable={false}
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    backgroundColor: '#1E3A8A',
                                    borderColor: 'white',
                                    color: 'white',
                                }),
                                singleValue: (base) => ({
                                    ...base,
                                    color: 'white',
                                }),
                                menu: (base) => ({
                                    ...base,
                                    backgroundColor: '#1E3A8A',
                                    color: 'white'
                                }),
                                option: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.isFocused ? '#3B82F6' : '#1E3A8A',
                                    color: 'white',
                                    cursor: 'pointer'
                                })
                            }}
                        />
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <main className="pt-[119px]">
                <AnimatePresence mode="sync">
                    <motion.section
                        key="hero"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                        className="bg-cover bg-center text-white flex items-center h-[900px] rounded-br-[50px] rounded-bl-[50px]"
                        style={{ backgroundImage: `url(${BgImg})` }}
                    >
                        <div className="max-w-[1177px] mx-auto w-full text-center">
                            <h1 className="text-5xl font-bold mb-4 font-inter">{t('heroTitle')}</h1>
                            <h1 className="text-4xl font-bold pt-5 font-inter">{t('heroSubtitle')}</h1>
                        </div>
                    </motion.section>

                    <motion.div
                        key="news"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Yangiliklar />
                    </motion.div>
                </AnimatePresence>
            </main>
        </>
    );
};

export default Home;
