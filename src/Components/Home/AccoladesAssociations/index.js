import React from 'react'
import "./index.css"
import media5 from "../../../assets/images/home/media/media5.png";
import media6 from "../../../assets/images/home/media/media6.png";
import media7 from "../../../assets/images/home/media/media7.png";
import media8 from "../../../assets/images/home/media/media8.png";

function AccoladesAssociations() {
  return (
    <section
      class="mediaSectionWrap mediaSectionWrapA animated-section section aosAnim"
      id="sec17"
    >
      <div class="scrollSection">
        <div class="container">
          <div class="mediaRow">
            <h2 class="titleText">
              Our <span class="skyText">Accolades</span> & <br />{" "}
              <span class="skyText">Associations</span>
            </h2>
            <div class="mediaWrap mediaSlider">
              <div class="eachMediaBoxAcc">
                <figure>
                  <img loading="lazy" src={media5} alt="" />
                </figure>
                <div class="mediaTextAcc">
                  <p>
                    Featured in{" "}
                    <strong>Financial Times Fastest Growing List</strong>
                  </p>
                </div>
              </div>
              <div class="eachMediaBoxAcc">
                <figure
                  style={{
                    background: "#f0f0f0",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <img loading="lazy" src={media6} alt="" />
                </figure>
                <div class="mediaTextAcc">
                  <p>
                    Received <br />
                    <strong>Dun & Bradstreet Startup50 2023</strong> Award
                  </p>
                </div>
              </div>

              <div class="eachMediaBoxAcc">
                <figure>
                  <img loading="lazy" src={media7} alt="" />
                </figure>
                <div class="mediaTextAcc">
                  <p>
                    We are now a Member of{" "}
                    <strong>Material Recycling Association of India</strong>
                  </p>
                </div>
              </div>

              <div class="eachMediaBoxAcc">
                <figure>
                  <img loading="lazy" src={media8} alt="" />
                </figure>
                <div class="mediaTextAcc">
                  <p>
                    Featured in{" "}
                    <strong>
                      {" "}
                      The Economic Times Top 50 India’s Growth Champions 2023
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccoladesAssociations