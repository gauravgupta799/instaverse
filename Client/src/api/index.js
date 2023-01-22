import axios from "axios";

const url ="http://localhost:8700/stories";
// const api = axios.create({baseURL:url});

export const fetchStories = async() => axios.get(url);
export const createStory = async(story) =>axios.post(`${url}/createStory`, story)
export const updateStory = async(id, story) => axios.patch(`${url}/${id}`, story);
export const deleteStory = async(id) => axios.delete(`${url}/${id}`);


// export const fetchStories = async () => api.get("/stories");
// export const createStory = async (story) => api.post("/stories", story);
// export const updateStory = async (id, story) => api.patch(`${"/stories"}/${id}`, story);
// export const deleteStory = async (id) => api.delete(`${"/stories"}/${id}`);
// export const likesStory = async (id) => api.patch(`${"/stories"}/${id}/likeStory`);

// export const login = async (formValues) => api.post("/users/login",formValues);
// export const signup = async (formValues) => api.post("/users/signup",formValues);