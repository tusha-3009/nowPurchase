import React from "react";
import "./index.css";
import Container from "../../General/Container";
import TechnologyPic from "../../../assets/images/home/bannerImg.svg";
function TechnologyDriven() {
  return (
    <div
      className="mainBanner homebnr marketbnr 
  animated-section section pb-0"
    >
      <div className="overflowSection">
        <Container>
          <div className="row bannerContent ltr aosAnim">
            <div class="col-md-6 leftBannerCont">
              <div class="bannerLeft">
                <h2 className="titleText">
                  Technology-driven <br />
                  <span class="skyText">Procurement</span> platform <br />
                  for Metal Manufacturers
                </h2>
                <p>
                  We're dedicated to supporting you in <br />
                  achieving higher levels of productivity, <br />
                  transforming local economies, and creating <br />
                  job opportunities for millions of people
                </p>
              </div>
            </div>

            <div class="col-md-6 rightBannerImg">
              <div class="bannerRight">
                <div class="bannerPoly">
                  <img
                    loading="lazy"
                    src={TechnologyPic}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="businessSectionWrap triangleTopLeftBg">
          <Container>
            <div className="row">
              <div className="col-lg-12 aosAnim ltr">
                <h2 class="titleText">
                  {" "}
                  <span class="skyText">Loved </span>by businesses
                  <br />
                  everywhere{" "}
                </h2>
                <div className="imgBoxWrap imgBoxlider slick-initialized slick-slider">
                  <div className="slick-list"></div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default TechnologyDriven;
