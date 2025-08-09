import { create } from "zustand";

const useBooksStore = create((set) => ({
    books: [],
    totalPages: 1,
    currentPage: 1,

    likes: [],
    setLikes: (likes) => set({ likes }),
    addLike: (like) => set((state) => ({ likes: [...state.likes, like] })),
    removeLike: (likeId) =>
        set((state) => ({
            likes: state.likes.filter((l) => l.id !== likeId)
        })),

    setBooks: (books) => set({ books }),
    setTotalPages: (totalPages) => set({ totalPages }),
    setCurrentPage: (page) => set({ currentPage: page }),


}));

export default useBooksStore;