import { create } from "zustand";

const useBooksStore = create((set) => ({
    books: [],
    totalPages: 1,
    currentPage: 1,

    setBooks: (books) => set({ books }),
    setTotalPages: (totalPages) => set({ totalPages }),
    setCurrentPage: (page) => set({ currentPage: page }),

}));

export default useBooksStore;