import React from 'react';
import { useTranslation } from 'react-i18next';
import location from './../../assets/img/location.png';
function Location() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1177px] w-full h-[481px] mx-auto">
            <div className="flex items-center justify-between pt-[50px]">
                <div className="relative w-[577px] h-[510px] rounded-md overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11968.210470783546!2d69.29967315!3d41.41637645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef323741fc927%3A0xd4c294debb101a51!2sBO&#39;YIN.UZ%20CHOYHONA!5e0!3m2!1sru!2s!4v1751094645071!5m2!1sru!2s"
                        width="600"
                        height="650"
                        style={{ border: 0 }}             
                        allowFullScreen                      
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" 
                    ></iframe>
                    <h1 className="absolute top-4 left-4 text-3xl font-bold text-black font-inte px-2 py-1">
                        {t('location_title')}
                    </h1>
                </div>

                <div className="bg-[#1E3A8A] w-[577px] py-10 rounded-md text-center">
                    <h1 className="text-4xl font-bold text-white pt-[20px] whitespace-pre-line">
                        {t('location_form_title')}
                    </h1>
                    <h1 className="text-3xl text-white pt-[20px]">{t('location_form_subtitle')}</h1>
                    <div className="">
                        <input
                            type="text"
                            className="bg-white rounded-md pl-[10px] w-[444px] h-[47px] mt-[20px]"
                            placeholder={t('location_form_name')}
                        /> <br />
                        <input
                            type="number"
                            className="bg-white rounded-md pl-[10px] w-[444px] h-[47px] mt-[10px]"
                            placeholder={t('location_form_phone')}
                        /> <br />
                        <textarea
                            className="bg-white resize-none rounded-md pl-[10px] w-[444px] h-[77px] mt-[10px]"
                            placeholder={t('location_form_question')}
                        ></textarea> <br />
                        <button className="text-white bg-[#098C81] w-[444px] h-[47px] rounded-md mt-[10px]">
                            {t('location_form_button')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
