import { ADD_TO_CART, REMOVE_ITEM, SET_QUANTITY } from "../constants/cartConstant"
   
const initState = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []

const reducer = (state = initState, action) => {
    switch(action.type) {

        case ADD_TO_CART:
            const product = state.find(item => item.id === action.payload.id && item.size === action.payload.size)
            
            if(product) {
                return state.map(item => {
                    if(item.id === product.id && item.size === product.size) {
                        item.quantity = parseInt(item.quantity) + 1
                    }
                    return item
                })
            }
            else {
                return [...state, action.payload]
            }

        case SET_QUANTITY:
            return state.map(item => {
                if(item.id === action.payload.id && item.size === action.payload.size) {
                    item.quantity = action.payload.newQuantity
                }
                return item
            })

        case REMOVE_ITEM:
            state.splice(action.payload, 1)
            return state

        default:
            return state
    }
}

export default reducer
