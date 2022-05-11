/* eslint-disable no-unused-vars */
import axios from 'axios'

const BASE_URL = 'https://sf-shoe-shop-be.herokuapp.com/'

const TOKEN =
    localStorage.getItem('user') === null
        ? ''
        : JSON.parse(localStorage.getItem('user')).token

const postLogin = loginCredential => {
    return axios.post(BASE_URL + 'api/users/signin', loginCredential)
}

const postRegister = userInfo => {
    return axios.post(BASE_URL + 'api/users/register', userInfo)
}

const getOrders = TOKEN => {
    return axios.get(BASE_URL + 'api/orders', {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const postOrder = (orderInfo, TOKEN) => {
    return axios.post(BASE_URL + 'api/orders/', orderInfo, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const updateOrder = (id, orderBody, TOKEN) => {
    return axios.put(BASE_URL + 'api/orders/' + id, orderBody, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const deleteOrder = (id, TOKEN) => {
    return axios.delete(BASE_URL + 'api/orders/' + id, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const getUser = TOKEN => {
    return axios.get(BASE_URL + 'api/users/list/', {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const getUsers = id => {
    return axios.get(BASE_URL + '/api/users/' + id)
}
const saveUser = (userBody, TOKEN) => {
    return axios.post(BASE_URL + 'api/users/register', userBody, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}
const updateUser = (id, userBody, TOKEN) => {
    return axios.put(BASE_URL + 'api/users/update-profile/' + id, userBody, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const deleteUser = (id, TOKEN) => {
    return axios.delete(BASE_URL + 'api/users/' + id, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}
//product
const getProducts = () => {
    return axios.get(BASE_URL + 'api/products/')
}

const getProduct = id => {
    return axios.get(BASE_URL + 'api/products/' + id)
}
const saveProduct = (productBody, TOKEN) => {
    return axios.post(BASE_URL + 'api/products/', productBody, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const updateProduct = (id, productBody, TOKEN) => {
    return axios.put(BASE_URL + 'api/products/' + id, productBody, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

const deleteProduct = (id, TOKEN) => {
    return axios.delete(BASE_URL + 'api/products/' + id, {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
}

export {
    TOKEN,
    getOrders,
    postOrder,
    updateOrder,
    deleteOrder,
    postLogin,
    postRegister,
    getUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser,
    getProducts,
    getProduct,
    saveProduct,
    updateProduct,
    deleteProduct
}
