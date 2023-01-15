import { ActionTypes } from "../contants/actionTypes";

const initState = {
    products: [{
        id:1,
        title:"t-shirt",
        category:"clothing",
    }],
}
export const productReducer = (state, {type, payload}) => {
switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return state
    default:
        return state;
}
}