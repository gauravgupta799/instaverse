import * as api from "../../api/index";
// import axios from "axios";

// const url ="http://localhost:8700/stories";

export const getStories = () => async(dispatch)=> {
    try {
        const {data} = await api.fetchStories();
        console.log("fetchedAll", data)
        dispatch({
            type:"FETCH_ALL_STORIES", 
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}
export const createStory = (story) => async(dispatch)=> {
    // console.log("story", story);
    try {
       const {data } = await api.createStory(story);
       console.log("Data", data);
       dispatch({type:"CREATE_STORY", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateStory = (id, story) => async(dispatch)=>{
    try {
        const {data} = await api.updateStory(id, story);
        dispatch({type:"UPDATE_STORY", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}