import React from 'react'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import kutubxona from './../../assets/img/Rectangle 62.png';
import card1 from './../../assets/img/Rectangle 63.png';
import card2 from './../../assets/img/Rectangle 64.png';
import card3 from './../../assets/img/Rectangle 65.png';
import card4 from './../../assets/img/Rectangle 66.png';
import library1 from './../../assets/img/Rectangle 67.png';
import library2 from './../../assets/img/Rectangle 68.png';

function Akm() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="pt-[120px]"
        >
            <div className="">
                <div className="mx-auto max-w-[1240px]">
                    <nav className='mt-[30px]'>
                        <h1 className='text-4xl font-bold text-black text-center'>{t("akm.title1")}</h1>
                        <h2 className='text-4xl font-bold text-black text-center'>{t("akm.title2")}</h2>
                    </nav>
                </div>
                <img className='mt-[50px] mx-auto' src={kutubxona} alt="" />
                <div className="mx-auto max-w-[1240px]">
                    <div>
                        <p className='text-black text-[24px] font-bold text-center pt-[30px]'>
                            {t("akm.description")}
                        </p>
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
                    <h1 className='text-3xl font-bold text-black text-center mt-[30px]'>
                        {t("akm.section_title")}
                    </h1>
                    <div className="mt-[30px]">
                        <h2 className='text-black text-[24px]'>{t("akm.section1")}</h2>
                        <h2 className='text-black text-[24px]'>{t("akm.section2")}</h2>
                        <h2 className='text-black text-[24px]'>{t("akm.section3")}</h2>
                        <h2 className='text-black text-[24px]'>{t("akm.section4")}</h2>
                    </div>
                    <hr className='py-[2px] bg-gray-300 rounded-md border-none mt-[30px]' />
                    <div className="mt-[30px]">
                        <h2 className='text-black font-bold text-2xl'>{t("akm.stat1")}</h2>
                        <h2 className='text-black font-bold text-2xl'>{t("akm.stat2")}</h2>
                        <h2 className='text-black font-bold text-2xl'>{t("akm.stat3")}</h2>
                    </div>
                    <div className="flex items-center justify-between mt-[30px]">
                        <img src={library1} alt="" />
                        <img src={library2} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Akm;
