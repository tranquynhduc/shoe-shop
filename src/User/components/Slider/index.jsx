import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide_1 from '../../assets/images/slide_1.png';
import slide_2 from '../../assets/images/slide_2.png';
import slide_3 from '../../assets/images/slide_3.png';
import slide_4 from '../../assets/images/slide_4.png';
import './style.scss';


function Slider() {

    return ( 
        <Swiper
            className='swiper container'
            modules={[Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={50}
            navigation={true}
            pagination={{ clickable: true }}
        >
            <SwiperSlide className='swiper__item'>
                <div className="swiper__content">
                    <span>Nike sport shoes</span>
                    <h2>Nike metcon shoes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus illum autem sit maxime, fugiat soluta omnis, blanditiis magnam quam obcaecati dolorum modi ipsum nesciunt est vero dignissimos dicta recusandae?</p>
                </div>
                <div className="swiper__image">
                    <img src={slide_1} alt='slide 1' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__content">
                    <div className="swiper__content">
                        <span>Nike sport shoes</span>
                        <h2>Nike metcon shoes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus illum autem sit maxime, fugiat soluta omnis, blanditiis magnam quam obcaecati dolorum modi ipsum nesciunt est vero dignissimos dicta recusandae?</p>
                    </div>
                </div>
                <div className="swiper__image">
                    <img src={slide_2} alt='slide 2' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__content">
                    <div className="swiper__content">
                        <span>Nike sport shoes</span>
                        <h2>Nike metcon shoes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus illum autem sit maxime, fugiat soluta omnis, blanditiis magnam quam obcaecati dolorum modi ipsum nesciunt est vero dignissimos dicta recusandae?</p>
                    </div>
                </div>
                <div className="swiper__image">
                    <img src={slide_3} alt='slide 3' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper__item'>
                <div className="swiper__content">
                    <div className="swiper__content">
                        <span>Nike sport shoes</span>
                        <h2>Nike metcon shoes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus illum autem sit maxime, fugiat soluta omnis, blanditiis magnam quam obcaecati dolorum modi ipsum nesciunt est vero dignissimos dicta recusandae?</p>
                    </div>
                </div>
                <div className="swiper__image">
                    <img src={slide_4} alt='slide 4' />
                </div>
            </SwiperSlide>
        </Swiper>
     );
}

export default Slider;