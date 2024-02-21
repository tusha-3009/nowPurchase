import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import t1 from "../../../assets/images/career/team1.png";
import t2 from "../../../assets/images/career/team2.png";
import t3 from "../../../assets/images/career/team3.png";
import t4 from "../../../assets/images/career/team4.png";
import t5 from "../../../assets/images/career/team5.png";
import t6 from "../../../assets/images/career/team6.png";
import careerBannerImg from "../../../assets/images/career/careerBannerImg.png";
import Container from "../../../Components/General/Container";
import Slider from "react-slick";
import AOS from "aos";
const data = [
  { name: "Debraj Dutta", img: t1, year: "June 2022" },
  { name: "Rainark Saha", img: t2, year: "October 2022" },
  { name: "Tanumoy Saha", img: t3, year: "November 2022" },
  { name: "Debopam Ghosh", img: t4, year: "December 2022" },
  { name: "Anish Kumar", img: t5, year: "January 2023" },
  { name: "Arya Vikram Singh", img: t6, year: "February 2023" },
];

function HeroCareers() {
  const reference = useRef(null);
  const handleClick = () => {
    // alert("hey");

    if (reference && reference.current) {
      reference.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const aosElements = document.querySelectorAll(".aosAnim");

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

    aosElements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up the observer on component unmount
    return () => {
      aosElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000); // Adjust autoplay speed here
    return () => clearInterval(interval);
  }, []);
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
  };
  if (window.innerWidth < 300) {
    sliderSettings.slidesToShow = 1;
  } else if (window.innerWidth < 600) {
    sliderSettings.slidesToShow = 2;
  } else if (window.innerWidth < 1100) {
    sliderSettings.slidesToShow = 3;
  } else if (window.innerWidth < 1400) {
    sliderSettings.slidesToShow = 4;
  } else {
    sliderSettings.slidesToShow = 6;
  }
  return (
    <>
      <div className="mainBanner innerBanner marketbnr animated-section section">
        <div className="overflowSection">
          <Container>
            <div className="row bannerContent aosAnim">
              <div className="col-lg-7 leftBannerCont">
                <div className="bannerLeft">
                  <h2 className="titleText">
                    <span className="skyText">Choose</span> where <br />
                    you belong!
                  </h2>
                  <p>
                    Join our mission-driven organisation that values
                    <br /> creativity,
                    <br />
                    fun, and innovation. Help us shape the future of metal
                    <br />
                    manufacturing and procurement in our country.
                  </p>
                  <div className="newDiv">#NowPurchaseCareers</div>

                  <a
                      href="#jobOpening"
                    onClick={handleClick}
                    className="npButton"
                    id="Careers_Section1_Landing_SeeJobOpenings"
                  >
                    See Job Openings
                  </a>
                </div>
              </div>
              <div className="col-lg-5 rightBannerImg">
                <div className="bannerRight">
                  <div className="bannerPoly">
                    <img
                      loading="lazy"
                      src={careerBannerImg}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className=" animated-section  teamSectionWrap triangleTopLeftBg ">
        <Container>
          <div className="row">
            <div className="col-lg-12 aosAnim">
              <h2 className="titleText">
                Check out our
                <span className="gradientText skyText"> NowPlayers!</span>
              </h2>
              <div class="teamBoxWrap teamBoxlider aosAnim slick-initialized slick-slider ltr">
                {/* <div
                  class="slick-list draggable"
                  style={{ padding: "0px 15px" }}
  >*/}
                <div
                  class="slick-track"
                  style={{
                    opacity: 1,
                    width: "100%",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="imgBoxHolder slick-slide"
                        // style={{ width: "216px" }}
                        data-slick-index={index}
                        aria-hidden={index === 4 ? "false" : "true"}
                        tabIndex={index === 4 ? "0" : "-1"}
                      >
                        <span className="yearTitle">{item.year}</span>
                        <div className="imgEachBoxx">
                          <div className="imgBox">
                            <img
                              style={{ height: "100%" }}
                              loading="lazy"
                              src={item.img}
                              alt=""
                            />
                          </div>
                          <div className="imgCont">
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeroCareers;
