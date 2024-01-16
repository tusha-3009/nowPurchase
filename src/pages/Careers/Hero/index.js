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
              <div className="teamBoxWrap teamBoxlider aosAnim">
                <div className="imgBoxHolder">
                  <span className="yearTitle">June 2022</span>
                  <div className="imgBoxEach">
                    <div className="imgBox">
                      <img
                        style={{ height: "100%" }}
                        loading="lazy"
                        src={t1}
                        alt=""
                      />
                    </div>
                    <div className="imgCont">
                      <p>Debraj Dutta</p>
                    </div>
                  </div>
                </div>

                <div className="imgBoxHolder">
                  <span className="yearTitle">October 2022</span>
                  <div className="imgBoxEach">
                    <div className="imgBox">
                      <img
                        style={{ height: "100%" }}
                        loading="lazy"
                        src={t2}
                        alt=""
                      />
                    </div>
                    <div className="imgCont">
                      <p>Rainark Saha</p>
                    </div>
                  </div>
                </div>

                <div className="imgBoxHolder">
                  <span className="yearTitle">November 2022</span>
                  <div className="imgBoxEach">
                    <div className="imgBox">
                      <img
                        style={{ height: "100%" }}
                        loading="lazy"
                        src={t3}
                        alt=""
                      />
                    </div>
                    <div className="imgCont">
                      <p>Tanumoy Saha</p>
                    </div>
                  </div>
                </div>

                <div className="imgBoxHolder">
                  <span className="yearTitle">December 2022</span>
                  <div className="imgBoxEach">
                    <div className="imgBox">
                      <img
                        style={{ height: "100%" }}
                        loading="lazy"
                        src={t4}
                        alt=""
                      />
                    </div>
                    <div className="imgCont">
                      <p>Debopam Ghosh</p>
                    </div>
                  </div>
                </div>

                <div className="imgBoxHolder">
                  <span className="yearTitle">January 2023</span>
                  <div className="imgBoxEach">
                    <div className="imgBox">
                      <img
                        style={{ height: "100%" }}
                        loading="lazy"
                        src={t5}
                        alt=""
                      />
                    </div>
                    <div className="imgCont">
                      <p>Anish Kumar</p>
                    </div>
                  </div>
                </div>

                <div className="imgBoxHolder">
                  <span className="yearTitle">February 2023</span>
                  <div className="imgBoxEach">
                    <div className="imgBox">
                      <img
                        style={{ height: "100%" }}
                        loading="lazy"
                        src={t6}
                        alt=""
                      />
                    </div>
                    <div className="imgCont">
                      <p>Arya Vikram Singh</p>
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
