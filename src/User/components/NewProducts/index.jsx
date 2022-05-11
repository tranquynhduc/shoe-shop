import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { getProducts } from '../../../api/httpRequest'
import { formatPrice } from '../../../utils/common'
import './style.scss'

function NewProduct() {
    const navigate = useNavigate()
    const [productsNew, setProductsNew] = useState([])

    const handleDetail = id => {
        navigate(`detailProduct/${id}`)
    }

    useEffect(() => {
        ( async () => {
            const res = await getProducts()
            const products = res.data

            let count = 0
            setProductsNew(products.filter(item => {
                count++
                return products.length - 3 < count
            }))
        })()
    }, [])

    return ( 
        <div className="new">
            <div className="new__main container">
                <h2 className="heading">New <span>Product</span></h2>
                <div className="new__list">
                    {
                        productsNew.map((item, index) => (
                            <div className="new__item" key={index}>
                                <div className="new__image">
                                    <img src={item.image} alt='image' />
                                </div>
                                <div className="new__content">
                                    <h3 className="new__name">{item.name}</h3>
                                    <div className="new__stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <p className='new__desc'>{item.description}</p>
                                    <span className="new__price">{formatPrice(item.price)}</span>
                                    <button className="new__button" onClick={() => handleDetail(item._id)}>Xem chi tiết</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default NewProduct;