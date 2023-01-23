const storiesReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_STORIES":
            return [...state, ...action.payload];
        case "CREATE_STORY":
            return [...state, action.payload];
        case "UPDATE_STORY":
        case "LIKE_STORY":
            return state.map(story => story._id === action.payload.id ? action.payload : story)   
        case "DELETE_STORY":
            return state.filter(story => story._id !== action.payload.id);
        default:
            return state;
    }
}

export default storiesReducer;