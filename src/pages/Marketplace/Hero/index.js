import React from "react";
import bnrpoly from "../../../assets/images/marketplace/bnrPoly.png";
import "./index.css";
import loca from "../../../assets/images/marketplace/loc.png";
import dummy from "../../../assets/images/dummy.mp4";
import bnrPlay from "../../../assets/images/marketplace/bnrPlay.png";
import Container from "../../../Components/General/Container";
function Hero() {
  return (
    <div
      className="marketbnr serviceSec animated-section section pb-0"
      id="sec31"
    >
      <div className="overflowSection">
        <Container>
          <div className="row bannerContent aosAnim ltr">
            <div className="col-md-7 leftBannerCont">
              <div className="bannerLeft">
                <h2 className="titleText">
                  <span className="skyText">One-stop</span> Solution for Quality
                  Procurement
                </h2>
                <p>
                  We understand the crucial role that procurement plays in
                  ensuring your manufacturing process can adapt to supply chain
                  challenges while maintaining quality
                </p>
                <a
                  href="#getInTouchForm"
                  className="npButton getInTouch"
                  id="MarketPlace_Section1_Landing_EnquireNow"
                >
                  Enquire Now
                </a>
              </div>
            </div>
            <div className="col-md-5 rightBannerImg">
              <div className="bannerRight">
                <div className="bannerPoly bannerPoly1">
                  <img src={bnrpoly} alt="" />

                  <video
                    className="video"
                    autoplay=""
                    muted=""
                    loop=""
                    id="hoverVideo"
                  >
                    <source src={dummy} type="video/mp4" />
                  </video>

                  <a
                    href="https://www.youtube.com/embed/O8rqmHvFmQY"
                    className="bnrPlay"
                    data-fancybox=""
                  >
                    <img loading="lazy" src={bnrPlay} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="addr aosAnim ltr">
          <div className="container">
            <div className="locWrap d-flex align-items-center">
              <div className="locIcon">
                <img loading="lazy" src={loca} alt="" />
              </div>
              <div className="locAddr d-flex align-items-center">
                <div className="eachLoc">
                  <h4>West Bengal</h4>
                </div>
                <div className="eachLoc">
                  <h4>Maharastra</h4>
                </div>
                <div className="eachLoc">
                  <h4>Karnataka</h4>
                </div>
                <div className="eachLoc">
                  <h4>Jharkhand</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="keyNumber triangleTopLeftBg" id="">
          <Container>
            <div className="row">
              <div className="col-lg-12 aosAnim ltr">
                <div className="sechead keyHead aosAnim ltr">
                  <h3>
                    <span>Our success</span> is a reflection
                    <br />
                    of your satisfaction
                  </h3>
                </div>

                <div className="keyWrap">
                  <div className="eachkey">
                    <h4>
                      <span className="counter">39000</span>+ Tonnes
                    </h4>
                    <h6>raw materials delivered</h6>
                  </div>
                  <div className="eachkey">
                    <h4>
                      <span className="counter">150</span>+ Clients
                    </h4>
                    <h6>savoured by our services</h6>
                  </div>
                  <div className="eachkey">
                    <h4>
                      <span className="counter">100,000</span>+ Orders
                    </h4>
                    <h6>received and delivered</h6>
                  </div>
                  <div className="eachkey">
                    <h4>
                      <span className="counter">98.1</span>% Delivery
                    </h4>
                    <h6>success on 1st attempt</h6>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Hero;
