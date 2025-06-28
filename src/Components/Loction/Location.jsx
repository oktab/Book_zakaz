import React from 'react';
import { useTranslation } from 'react-i18next';
import location from './../../assets/img/location.png';
function Location() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1177px] w-full h-[481px] mx-auto">
            <div className="flex items-center justify-between pt-[50px]">
                <div className="relative w-[577px] h-[478px] rounded-md overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-[24px]"
                        style={{ backgroundImage: `url(${location})` }}
                    ></div>
                    <h1 className="absolute top-4 left-4 text-3xl font-bold text-black font-inte px-2 py-1">
                        {t('location_title')}
                    </h1>
                </div>

                <div className="bg-[#1E3A8A] w-[577px] h-[478px] rounded-md text-center">
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
                            className="bg-white rounded-md pl-[10px] w-[444px] h-[77px] mt-[10px]"
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
