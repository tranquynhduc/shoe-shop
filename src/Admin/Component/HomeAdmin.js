/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { FaMoneyBillAlt } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { MdAutorenew } from 'react-icons/md'
import { VscDebugRestart } from 'react-icons/vsc'
import { TiArrowUpThick } from 'react-icons/ti'
import './Style/HomeAdmin.css'
import imageDefault from '../image/360_F_203190365_ITA15blQuR2DihmeipRp7oWUETVhyWA6-removebg-preview.png'
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'
import { useSelector } from 'react-redux'
import { getProducts, getUser, TOKEN } from '../../api/httpRequest'
import ReactLoading from 'react-loading'
import { formatPrice } from './../../utils/common'

function HomeAdmin() {
    const orderList = useSelector(state => state.orderReducer.orders)
    console.log(orderList)
    const [data, setData] = useState([])
    const [dataUser, setDataUser] = useState([])
    const fetchUser = async () => {
        const responseUser = await getUser(TOKEN).catch(error => {
            console.log(error)
        })
        setDataUser([responseUser.data])
    }

    const fetchProducts = async () => {
        const response = await getProducts().catch(error => {
            console.error(error)
        })
        setData([...response.data])
    }

    const checkPrice = data.sort((a, b) => {
        return b.price - a.price
    })
    /*    if (checkPrice) {
        dataProducts.sort((a, b) => {
            return (a.price - b.price)
        })
    } */
    let sumPrice = 0
    for (let i = 0; i < data.length; i++) {
        sumPrice += data[i].price * data[i].countInStock
    }
    // console.log(sumPrice);
    //User

    let sumUser = 0
    for (let i = 0; i < dataUser.length; i++) {
        sumUser += dataUser[i].length
    }
    let sumTodayIncome = 0
    for (let i = 0; i < orderList.length; i++) {
        sumTodayIncome +=
            orderList[i].cartItems[0].price * orderList[i].cartItems[0].quantity
    }
    console.log(sumTodayIncome)

    useEffect(() => {
        fetchProducts()
        fetchUser()
    }, [])
    return (
        <div className="container_homeadmin">
            <h2 className="admin_title">Dashboard</h2>
            <div className="admin_">
                <div className="admin_top">
                    <div className="top_oder">
                        <p className="top_title">ORDER PENDING</p>
                        <p className="top_number">{orderList.length}</p>
                        <div className="boder_icon_pending">
                            {' '}
                            <VscDebugRestart className="icon_pending" />
                        </div>
                    </div>
                    <div className="top_oder_cancel">
                        <p className="top_title">ORDER CANCEL</p>
                        <p className="top_number">0</p>
                        <div className="boder_icon_cancel">
                            {' '}
                            <ImCancelCircle className="icon_pending" />
                        </div>
                    </div>
                    <div className="top_oder_process">
                        <p className="top_title">ORDER PROCESS</p>
                        <p className="top_number">0</p>
                        <div className="boder_icon_process">
                            {' '}
                            <MdAutorenew className="icon_pending" />
                        </div>
                    </div>
                    <div className="top_oder_income">
                        <p className="top_title">TODAY INCOME</p>
                        <p className="top_number">
                            {formatPrice(sumTodayIncome)}
                        </p>
                        <div className="boder_icon">
                            {' '}
                            <FaMoneyBillAlt className="icon_pending" />
                        </div>
                    </div>
                </div>
                <div className="admin_bottom">
                    <h2 className="admin_bottom_title">Recent Orders</h2>

                    <div className="productOrder">
                        <div className="productStore">
                            <h2 className="headerTop">Store Metrics</h2>
                            <div className="product">
                                <div className="productRevenue">
                                    <div className="productCustumer">
                                        <h2 className="custumterHeader">
                                            Revenue
                                        </h2>
                                        <h3 className="custumerPrice">
                                            {formatPrice(sumPrice)}{' '}
                                        </h3>
                                    </div>
                                    <div className="productCustumer">
                                        <h2 className="custumterHeader">
                                            Total Custumer
                                        </h2>
                                        <h3 className="custumerPrice">
                                            {sumUser}
                                        </h3>
                                    </div>
                                    <div className="productCustumer">
                                        <h2 className="custumterHeader">
                                            Store Visitor
                                        </h2>
                                        <h3 className="custumerPrice">0 </h3>
                                    </div>
                                </div>
                                {data.length !== 0 ? (
                                    <div style={{ width: '100%', height: 300 }}>
                                        <ResponsiveContainer>
                                            <ComposedChart
                                                width={500}
                                                height={400}
                                                data={data}
                                            >
                                                <CartesianGrid />
                                                <XAxis
                                                    dataKey="name"
                                                    scale="band"
                                                />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar
                                                    key={data._id}
                                                    dataKey="countInStock"
                                                    barSize={20}
                                                    fill="#413ea0"
                                                />
                                            </ComposedChart>
                                        </ResponsiveContainer>
                                    </div>
                                ) : (
                                    <ReactLoading />
                                )}
                            </div>
                        </div>
                        <div className="productTop">
                            <h2 className="headerTop">Top Products</h2>
                            <div className="boder__">
                                <div>
                                    {data.length !== 0 && checkPrice ? (
                                        data.map(dataProduct => {
                                            const {
                                                _id,
                                                image,
                                                name,
                                                price,
                                                countInStock,
                                                rest
                                            } = dataProduct
                                            return (
                                                <div
                                                    className="topRight"
                                                    key={_id}
                                                >
                                                    <img
                                                        className="imgeRight"
                                                        src={
                                                            image ||
                                                            imageDefault
                                                        }
                                                    />
                                                    <div className="topHeader">
                                                        <h4 className="headerRight">
                                                            {name}
                                                        </h4>
                                                        <h4 className="headerh3">
                                                            {formatPrice(price)}{' '}
                                                        </h4>
                                                    </div>

                                                    <p className="topRest">
                                                        <TiArrowUpThick />
                                                        {countInStock}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <ReactLoading />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin
