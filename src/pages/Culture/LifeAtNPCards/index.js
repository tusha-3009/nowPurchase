import React, { useRef } from "react";
import "./index.css";
import arrow from "../../../assets/images/marketplace/test-arrow.png";
import p1 from "../../../assets/images/people/File10.png";
import p2 from "../../../assets/images/people/File15.png";
import p3 from "../../../assets/images/people/people_1.png";
import p4 from "../../../assets/images/people/File13.png";
import p5 from "../../../assets/images/people/people_6.png";
import Container from "../../../Components/General/Container";
import Slider from "react-slick";
const testimonials = [
  {
    quote:
      " Respect and appreciation,Work-life balance,Collaboration and teamwork,Learning and growth opportunities",
    name: "Joydeep Sen",
    empImg: p2,
    title: "MIS Executive",
  },
  {
    quote:
      " NowPurchase offers enjoyable work freedom, values input,and fosters a friendly, productive atmosphere with a positive work culture that respects individual approaches and ideas.",
    name: "Subhajit Bhattacharya",
    empImg: p1,
    title: "Senior Executive",
  },

  {
    quote:
      "  My NowPurchase Journey has been exceptional, I have learned a lot and I still learn something new everyday.",
    name: "Harsh Moondra",
    empImg: p3,
    title: "Assistant Manager-Sales",
  },

  {
    quote:
      " I absolutely love the vibe and excitement that comes with my work. It's like having a free pass to try out all sorts of cool things.",
    name: "Ashish Singh",
    empImg: p4,
    title: "Finance Manager-Sales",
  },
  {
    quote:
      "I feel very proud to be one of the oldest employees of NowPurchase. My career has skied with the growth of the company.",
    name: "Nishant Singh",
    empImg: p5,
    title: "Senior Engineering Manager",
  },
];

const TestimonialCard = ({ quote, name, empImg, title, companyLogo }) => (
  <div className="testCard1">
    <div class="cTestImage">
      <img src={empImg} style={{ width: "100%" }} alt="" />
    </div>
    <p>{quote}</p>
    <div class="testDetail">
      <div class="testIc">
        <div class="testName">
          <h4>{name}</h4>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  </div>
);

const LifeAtNPCards = () => {
  const sliderRef = useRef(null);

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (window.innerWidth > 828) {
    sliderSettings.slidesToShow = 2;
  } else {
    sliderSettings.slidesToShow = 1;
  }

  return (
    <>
      <div
        className="testSec testCulture animated-section section sectionCards aosAnim ltr "
        id="sec16"
      >
        <div className="scrollSection1">
          <div className="container">
            <div className="testSecWrap">
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
                    onClick={goToPrevious}
                    style={{ userSelect: "none" }}
                  >
                    <img loading="lazy" src={arrow} alt="" />
                  </div>
                  <div
                    class="test_arrow test-next next"
                    id="Culture_Section4_Testimonials_ArrowRight"
                    tabindex="0"
                    role="button"
                    onClick={goToNext}
                    style={{ userSelect: "none" }}
                  >
                    <img loading="lazy" src={arrow} alt="" />
                  </div>
                </div>
              </div>

              <Slider ref={sliderRef} {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <div className="swiper testSlider">
                    <div className="swiper-slide">
                      <TestimonialCard key={index} {...testimonial} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeAtNPCards;

/*
 <section class="testSec testCulture animated-section section aosAnim" id="sec44">
                <div class="scrollSection1">
                    <div class="container">
                        <div class="testSecWrap">
                            <div class="testmain d-flex justify-content-between align-items-end">

                                <div class="sechead keyHead mb-0" data-aos="fade-right">
                                    <h3><span>What</span> is <br>life at NowPurchase?</h3>
                                </div>
                                <div class="test-nav nav-style-one" data-aos="fade-left">
                                    <div class="test_arrow test-prev prev" id = "Culture_Section4_Testimonials_ArrowLeft">
                                        <img loading="lazy" src="assets/images/marketplace/test-arrow.png" alt="">
                                    </div>
                                    <div class="test_arrow test-next next" id = "Culture_Section4_Testimonials_ArrowRight">
                                        <img loading="lazy" src="assets/images/marketplace/test-arrow.png" alt="">
                                    </div>
                                </div>
                            </div>
                            

                            <div class="swiper testSlider" data-aos="fade-right">
                                <div class="swiper-wrapper shuffle">
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_6.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>I feel very proud to be one of the oldest employees of NowPurchase. My
                                                career has skied with the growth of the company.</p>
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
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_2.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>My NowPurchase Journey has been exceptional, I have learned a lot and I
                                                still learn something new everyday.</p>
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
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_5.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>I like the positive company culture and the support of our senior
                                                management, guiding to make the work environment conducive to grow &
                                                collaborate.
                                            </p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Agniv Guha</h4>
                                                        <h5>Category Development Officer - Metal Scrap</h5>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_9.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>The continuous zeal to hustle and the fantastic atmosphere of the office
                                                keep me motivated at NowPurchase.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Sreejita Chatterjee</h4>
                                                        <h5>Senior Executive - Human Resources</h5>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_8.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>There is a great receptiveness to ideas here, where each person
                                                recognizes their value and embraces their role, resulting in happy faces
                                                everywhere.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Prateek Losalka</h4>
                                                        <h5>General Manager - Finance</h5>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_7.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>The culture and structure of NowPurchase make it an exceptional platform
                                                for aspiring individuals, as well as established veterans.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Arghyadeep Acharya</h4>
                                                        <h5>Executive - Purchase</h5>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/people_1.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>I absolutely love the vibe and excitement that comes with my work. It's
                                                like having a free pass to try out all sorts of cool things.</p>
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
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File3.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>At NowPurchase, I evolved personally and professionally. Starting
                                                inexperienced, with managerial backing, I thrived in a nurturing,
                                                developing environment.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Depoman Ghosh</h4>
                                                        <h5>Graduate Engineer Trainee</h5>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File4.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>NowPurchase values innovation, fosters teamwork, and delivers excellence,
                                                making it a rewarding experience to contribute to a customer-focused,
                                                forward-thinking company.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Shubham Jaiswal</h4>
                                                        <h5>Front End Developer - Intern</h5>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File5.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>Working here is not just fun but the ambience & the energy around is
                                                nothing less than spectacular.
                                                “Monday never feels like Monday.”</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Mayukh Bhattacharjee</h4>
                                                        <h5>Administration Executive</h5>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File6.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>At NowPurchase, it's a dream with positive vibes, support, learning, and
                                                proactive, stereotype-breaking management that empowers growth and
                                                expression.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Velivel Susheela Banerjee</h4>
                                                        <h5>Executive Assistant to the CEO</h5>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File7.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>At NowPurchase, I lead UX, igniting collaborative creativity.
                                                Precision-filled pixels, supported by leadership, craft impactful
                                                experiences, making interface design exhilarating journeys of growth.
                                            </p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Umang Singh</h4>
                                                        <h5>Lead User Experience Designer</h5>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File8.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>Incredible internship opportunity! Supportive team, valuable learning and
                                                inspiring atmosphere. Grateful to NowPurchase for his experience.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Avantika Sharma</h4>
                                                        <h5>HR Intern</h5>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File10.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>NowPurchase offers enjoyable work freedom, values input, and fosters a
                                                friendly, productive atmosphere with a positive work culture that
                                                respects individual approaches and ideas.</p>
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
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File11.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>Joyful journey with valued teamwork, creative support, and
                                                forward-thinking leadership. Supportive colleagues, positive ambiance,
                                                define NowPurchase's fulfilling, growth-focused environment.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Hemadri Das</h4>
                                                        <h5>Client Service Co-ordinator</h5>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File12.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>As a Sales Co-ordinator at NowPurchase, I've thrived in valuing clients,
                                                teamwork, and ethical values. The diverse product range and supportive
                                                atmosphere enrich this fulfilling experience.</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Ayushi</h4>
                                                        <h5>Sales Co-ordinator</h5>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File13.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>Five years at NowPurchase, a supportive home-like environment. The
                                                people, atmosphere, and exceptional higher management create a welcoming
                                                space that feels like family.</p>
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
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File14.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>I fell in love with the culture & ambiance.. It's like an open skyline..
                                                Where we have miles to go...</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Priya dutta</h4>
                                                        <h5>Executive - Data entry</h5>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File15.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>Respect and appreciation,Work-life balance,Collaboration and
                                                teamwork,Learning and growth opportunities</p>
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
                                    <div class="swiper-slide">
                                        <div class="testCard">
                                            <div class="cTestImage">
                                                <img loading="lazy" src="assets/images/people/File16.png"
                                                    style="width:100%" alt="">
                                            </div>
                                            <p>Working here is a beautiful experience! Learning opportunity and great
                                                team work! Great work life balance!</p>
                                            <div class="testDetail">
                                                <div class="testIc">

                                                    <div class="testName">
                                                        <h4>Atanu Paul</h4>
                                                        <h5>Senior Executive Purchase</h5>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */
