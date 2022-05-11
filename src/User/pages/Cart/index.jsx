import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { formatPrice } from "../../../utils/";
import Loading from "../../components/Loading";
import { removeItem, setQuantity } from "../../redux/actions/cartAction";
import "./style.scss";

function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(true)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const cartList = useSelector(state => state.cart)


  const hanldeSetData = cart => {
    setTotalPrice(cart.reduce((total, item) => total + item.quantity * item.price, 0))
    setTotalQuantity(cart.reduce((total, item) => total + item.quantity, 0))
  }

  useEffect(() => {
    hanldeSetData(cartList)
  }, [])


  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
  })


  const handleSetQuantity = (id, size, newQuantity) => {
    if(!newQuantity >= 1) return
    
    dispatch( setQuantity({ id, size, newQuantity }) )

    // SAVE LOCAL STORAGE
    const cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [] 
    const product = cart.find(item => item.id === id && item.size === size)

    if(product) {
      const newCart = cart.map(item => {
        if(item.id === product.id && item.size === size) {
          item.quantity = newQuantity
        }
        return item
      })

      localStorage.setItem('cart', JSON.stringify(newCart))

      hanldeSetData(newCart)
    }
  }

  const handleRemoveItem = index => {
    setLoading(true)
    dispatch( removeItem(index) )

    // SAVE LOCAL STORAGE
    const cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [] 
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))

    hanldeSetData(cart)
  }

  const handleNavigateShop = () => {
    navigate('/products')
  }

  const handleNavigateCheckout = () => {
    navigate('/checkout')
  }

  const handleDetail = id => {
    navigate(`/detailProduct/${id}`)
  }

  return (
    !loading ? (
      <div className='cart container'>
        <h3 className="cart__heading">Giỏ hàng <span>{totalQuantity}</span> </h3>
        <div className="cart__title">
          <h4>Sản phẩm</h4>
          <h4>Giá</h4>
          <h4>Số lượng</h4>
          <h4>Size</h4>
          <h4>Tổng</h4>
        </div>

        {cartList.length > 0 ? (
          <>
            <div className="cart__list">
                {cartList.map((item, index) => (
                  <div className="cart__item" key={item.id}>
                    <div className="cart__infor">
                      <img
                        src={item.image}
                        className="cart__image"
                        alt={item.name}
                        onClick={() => handleDetail(item.id)}
                      />
                      <h4 className="cart__name" onClick={() => handleDetail(item.id)}>{item.name}</h4>
                    </div>
                    <div className="cart__price cart__row">
                      <h5 className="cart__note">Giá: </h5>
                      <span className="cart__price-number">{formatPrice(item.price)}</span>
                    </div>
                    <div className="cart__quantity cart__row">
                      <h5 className="cart__note">Số lượng: </h5>
                      <div className="cart__quantity-wrap">
                        <RiSubtractLine 
                          className="cart__reduce cart__icon"
                          onClick={() => handleSetQuantity(item.id, item.size, item.quantity - 1)} 
                          />
                        <span className="cart__quantity-number">
                          {item.quantity}
                        </span>
                        <AiOutlinePlus 
                          className="cart__increase cart__icon" 
                          onClick={() => handleSetQuantity(item.id,  item.size, item.quantity + 1)} 
                        />
                      </div>
                    </div>
                    <div className="cart__size cart__row">
                      <h5 className="cart__note">Size: </h5>
                      <span className="cart__size-nuumber">{item.size}</span>
                    </div>
                    <div className="cart__total cart__row">
                      <h5 className="cart__note">Tổng:</h5>
                      <span className="cart__total-number">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <AiFillDelete className="cart__remove cart__icon" onClick={() => handleRemoveItem(index)} />
                  </div>
                ))}
            </div>

            <div className="cart__bottom">
              <div className="cart__bottom-total">
                <h4>Tổng tiền:</h4>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <button className="cart__payment" onClick={handleNavigateCheckout}>Tiến hành thanh toán</button>
              <button className="cart__buymore" onClick={handleNavigateShop}>Mua thêm sản phẩm khác</button>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <h2 className="cart__mess">Chưa có sản phẩm nào trong giỏ hàng!</h2>
            <button className="cart__back" onClick={handleNavigateShop}>Quay trở lại cửa hàng</button>
          </div>
        )}
      </div>
    ) : (
      <Loading />
    )
  );
}

export default Cart;
