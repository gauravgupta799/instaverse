import axios from "axios";

const url ="http://localhost:8700";
const api = axios.create({baseURL:url});
api.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        const profile = JSON.parse(localStorage.getItem("profile"));
        req.headers.authorization = `Bearer ${profile.token}`
    }
    return req;
})

// export const fetchStories = async() => axios.get(`${url}/stories`);
// export const createStory = async(story) =>axios.post(`${url}/stories/createStory`, story)
// export const updateStory = async(id, story) => axios.patch(`${url}/stories/${id}`, story);
// export const deleteStory = async(id) => axios.delete(`${url}/stories/${id}`);
// export const likeStory = async(id) => axios.patch(`${url}/stories/${id}/likeStory`);
// export const signup = async(values) => axios.post(`${url}/auth/signup`, values)
// export const login = async(values) => axios.post(`${url}/auth/login`, values)

export const fetchStories = async() => api.get("/stories");
export const createStory = async(story) => api.post("/stories/createStory", story);
export const updateStory = async(id, story) => api.patch(`${"/stories"}/${id}`, story);
export const deleteStory = async(id) => api.delete(`${"/stories"}/${id}`);
export const likeStory = async(id) => api.patch(`${"/stories"}/${id}/likeStory`);
export const login = async(formValues) => api.post("/auth/login", formValues);
export const signup = async(formValues) => api.post("/auth/signup", formValues);