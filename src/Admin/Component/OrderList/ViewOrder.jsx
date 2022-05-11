/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import '../Style/ViewOrder.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ViewOrder() {
    const [information] = useState(true)

    const navigate = useNavigate()

    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const orderViews = useSelector(state => state.orderReducer.orders)
    const { id } = useParams()
    const findViewOrder = orderViews.find(orderView => orderView._id === id)

    console.log(findViewOrder)
    console.log(findViewOrder.cartItems)

    return (
        <>
            <div className="column">
                <h2 style={{ padding: '10px' }}>Chi tiết đơn hàng</h2>
                <table className="shop_table">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Size</th>
                            <th>Tạm tính</th>
                        </tr>
                    </thead>
                    <tbody>
                        {findViewOrder.cartItems.map(
                            ({ name, quantity, price, image, size }, i) => (
                                <tr key={i}>
                                    <td>
                                        <img
                                            src={image}
                                            className="Order_Image"
                                        />
                                    </td>
                                    <td>{name}</td>
                                    <td>{quantity}</td>
                                    <td>{size}</td>
                                    <td>
                                        {formatter.format(price * quantity)}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <b>Tổng</b>
                            </td>
                            <td>
                                <b>-</b>
                            </td>
                            <td>
                                {findViewOrder.cartItems.reduce(
                                    (a, c) => a + c.quantity,
                                    0
                                )}
                            </td>
                            <td>
                                <b>-</b>
                            </td>
                            <td>
                                {formatter.format(
                                    findViewOrder.cartItems.reduce(
                                        (a, c) => a + c.price * c.quantity,
                                        0
                                    )
                                )}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="View_Order_Container">
                <div className="View_Order">
                    {information ? (
                        <div className="View_Order_right">
                            <div className="right_">
                                <div className="View_Order_flex_left">
                                    <div className="View_Order_Update">
                                        <form className="View_Order_UpdateForm">
                                            <div className="View_Order_UpdateLeft">
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Tên:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={
                                                            findViewOrder.fullname
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Điện thoại:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={
                                                            findViewOrder.phone_number
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <button
                                        className="listUser_btn "
                                        onClick={() => navigate(-1)}
                                    >
                                        cancel
                                    </button>
                                </div>
                                <div className="edit_flex_right">
                                    <div className="userUpdate">
                                        <form className="userUpdateForm">
                                            <div className="userUpdateLeft">
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={
                                                            findViewOrder.email
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Địa Chỉ:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={
                                                            findViewOrder.address +
                                                            ', ' +
                                                            findViewOrder.ward +
                                                            ', ' +
                                                            findViewOrder.district +
                                                            ', ' +
                                                            findViewOrder.province
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                                <div className="View_Order_UpdateItem">
                                                    <label className="View_Order_Title">
                                                        Phương Thức Thanh Toán:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        defaultValue={
                                                            findViewOrder.payment_method
                                                        }
                                                        className="View_Order_Update_Input"
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="right_edituser">
                            <div className="right_">
                                <div className="edit_left">No thoungth out</div>
                                <div className="edit_right"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default ViewOrder
