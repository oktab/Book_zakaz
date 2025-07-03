import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import location from './../../assets/img/location.png';
import { IMaskInput } from "react-imask";
function Location() {
    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');

    const TOKEN = '8104656691:AAEsxjUBcJHzvzPHqAmiNsHYiIY0qvcESBg';
    const CHAT_ID = '5906251187';
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const sendMessage = async () => {
        if (!name.trim() || !question.trim()) {
            return alert('Исм ва саволни киритинг');
        }

        const text = `📥 *Yangi buyurtma:*\n\n👤 Ism: ${name}\n📞 Telefon: ${phone || 'Koʻrsатилмаган'}\n💬 Savol: ${question}`;

        try {
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'Markdown'
                })
            });

            const result = await response.json();

            if (result.ok) {
                setName('');
                setPhone('');
                setQuestion('');
            } else {
                alert('❌ Xatolik: yuborilmadi');
                console.error(result);
            }
        } catch (error) {
            alert('🌐 Tarmoqda xatolik');
            console.error(error);
        }
    };

    return (
        <div className="max-w-[1177px] w-full h-auto mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between pt-[50px] gap-6">
                <div className="relative w-full max-w-[577px] h-[510px] rounded-md overflow-hidden">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23984.99290964985!2d69.20601599999999!3d41.2844032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1751525007200!5m2!1sru!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>

                    <h1 className="absolute top-4 left-4 text-3xl font-bold text-black font-inte px-2 py-1 bg-white bg-opacity-80 rounded">
                        {t('location_title')}
                    </h1>
                </div>

                <div className="bg-[#1E3A8A] w-full max-w-[577px] py-10 rounded-md text-center">
                    <h1 className="text-4xl font-bold text-white whitespace-pre-line">
                        {t('location_form_title')}
                    </h1>
                    <h2 className="text-3xl text-white pt-[20px]">{t('location_form_subtitle')}</h2>
                    <div className="mt-6 flex flex-col items-center gap-3">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={t('location_form_name')}
                            className="bg-white rounded-md px-4 py-2 w-[444px]"
                        />
                        <IMaskInput
                            mask="+998 (00) 000-00-00"
                            value={phone}
                            onAccept={(value) => setPhone(value)}
                            placeholder="+998 (__) ___-__-__"
                            className="bg-white rounded-md pl-[10px] w-[444px] h-[47px] mt-[10px]"
                        />
                        <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder={t('location_form_question')}
                            className="bg-white rounded-md px-4 py-2 w-[444px] h-[100px] resize-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="text-white bg-[#098C81] w-[444px] py-3 rounded-md mt-2 hover:bg-[#0aa295] transition-all"
                        >
                            {t('location_form_button')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;