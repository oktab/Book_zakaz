import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './../../i18n.js';
import News from './../News/News.jsx';
import BgImg from './../../assets/img/BgImg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@fontsource/inter';

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <>

            {/* MAIN */}
            <main className="pt-[119px]">
                <AnimatePresence mode="sync">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                    >
                        <SwiperSlide>
                            <motion.section
                                key="hero"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.5 }}
                                className="bg-cover bg-center text-white flex items-center h-[900px] rounded-br-[50px] rounded-bl-[50px]"
                                style={{ backgroundImage: `url(${BgImg})` }}
                            >
                                <div className="max-w-[1177px] mx-auto w-full">
                                    <h1
                                        className="text-white text-[48px] font-bold leading-snug"
                                        style={{ WebkitTextStroke: '1.5px #00c9b7' }}
                                    >
                                        {t('heroTitle')}
                                    </h1>
                                    <h1
                                        className="text-white w-[740px] text-[48px] mt-10 font-bold leading-snug"
                                        style={{ WebkitTextStroke: '1.5px #00c9b7' }}
                                    >
                                        {t('heroSubtitle')}
                                    </h1>
                                </div>
                            </motion.section>
                        </SwiperSlide>
                        <SwiperSlide>
                            <motion.section
                                key="hero"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.5 }}
                                className="bg-cover bg-center text-white flex items-center h-[900px] rounded-br-[50px] rounded-bl-[50px]"
                                style={{ backgroundImage: `url(${BgImg})` }}
                            >
                                <div className="max-w-[1177px] mx-auto w-full">
                                    <h1
                                        className="text-white text-[48px] font-bold leading-snug"
                                        style={{ WebkitTextStroke: '1.5px #00c9b7' }}
                                    >
                                        {t('heroTitle')}
                                    </h1>
                                    <h1
                                        className="text-white w-[740px] text-[48px] mt-10 font-bold leading-snug"
                                        style={{ WebkitTextStroke: '1.5px #00c9b7' }}
                                    >
                                        {t('heroSubtitle')}
                                    </h1>
                                </div>
                            </motion.section>
                        </SwiperSlide>

                        <motion.div
                            key="news"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <News />
                        </motion.div>
                    </Swiper>
                </AnimatePresence>
            </main>
        </>
    );
};

export default Home;