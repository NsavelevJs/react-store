import { combineReducers } from "redux";
import { productReducer } from "./productreducer";

const reducers = combineReducers({
    allproducts:productReducer,

})