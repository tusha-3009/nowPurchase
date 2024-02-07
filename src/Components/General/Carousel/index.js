import React, { useEffect, useState } from "react";
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

import "./index.css";
function CarouselCompanyCards() {
  const [translateValue, setTranslateValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTranslateValue((prevTranslate) => prevTranslate - 327);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 
  const totalWidth = 24 * 327;
   useEffect(() => {
     if (translateValue <= -totalWidth) {
       setTranslateValue(0);
     }
   }, [translateValue, totalWidth]);
  return (
    <>
      <div class="imgBoxWrap imgBoxlider slick-initialized slick-slider">
        <div class="slick-list">
          <div
            class="slick-track"
            style={{
              opacity: 1,
              width: "7848px",
              transform: `translate3d(${translateValue}px, 0px, 0px)`,
              transition: "transform 1000ms ease 0s",
            }}
            // onTransitionEnd={setTranslateValue(0)}
          >
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="-4"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img12} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="-3"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img13} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="-2"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img14} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="-1"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img16} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="0"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img2} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="1"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img4} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="2"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img5} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="3"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img7} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="4"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img8} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="5"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img10} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="6"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img12} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide"
              style={{ width: "327px" }}
              tabindex="0"
              data-slick-index="7"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img13} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-current slick-active"
              style={{ width: "327px" }}
              tabindex="0"
              data-slick-index="8"
              aria-hidden="false"
            >
              <div>
                <img loading="lazy" src={img14} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-active"
              style={{ width: "327px" }}
              tabindex="0"
              data-slick-index="9"
              aria-hidden="false"
            >
              <div>
                <img loading="lazy" src={img16} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned slick-active"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="10"
              aria-hidden="false"
            >
              <div>
                <img loading="lazy" src={img2} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned slick-active"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="11"
              aria-hidden="false"
            >
              <div>
                <img loading="lazy" src={img4} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="12"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img5} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="13"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img7} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="14"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img8} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="15"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img10} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="16"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img12} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="17"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img13} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="18"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img14} alt="" />
              </div>
            </div>
            <div
              class="imgBoxEach slick-slide slick-cloned"
              style={{ width: "327px" }}
              tabindex="-1"
              data-slick-index="19"
              aria-hidden="true"
            >
              <div>
                <img loading="lazy" src={img16} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselCompanyCards;
