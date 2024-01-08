import React from 'react'
import "./index.css"
import culturePic from "../../../assets/images/home/culture_new.png"
import culturePic1 from "../../../assets/images/home/cultureImg1.png";
import culturePic2 from "../../../assets/images/home/cultureImg2.png";
import culturePic3 from "../../../assets/images/home/cultureImg3.png";
function CultureSection() {
  return (
    <div
      className="cultureSectionWrap animated-section section1 aosAnim ltr"
      id="sec15"
    >
      <div className="scrollSection">
        <div className="container">
          <div className="cultureRow">
            <div className="imgBox">
              <img
                loading="lazy"
                src={culturePic}
                style={{ width: "100%" }}
                className="lazy"
                alt=""
              />
            </div>
            <div className="contBox">
              <h2 className="titleText">
                <span className="skyText">Culture</span> that values <br />
                people
              </h2>
              <p>
                Where pride, passion, and purpose drive our community. We
                believe that culture and work ethics are the foundations of
                exponential growth
              </p>
              <ul className="noList" style={{marginBottom:"35px"}}>
                <li>
                  <img loading="lazy" src={culturePic1} alt="" />
                  <strong>Flexibility</strong>
                </li>
                <li>
                  <img loading="lazy" src={culturePic2} alt="" />
                  <strong>Relaxed Atmosphere</strong>
                </li>
                <li>
                  <img loading="lazy" src={culturePic3} alt="" />
                  <strong>Open and honest communication</strong>
                </li>
              </ul>

              <a
                className="knowMoreBtn gradientBtn"
                href="/culture"
                id="Home_Section5_Culture_KnowMore"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CultureSection
