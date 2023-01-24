
const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGNUP":
            return state;
        case "LOGIN":
            return state;
        default:
            return state;
    }

}

export default authReducer;