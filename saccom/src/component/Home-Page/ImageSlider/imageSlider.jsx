import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hotel1 from '../../../assets/HomeImageSlider/hostel1.jpg';
import hotel2 from '../../../assets/HomeImageSlider/hostel2.jpg';
import apartment1 from '../../../assets/HomeImageSlider/apartment1.jpeg';
import apartment2 from '../../../assets/HomeImageSlider/apartment2.jpeg';
import apartment3  from '../../../assets/HomeImageSlider/apartment3.jpeg';
import styles from './imageSlider.module.css'

const ImageSlider = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <main className={styles.container}>
        
            <Slider {...settings}>
                <div className="w-full h-full border-none">
                    <img className={`rounded-[30px] border-none ${styles.imageContainer}`} src={hotel1} alt="hotel"/>
                </div>
                <div className="w-dull h-full border-none">
                    <img className={`rounded-[30px] border-none ${styles.imageContainer}`} src={hotel2} alt="hotel"/>
                </div>
                <div className="w-full h-full border-none">
                    <img className={`rounded-[30px] border-none ${styles.imageContainer}`} src={apartment1} alt="hotel"/>
                </div>
                <div className="w-full h-full border-none">
                    <img className={`rounded-[30px] border-none ${styles.imageContainer}`} src={apartment2} alt="hotel"/>
                </div>
                <div className="w-full h-full border-none">
                    <img className={`rounded-[30px] border-none ${styles.imageContainer}`} src={apartment3} alt="hotel"/>
                </div>
            </Slider>
        
    </main>
  )
}

export default ImageSlider