import React from "react";
import "./index.css";
import t1 from "../../../assets/images/career/team1.png";
import t2 from "../../../assets/images/career/team2.png";
import t3 from "../../../assets/images/career/team3.png";
import t4 from "../../../assets/images/career/team4.png";
import t5 from "../../../assets/images/career/team5.png";
import t6 from "../../../assets/images/career/team6.png";
import careerBannerImg from "../../../assets/images/career/careerBannerImg.png";
import Container from "../../../Components/General/Container";
function HeroCareers() {
  return (
    <>
      <div className="mainBanner innerBanner marketbnr animated-section section">
        <div className="overflowSection">
          <Container>
            <div className="row bannerContent aosAnim">
              <div className="col-lg-7 leftBannerCont">
                <div className="bannerLeft">
                  <h2 className="titleText">
                    <span className="skyText">Choose</span> where <br />
                    you belong!
                  </h2>
                  <p>
                    Join our mission-driven organisation that values
                    <br /> creativity,
                    <br />
                    fun, and innovation. Help us shape the future of metal
                    <br />
                    manufacturing and procurement in our country.
                  </p>
                  <div className="newDiv">#NowPurchaseCareers</div>

                  <a
                    href="#jobOpening"
                    target="_blank"
                    className="npButton"
                    id="Careers_Section1_Landing_SeeJobOpenings"
                  >
                    See Job Openings
                  </a>
                </div>
              </div>
              <div className="col-lg-5 rightBannerImg">
                <div className="bannerRight">
                  <div className="bannerPoly">
                    <img
                      loading="lazy"
                      src={careerBannerImg}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className=" animated-section  teamSectionWrap triangleTopLeftBg ">
        <Container>
          <div className="row">
            <div className="col-lg-12 aosAnim">
              <h2 className="titleText">
                Check out our
                <span className="gradientText skyText"> NowPlayers!</span>
              </h2>
              <div class="teamBoxWrap teamBoxlider aosAnim slick-initialized slick-slider ltr">
                <div
                  class="slick-list draggable"
                  style={{ padding: "0px 15px" }}
                >
                  <div
                    class="slick-track"
                    style={{
                      opacity: 1,
                      width: "1296px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      class="imgBoxHolder slick-slide"
                      style={{ width: "216px" }}
                      data-slick-index="0"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <span class="yearTitle">June 2022</span>
                      <div class="imgBoxEach">
                        <div class="imgBox">
                          <img
                            style={{ height: "100%" }}
                            loading="lazy"
                            src={t1}
                            alt=""
                          />
                        </div>
                        <div class="imgCont">
                          <p>Debraj Dutta</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="imgBoxHolder slick-slide"
                      style={{ width: "216px" }}
                      data-slick-index="1"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <span class="yearTitle">October 2022</span>
                      <div class="imgBoxEach">
                        <div class="imgBox">
                          <img
                            style={{ height: "100%" }}
                            loading="lazy"
                            src={t2}
                            alt=""
                          />
                        </div>
                        <div class="imgCont">
                          <p>Rainark Saha</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="imgBoxHolder slick-slide"
                      style={{ width: "216px" }}
                      data-slick-index="2"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <span class="yearTitle">November 2022</span>
                      <div class="imgBoxEach">
                        <div class="imgBox">
                          <img
                            style={{ height: "100%" }}
                            loading="lazy"
                            src={t3}
                            alt=""
                          />
                        </div>
                        <div class="imgCont">
                          <p>Tanumoy Saha</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="imgBoxHolder slick-slide"
                      style={{ width: "216px" }}
                      data-slick-index="3"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <span class="yearTitle">December 2022</span>
                      <div class="imgBoxEach">
                        <div class="imgBox">
                          <img
                            style={{ height: "100%" }}
                            loading="lazy"
                            src={t4}
                            alt=""
                          />
                        </div>
                        <div class="imgCont">
                          <p>Debopam Ghosh</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="imgBoxHolder slick-slide slick-current slick-center"
                      style={{ width: "216px" }}
                      data-slick-index="4"
                      aria-hidden="true"
                      tabindex="0"
                    >
                      <span class="yearTitle">January 2023</span>
                      <div class="imgBoxEach">
                        <div class="imgBox">
                          <img
                            style={{ height: "100%" }}
                            loading="lazy"
                            src={t5}
                            alt=""
                          />
                        </div>
                        <div class="imgCont">
                          <p>Anish Kumar</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="imgBoxHolder slick-slide"
                      style={{ width: "216px" }}
                      data-slick-index="5"
                      aria-hidden="true"
                      tabindex="-1"
                    >
                      <span class="yearTitle">February 2023</span>
                      <div class="imgBoxEach">
                        <div class="imgBox">
                          <img
                            style={{ height: "100%" }}
                            loading="lazy"
                            src={t6}
                            alt=""
                          />
                        </div>
                        <div class="imgCont">
                          <p>Arya Vikram Singh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeroCareers;
