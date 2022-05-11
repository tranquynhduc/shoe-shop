import {
    SET_USER,
    SELECT_USER,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from './Action'
import {
    SET_PRODUCT,
    SELECT_PRODUCT,
    REMOVE_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from './Action'
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './Action'
import { SET_ORDER, DELETE_ORDER } from './Action'

const initialStateLogin = [
    {
        token:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).token,
        name:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).name,
        email:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).email,
        _id:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user'))._id,
        isAdmin:
            localStorage.getItem('user') === null
                ? ''
                : JSON.parse(localStorage.getItem('user')).isAdmin
    }
]

export const authReducer = (state = initialStateLogin, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('user', localStorage.getItem('user'))
            return {
                token: JSON.parse(localStorage.getItem('user')).token,
                name: JSON.parse(localStorage.getItem('user')).name,
                email: JSON.parse(localStorage.getItem('user')).email,
                _id: JSON.parse(localStorage.getItem('user'))._id,
                isAdmin: JSON.parse(localStorage.getItem('user')).isAdmin
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('user')
            return {
                token: '',
                name: '',
                email: '',
                _id: '',
                isAdmin: ''
            }
        case LOGOUT:
            localStorage.removeItem('user')
            localStorage.removeItem('cart')
            localStorage.removeItem('cartItems')
            return {
                token: '',
                name: '',
                email: '',
                _id: '',
                isAdmin: ''
            }
        default:
            return state
    }
}

const initialStateOrder = {
    orders: []
}

export const orderReducer = (state = initialStateOrder, action) => {
    switch (action.type) {
        case SET_ORDER:
            return { ...state, orders: action.payload }
        case DELETE_ORDER:
            const deleteOrder = state.filter(
                contact => contact.id !== action.payload && contact
            )
            return { deleteOrder }
        default:
            return state
    }
}

const initialStateUser = {
    users: []
}

export const selectUser = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECT_USER:
            return { ...state, ...payload }
        default:
            return state
    }
}

export const contactReducer = (state = initialStateUser, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, users: action.payload }
        case ADD_USER:
            const users = state.users.concat(action.payload)
            return { ...state, users }
        case UPDATE_USER:
            return state.map(contact =>
                contact.id === action.payload.id ? action.payload : contact
            )
        case DELETE_USER:
            const deleteuser = state.filter(
                contact => contact.id !== action.payload && contact
            )
            return { deleteuser }
        default:
            return state
    }
}
const initialStateProduct = {
    products: []
}
export const contactProducts = (state = initialStateProduct, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, products: action.payload }
        case ADD_PRODUCT:
            const products = state.products.concat(action.payload)
            return { ...state, products }
        case UPDATE_PRODUCT:
            return state.map(contact =>
                contact.id === action.payload.id ? action.payload : contact
            )
        case DELETE_PRODUCT:
            const deleteProducts = state.filter(
                contact => contact.id !== action.payload && contact
            )
            return { deleteProducts }
        default:
            return state
    }
}
export const selectProducts = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECT_PRODUCT:
            return { ...state, ...payload }
        case REMOVE_PRODUCT:
            return {}
        default:
            return state
    }
}
