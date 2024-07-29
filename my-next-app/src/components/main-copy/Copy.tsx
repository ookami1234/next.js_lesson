import React from "react";
import Slider from "react-slick";
import styles from "./copy.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Copy: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const images = [
    "/image/usagi.sp.jpg",
    "/image/ookami.sp.jpg",
    "/image/kuma.sp.jpg",
  ];

  return (
    <div className={styles.group}>
      <div className={styles.groupImage}></div>
      <div className={styles.groupImageSp}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div
                className={styles.slide}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Copy;
