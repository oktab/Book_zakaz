import { create } from "zustand";

const useBooksStore = create((set) => ({
    books: [],
    totalPages: 1,
    currentPage: 1,

    likes: [], // ✅ to'g'ri: boshlang'ich qiymat array
    setLikes: (likes) => set({ likes }),
    addLike: (like) =>
        set((state) => ({
            likes: [...(state.likes || []), like], // ✅ fallback: agar likes undefined bo'lsa, []
        })),
    removeLike: (id) =>
        set((state) => ({
            likes: (state.likes || []).filter((like) => like.id !== id), // ✅ fallback
        })),

    setBooks: (books) => set({ books }),
    setTotalPages: (totalPages) => set({ totalPages }),
    setCurrentPage: (page) => set({ currentPage: page }),


}));

export default useBooksStore;