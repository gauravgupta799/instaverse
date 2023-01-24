import axios from "axios";

const url ="http://localhost:8700";
// const api = axios.create({baseURL:url});

export const fetchStories = async() => axios.get(`${url}/stories`);
export const createStory = async(story) =>axios.post(`${url}/stories/createStory`, story)
export const updateStory = async(id, story) => axios.patch(`${url}/stories/${id}`, story);
export const deleteStory = async(id) => axios.delete(`${url}/stories/${id}`);
export const likeStory = async(id) => axios.patch(`${url}/stories/${id}/likeStory`);
export const signup = async(values) => axios.post(`${url}/auth`, values)
export const login = async(values) => axios.post(`${url}/auth`, values)

// export const fetchStories = async () => api.get("/stories");
// export const createStory = async (story) => api.post("/stories", story);
// export const updateStory = async (id, story) => api.patch(`${"/stories"}/${id}`, story);
// export const deleteStory = async (id) => api.delete(`${"/stories"}/${id}`);
// export const likesStory = async (id) => api.patch(`${"/stories"}/${id}/likeStory`);

// export const login = async (formValues) => api.post("/users/login",formValues);
// export const signup = async (formValues) => api.post("/users/signup",formValues);