import React, { useEffect, useRef } from 'react'
import "./index.css"
import sol1 from "../../../assets/images/marketplace/sol-1.png";
import sol2 from "../../../assets/images/marketplace/sol-2.png";
import sol3 from "../../../assets/images/marketplace/sol-3.png";
import sol4 from "../../../assets/images/marketplace/sol-4.png";
import sol5 from "../../../assets/images/marketplace/sol-5.png";
import sol6 from "../../../assets/images/marketplace/sol-6.png";
import sol7 from "../../../assets/images/marketplace/sol-7.png";
import sol8 from "../../../assets/images/marketplace/sol-8.png";
import Container from '../../../Components/General/Container';
function OneStopSolutions() {
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
    <div ref={aosRef}
      className="solutionSec animated-section section aosAnim "
      id="sec36"
    >
      <div className="scrollSection">
        <Container>
          <div className="solutionHead d-flex align-items-center justify-content-between">
            <div  className="sechead keyHead mb-8 aosAnim ">
              <h3>
                <span>One-stop solution</span> for all
                <br />
                your procurement needs
              </h3>
              <p>
                To view all available raw materials &amp; check prices, place an
                enquiry and someone from our team will get back to you
              </p>
            </div>
            <a
              href="/getInTouchForm"
              className="npButton getInTouch aosAnim "
            >
              Enquire Now
            </a>
          </div>

          <div className="sollutionWrap d-flex flex">
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol1} alt="" />
              </div>
              <h5>Metal Scrap</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol2} alt="" />
              </div>
              <h5>Virgin Metals</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol3} alt="" />
              </div>
              <h5>Carbon Additives</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol4} alt="" />
              </div>
              <h5>Ferro Alloys</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol5} alt="" />
              </div>
              <h5>Nodularizers &amp; Inoculants</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol6} alt="" />
              </div>
              <h5>Pig Iron</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol7} alt="" />
              </div>
              <h5>Refractory Items</h5>
            </div>
            <div className="eachSol">
              <div className="solImg">
                <img loading="lazy" src={sol8} alt="" />
              </div>
              <h5>Sand &amp; Other Essentials</h5>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default OneStopSolutions