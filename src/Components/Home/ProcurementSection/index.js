import React from 'react'
import "./index.css"
import procureImg_1 from "../../../assets/images/icons/procureImg_1.png";
import procureImg_2 from "../../../assets/images/icons/procureImg_2.png";
import procureImg_3 from "../../../assets/images/icons/procureImg_3.png";
import procureImg_4 from "../../../assets/images/icons/procureImg_4.png";
import procureImg_5 from "../../../assets/images/icons/procureImg_5.png";
import procureImg_6 from "../../../assets/images/icons/procureImg_6.png";
import procureImg_7 from "../../../assets/images/icons/procureImg_7.png";
import procureImg_8 from "../../../assets/images/icons/procureImg_8.png";

function ProcurementSection() {
  return (
    <div className="procureSectionWrap animated-section section">
      <div className="overflowSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aosAnim ltr">
              <h2 className="titleText">
                Your <span className="skyText">Reliable</span> <br />
                Procurement Partner
              </h2>
              <div className="eachBoxWrap aosAnim ltr">
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_1} alt="" />
                  <h4>
                    One-Stop <br />
                    Solution
                  </h4>
                  <p>
                    Deal with all your raw material requirements with one
                    trusted partner
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_2} alt="" />
                  <h4>
                    Dedicated <br />
                    Relationship Manager
                  </h4>
                  <p>
                    A dedicated customer success manager who understands your
                    factory processes and challenges
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_3} alt="" />
                  <h4>
                    Transparency of <br />
                    market
                  </h4>
                  <p>
                    Get real time market prices of raw materials and RFQs, along
                    with order updates over WhatsApp
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_4} alt="" />
                  <h4>
                    Superb <br />
                    Quality Control
                  </h4>
                  <p>
                    Our inspectors ensure you receive what you request with
                    expertise and tools
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_5} alt="" />
                  <h4>
                    Tailored <br />
                    Scrap
                  </h4>
                  <p>
                    We tailor make scrap to your requirements with our in-house
                    scrap processing centre
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_6} alt="" />
                  <h4>
                    Inventory <br />
                    Planning
                  </h4>
                  <p>
                    Always procure at the right time and price by using our
                    inventory prediction systems
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_7} alt="" />
                  <h4>
                    Customized <br />
                    Financing Solutions
                  </h4>
                  <p>
                    Take care of cash flow tension free by using our flexible
                    financing options
                  </p>
                </div>
                <div className="eachBox">
                  <img loading="lazy" src={procureImg_8} alt="" />
                  <h4>
                    Streamlined <br />
                    Processing
                  </h4>
                  <p>
                    Streamline your manufacturing process by using our NP
                    MetalCloud platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcurementSection