import React from 'react'
import "./index.css"
import tickImg from "../../../assets/images/application/list-1.png";
import crossImg from "../../../assets/images/application/list-2.png";
import Price1 from "../../../assets/images/application/price-1.png";
import Price2 from "../../../assets/images/application/price-2.png";
import Container from '../../../Components/General/Container';
function PlansPricing() {
  return (
    <div className="priceSec animated-section section aosAnim " id="sec25">
      <div className="overflowSection">
        <Container>
          <div className="sechead keyHead aosAnim ">
            <h3>
              <span className="gradientText skyText">Plans</span> &amp; Pricing
            </h3>
          </div>
          <div className="row priceSecWrap aosAnim ">
            <div className="col-md-6 pricewrapHolder">
              <div className="pricewrap">
                <div className="priceHead d-flex justify-content-between align-items-center">
                  <div className="priceIc ic-1 d-flex align-items-center">
                    <div className="priceImg">
                      <img
                        loading="lazy"
                        src={Price1}
                        alt=""
                      />
                    </div>
                    <h4>Lite</h4>
                  </div>
                </div>
                <div className="prBodyWrap">
                  <div className="priceBody">
                    <h4>Dashboard</h4>
                    <ul>
                      <li>
                        <img loading="lazy" src={tickImg} alt="" />
                        <h5>Live Heat</h5>
                      </li>
                      <li>
                        <img loading="lazy" src={tickImg} alt="" />
                        <h5>Grade-wise Heat Distribution</h5>
                      </li>
                      <li>
                        <img loading="lazy" src={tickImg} alt="" />
                        <h5>Target Chemistry Deviation Tracking</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Alloy Consumption Estimation</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">Comparative Report</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>Spectrometer</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Mounted Tablet / TV Screen</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>
                          Live Spectrometer readings sent to WhatsApp + Tablet /
                          TV Screen + Website
                        </h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Cost efficient Addition Dilution Suggestion</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Log Sheet of all heats accessible from anywhere</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Real-time analytics on the heat data</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4 className="list-grey">ChargeMix</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">Charge Mix Organiser</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">
                          Least Cost Charge Mix Optimisation
                        </h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">Raw Material Suggestiont</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">Heat Planning</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>Inventory &amp; Grade</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Heat</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">
                          Edit Raw Material with Composition
                        </h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Add / Edit Grade</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={crossImg}
                          alt=""
                        />
                        <h5 className="list-grey">Add New Grade</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>Procurement</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Pricing of Raw Materials &amp; Alloys</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>RFQ Generation</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Order Tracking</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="prBtnA">
                    <a
                      href="/getInTouchForm"
                      className="npButton getInTouch"
                      id="MetalCloud_Section5_Plans_Lite_BookDemo"
                    >
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pricewrapHolder2">
              <div className="pricewrap">
                <div className="priceHead d-flex justify-content-between align-items-center">
                  <div className="priceIc ic-2 d-flex align-items-center">
                    <div className="priceImg">
                      <img
                        loading="lazy"
                        src={Price2}
                        alt=""
                      />
                    </div>
                    <h4>PRO</h4>
                  </div>
                </div>
                <div className="prBodyWrap">
                  <div className="priceBody">
                    <h4>Dashboard</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Heat</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Grade-wise Heat Distribution</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Target Chemistry Deviation Tracking</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Alloy Consumption Estimation</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Comparative Report</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>Spectrometer</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Mounted Tablet / TV Screen</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>
                          Live Spectrometer readings sent to WhatsApp + Tablet /
                          TV Screen + Website
                        </h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Cost efficient Addition Dilution Suggestion</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Log Sheet of all heats accessible from anywhere</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Real-time analytics on the heat data</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>ChargeMix</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Charge Mix Organiser</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Least Cost Charge Mix Optimisation</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Raw Material Suggestiont</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Heat Planning</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>Inventory &amp; Grade</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Heat</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Edit Raw Material with Composition</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Add / Edit Grade</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Add New Grade</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="priceBody">
                    <h4>Procurement</h4>
                    <ul>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Pricing of Raw Materials &amp; Alloys</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>RFQ Generation</h5>
                      </li>
                      <li>
                        <img
                          loading="lazy"
                          src={tickImg}
                          alt=""
                        />
                        <h5>Live Order Tracking</h5>
                      </li>
                    </ul>
                  </div>
                  <div className="prBtnA">
                    <a
                      href="/getInTouchForm"
                      className="npButton getInTouch"
                      id="MetalCloud_Section5_Plans_Pro_BookDemo"
                    >
                      Book Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PlansPricing