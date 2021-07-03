import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/imgSlider.css';

const ImageSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings} className='slider'>
            <div className='carousel'>
                 <img src="/images/slider-badag.jpg" alt="" />
            </div>
            <div className='carousel'>
                 <img src="/images/slider-badging.jpg" alt="" />
            </div>
            
            <div className='carousel'>
                 <img src="/images/slider-scale.jpg" alt="" />
            </div>
            <div className='carousel'>
                 <img src="/images/slider-scales.jpg" alt="" />
            </div>
        </Slider>
    )
}

export default ImageSlider
