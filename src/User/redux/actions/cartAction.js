import { REMOVE_ITEM, SET_QUANTITY, ADD_TO_CART } from "../constants/cartConstant"

export const addToCart = payload => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const setQuantity = payload => {
    return {
        type: SET_QUANTITY,
        payload
    }
}

export const removeItem = payload => {
    return {
        type: REMOVE_ITEM,
        payload
    }
}