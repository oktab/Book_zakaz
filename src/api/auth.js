import axios from "axios";

const API = axios.create({
    baseURL: "https://lib.qaxramonov.uz/api/v1"
})

export const loginUser = (data) => API.post("/users/login", data)
export const registerUser = (data) => API.post("/users/register", data)
export const likeUser = (data, config) => API.post("/likes", data, config)
export const getLikes = () => API.get("/likes/likes")