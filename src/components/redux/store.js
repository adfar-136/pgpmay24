import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";
import colorReducer from "./colorReducer";

const reducer = combineReducers({
    count:counterReducer,
    bgColor:colorReducer
})

const store = createStore(reducer);
export default store;