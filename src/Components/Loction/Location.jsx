import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputMask } from 'primereact/inputmask';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import location from './../../assets/img/location.png';

function Location() {
    const { t } = useTranslation();

    return (
        <div className="max-w-[1177px] w-full mx-auto pt-[50px] px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Chap tomondagi rasm */}
                <div className="relative w-full md:w-[577px] h-[478px] rounded-[24px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${location})` }}
                    ></div>
                    <h1 className="absolute top-4 left-4 text-3xl font-bold text-black px-2 py-1 bg-white/80 rounded">
                        {t('location_title')}
                    </h1>
                </div>

                {/* Forma */}
                <div className="bg-[#1E3A8A] w-full md:w-[577px] p-7 rounded-md text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white whitespace-pre-line">
                        {t('location_form_title')}
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-white mt-4">
                        {t('location_form_subtitle')}
                    </h2>

                    <form className="flex flex-col items-center mt-6 gap-3 w-full max-w-[444px] mx-auto">
                        <input
                            type="text"
                            className="bg-white rounded-md pl-[10px] w-full h-[47px] text-black"
                            placeholder={t('location_form_name')}
                        />

                        <InputMask
                            mask="+999-(99)-999-99-99"
                            className="bg-white rounded-md pl-[10px] w-full h-[47px] mt-[10px] text-black"
                            placeholder="+___-(__)‑___‑__‑__"
                        />

                        <textarea
                            className="bg-white rounded-md pl-[10px] pt-[10px] w-full h-[77px] resize-none text-black"
                            placeholder={t('location_form_question')}
                        />

                        <button
                            type="submit"
                            className="text-white bg-[#098C81] w-full h-[47px] rounded-md font-semibold text-lg"
                        >
                            {t('location_form_button')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Location;