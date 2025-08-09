import axios from "axios";

const API = axios.create({
    baseURL: "https://lib.qaxramonov.uz/api/v1"
})

export const loginUser = (data) => API.post("/users/login", data)
export const registerUser = (data) => API.post("/users/register", data)
export const logoutUser = (data = null, config = {}) => API.post("/users/logout", data, config);
export const likeBookApi = (data, config) => API.post("/likes", data, config);
export const getLikesApi = (config) => API.get("/likes/likes", config);
export const deleteLikesApi = (id, config) => API.delete(`/likes/${id}`, config);