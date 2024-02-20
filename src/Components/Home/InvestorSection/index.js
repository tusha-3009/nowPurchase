import React, { useEffect, useRef } from "react";
import "./index.css";
import investor1 from "../../../assets/images/logo/logo_1.png";
import investor2 from "../../../assets/images/logo/logo_2.png";
import investor3 from "../../../assets/images/logo/logo_3.png";
function InvestorSection() {
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
    <div ref={aosRef} className="investorSectionWrap animated-section section aosAnim">
      <div className="scrollSection">
        <div className="container">
          <div className="investorRow">
            <h2 className="titleText">
              <span className="skyText">Join</span> our visionary <br />
              investor community
            </h2>
            <div className="investorWrap">
              <ul className="noList">
                <li>
                  {" "}
                  <figure>
                    <img loading="lazy" src={investor1} alt="" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img loading="lazy" src={investor2} alt="" />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img loading="lazy" src={investor3} alt="" />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorSection;
