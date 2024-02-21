import React, { useRef } from "react";
import Slider from "react-slick";
// import "./index.css";
import arrow from "../../../assets/images/marketplace/test-arrow.png";
import employee_1 from "../../../assets/images/application/employee_mc4.png";
import company_1 from "../../../assets/images/application/company_mc4.png";
import employee_2 from "../../../assets/images/application/employee_mc3.png";
import company_2 from "../../../assets/images/application/company_mc2.png";
import employee_3 from "../../../assets/images/application/employee_mc2.png";
import company_3 from "../../../assets/images/application/company_mc3.png";
import employee_4 from "../../../assets/images/application/employee_mc1.png";
import company_4 from "../../../assets/images/application/company_mc1.png";

const testimonials = [
  {
    quote:
      "The MetalCloud is fantastic! Its user-friendly interface, instant data delivery to our phones, and insightful data presentation have all helped  make our work easier.",
    name: "Pankaj Phukan",
    empImg: employee_1,
    title: "MR Representative",
    companyLogo: company_1,
  },
  {
    quote:
      "MetalCloud has been a valuable addition! The automation,ChargeMix suggestions, and real-time WhatsApp integration have boosted efficiency and team collaboration. Truly outstanding.",
    name: "The Kolhapur Metals",
    empImg: employee_2,
    title: "MR Representative",
    companyLogo: company_2,
  },
  {
    quote:
      "We've significantly reduced melt time, thanks to the invaluable dilution suggestions. The MetalCloud platform is a game-changer for foundry processes.",
    name: "Pradeep Bera",
    empImg: employee_3,
    title: "Foundry Head",
    companyLogo: company_3,
  },

  {
    quote:
      " MetalCloud has truly transformed our operations! With 100% accurate chemistry corrections and valuable insights, it's been a real game-changer. Highly recommended!",
    name: "Prasad Mantri",
    empImg: employee_4,
    title: "Managing Director",
    companyLogo: company_4,
  },
];

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
        className="testSec animated-section section sectionCards aosAnim "
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
                    style={{ userSelect: "none" }}
                    onClick={goToPrevious}
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
                {testimonials.map((testimonial, index) => (
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