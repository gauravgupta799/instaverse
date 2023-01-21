const storiesReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_ALL_STORIES":
            return state;
        case "FETCH_STORY":
            return state
        default:
            return state;
    }
}

export default storiesReducer;