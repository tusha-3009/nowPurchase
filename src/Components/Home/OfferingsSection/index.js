import React, { useEffect, useRef } from 'react'
import "./index.css"
import offeringBg from "../../../assets/images/home/offeringBg.png";
import logo_wh from  "../../../assets/images/logo_wh.png";
import play_vector from  "../../../assets/images/icons/play_vector.png";
import ellipse_25 from "../../../assets/images/home/ellipse_25.png";
import ellipse_26 from "../../../assets/images/home/ellipse_26.png";
function OfferingsSection() {
  
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
      className="offeringSectionWrap pb-0 animated-section  section"
      id="sec14"
    >
      <div className="scrollSection">
        <div className="container">
          <div className="offeringWrap aosAnim ">
            <h2 className="titleText">
              <span className="skyText">Experience</span> our incredibly <br />
              trusted offerings
            </h2>
            <div className="animeSecIndex aosAnim ">
              <img loading="lazy" className="bigImg" src={offeringBg} alt="" />
              <div className="mainCircleBg">
                <img
                  loading="lazy"
                  className="centerImg"
                  src={logo_wh}
                  alt=""
                />
              </div>
              <div className="eachStep step_01">
                <a
                  href="https://www.youtube.com/embed/O8rqmHvFmQY"
                  className="playBtn"
                  data-fancybox=""
                >
                  <img loading="lazy" src={play_vector} alt="" />
                </a>
                <figure>
                  <img loading="lazy" src={ellipse_25} alt="" />
                  <figcaption>MarketPlace</figcaption>
                </figure>
                <div className="figContBox">
                  <p>
                    <strong>One-stop</strong> Solution <br />
                    for Quality Procurement
                  </p>
                  <a
                    className="knowMoreBtn"
                    href="/marketplace"
                    id="Home_Section4_MarketPlace_KnowMore"
                  >
                    Know More
                  </a>
                </div>
              </div>

              <div className="eachStep step_02">
                <a
                  href="https://www.youtube.com/embed/664mYn1fjQs"
                  className="playBtn"
                  data-fancybox=""
                >
                  <img loading="lazy" src={play_vector} alt="" />
                </a>
                <figure>
                  <img loading="lazy" src={ellipse_26} alt="" />
                  <figcaption>MetalCloud</figcaption>
                </figure>
                <div className="figContBox">
                  <p>
                    Your Melting Process, <br />
                    Now Made
                    <strong>Reliable!</strong>
                  </p>
                  <a
                    className="knowMoreBtn"
                    href="/application"
                    id="Home_Section4_MetalCloud_KnowMore"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferingsSection