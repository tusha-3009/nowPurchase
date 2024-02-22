import React from 'react'
import "./index.css"
import privilegePic1 from "../../../assets/images/career/icons/priviImg_1.png";
import privilegePic2 from "../../../assets/images/career/icons/priviImg_2.png";
import privilegePic3 from "../../../assets/images/career/icons/priviImg_3.png";
import privilegePic4 from "../../../assets/images/career/icons/priviImg_4.png";
import privilegePic5 from "../../../assets/images/career/icons/priviImg_5.png";
import privilegePic6 from "../../../assets/images/career/icons/priviImg_6.png";
import privilegePic7 from "../../../assets/images/career/icons/priviImg_7.png";
import privilegePic8 from "../../../assets/images/career/icons/priviImg_8.png";
import privilegePic9 from "../../../assets/images/career/icons/priviImg_9.png";
function PrivilegeCards() {
  
  return (
    <div className="privilegeSectionWrap procureSectionWrap animated-section section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 aosAnim">
            <h2 className="titleText">
              <span className="gradientText skyText">Unlock</span> a world of
              <br />
              exclusive privileges and perks!
            </h2>
            <div className="eachBoxWrap">
              <div className="eachBox">
                <img loading="lazy" src={privilegePic1} alt="" />
                <h4>Health &amp; Wellness</h4>
                <p>
                  All our employees get Accidental Death & Medical Insurance
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic2} alt="" />
                <h4>Financial Well-Being</h4>
                <p>
                  Competitive compensation with equity opportunities / ESOPS
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic3} alt="" />
                <h4>Flexibility &amp; Time Off</h4>
                <p>
                  Paid time off, including casual, bereavement, sick leave, and
                  holidays
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic4} alt="" />
                <h4>Family Support &amp; Care</h4>
                <p>
                  We very well understand your needs. Maternal & Paternal Leaves
                  are a part of the system
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic5} alt="" />
                <h4>Recognition &amp; Awards</h4>
                <p>
                  Acknowledge exceptional employees by awarding the NowPlayer
                  Award every month
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic6} alt="" />
                <h4>Promotions &amp; Increments</h4>
                <p>
                  The organization conducts annual appraisals to evaluate
                  performance & roll our promotions
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic7} alt="" />
                <h4>Personal &amp; Professional Growth</h4>
                <p>
                  We help you with paid online professional development courses
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic8} alt="" />
                <h4>NowPurchase Extras</h4>
                <p>
                  On-site meals and snacks, game arcade, and inspiring spaces to
                  work
                </p>
              </div>
              <div className="eachBox">
                <img loading="lazy" src={privilegePic9} alt="" />
                <h4>Zumba &amp; Yoga Sessions</h4>
                <p>
                  Minimise stress levels and enhance team unity and job
                  contentment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivilegeCards