import React, { useRef } from "react";
import "./index.css";

import disclaimerImg from "../../../assets/images/career/disclaimerImg.png";
function Disclaimer() {const reference = useRef(null);
  const handleClick = () => {
    // alert("hey");

    if (reference && reference.current) {
      reference.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="disclaimerSectionWrap animated-section section">
      <div className="container">
        <div className="row disclaimerWrap aosAnim">
          <div className="col-lg-7">
            <div className="founderCont">
              <div className="founderContBox">
                <h2 className="titleText">
                  <span className="gradientText skyText">Disclaimer</span>
                </h2>
                <p>
                  We created this page with utmost respect for our employees’
                  comfort and individual visions of
                  <br /> an ideal company. Any similarities to your dream
                  organisation are purely co-incidental. Let's build
                  <br /> a world where creativity thrives, bringing inspiration,
                  innovation, and diversity to our lives.
                </p>
                <a
                  href="#jobOpening"
                  onClick={handleClick}
                  // target="_blank"
                  className="npButton"
                  id="Careers_Section4_Disclaimer_SeeJobOpenings"
                >
                  See Job Openings
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="founderImg">
              <figure>
                <img loading="lazy" src={disclaimerImg} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
