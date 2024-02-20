import React, { useEffect, useRef, useState } from "react";
import bnrpoly from "../../../assets/images/marketplace/bnrPoly.png";
import "./index.css";
import loca from "../../../assets/images/marketplace/loc.png";
import dummy from "../../../assets/images/dummy.mp4";
import bnrPlay from "../../../assets/images/marketplace/bnrPlay.png";
import Container from "../../../Components/General/Container";
import { counts } from "../../../constants";
import CountUp from "react-countup";

function Hero() {
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
 }, []);  useEffect(() => {
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

  return (
    <div
      className="marketbnr serviceSec animated-section section pb-0"
      id="sec31"
    >
      <div className="overflowSection">
<div class="container">
          <div ref={aosRef} className="row bannerContent aosAnim ">
            <div className="col-md-7 leftBannerCont">
              <div className="bannerLeft">
                <h2 className="titleText">
                  <span className="skyText">One-stop</span> Solution for Quality
                  Procurement
                </h2>
                <p>
                  We understand the crucial role that procurement plays in
                  ensuring your manufacturing process can adapt to supply chain
                  challenges while maintaining quality
                </p>
                <a
                  href="/getInTouchForm"
                  className="npButton getInTouch"
                  id="MarketPlace_Section1_Landing_EnquireNow"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div className="col-md-5 rightBannerImg">
              <div className="bannerRight">
                <div className="bannerPoly bannerPoly1">
                  <img src={bnrpoly} alt="" />

                  <video
                    className="video"
                    autoplay=""
                    muted=""
                    loop=""
                    id="hoverVideo"
                  >
                    <source src={dummy} type="video/mp4" />
                  </video>

                  <a
                    href="https://www.youtube.com/embed/O8rqmHvFmQY"
                    className="bnrPlay"
                    data-fancybox=""
                  >
                    <img loading="lazy" src={bnrPlay} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={aosRef} className="addr aosAnim">
          <div className="container">
            <div className="locWrap d-flex align-items-center">
              <div className="locIcon">
                <img loading="lazy" src={loca} alt="" />
              </div>
              <div className="locAddr d-flex align-items-center">
                <div className="eachLoc">
                  <h4>West Bengal</h4>
                </div>
                <div className="eachLoc">
                  <h4>Maharastra</h4>
                </div>
                <div className="eachLoc">
                  <h4>Karnataka</h4>
                </div>
                <div className="eachLoc">
                  <h4>Jharkhand</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="keyNumber triangleTopLeftBg" id="">
          <Container>
            <div className="row">
              <div ref={aosRef} className="col-lg-12 aosAnim">
                <div className="sechead keyHead aosAnim ">
                  <h3>
                    <span>Our success</span> is a reflection
                    <br />
                    of your satisfaction
                  </h3>
                </div>

                <div className="keyWrap">
                  {counts.map(({ number, text, title }) => (
                    <div className="eachkey">
                      <h4>
                        <span className="counter">
                          {" "}
                          <CountUp end={number} duration={4.5} />
                        </span>
                        {text}
                      </h4>
                      <h6>{title}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Hero;
