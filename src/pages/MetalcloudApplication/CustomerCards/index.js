import React from "react";
// import "./index.css";
import testArrow from "../../../assets/images/marketplace/test-arrow.png";
import employee_mc4 from "../../../assets/images/application/employee_mc4.png";
import company_mc4 from "../../../assets/images/application/company_mc4.png";
import employee_mc3 from "../../../assets/images/application/employee_mc3.png";
import company_mc2 from "../../../assets/images/application/company_mc2.png";
import employee_mc2 from "../../../assets/images/application/employee_mc2.png";
import company_mc3 from "../../../assets/images/application/company_mc3.png";
import employee_mc1 from "../../../assets/images/application/employee_mc1.png";
import company_mc1 from "../../../assets/images/application/company_mc1.png";
import Container from "../../../Components/General/Container";
function CustomerCards() {
  return (
    <div className="testSec animated-section section aosAnim ltr" id="sec26">
      <div className="overflowSection">
        <Container>
          <div className="testSecWrap">
            <div className="testmain d-flex justify-content-between align-items-end">
              <div className="sechead keyHead aosAnim mb-0 ltr">
                <h3>
                  <span>Hear</span> what our customers <br />
                  are saying about us!
                </h3>
              </div>
              <div className="test-nav nav-style-one">
                <div
                  className="test_arrow test-prev prev swiper-button-disabled"
                  id="MetalCloud_Section6_Testimonials_ArrowLeft"
                  tabindex="-1"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                >
                  <img loading="lazy" src={testArrow} alt="" />
                </div>
                <div
                  className="test_arrow test-next next"
                  id="MetalCloud_Section6_Testimonials_ArrowRight"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                >
                  <img loading="lazy" src={testArrow} alt="" />
                </div>
              </div>
            </div>

            <div className="swiper testSlider swiper-container-initialized swiper-container-horizontal">
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div className="testCard">
                    <p>
                      The MetalCloud Spectrometer is fantastic! Its
                      user-friendly interface, instant data delivery to our
                      phones, and insightful data presentation have all helped
                      make our work easier.
                    </p>
                    <div className="testDetail">
                      <div className="testIc">
                        <img src={employee_mc4} alt="" />
                        <div className="testName">
                          <h4>Pankaj Phukan</h4>
                          <h5>MR Representative</h5>
                        </div>
                      </div>
                      <div className="testCompany">
                        <img src={company_mc4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div className="testCard">
                    <p>
                      MetalCloud has been a valuable addition! The automation,
                      ChargeMix suggestions, and real-time WhatsApp integration
                      have boosted efficiency and team collaboration. Truly
                      outstanding.
                    </p>
                    <div className="testDetail">
                      <div className="testIc">
                        <img src={employee_mc3} alt="" />
                        <div className="testName">
                          <h4>The Kolhapur Metals</h4>
                          <h5>MR Representative</h5>
                        </div>
                      </div>
                      <div className="testCompany">
                        <img src={company_mc2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div className="testCard">
                    <p>
                      We've significantly reduced melt time, thanks to the
                      invaluable dilution suggestions. The MetalCloud platform
                      is a game-changer for foundry processes.
                    </p>
                    <div className="testDetail">
                      <div className="testIc">
                        <img src={employee_mc2} alt="" />
                        <div className="testName">
                          <h4>Pradeep Bera</h4>
                          <h5>Foundry Head</h5>
                        </div>
                      </div>
                      <div className="testCompany">
                        <img src={company_mc3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div className="testCard">
                    <p>
                      MetalCloud has truly transformed our operations! With 100%
                      accurate chemistry corrections and valuable insights, it's
                      been a real game-changer. Highly recommended!
                    </p>
                    <div className="testDetail">
                      <div className="testIc">
                        <img src={employee_mc1} alt="" />
                        <div className="testName">
                          <h4>Prasad Mantri</h4>
                          <h5>Managing Director</h5>
                        </div>
                      </div>
                      <div className="testCompany">
                        <img src={company_mc1} alt="" />
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
        </Container>
      </div>
    </div>
  );
}

export default CustomerCards;
