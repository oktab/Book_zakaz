import { create } from "zustand";

const useBooksStore = create((set) => ({
    books: [],
    totalPages: 1,
    currentPage: 1,
    likes: [],

    setBooks: (books) => set({ books }),
    setTotalPages: (totalPages) => set({ totalPages }),
    setCurrentPage: (page) => set({ currentPage: page }),

    setLikes: (likes) => set({ likes }),
    addLike: (newLike) => set((state) => ({
        likes: [...state.likes, newLike]
    })),
    removeLike: (likeIdToRemove) => set((state) => ({
        likes: state.likes.filter((like) => like.id !== likeIdToRemove)
    }))
}));

export default useBooksStore;