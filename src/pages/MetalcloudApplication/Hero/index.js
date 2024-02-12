import React from 'react';
import "./index.css";
import marketPlacePic from "../../../assets/images/marketplace/bnrPlay.png"
import locationLogo from "../../../assets/images/marketplace/loc.png";
import applPoly from "../../../assets/images/application/applPoly.png";
import Container from '../../../Components/General/Container';
function MeltingProcessMadeReliable() {
  return (
    <div
      class="marketbnr animated-section section serviceSec pb-0"
      
      id="sec21"
    >
      <div class="overflowSection">
        <Container>
          <div class="row bannerContent aosAnim">
            <div class="col-md-7 leftBannerCont">
              <div class="bannerLeft">
                <h2>Your Melting Process, Now Made Reliable!</h2>
                <p>
                  Get accurate addition/dilution suggestions, cost savings in
                  ChargeMix, real-time heat analytics, and pricing dashboard for
                  your raw materials via WhatsApp and tab.
                </p>
                <a
                  href="/getInTouchForm"
                  class="npButton getInTouch"
                  id="MetalCloud_Section1_Landing_EnquireNow"
                >
                  Book Demo
                </a>
              </div>
            </div>
            <div class="col-md-5 rightBannerImg">
              <div class="bannerRight">
                <div class="bannerPoly bannerPoly1">
                  <img src={applPoly} alt="" />
                  <video class="video" autoplay muted loop id="hoverVideo">
                    <source
                      src="assets/images/application/dummy.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <a
                    href="https://www.youtube.com/embed/664mYn1fjQs"
                    class="bnrPlay"
                    id="MetalCloud_Section1_Landing_VideoPlay"
                    data-fancybox
                  >
                    <img loading="lazy" src={marketPlacePic} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div class="addr aosAnim">
          <Container>
            <div class="locWrap d-flex align-items-center">
              <div class="locIcon">
                <img loading="lazy" src={locationLogo} alt="" />
              </div>
              <div class="locAddr d-flex align-items-center">
                <div class="eachLoc">
                  <h4>All India</h4>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div class="keyNumber triangleTopLeftBg" id="">
          <Container>
            <div class="row">
              <div class="col-lg-12 aosAnim">
                <div class="sechead keyHead">
                  <h3>
                    <span>Elevating</span> your Metal Manufacturing
                    <br />
                    with technology
                  </h3>
                </div>

                <div class="keyWrap">
                  <div class="eachkey">
                    <h4>
                      <span class="counter">93</span>% Accurate
                    </h4>
                    <h6>Addition/Dilution Suggestion</h6>
                  </div>
                  <div class="eachkey">
                    <h4>
                      <span class="counter">25</span>% Reduction
                    </h4>
                    <h6>in Metallurgical Rejection</h6>
                  </div>
                  <div class="eachkey">
                    <h4>
                      <span class="counter">10</span>% Reduced
                    </h4>
                    <h6>Production Time</h6>
                  </div>
                  <div class="eachkey">
                    <h4>
                      <span class="counter">6</span>% Minimised
                    </h4>
                    <h6>Production Costs</h6>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MeltingProcessMadeReliable