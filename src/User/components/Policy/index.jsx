import './style.scss'
import { BsBag } from 'react-icons/bs'
import { BiBarcode, BiDiamond } from 'react-icons/bi'
import { RiHandHeartLine } from 'react-icons/ri'

function Policy() {
    return ( 
        <div className="policy">
            <div className="policy__list">
                <div className="policy__item">
                    <div className="policy__icon">
                        <BsBag />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Miễn phí giao hàng</h4>
                        <p className="policy__desc">Miễn phí ship với đơn hàng > 239k</p>
                    </div>
                </div>
                <div className="policy__item">
                    <div className="policy__icon">
                        <BiBarcode />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Thanh toán COD</h4>
                        <p className="policy__desc">Thanh toán khi nhận hàng</p>
                    </div>
                </div>
                <div className="policy__item">
                    <div className="policy__icon">
                        <BiDiamond />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Khách hàng VIP</h4>
                        <p className="policy__desc">Ưu đãi dành cho khách hàng VIP</p>
                    </div>
                </div>
                <div className="policy__item">
                    <div className="policy__icon">
                        <RiHandHeartLine />
                    </div>
                    <div className="policy__content">
                        <h4 className="policy__title">Hỗ trợ bảo hành</h4>
                        <p className="policy__desc">Đổi, sửa đổi tại tất cả store</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Policy;