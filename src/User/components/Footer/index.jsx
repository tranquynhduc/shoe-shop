import './style.scss'

function Footer() {
    return ( 
        <footer className="footer">
            <div className="footer__main container">
                <div className="footer__left footer__column">
                    <div className="footer__logo logo">ShoeShop</div>
                    <h4 className="footer__sologan">Hệ thống giày thể thao số 1 Bình Định</h4>
                    <div className="footer__phone">
                        <span>Hotline:</span>
                        <span>0375139630</span>
                    </div>
                    <div className="footer__address">
                        <span>Store: </span>
                        <span>Nhóm SF TMA Solutions Bình Định</span>
                    </div>
                </div>
                <div className="footer__column">
                    <h4 className='footer__title'>Về ShoesShop</h4>
                    <ul className="footer__list">
                        <li className="footer__item">Giới thiệu</li>
                        <li className="footer__item">Liên hệ</li>
                        <li className="footer__item">Tuyển dụng</li>
                        <li className="footer__item">Tin tức</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h4 className='footer__title'>Dịch vụ khách hàng</h4>
                    <ul className="footer__list">
                        <li className="footer__item">Hướng dẫn đặt hàng</li>
                        <li className="footer__item">Chính sách đổi trả</li>
                        <li className="footer__item">Chính sách bảo hành</li>
                        <li className="footer__item">Chính sách hoàn tiền</li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Footer;