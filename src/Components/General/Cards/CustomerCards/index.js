import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./index.css";

import arrow from "../../../../assets/images/marketplace/test-arrow.png";

import { testimonials } from "../../../constants";
import { shuffleArray } from "../../../utils/utils";
const TestimonialCard = ({ quote, name, empImg, title, companyLogo }) => (
  <div className="testCard">
    <p>{quote}</p>
    <div className="testDetail">
      <div className="testIc">
        <img src={empImg} alt={`${name}'s employee logo`} />
        <div className="testName">
          <h4>{name}</h4>
          <h5>{title}</h5>
        </div>
      </div>
      <div className="testCompany">
        <img src={companyLogo} alt={`${name}'s company logo`} />
      </div>
    </div>
  </div>
);

const CustomerCards = () => {
  const aosRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ltr");
            // entry.target.classList.remove("ltr-out");
          } else {
            // entry.target.classList.add("ltr-out");
            // entry.target.classList.remove("ltr");
          }
        });
      },
      {
        threshold: 0.3,
        // rootMargin: "-10px",
      }
    );

    if (aosRef.current) {
      observer.observe(aosRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (aosRef.current) {
        observer.unobserve(aosRef.current);
      }
    };
  }, []);
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (window.innerWidth > 800) {
    sliderSettings.slidesToShow = 2;
  } else {
    sliderSettings.slidesToShow = 1;
  }

  return (
    <>
      <div
        ref={aosRef}
        className="testSec animated-section section  aosAnim sectionCards"
        id="sec16"
      >
        <div className="overflowSection">
          <div className="container">
            <div className="testSecWrap">
              <div className="testmain d-flex justify-content-between align-items-end">
                <h3 class="titleText">
                  <span className="skyText">Hear</span> what our customers{" "}
                  <br />
                  are saying about us!
                </h3>
                <div className="test-nav nav-style-one">
                  <div
                    className="test_arrow test-prev prev"
                    id="Home_Section6_Testimonials_ArrowLeft"
                    tabindex="0"
                    role="button"
                    aria-label="Previous slide"
                    // aria-disabled="false"
                    onClick={goToPrevious}
                    style={{ userSelect: "none" }}
                  >
                    <img
                      loading="lazy"
                      src={arrow}
                      alt=""
                      className="prev-button"
                    />
                  </div>
                  <div
                    className="test_arrow test-next next "
                    id="Home_Section6_Testimonials_ArrowRight"
                    tabindex="-1"
                    role="button"
                    aria-label="Next slide"
                    // aria-disabled="true"
                    onClick={goToNext}
                    style={{ userSelect: "none" }}
                  >
                    <img
                      loading="lazy"
                      src={arrow}
                      alt=""
                      className="next-button"
                    />
                  </div>
                </div>
              </div>

              <Slider ref={sliderRef} {...sliderSettings}>
                {shuffleArray(testimonials).map((testimonial, index) => (
                  <div className="swiper testSlider">
                    <TestimonialCard key={index} {...testimonial} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCards;
