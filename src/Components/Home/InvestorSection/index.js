import React from "react";
import "./index.css";
import investor1 from "../../../assets/images/logo/logo_1.png";
import investor2 from "../../../assets/images/logo/logo_2.png";
import investor3 from "../../../assets/images/logo/logo_3.png";
function InvestorSection() {
  return (
    <div className="investorSectionWrap animated-section section aosAnim ltr">
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
