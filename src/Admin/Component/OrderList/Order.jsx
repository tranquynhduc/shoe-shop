import React, { useEffect, useState } from 'react'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { delete_Order, set_Order } from '../../Redux/Action'
import '../Style/UserList.css'
import Pagination from '../Pagination'
import { deleteOrder, getOrders, TOKEN } from '../../../api/httpRequest'
import Loading from '../../Loading'

function UserList() {
    const orderList = useSelector(state => state.orderReducer.orders)

    const [posts, setPosts] = useState(orderList)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(5)
    const dispatch = useDispatch()

    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const fetchOrder = async () => {
        try {
            const responseOrder = await getOrders(TOKEN)
            dispatch(set_Order(responseOrder.data))
        } catch (error) {}
    }

    // console.log('orderList', orderList)
    useEffect(() => {
        fetchOrder()
    }, [])
    useEffect(() => {
        setPosts(orderList)
    }, [orderList])
    //delete uer
    const handleDeleteItem = async _id => {
        try {
            const response = await deleteOrder(_id, TOKEN)
            toast.success('Xóa đơn thành công !!')
            dispatch(delete_Order(response.data))
        } catch (error) {}
        fetchOrder()
    }

    //phân trang

    const indexLastPost = currentPage * postPerPage //10
    const indexFirstPost = indexLastPost - postPerPage //0
    const currentPost = posts.slice(indexFirstPost, indexLastPost)

    //change page
    const paginate = pageNumbers => setCurrentPage(pageNumbers)

    return (
        <div>
            <div className="listUsercontainer">
                <div className="listUser">
                    <FaSearch className="iconSerach_Order " />
                    <input
                        placeholder="Search...."
                        className="serach"
                        disabled={orderList.length === 0}
                    />
                </div>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Giá</th>
                        <th>Update</th>
                    </tr>
                    {orderList.length !== 0 ? (
                        currentPost.map((orderList, index) => {
                            const {
                                _id,
                                fullname,
                                email,
                                phone_number,
                                cartItems
                            } = orderList
                            return (
                                <tr key={index}>
                                    <td>{index}</td>

                                    <td>{fullname}</td>
                                    <td>{email}</td>
                                    <td>{phone_number}</td>
                                    <td>
                                        {formatter.format(
                                            cartItems.reduce(
                                                (a, c) =>
                                                    a + c.price * c.quantity,
                                                0
                                            )
                                        )}
                                    </td>
                                    <td>
                                        <Link to={`information/${_id}`}>
                                            <button className="btn_edit">
                                                view
                                            </button>
                                        </Link>
                                        <button
                                            className="btn_delete"
                                            onClick={() =>
                                                handleDeleteItem(_id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <Loading />
                    )}
                </tbody>
            </table>
            <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    )
}

export default UserList
