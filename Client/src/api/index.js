import axios from "axios";

const url ="http://localhost:8700/stories";
// const api = axios.create({baseURL:url});

export const fetchStories = async () => axios.get(url);


// export const fetchStories = async () => api.get("/storie");
// export const createStory = async (story) => api.post("/stories", story);
// export const updateStory = async (id, story) => api.patch(`${"/stories"}/${id}`, story);
// export const deleteStory = async (id) => api.delete(`${"/stories"}/${id}`);
// export const likesStory = async (id) => api.patch(`${"/stories"}/${id}/likeStory`);

// export const login = async (formValues) => api.post("/users/login",formValues);
// export const signup = async (formValues) => api.post("/users/signup",formValues);