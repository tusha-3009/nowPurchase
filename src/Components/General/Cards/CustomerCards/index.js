import React, {  useEffect, useRef } from "react";
import Slider from "react-slick";
import "./index.css";

import arrow from "../../../../assets/images/marketplace/test-arrow.png";
import e1 from "../../../../assets/images/marketplace/employee_mp1.png";
import c1 from "../../../../assets/images/marketplace/company_mp2.png";
import e2 from "../../../../assets/images/application/employee_mc2.png";
import c2 from "../../../../assets/images/application/company_mc3.png";
import e3 from "../../../../assets/images/marketplace/employee_mp4.png";
import c3 from "../../../../assets/images/marketplace/company_mp3.png";
import c4 from "../../../../assets/images/marketplace/company_mp1.png";
import e4 from "../../../../assets/images/marketplace/employee_mp3.png";
const testimonials = [
  {
    quote:
      "Now purchase has been a game-changer for our procurement  process. The platform's efficiency and user-friendly interface have streamlined our purchasing workflow, saving us time and resources. Highly recommended!",
    name: "Vijay Agarwal",
    empImg: e1,
    title: "Director",
    companyLogo: c1,
  },
  {
    quote:
      " We've significantly reduced melt time, thanks to the invaluable dilution suggestions. The MetalCloud platform is a game-changer for foundry processes.",
    name: "Pradeep Bera",
    empImg: e2,
    title: "Foundry Head",
    companyLogo: c2,
  },
  {
    quote:
      "Thanks to NowPurchase, our journey to success has been nothing short of remarkable. Their customer-centric approach ensured that our goals became their goals. With personalized strategies and unwavering support.",
    name: "Yogesh Joshi",
    empImg: e3,
    title: "CEO",
    companyLogo: c3,
  },

  {
    quote:
      "Quality, reasonable price, and timely delivery are important for me to work with a vendor. NowPurchase checks all these requirements for me. And they are just a call away whenever I need help.",
    name: "Sikhar Jaiswal",
    empImg: e4,
    title: "Owner",
    companyLogo: c4,
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
                  >
                    <img
                      loading="lazy"
                      src={arrow}
                      alt=""
                      className="prev-button"
                      onClick={goToPrevious}
                    />
                  </div>
                  <div
                    className="test_arrow test-next next "
                    id="Home_Section6_Testimonials_ArrowRight"
                    tabindex="-1"
                    role="button"
                    aria-label="Next slide"
                    // aria-disabled="true"
                  >
                    <img
                      loading="lazy"
                      src={arrow}
                      alt=""
                      className="next-button"
                      onClick={goToNext}
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
/*

function CustomerCards() {
  const [transformVal, setTransformVal] = useState(0);


  function Prev() {
    if (transformVal !== 0) setTransformVal((currValue) => currValue + 675);
  }
  function Next() {
    if (transformVal !== -1350) setTransformVal((currValue) => currValue - 675);
  }

  return (
    <div
      className="testSec animated-section section sectionCards aosAnim ltr"
      id="sec16"
    >
      <div className="overflowSection">
        <div className="container">
          <div className="testSecWrap">
            <div className="testmain d-flex justify-content-between align-items-end">
              <h3 class="titleText">
                <span className="skyText">Hear</span> what our customers <br />
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
                >
                  <img loading="lazy" src={arrow} alt="" onClick={Prev} />
                </div>
                <div
                  className="test_arrow test-next next "
                  id="Home_Section6_Testimonials_ArrowRight"
                  tabindex="-1"
                  role="button"
                  aria-label="Next slide"
                  // aria-disabled="true"
                >
                  <img loading="lazy" src={arrow} alt="" onClick={Next} />
                </div>
              </div>
            </div>
            <div className="swiper testSlider swiper-container-initialized swiper-container-horizontal">
              <div
                class="swiper-wrapper"
                style={{
                  transform: `translate3d(${transformVal}px, 0px, 0px)`,
                  transitionDuration: "0ms",
                }}
              >
                <div class="swiper-slide ">
                  <div class="testCard">
                    <p>
                      Now purchase has been a game-changer for our procurement
                      process. The platform's efficiency and user-friendly
                      interface have streamlined our purchasing workflow, saving
                      us time and resources. Highly recommended!
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img src={e1} alt="" />
                        <div class="testName">
                          <h4>Vijay Agarwal</h4>
                          <h5>Director</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img src={c1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="testCard">
                    <p>
                      We've significantly reduced melt time, thanks to the
                      invaluable dilution suggestions. The MetalCloud platform
                      is a game-changer for foundry processes.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img src={e2} alt="" />
                        <div class="testName">
                          <h4>Pradeep Bera</h4>
                          <h5>Foundry Head</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img src={c2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide ">
                  <div class="testCard">
                    <p>
                      Thanks to NowPurchase, our journey to success has been
                      nothing short of remarkable. Their customer-centric
                      approach ensured that our goals became their goals. With
                      personalized strategies and unwavering support.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img src={e3} alt="" />
                        <div class="testName">
                          <h4>Yogesh Joshi</h4>
                          <h5>CEO</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img src={c3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testCard">
                    <p>
                      Quality, reasonable price, and timely delivery are
                      important for me to work with a vendor. NowPurchase checks
                      all these requirements for me. And they are just a call
                      away whenever I need help.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img src={e4} alt="" />
                        <div class="testName">
                          <h4>Sikhar Jaiswal</h4>
                          <h5>Owner</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img src={c4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCards;
*/
