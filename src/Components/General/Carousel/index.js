import React, { useEffect, useState, useRef } from "react";
import img12 from "../../../assets/images/logo/image_12.png";
import img13 from "../../../assets/images/logo/image_13.png";
import img14 from "../../../assets/images/logo/image_14.png";
import img16 from "../../../assets/images/logo/image_16.png";
import img2 from "../../../assets/images/logo/image_2.png";
import img4 from "../../../assets/images/logo/image_4.png";
import img5 from "../../../assets/images/logo/image_5.png";
import img7 from "../../../assets/images/logo/image_7.png";
import img8 from "../../../assets/images/logo/image_8.png";
import img10 from "../../../assets/images/logo/image_10.png";
import Slider from "react-slick";
import "./index.css";
const cards = [img12, img13, img14, img16, img2, img4, img5, img7, img8, img10];

const companyCard = (img) => (
  <div
    class="imgBoxEach slick-slide slick-cloned"
    style={{ width: "327px" }}
    tabindex="-1"
    data-slick-index="-4"
    aria-hidden="true"
  >
    <div>
      <img loading="lazy" src={img} alt="" />
    </div>
  </div>
);
function CarouselCompanyCards() {

  const sliderRef = useRef(null);

   useEffect(() => {
     const interval = setInterval(() => {
       sliderRef.current.slickNext();
     }, 2000); // Adjust autoplay speed here
     return () => clearInterval(interval);
   }, []);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  if (window.innerWidth < 350) {
    sliderSettings.slidesToShow = 1;}
  else if (window.innerWidth < 800) {
    sliderSettings.slidesToShow = 2;
  } else if (window.innerWidth < 1100) {
    sliderSettings.slidesToShow = 3;
  } else {
    sliderSettings.slidesToShow = 4;
  } 
  return (
    <>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <div key={index} className="swiper testSlider">
              <div className="imgBoxEach">
                <div>
                  <img loading="lazy" src={card} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default CarouselCompanyCards;
