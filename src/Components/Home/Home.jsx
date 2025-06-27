import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import './../../i18n.js';
import News from './Yngiliklar/New.jsx';
import Book from './../Book/Book.jsx';
import Location from './Loction/Location.jsx';
import Footer from './Footer/Footer.jsx';

import logo from './../../assets/logo.png';
import BgImg from './../../assets/BgImg.png';

import '@fontsource/inter';

const sections = ['home', 'news', 'books'];

const Home = () => {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState('home');
    const isHeroVisible = ['home', 'news'].includes(activeSection);

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
                        {sections.map((key) => (
                            <li key={key} className="cursor-pointer" onClick={() => setActiveSection(key)}>
                                {t(key)}
                            </li>
                        ))}
                    </ul>

                    <select
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        value={i18n.language}
                        className="bg-[#1E3A8A] border border-white px-3 py-2 rounded text-white font-inter"
                    >
                        <option value="uz">O’zbekcha</option>
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </header>

            {/* MAIN */}
            <main className="pt-[119px]">
                {/* HERO */}
                <AnimatePresence mode="wait">
                    {isHeroVisible && (
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
                    )}
                </AnimatePresence>

                {/* DYNAMIC CONTENT */}
                <AnimatePresence mode="wait">
                    {activeSection === 'news' && (
                        <motion.div
                            key="news"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <News />
                        </motion.div>
                    )}

                    {activeSection === 'books' && (
                        <motion.div
                            key="books"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Book />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* LOCATION */}
                <AnimatePresence mode="wait">
                    {isHeroVisible && (
                        <motion.div
                            key="location"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Location />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* FOOTER */}
                <Footer />
            </main>
        </>
    );
};

export default Home;
