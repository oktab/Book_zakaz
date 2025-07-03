import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from '../pogination/pogination';
import { motion } from 'framer-motion';

function New() {
    const { t } = useTranslation();
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const limit = 8;

    useEffect(() => {
        const newsApi = `http://13.60.234.19:5000/api/v1/news/get/all?page=${currentPage}&limit=${limit}`;
        fetch(newsApi)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке');
                }
                return response.json();
            })
            .then((data) => {
                setNews(data.data || []);
                setTotalPages(data.totalPages || 1);
            })
            .catch((error) => {
                console.error('Ошибка:', error);
            });
    }, [currentPage]);

    return (
        <div className="max-w-[1177px] w-full mx-auto px-4">
            <h1 className="text-6xl text-black text-center font-bold pt-[100px] font-inter">
                {t('news_title')}
            </h1>

            <div className="flex items-start justify-between flex-wrap gap-[20px] mt-[50px]">
                {news.length > 0 ? (
                    news.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.id * 0.1 }}
                            viewport={{ once: true }}
                            style={{ boxShadow: '3px 4px 10px 2px #00000040' }}
                            className="w-[270px] rounded-md border border-gray-300 shadow-md bg-white p-4 relative flex flex-col"
                        >
                            <img
                                src={item.image || 'https://via.placeholder.com/308x360?text=No+Image'}
                                alt={item.title}
                                className="w-full object-cover rounded-md mb-4"
                            />
                            <p className="font-inter mb-2 text-lg font-bold">{item.title}</p>
                            <p className="text-gray-600 font-inter flex-grow">{item.context}</p>
                            <p className="text-gray-500 font-inter text-end mt-4">
                                {item.publication_date}
                            </p>
                        </motion.div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 text-lg">
                        {t('no_news') || 'Новости не найдены'}
                    </p>
                )}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
}

export default New;
