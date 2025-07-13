import { create } from "zustand";

const useBooksStore = create((set) => ({
    books: [],
    totalPages: 1,
    currentPage: 1,
    likedBooks: {},
    setBooks: (books) => set({ books }),
    setTotalPages: (totalPages) => set({ totalPages }),
    setCurrentPage: (page) => set({ currentPage: page }),
    setLikedBooks: (likedBooks) => set({ likedBooks }),
    updateBookLikes: (bookId, likes) =>
        set((state) => ({
            books: state.books.map((book) =>
                book.id === bookId ? { ...book, likes } : book
            ),
        })),
}));

export default useBooksStore;