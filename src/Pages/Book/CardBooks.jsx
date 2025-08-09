import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useBooksStore from "../../store/useBooksStore";
import useAuthStore from "../../store/auth";
import { likeBookApi, deleteLikesApi, getLikesApi } from "../../api/auth"
import { useEffect } from "react";

const BookCard = ({ book, index }) => {
    const { likes, setLikes, addLike, removeLike } = useBooksStore();
    const { token, user } = useAuthStore();

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const config = {
                    headers: { Authorization: `Bearer ${token}` },
                };
                const res = await getLikesApi(config);
                setLikes(res.data);
            } catch (error) {
                console.error("Layklar olishda xatolik:", error);
            }
        };

        if (token) fetchLikes();
    }, [token]);

    const existingLike = likes.find(
        (like) => like.bookId === book.id && like.userId === user?.id
    );

    const isLiked = Boolean(existingLike);

    const likeCount = likes.filter((like) => like.bookId === book.id).length;

    const handleLikeClick = async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        try {
            if (isLiked) {
                await deleteLikesApi(existingLike.id, config);
                removeLike(existingLike.id);
            } else {
                const payload = {
                    bookId: book.id,
                    userId: user.id,
                    likesCount: 1,
                };
                const res = await likeBookApi(payload, config);
                addLike(res.data);
            }
        } catch (error) {
            console.error("Layk bosishda xatolik:", error);
        }
    };


    return (
        <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ boxShadow: "3px 4px 10px 2px #00000040" }}
            className="w-[300px] rounded-[10px] border-[#1E3A8A33] border py-[10px] px-[5px] bg-white"
        >
            <img src={book.image} alt={book.title} className="rounded-[10px] w-full object-contain h-52" />
            <div className="pl-[8px]">
                <h2 className="text-[20px] text-[#202020] font-[700]">{book.title}</h2>
                <div className="flex justify-between mt-[15px] items-center">
                    <div>
                        <p>Formati: {book.format}</p>
                        <p>Kitob betlari soni: {book.pages}</p>
                        <p>Til: {book.language}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button onClick={handleLikeClick}>
                            {isLiked ? (
                                <IoMdHeart className="text-red-500 w-[30px] h-[30px]" />
                            ) : (
                                <IoMdHeartEmpty className="text-gray-400 w-[30px] h-[30px]" />
                            )}
                        </button>
                        <span className="text-[14px]">{likeCount}</span>
                    </div>
                </div>
                <Link to={book.file}>
                    <button className="bg-[#098C81] text-white rounded-[10px] w-[271px] h-[60px] text-[24px] font-[600] mt-[15px]">
                        Yuklab Olish
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default BookCard;
