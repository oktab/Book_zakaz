import { create } from "zustand"
import { registerUser } from "../api/auth"
import { jwtDecode } from "jwt-decode";

const getUserFromToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        return {
            id: decoded.id || decoded.userId || decoded.sub, 
            email: decoded.email,
        };
    } catch (error) {
        console.error("Token decoding error:", error);
        return null;
    }
};

const useAuthStore = create((set) => {
    const token = localStorage.getItem("accessToken");
    const user = token ? getUserFromToken(token) : null;

    return {
        user,
        token,

        login: (token) => {
            localStorage.setItem("accessToken", token);
            const user = getUserFromToken(token);
            set({ token, user });
        },

        logout: () => {
            localStorage.removeItem("accessToken");
            set({ token: null, user: null });
        },

        register: async (formData) => {
            const res = await registerUser(formData);

            const token =
                res.data.token ||
                res.data.access_token ||
                res.data?.data?.token ||
                res.data?.data?.access_token;

            if (token) {
                localStorage.setItem("accessToken", token);
                const user = getUserFromToken(token);
                set({ token, user });
            }

            return res;
        },

        setUser: (user) => set({ user }),
    };
});

export default useAuthStore;