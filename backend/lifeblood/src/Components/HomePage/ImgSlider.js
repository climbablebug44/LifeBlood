import styles from './ImgSlider.module.css';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import donate1 from '../../assets/donation1.jpg'
import donate2 from '../../assets/donation2.jpg'
import donate3 from '../../assets/donation3.jpg'
import donate4 from '../../assets/donation4.jpg'

const ImgSlider = props => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <span>Click the poster to know more</span>
                <Slider {...settings}>
                    <div className={styles.images}>
                        <a href='https://www.google.com/' ><img src={donate1} alt='sliderImage' /></a>
                    </div>
                    <div className={styles.images}>
                        <a href='https://www.google.com/' ><img src={donate2} alt='sliderImage' /></a>
                    </div>
                    <div className={styles.images}>
                        <a href='https://www.google.com/' ><img src={donate3} alt='sliderImage' /></a>
                    </div>
                    <div className={styles.images}>
                        <a href='https://www.google.com/' ><img src={donate4} alt='sliderImage' /></a>
                    </div>
                </Slider>
            </div>
        </React.Fragment>
    );
}

export default ImgSlider;