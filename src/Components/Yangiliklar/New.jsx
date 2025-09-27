import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Pagination from './../../Components/pogination/pogination.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import ClipLoader from 'react-spinners/ClipLoader';

function News() {
    const { t, i18n } = useTranslation();
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const limit = 20;

    useEffect(() => {
        setLoading(true);

        // Hamma yangiliklarni olish
        const newsApi = `https://lib.qaxramonov.uz/api/v1/news/get/all?page=${currentPage}&limit=${limit}&sort=createdAt_desc`;
        fetch(newsApi)
            .then((response) => {
                if (!response.ok) throw new Error("Xatolik yuz berdi");
                return response.json();
            })
            .then((data) => {
                const currentLang = i18n.language || "uz";

                // createdAt bo‘yicha kamayish tartibida sort va language filter
                const filteredNews = (data.data || [])
                    .filter((item) => item.language?.toLowerCase() === currentLang)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setNews(filteredNews);

                // Backenddan kelgan totalPages
                setTotalPages(data.totalPages || 1);
            })
            .catch((error) => console.error("Xatolik:", error))
            .finally(() => setLoading(false));
    }, [currentPage, i18n.language]);

    return (
        <div className="max-w-[1177px] w-full mt-12 mx-auto px-4">
            <h1 className="text-6xl text-black text-center font-bold pt-[100px] font-inter">
                {t('news_title')}
            </h1>

            {loading ? (
                <div className="flex justify-center items-center h-[300px]">
                    <ClipLoader color="#4F46E5" size={50} />
                </div>
            ) : (
                <div className="flex items-start gap-[20px] flex-wrap mt-[50px]">
                    {news.length > 0 ? (
                        news.map((item) => (
                            <Link
                                to={`/news/info/${item.id}`}
                                state={{ newsItem: item }}
                                key={item.id}
                                className="no-underline text-inherit"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ boxShadow: '3px 4px 10px 2px #00000040' }}
                                    className="w-[270px] h-[477px] rounded-md border border-gray-300 shadow-md bg-white p-4 flex flex-col"
                                >
                                    <img
                                        src={item.images?.[0]}
                                        alt={item.title}
                                        className="w-full object-cover h-56 rounded-md mb-4"
                                    />
                                    <p className="font-inter mb-2 text-lg font-bold">{item.title}</p>
                                    <p className="text-gray-600 font-inter flex-grow line-clamp-3">{item.context}</p>
                                    <p className="text-gray-500 font-inter text-end mt-4">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </p>
                                </motion.div>
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-lg">
                            {t('no_news') || 'Yangiliklar topilmadi'}
                        </p>
                    )}
                </div>
            )}

            {!loading && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            )}
        </div>
    );
}

export default News;
