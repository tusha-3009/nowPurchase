import React from "react";
import "./index.css"
import mapIcon from "../../../assets/images/career/mapIcon.svg";
import timerIcon from "../../../assets/images/career/timerIcon.svg";
// import eventIFEX5 from "../../../assets/images/events/eventIFEX5.png";
// import eventIFEX3 from "../../../assets/images/events/eventIFEX3.png";
// import eventIFEX4 from "../../../assets/images/events/eventIFEX4.png";
// import eventIFEX2 from "../../../assets/images/events/eventIFEX2.png";
// import eventBg from "../../../assets/images/events/eventBg.png";
function EventsPage() {
  return (
    <>
      <div className="event1">
        <div className="container">
          <div className="eventHead aosAnim">
            <h3 className="titleText">Upcoming Events</h3>
            <p>
              Listed are events that NowPurchase is going to be a part of. These
              are tentative and <br />
              can change at any time without prior notice.
            </p>
          </div>
          <div className="eventMWrap aosAnim">
            <div className="tabContBox">
              <div className="topBar">
                <h4>INTER FOUNDRY 2024</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Codissia Trade Fair Complex, Coimbatore</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>August 22 - 24, 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox">
                <a
                  href="http://www.fdfindia.org/"
                  target="_blank"
                  className="knowMoreBtn gradientBtn"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="tabContBox">
              <div className="topBar">
                <h4>IFFE 2024</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Kolhapur, India</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>Febr/uary (TBD)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
            <div className="tabContBox">
              <div className="topBar">
                <h4>IFEX 2024</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>
                        Bangalore International Exhibition Centre, Bengaluru,
                        India
                      </span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>2-4th Febr/uary, 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
            <div className="tabContBox">
              <div className="topBar">
                <h4>Cast Indo Expo</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>BIEC, Bangalore</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>2-4th Febr/uary, 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="event1 event2 pt-0">
        <div className="container">
          <div className="eventHead aosAnim">
            <h3 className="titleText">Previous Events</h3>
            <p>
              Listed are events that NowPurchase is going to be a part of. These
              are tentative and can change at any time without prior notice.
            </p>
          </div>

          <div className="eventMWrap aosAnim">
            <div className="tabContBox">
              <div className="topBar">
                <h4>ISSE 2023</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>
                        Helipad Exhibition Centre, Sector 17, Gandhinagar
                      </span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>28th-30th November</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
            <div className="tabContBox">
              <div className="topBar">
                <h4>IIM-ATM 2023</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>KIIT, Bhubaneswar</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>November 22-24, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
            <div className="tabContBox">
              <div className="topBar">
                <h4>ISME 2023</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Eco Park, Rajarhat, Kolkata</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>November 6-9, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
            <div className="tabContBox">
              <div className="topBar">
                <h4>Bureau of Middle East Recycling (BMR)</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Dubai, United Arab Emirates</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>20-21st October 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
          </div>
          <div className="eventFull aosAnim">
            <div className="row">
              <div className="col-md-6">
                <div className="eventImgM">
                  <img
                    loading="lazy"
                    styles={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX5}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tabContBox">
                  <div className="topBar">
                    <h4>MAKH Annual General Meeting</h4>
                  </div>
                  <div className="mainBox">
                    <div className="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Hotel Pavillion, Shahupuri, Kolhapur</span>
                        </li>
                        <li>
                          <img loading="lazy" src={timerIcon} alt="" />
                          <span>October 13 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventMWrap aosAnim">
            <div className="tabContBox">
              <div className="topBar">
                <h4>GIFA (SOUTH-EAST ASIA)</h4>
                <div className="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Bangkok, Thailand</span>
                    </li>
                    <li>
                      <img loading="lazy" src={timerIcon} alt="" />
                      <span>20-23rd September 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
          </div>

          <div className="eventFull aosAnim">
            <div className="row">
              <div className="col-md-6">
                <div className="eventImgM">
                  <img
                    loading="lazy"
                    styles={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX3}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tabContBox">
                  <div className="topBar">
                    <h4>Goshima Annual General Meeting</h4>
                  </div>
                  <div className="mainBox">
                    <div className="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Pavillion Hotel, Assembly Road, Kolhapur</span>
                        </li>
                        <li>
                          <img loading="lazy" src={timerIcon} alt="" />
                          <span>October 1, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventFull aosAnim">
            <div className="row">
              <div className="col-md-6">
                <div className="eventImgM">
                  <img
                    loading="lazy"
                    styles={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX2}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tabContBox">
                  <div className="topBar">
                    <h4>EO Tech Expo</h4>
                  </div>
                  <div className="mainBox">
                    <div className="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>ITC Royal Bengal, Kolkata</span>
                        </li>
                        <li>
                          <img loading="lazy" src={timerIcon} alt="" />
                          <span>April 22, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="eventFull aosAnim">
            <div className="row">
              <div className="col-md-6">
                <div className="eventImgM">
                  <img loading="lazy" src={eventBg} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tabContBox">
                  <div className="topBar">
                    <h4>All India Steel Conclave</h4>
                  </div>
                  <div className="mainBox">
                    <div className="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Mayfair Lake Resort, Raipur (C.G.), India</span>
                        </li>
                        <li>
                          <img loading="lazy" src={timerIcon} alt="" />
                          <span>25 - 26 March, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventFull aosAnim">
            <div className="row">
              <div className="col-md-6">
                <div className="eventImgM">
                  <img
                    loading="lazy"
                    styles={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX4}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="tabContBox">
                  <div className="topBar">
                    <h4>Indian Foundry Congress &amp; IFEX 2023</h4>
                  </div>
                  <div className="mainBox">
                    <div className="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>India Expo Mart, Greater Noida, India</span>
                        </li>
                        <li>
                          <img loading="lazy" src={timerIcon} alt="" />
                          <span>Febr/uary 8–10, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default EventsPage;
