import {legacy_createStore as createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/Ruducers/rootReducer";

const store = createStore( reducers, compose(applyMiddleware(thunk)));

export default store;