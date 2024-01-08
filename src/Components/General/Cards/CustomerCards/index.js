import React from 'react'
import "./index.css"
import arrow from "../../../../assets/images/marketplace/test-arrow.png";
import e1 from "../../../../assets/images/marketplace/employee_mp1.png";
import c1 from "../../../../assets/images/marketplace/company_mp2.png";
import e2 from "../../../../assets/images/application/employee_mc2.png";
import c2 from "../../../../assets/images/application/company_mc3.png";
import e3 from "../../../../assets/images/marketplace/employee_mp4.png";
import c3 from "../../../../assets/images/marketplace/company_mp3.png";
import c4 from "../../../../assets/images/marketplace/company_mp1.png";
import e4 from "../../../../assets/images/marketplace/employee_mp3.png";
function CustomerCards() {
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
                  aria-disabled="false"
                >
                  <img loading="lazy" src={arrow} alt="" />
                </div>
                <div
                  className="test_arrow test-next next swiper-button-disabled"
                  id="Home_Section6_Testimonials_ArrowRight"
                  tabindex="-1"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="true"
                >
                  <img loading="lazy" src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="swiper testSlider swiper-container-initialized swiper-container-horizontal">
              <div
                class="swiper-wrapper"
                style={{
                  transform: "translate3d(-1347.46px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  class="swiper-slide swiper-slide-prev"
                  style={{ width: "627.114px", marginRight: "50px" }}
                >
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
                <div
                  class="swiper-slide swiper-slide-active"
                  style={{ width: "627.114px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <p>
                      We've significantly reduced melt time, thanks to the
                      invaluable dilution suggestions. The MetalCloud platform
                      is a game-changer for foundry processes.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img
                          src={e2}
                          alt=""
                        />
                        <div class="testName">
                          <h4>Pradeep Bera</h4>
                          <h5>Foundry Head</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img
                          src={c2}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-next"
                  style={{ width: "627.114px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <p>
                      Thanks to NowPurchase, our journey to success has been
                      nothing short of remarkable. Their customer-centric
                      approach ensured that our goals became their goals. With
                      personalized strategies and unwavering support.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img
                          src={e3}
                          alt=""
                        />
                        <div class="testName">
                          <h4>Yogesh Joshi</h4>
                          <h5>CEO</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img
                          src={c3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  style={{ width: "627.114px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <p>
                      Quality, reasonable price, and timely delivery are
                      important for me to work with a vendor. NowPurchase checks
                      all these requirements for me. And they are just a call
                      away whenever I need help.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <img
                          src={e4}
                          alt=""
                        />
                        <div class="testName">
                          <h4>Sikhar Jaiswal</h4>
                          <h5>Owner</h5>
                        </div>
                      </div>
                      <div class="testCompany">
                        <img
                          src={c4}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerCards