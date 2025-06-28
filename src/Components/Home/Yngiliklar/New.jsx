import React from 'react';
import { useTranslation } from 'react-i18next';

import card1 from './../../../assets/img/card1.png';
import card2 from './../../../assets/img/card2.png';
import card3 from './../../../assets/img/card3.png';
import card4 from './../../../assets/img/card4.png';
import card5 from './../../../assets/img/card5.png';
import card6 from './../../../assets/img/card6.png';
import card7 from './../../../assets/img/card7.png';
import card8 from './../../../assets/img/card8.png';

function New() {
    const { t } = useTranslation();

    return (
        <>
            <main>
                <section>
                    <div className="max-w-[1177px] w-full mx-auto">
                        <h1 className='text-6xl text-black text-center font-bold pt-[100px] font-inter'>
                            {t('news_title')}
                        </h1>

                        <div className="flex items-center gap-[10px] pt-[50px]">
                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card1} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_1')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>

                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card2} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_2')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>

                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card3} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_3')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>

                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card4} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_4')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-[10px] pt-[10px]">
                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card5} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_1')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>

                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card6} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_2')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>

                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card7} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_3')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>

                            <div className="w-[308px] h-[601px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative">
                                <img src={card8} alt="" className="w-full h-[60%] object-cover rounded-md mb-4" />
                                <h1 className="font-inter mb-2">{t('news_4')}</h1>
                                <p className="text-gray-500 font-inter absolute bottom-4 right-4">18.06.2025</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}

export default New;
