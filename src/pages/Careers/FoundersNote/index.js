import React from 'react'
import "./index.css"
import founderPic from "../../../assets/images/career/founder.png";
function FoundersNote() {
  return (
    <div class="founderSectionWrap animated-section section">
      <div class="scrollSection">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="foundersWrap row aosAnim"
                style={{justifyContent: "space-between"}}
              >
                <div class="founderCont col-lg-7">
                  <h2 class="titleText">
                    Founder’s <span class="gradientText skyText">Note</span>
                  </h2>
                  <p>
                    We believe that manufactures deserve the same level of
                    convenience as consumers when it comes to procurement.
                  </p>
                  <p>
                    Metal forms the backbone of the economy and we believe
                    transforming procurement for metal manufacturers is going to
                    be a key pillar in driving efficient growth for the economy.
                  </p>
                  <p>
                    NowPurchase is being built by a diverse set of people who
                    are the foundation of our ethos & culture. We are excited to
                    have you be a part of this journey that will be full of fun,
                    hard work, and challenges. Most of all we want you to bring
                    your unique identity to this squad and voice your opinion
                    while being empathetic to our greater vision.
                  </p>
                  <p>Let’s do this, together.</p>
                </div>
                <div class="founderImg col-lg-3">
                  <figure>
                    <img
                      loading="lazy"
                      src={founderPic}
                      alt=""
                    />
                  </figure>
                  <strong class="name">Naman Shah</strong>
                  <span class="desg">Founder & CEO, NowPurchase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoundersNote