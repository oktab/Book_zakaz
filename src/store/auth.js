import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    token: localStorage.getItem('token'),

    login: (token) => {
        localStorage.setItem('token', token)
        set({ token })
    },
    logout: () => {
        localStorage.removeItem('token')
        set({ token: null, user: null })
    },
    setUser: (user) => set({ user })
}))
export default useAuthStore;