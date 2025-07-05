import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // ✅ Qo‘shildi

import bratan1 from './../../assets/img/Rectangle 57.png';
import bratan2 from './../../assets/img/Rectangle 58.png';

function Rahbariat() {
    const { t } = useTranslation();

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className='font-[Inter] pt-[100px]'>
            <motion.div
                className='max-w-[1177px] mx-auto'
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <h2 className='text-[48px] font-[600] uppercase text-center mt-[100px]'>
                    {t('leadership')}
                </h2>

                {/* 1-shaxs */}
                <motion.div className='mt-[60px]' variants={fadeUp}>
                    <div className='flex gap-[60px] mt-[20px]'>
                        <img src={bratan1} alt="" />
                        <div>
                            <h2 className='text-[36px] font-[600]'>{t('director1')}</h2>
                            <p className='text-[24px] font-[400] mt-[20px]'>
                                <span className='font-[600]'>{t('birthplace')}:</span> {t('birth1')}
                            </p>
                            <p className='text-[24px] font-[400]'>
                                <span className='font-[600]'>{t('tel')}:</span> +998 97 510 14 05
                            </p>
                            <p className='text-[24px] font-[400]'>
                                <span className='font-[600]'>{t('telegram')}:</span> +998 97 510 14 05
                            </p>
                            <p className='text-[24px] font-[400]'>
                                <span className='font-[600]'>{t('email')}:</span> ikromboy@mail.ru
                            </p>
                        </div>
                    </div>

                    <div className='my-[30px]'>
                        <h2 className='text-[48px] font-[600] uppercase text-center mt-[100px]'>
                            {t('experience')}
                        </h2>
                        <div className='flex flex-wrap gap-[20px] w-[586px] ml-[100px] mt-[20px]'>
                            <p className='text-[24px] font-[500]'>{t('activity1')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity2')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity3')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity4')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity5')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity6')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* 2-shaxs */}
                <motion.div className='mt-[60px]' variants={fadeUp}>
                    <div className='flex gap-[60px]'>
                        <img src={bratan2} alt="" />
                        <div>
                            <h2 className='text-[36px] font-[600]'>{t('director2')}</h2>
                            <p className='text-[24px] font-[400] mt-[20px]'>
                                <span className='font-[600]'>{t('birthplace')}:</span> {t('birth2')}
                            </p>
                            <p className='text-[24px] font-[400]'>
                                <span className='font-[600]'>{t('phone')}:</span> +998 94 317 67 78
                            </p>
                            <p className='text-[24px] font-[400]'>
                                <span className='font-[600]'>{t('telegram')}:</span> +998 94 317 67 78
                            </p>
                            <p className='text-[24px] font-[400]'>
                                <span className='font-[600]'>{t('email')}:</span> azizbekx@mail.ru
                            </p>
                        </div>
                    </div>

                    <div className='my-[30px]'>
                        <h2 className='text-[48px] font-[600] uppercase text-center mt-[100px]'>
                            {t('experience')}
                        </h2>
                        <div className='flex flex-wrap gap-[20px] w-[586px] ml-[100px] mt-[20px]'>
                            <p className='text-[24px] font-[500]'>{t('activity7')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity8')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity9')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity10')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity11')}</p>
                            <p className='text-[24px] font-[500]'>{t('activity12')}</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Rahbariat;
