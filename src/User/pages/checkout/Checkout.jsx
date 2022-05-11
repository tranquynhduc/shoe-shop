import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { createCheckout } from '../../actions/checkoutActions'
import './Checkout.scss'
import cashIcon from '../../assets/icons/payment_cash.png'
import ewalletIcon from '../../assets/icons/payment_ewallet.png'
import { postOrder } from '../../../api/httpRequest'
const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer[0])
    const shoppingCart = useSelector(state => state.cart)
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const [provinces, setProvinces] = useState({})
    const [districts, setDistricts] = useState([])
    const [formData, setFormData] = useState({
        address: '',
        district: '',
        email: user.email || '',
        fullname: user.name || '',
        phone_number: '',
        province: '',
        ward: '',
        payment_method: ''
    })
    useEffect(() => {
        const fetchProvinces = async () => {
            const data = await (
                await fetch(
                    'https://gist.githubusercontent.com/cuduy197/11c93e2ab10eeff1d4cd9185ec29fc0a/raw/22b2d484f7a06d59aea63b08d7fe4cf042668a66/districts_vn.json'
                )
            ).json()
            setProvinces(data)
        }
        fetchProvinces()
    }, [])
    const handleCityChange = e => {
        let provinceName = e.target.value
        setFormData({ ...formData, province: provinceName })
        let districtsObj = Object.values(provinces).filter(
            item => item.name === provinceName
        )[0].districts
        setDistricts(Object.values(districtsObj))
    }
    const submitHandler = async e => {
        e.preventDefault()
        console.log(formData)
        let orderInfo = { ...formData, cartItems: shoppingCart }
        dispatch(createCheckout(orderInfo))
        const res = await postOrder(orderInfo, user.token)
        if (res.status === 201) {
            alert('Đặt hàng thành công!')
        }
    }
    return (
        <div className="content">
            <div className="page-head">
                <div className="container">
                    <h1>Đặt hàng</h1>
                    <p>
                        Nếu bạn thử không vừa size hoặc không ưng ý, đừng ngại
                        trả lại cho nhân viên giao hàng. Mọi chi phí sẽ do Shoe
                        Shop thanh toán.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column mt-60 mb-60">
                        <div>
                            {shoppingCart.length > 0 && (
                                <div className="notices-wrapper">
                                    <div className="message">
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/detailProduct/${shoppingCart[0].id}`
                                                )
                                            }
                                            className="button"
                                        >
                                            Tiếp tục xem sản phẩm
                                        </button>
                                        '{shoppingCart[0].name}' đã được thêm
                                        vào giỏ hàng
                                    </div>
                                </div>
                            )}
                            <form className="coupon">
                                <div className="coupon_label">
                                    Vui lòng nhập mã giảm giá của bạn vào ô bên
                                    dưới.
                                </div>
                                <div className="row">
                                    <div className="column form-row">
                                        <input
                                            type="text"
                                            name="coupon_code"
                                            className="input-text"
                                            placeholder="Mã giảm giá của bạn"
                                        />
                                    </div>
                                    <div className="column">
                                        <button
                                            type="submit"
                                            className="button"
                                            name="apply_coupon"
                                            style={{ width: '80px' }}
                                        >
                                            Áp dụng
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <form
                                onSubmit={submitHandler}
                                className="checkout row mt-60 mb-60"
                            >
                                <div className="column">
                                    <div className="customer_details">
                                        <h3>Thông tin giao hàng</h3>
                                        <div className="field-wrapper">
                                            <div className="form-row">
                                                <label htmlFor="fullname">
                                                    Họ và tên
                                                </label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="billing_fullname"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            fullname:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={formData.fullname}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="phonenumber">
                                                    Số điện thoại
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="input-text"
                                                    name="billing_phonenumber"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            phone_number:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={
                                                        formData.phone_number
                                                    }
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="email">
                                                    Địa chỉ email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="input-text"
                                                    name="billing_email"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target
                                                                .value
                                                        })
                                                    }
                                                    value={formData.email}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="city">
                                                    Tỉnh/Thành phố
                                                </label>
                                                <select
                                                    type="text"
                                                    className="input-text"
                                                    id="city"
                                                    name="billing_city"
                                                    onChange={handleCityChange}
                                                    value={formData.province}
                                                >
                                                    {Object.values(
                                                        provinces
                                                    ).map((item, i) => (
                                                        <option key={i}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="district">
                                                    Quận/Huyện
                                                </label>
                                                <select
                                                    type="text"
                                                    id="district"
                                                    className="input-text"
                                                    name="billing_district"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            district:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={formData.district}
                                                >
                                                    {districts.map(
                                                        (item, i) => (
                                                            <option key={i}>
                                                                {item}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="ward">
                                                    Xã/Phường/thị trấn
                                                </label>
                                                <input
                                                    type="text"
                                                    id="ward"
                                                    className="input-text"
                                                    name="billing_ward"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            ward: e.target.value
                                                        })
                                                    }
                                                    value={formData.ward}
                                                />
                                            </div>
                                            <div className="form-row">
                                                <label htmlFor="address">
                                                    Địa chỉ
                                                </label>
                                                <input
                                                    type="text"
                                                    className="input-text"
                                                    name="billing_address"
                                                    placeholder="Địa chỉ"
                                                    onChange={e =>
                                                        setFormData({
                                                            ...formData,
                                                            address:
                                                                e.target.value
                                                        })
                                                    }
                                                    value={formData.address}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="message_box color-info">
                                        <ol>
                                            <li>
                                                Quý khách vui lòng kiểm tra lại
                                                kỹ một lần nữa{' '}
                                                <strong>
                                                    Thông tin giao hàng
                                                </strong>{' '}
                                                trước khi bấm nút{' '}
                                                <strong>Đặt hàng.</strong>
                                            </li>
                                            <li>
                                                Nhân viên Shop sẽ xác nhận đơn
                                                hàng trong vòng tối đa 4 giờ làm
                                                việc (không kể Chủ nhật và Ngày
                                                lễ).
                                            </li>
                                        </ol>
                                        <div>
                                            <ul>
                                                <li>
                                                    Điện thoại đặt hàng nhanh:
                                                    1800.6879 (miễn cước)
                                                </li>
                                                <li>
                                                    Email: cskh@shoeshop.com.vn
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <h3>Chi tiết đơn hàng</h3>
                                    <table className="shop_table">
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Số lượng</th>
                                                <th>Tạm tính</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {shoppingCart.map(
                                                (
                                                    { name, quantity, price },
                                                    i
                                                ) => (
                                                    <tr key={i}>
                                                        <td>{name}</td>
                                                        <td>{quantity}</td>
                                                        <td>
                                                            {formatter.format(
                                                                price * quantity
                                                            )}
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>
                                                    <b>Tạm tính</b>
                                                </td>
                                                <td>-</td>
                                                <td>
                                                    {formatter.format(
                                                        shoppingCart.reduce(
                                                            (a, c) =>
                                                                a +
                                                                c.price *
                                                                    c.quantity,
                                                            0
                                                        )
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Giao hàng</b>
                                                </td>
                                                <td>-</td>
                                                <td>Miễn phí</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>Tổng</b>
                                                </td>
                                                <td>-</td>
                                                <td>
                                                    {formatter.format(
                                                        shoppingCart.reduce(
                                                            (a, c) =>
                                                                a +
                                                                c.price *
                                                                    c.quantity,
                                                            0
                                                        )
                                                    )}
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <div className="checkout-payment">
                                        <ul className="payment_method">
                                            <li>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="payment_method"
                                                        id="payment_cod"
                                                        value="COD"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                payment_method:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                    />
                                                    <label htmlFor="payment_cod">
                                                        Thanh toán sau khi nhận
                                                        hàng (COD)
                                                    </label>
                                                </div>

                                                <div>
                                                    <img
                                                        src={cashIcon}
                                                        alt="cash"
                                                        height="32"
                                                        width="64"
                                                    />
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        name="payment_method"
                                                        id="payment_ewallet"
                                                        value="eWallet"
                                                        onChange={e =>
                                                            setFormData({
                                                                ...formData,
                                                                payment_method:
                                                                    e.target
                                                                        .value
                                                            })
                                                        }
                                                    />
                                                    <label htmlFor="payment_ewallet">
                                                        Thanh toán bằng ví điện
                                                        tử
                                                    </label>
                                                </div>

                                                <div>
                                                    <img
                                                        src={ewalletIcon}
                                                        height="32"
                                                        width="64"
                                                        alt="vnpay"
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="payment_box">
                                            <p>
                                                Tất cả đơn hàng từ Shoe Shop đều
                                                hỗ trợ thử sản phẩm trước khi
                                                thanh toán. <br />
                                                Nếu không vừa size hoặc không
                                                ưng ý, vui lòng gửi trả lại nhân
                                                viên giao nhận mà không phát
                                                sinh thêm bất kỳ chi phí nào.
                                            </p>
                                        </div>
                                        <button
                                            type="submit"
                                            className="place-order button"
                                        >
                                            Đặt hàng
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
