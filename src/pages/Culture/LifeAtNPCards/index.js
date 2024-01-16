import React from 'react'
import "./index.css"
import arrowPic from "../../../assets/images/marketplace/test-arrow.png";
import f10 from "../../../assets/images/people/File10.png";
import f15 from "../../../assets/images/people/File15.png";
import p1 from "../../../assets/images/people/people_1.png";
import f13 from "../../../assets/images/people/File13.png";
import p6 from "../../../assets/images/people/people_6.png";
import Container from '../../../Components/General/Container';
function LifeAtNPCards() {
  return (
    <div
      class="testSec testCulture animated-section section aosAnim ltr"
      id="sec44"
    >
      <div class="scrollSection1">
        <Container>
          <div class="testSecWrap">
            <div class="testmain d-flex justify-content-between align-items-end">
              <div
                class="sechead keyHead mb-0 aos-init aos-animate"
                data-aos="fade-right"
              >
                <h3>
                  <span>What</span> is <br />
                  life at NowPurchase?
                </h3>
              </div>
              <div
                class="test-nav nav-style-one aos-init aos-animate"
                data-aos="fade-left"
              >
                <div
                  class="test_arrow test-prev prev swiper-button-disabled"
                  id="Culture_Section4_Testimonials_ArrowLeft"
                  tabindex="-1"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                >
                  <img loading="lazy" src={arrowPic} alt="" />
                </div>
                <div
                  class="test_arrow test-next next"
                  id="Culture_Section4_Testimonials_ArrowRight"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                >
                  <img loading="lazy" src={arrowPic} alt="" />
                </div>
              </div>
            </div>

            <div
              class="swiper testSlider swiper-container-initialized swiper-container-horizontal aos-init aos-animate"
              data-aos="fade-right"
            >
              <div
                class="swiper-wrapper shuffle"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  class="swiper-slide swiper-slide-active"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <div class="cTestImage">
                      <img
                        loading="lazy"
                        src={f10}
                        style={{ width: "160px" }}
                        alt=""
                      />
                    </div>
                    <p>
                      NowPurchase offers enjoyable work freedom, values input,
                      and fosters a friendly, productive atmosphere with a
                      positive work culture that respects individual approaches
                      and ideas.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <div class="testName">
                          <h4>Subhajit Bhattacharya</h4>
                          <h5>Senior Executive</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-next"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <div class="cTestImage">
                      <img
                        loading="lazy"
                        src={f15}
                        style={{ width: "160px" }}
                        alt=""
                      />
                    </div>
                    <p>
                      Respect and appreciation,Work-life balance,Collaboration
                      and teamwork,Learning and growth opportunities
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <div class="testName">
                          <h4>Joydeep Sen</h4>
                          <h5>MIS Executive</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <div class="cTestImage">
                      <img loading="lazy" style={{ width: "160px" }} alt="" />
                    </div>
                    <p>
                      My NowPurchase Journey has been exceptional, I have
                      learned a lot and I still learn something new everyday.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <div class="testName">
                          <h4>Sachin Singh</h4>
                          <h5>General Manager - Sales</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <div class="cTestImage">
                      <img
                        loading="lazy"
                        src={p1}
                        style={{ width: "160px" }}
                        alt=""
                      />
                    </div>
                    <p>
                      I absolutely love the vibe and excitement that comes with
                      my work. It's like having a free pass to try out all sorts
                      of cool things.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <div class="testName">
                          <h4>Harsh Moondra</h4>
                          <h5>Assistant Manager - Sales</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <div class="cTestImage">
                      <img
                        loading="lazy"
                        src={p6}
                        style={{ width: "160px" }}
                        alt=""
                      />
                    </div>
                    <p>
                      I feel very proud to be one of the oldest employees of
                      NowPurchase. My career has skied with the growth of the
                      company.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <div class="testName">
                          <h4>Nishant Singh</h4>
                          <h5>Senior Engineering Manager</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  style={{ width: "625.124px", marginRight: "50px" }}
                >
                  <div class="testCard">
                    <div class="cTestImage">
                      <img
                        loading="lazy"
                        src={f13}
                        style={{ width: "160px" }}
                        alt=""
                      />
                    </div>
                    <p>
                      Five years at NowPurchase, a supportive home-like
                      environment. The people, atmosphere, and exceptional
                      higher management create a welcoming space that feels like
                      family.
                    </p>
                    <div class="testDetail">
                      <div class="testIc">
                        <div class="testName">
                          <h4>Ashish Singh</h4>
                          <h5>Accounts - Assistant Manager</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                class="swiper-notification"
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

export default LifeAtNPCards