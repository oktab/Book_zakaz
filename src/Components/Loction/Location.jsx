import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputMask } from 'primereact/inputmask';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { IMaskInput } from "react-imask";
function Location() {
    const { t } = useTranslation();

    const [phone, setPhone] = useState("")

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

                        <IMaskInput
                            mask="+998 (00) 000-00-00"
                            value={phone}
                            onAccept={(value) => setPhone(value)}
                            placeholder="+998 (__) ___-__-__"
                            className="bg-white rounded-md pl-[10px] w-[444px] h-[47px] mt-[10px]"
                        />
                        <textarea
                            className="bg-white resize-none rounded-md pl-[10px] w-[444px] h-[77px] mt-[10px]"
                            placeholder={t('location_form_question')}
                        ></textarea>
                        <button className="text-white bg-[#098C81] w-[444px] h-[47px] rounded-md mt-[10px]">
                            {t('location_form_button')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Location;