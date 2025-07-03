import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function New() {
    const { t } = useTranslation();
    const [news, setNews] = useState([]);

    const newsApi = `http://13.60.234.19:5000/api/v1/news/get/all?page=1&limit=10`;

    useEffect(() => {
        fetch(newsApi)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error of loading');
                }
                return response.json();
            })
            .then((data) => {
                setNews(data.data || []);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="max-w-[1177px] w-full mx-auto px-4">
            <h1 className="text-6xl text-black text-center font-bold pt-[100px] font-inter">
                {t('news_title')}
            </h1>

            <div className="flex items-center justify-center flex-wrap gap-[20px] mt-[50px]">
                {news.length > 0 ? (
                    news.map((item) => (
                        <div
                            key={item.id}
                            className="w-[270px] h-[600px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative flex flex-col"
                        >
                            <img
                                src={item.image || 'https://via.placeholder.com/308x360?text=No+Image'}
                                alt={item.title}
                                className="w-full h-[60%] object-cover rounded-md mb-4"
                            />
                            <h1 className="font-inter mb-2 text-lg font-bold">{item.title}</h1>
                            <p className="text-gray-600 font-inter flex-grow">{item.context}</p>
                            <p className="text-gray-500 font-inter absolute bottom-4 right-4">
                                {item.publication_date}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">
                        {t('no_news') || 'Новости не найдены'}
                    </p>
                )}
            </div>
        </div>
    );
}

export default New;
