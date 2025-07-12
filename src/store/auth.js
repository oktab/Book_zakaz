import { create } from "zustand"
import { registerUser } from "../api/auth"

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

    register: async (formData) => {
        const res = await registerUser(formData)

        const token = res.data.token ||
            res.data.access_token ||
            res.data?.data?.token ||
            res.data?.data?.access_token

        if (token) {
            localStorage.setItem('token', token)
            set({ token })
        }
        return res
    },

    setUser: (user) => set({ user })

}))

export default useAuthStore;