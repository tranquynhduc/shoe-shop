export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'
export const SET_USER = 'SET_USER'
export const SELECT_USER = 'SELECT_USER'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const SET_ORDER = 'SET_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'

// Login
export const login_success = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const login_failure = error => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

//Order
export const set_Order = setOrder => {
    return {
        type: SET_ORDER,
        payload: setOrder
    }
}

export const delete_Order = deleteOrder => {
    return {
        type: DELETE_ORDER,
        payload: deleteOrder
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

//User
export const add_user = addUser => {
    return {
        type: ADD_USER,
        payload: addUser
    }
}
export const update_user = updateUser => {
    return {
        type: UPDATE_USER,
        payload: updateUser
    }
}
export const delete_user = deleteUser => {
    return {
        type: DELETE_USER,
        payload: deleteUser
    }
}
export const set_User = setUser => {
    return {
        type: SET_USER,
        payload: setUser
    }
}
export const select_User = selectUser => {
    return {
        type: SELECT_USER,
        payload: selectUser
    }
}
//Product-- set API
export const set_product = setProducts => {
    return {
        type: SET_PRODUCT,
        payload: setProducts
    }
}
export const select_product = selectProducts => {
    return {
        type: SET_PRODUCT,
        payload: selectProducts
    }
}
export const remove_product = () => {
    return {
        type: REMOVE_PRODUCT
    }
}

//product - update add delete
export const add_product = addProduct => {
    return {
        type: ADD_PRODUCT,
        payload: addProduct
    }
}
export const update_product = updateProduct => {
    return {
        type: UPDATE_PRODUCT,
        payload: updateProduct
    }
}
export const delete_product = deleteProduct => {
    return {
        type: DELETE_PRODUCT,
        payload: deleteProduct
    }
}
