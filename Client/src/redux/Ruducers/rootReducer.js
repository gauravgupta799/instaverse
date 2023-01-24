import {combineReducers} from "redux";
import stories from "./stories";
import authReducer from "./authReducers";

const rootReducer = combineReducers({
    stories,authReducer
});

export default rootReducer;