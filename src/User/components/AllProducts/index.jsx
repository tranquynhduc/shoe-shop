/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { RiShareForwardFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../../../api/httpRequest'
import { formatPrice } from '../../../utils/common'
import './style.scss'

function AllProducts() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    const handleDetail = id => {
        navigate(`detailProduct/${id}`)
    }

    useEffect(() => {
        ( async () => {
            const res = await getProducts()
            setProducts(res.data)
        })()
    }, [])


    return (
        <div className="all">
            <div className="all__main container">
                <h2 className="heading">
                    All <span>Products</span>
                </h2>
                <div className="all__list">
                    {products.map(item => (
                        <div className="all__item" key={item._id}>
                            <img
                                src={item.image}
                                className="all__image"
                                onClick={() => handleDetail(item._id)}
                            />
                            <div className="all__actions">
                                <div className="all__heart">
                                    <BsFillSuitHeartFill />
                                </div>
                                <div className="all__share">
                                    <RiShareForwardFill />
                                </div>
                                <div className="all__eye" onClick={() => handleDetail(item._id)}>
                                    <AiFillEye />
                                </div>
                            </div>
                            <h4 className="all__name" onClick={() => handleDetail(item._id)}>{item.name}</h4>
                            <span className="all__price">{formatPrice(item.price)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllProducts
