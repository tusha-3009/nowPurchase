import React from 'react'
import "./index.css"
import careerBannerNew from "../../../assets/images/career/careerBannerNew.png";
import clr1 from "../../../assets/images/culture/clr-1.png";
import clr4 from "../../../assets/images/culture/clr-4.png";
import clr2 from "../../../assets/images/culture/clr-2.png";
import clr5 from "../../../assets/images/culture/clr-5.png";
import clr3 from "../../../assets/images/culture/clr-3.png";
import clr6 from "../../../assets/images/culture/clr-6.png";
import tabTimeline from "../../../assets/images/culture/tabTimeline.jpg";
import mobTimeline from "../../../assets/images/culture/mobTimeline.jpg";
import carPic from "../../../assets/images/culture/car-1.png";
import  Container  from '../../../Components/General/Container';
function HeroPageCulture() {
  return (
    <div
      className="innerBanner  marketbnr  animated-section section pb-0"
      id="sec41"
      style={{ overflow: "hidden"}}
    >
      <div className="overflowSection1">
        <Container>
          <div
            className="row bannerContent aosAnim"
            style={{ flexWrap: "nowrap" }}
          >
            <div className="col-md-8 leftBannerCont">
              <div className="bannerLeft">
                <h2>
                  Diverse people, Different ideas: <br />
                  One platform
                </h2>
                <p>
                  At NowPurchase, we value uniqueness, diversity, and
                  exceptional <br />
                  teamwork. Our philosophy is simple: great things happen when{" "}
                  <br /> people come together to achieve a common goal.
                </p>
                <a
                  href="https://nowpurchase.notion.site/nowpurchase/Join-us-NowPurchase-bb37eb8f73444aef96bfd48b626bbbad"
                  id="Culture_Section1_Landing_SeeJobOpenings"
                  target="_blank"
                  className="npButton"
                >
                  See Job Openings
                </a>
              </div>
            </div>
            <div className="col-md-4 rightBannerImg">
              <div className="bannerRight">
                <div className="bannerPoly">
                  <img loading="lazy" src={careerBannerNew} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="keyNumber timelineSection triangleTopLeftBg" id="">
          <Container>
            <h3 className="titleText aosAnim">
              <span className="skyText gradientText">History</span> of
              NowPurchase <br />A Timeline
            </h3>
            <div className="demo-content motion-path-demo">
              <div className="clrBox">
                <div className="clrboxEach culture01" id="clr01">
                  <div className="clrImg">
                    <img loading="lazy" src={clr1} alt="" />
                  </div>
                  <h5>April 2017</h5>
                  <p>
                    NowPurchase founded with $300K Nipha investment; Hosanagar
                    joins as advisor
                  </p>
                </div>

                <div className="clrboxEach culture02" id="clr02">
                  <div className="clrImg">
                    <img loading="lazy" src={clr4} alt="" />
                  </div>
                  <h5>September 2019-20</h5>
                  <p>
                    Pivot: Supplying raw materials to Metal Manufacturers
                    <br />
                    R&D & Launch: Innovative Tech for Metal Manufacturers
                  </p>
                </div>

                <div className="clrboxEach culture03" id="clr03">
                  <div className="clrImg">
                    <img loading="lazy" src={clr2} alt="" />
                  </div>
                  <h5>January 2022</h5>
                  <p>
                    Orios Venture, InfoEdge back $2.4M Funding; Imports added to
                    business offerings
                  </p>
                </div>

                <div className="clrboxEach culture04" id="clr04">
                  <div className="clrImg">
                    <img loading="lazy" src={clr5} alt="" />
                  </div>
                  <h5>January 2023</h5>
                  <p>
                    Strengthening operations with new cluster offices in
                    Maharashtra & Karnataka
                  </p>
                </div>

                <div className="clrboxEach culture05" id="clr05">
                  <div className="clrImg">
                    <img loading="lazy" src={clr3} alt="" />
                  </div>
                  <h5>February 2023</h5>
                  <p>
                    Became one stop procurement for Metal Manufacturers, Served
                    100+ Customers
                  </p>
                </div>

                <div className="clrboxEach culture06" id="clr06">
                  <div className="clrImg">
                    <img loading="lazy" src={clr6} alt="" />
                  </div>
                  <h5>March 2023</h5>
                  <p>
                    NowPurchase MetalCloud got adopted by 50+ Metal
                    Manufacturers
                  </p>
                </div>
              </div>

              <svg
                id="svg"
                width="796"
                height="976"
                viewBox="0 0 796 1100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3318_14125)">
                  <path
                    d="M188.514 98.6731L188.514 98.6738C188.514 98.6738 188.406 98.8231 188.216 99.0657C188.318 98.9336 188.417 98.8028 188.514 98.6731Z"
                    fill="url(#paint0_linear_3318_14125)"
                  />

                  <path
                    className="theLine"
                    id="mainPath"
                    d="M2 38.4482C83.3907 28.1974 380.421 -20.5514 413.485 52.963C446.549 126.477 303.302 223.831 288.861 257.316C274.419 290.802 266.338 327.662 302.737 395.224C348.235 479.678 473.386 472.663 473.386 472.663C473.386 472.663 544.128 465.345 615.515 558.472C681.531 644.593 547.788 736.688 479.923 789.184C439.269 816.368 378.234 880.542 459.334 919.769C540.434 958.997 700.136 971.046 762.529 948.466"
                    stroke="#606060"
                    stroke-width="24.876"
                  />

                  <path
                    d="M413.484 52.9599C419.515 66.3701 419.68 80.5736 415.83 95.038M302.736 395.221C303.507 396.653 304.301 398.058 305.117 399.438C312.328 411.627 321.247 421.801 331.187 430.292M473.385 472.66C473.385 472.66 485.438 471.413 504.613 476.498M479.923 789.181C482.326 787.322 484.811 785.413 487.368 783.457L538.654 743.4M459.333 919.766C463.686 921.872 468.265 923.899 473.043 925.846C486.335 931.149 517.106 942.276 533.853 944.364M762.528 948.463C726.179 961.618 656.803 963.019 589.183 954.141M331.428 16.1103C350.964 18.3596 368.197 21.9945 381.953 27.4091M393.107 140.082C386.944 148.834 380.008 157.479 372.712 165.9M346.078 194.555C337.244 203.569 328.582 212.086 320.748 219.919M283.665 270.515C281.244 278.092 276.507 295.036 276.924 302.195M279.522 335.811C281.9 344.934 287.43 364.532 290.531 369.941M373.458 455.533C383.833 459.549 410.492 468.221 434.128 470.774M552.237 498.149C567.545 508.077 584.099 521.813 600.958 540.804M626.983 639.578C620.164 657.279 608.329 674.625 593.846 691.209M432.265 834.829C420.817 851.846 415.169 870.528 423.17 887.884M31.4023 34.5127C40.2405 33.3061 50.0145 31.9728 60.5268 30.5792L31.4023 34.5127ZM87.8852 27.0507C97.0643 25.9042 106.604 24.7539 116.407 23.6328L87.8852 27.0507ZM145.604 20.4809C155.626 19.4675 165.808 18.5129 176.059 17.648L145.604 20.4809ZM214.888 14.8715C225.995 14.2338 237.046 13.7463 247.925 13.4483L214.888 14.8715Z"
                    stroke="#F0F0F0"
                    stroke-width="1.01535"
                  />

                  <path
                    d="M761.145 949.089L786.379 937.743"
                    stroke="#606060"
                    stroke-width="24.876"
                  />
                </g>

                <image
                  className="ball ball01"
                  id="target"
                  width="76"
                  height="46"
                  href={carPic}
                ></image>

                <defs>
                  <linearGradient
                    id="paint0_linear_3318_14125"
                    x1="188.413"
                    y1="98.977"
                    x2="188.317"
                    y2="98.7618"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#808080" stop-opacity="0.25" />
                    <stop
                      offset="0.53514"
                      stop-color="#808080"
                      stop-opacity="0.12"
                    />
                    <stop offset="1" stop-color="#808080" stop-opacity="0.1" />
                  </linearGradient>
                  <clipPath id="clip0_3318_14125">
                    <rect width="796" height="976" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="tabTimelineBox">
              <img loading="lazy" src={tabTimeline} alt="" />
            </div>

            <div className="mobTimelineBox">
              <img loading="lazy" src={mobTimeline} alt="" />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HeroPageCulture