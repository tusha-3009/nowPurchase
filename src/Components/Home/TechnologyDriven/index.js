import React, { useEffect, useRef } from "react";
import "./index.css";
import Container from "../../General/Container";
import TechnologyPic from "../../../assets/images/home/bannerImg.svg";

import CarouselCompanyCards from "../../General/Carousel";
function TechnologyDriven() {
  
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




  return (
    <div
    ref={aosRef}
      className="mainBanner homebnr marketbnr 
  animated-section section pb-0"
    >
      <div className="overflowSection">
        <Container>
          <div ref={aosRef} className="row bannerContent ltr aosAnim">
            <div class="col-md-6 leftBannerCont">
              <div class="bannerLeft">
                <h2 className="titleText">
                  Technology-driven <br />
                  <span class="skyText">Procurement</span> platform <br />
                  for Metal Manufacturers
                </h2>
                <p>
                  We're dedicated to supporting you in <br />
                  achieving higher levels of productivity, <br />
                  transforming local economies, and creating <br />
                  job opportunities for millions of people
                </p>
              </div>
            </div>

            <div class="col-md-6 rightBannerImg">
              <div class="bannerRight">
                <div class="bannerPoly">
                  <img
                    loading="lazy"
                    src={TechnologyPic}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div ref={aosRef} className="businessSectionWrap triangleTopLeftBg">
          <Container>
            <div className="row">
              <div className="col-lg-12 aosAnim ">
                <h2 class="titleText">
                  <span class="skyText">Loved </span>by businesses
                  <br /> everywhere
                </h2>
                <CarouselCompanyCards />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default TechnologyDriven;
