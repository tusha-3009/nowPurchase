import React from "react";
import "./index.css";
import mapIcon from "../../../assets/images/career/mapIcon.svg";
import calenderIcon from "../../../assets/images/career/calendar-2-line.svg";
import eventIFEX5 from "../../../assets/images/events/eventIFEX5.png";
import eventIFEX3 from "../../../assets/images/events/eventIFEX3.png";
import eventIFEX4 from "../../../assets/images/events/eventIFEX4.png";
import eventIFEX2 from "../../../assets/images/events/eventIFEX2.png";
import eventIfex1 from "../../../assets/images/events/IFEX 2024.jpeg"
import eascon from "../../../assets/images/events/EASCON 2024.png";
import eventBg from "../../../assets/images/events/eventBg.png";
function EventsPage() {
  return (
    <>
      <div className="event1">
        <div class="container">
          <div class="eventHead aosAnim">
            <h3 class="titleText">Previous Events</h3>
            <p>
              Listed are events that NowPurchase is going to be a part of. These
              are tentative and can change at any time without prior notice.
            </p>
          </div>
          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img
                    loading="lazy"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIfex1}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>IFEX 2024 – 20th International Foundry Exhibition</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>
                            Bangalore International Exhibition Centre (BIEC)
                          </span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>February 2nd - 4th, 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img
                    loading="lazy"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eascon}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>EASCON - Re CASTING East</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Park Prime Hotel, Kolkata</span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>January 13, 2024</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eventMWrap aosAnim">
            <div class="tabContBox">
              <div class="topBar">
                <h4>ISSE 2023</h4>
                <div class="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>
                        Helipad Exhibition Centre, Sector 17, Gandhinagar
                      </span>
                    </li>
                    <li>
                      <img loading="lazy" src={calenderIcon} alt="" />
                      <span>28th-30th November</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mainBox"></div>
            </div>
            <div class="tabContBox">
              <div class="topBar">
                <h4>IIM-ATM 2023</h4>
                <div class="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>KIIT, Bhubaneswar</span>
                    </li>
                    <li>
                      <img loading="lazy" src={calenderIcon} alt="" />
                      <span>November 22-24, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mainBox"></div>
            </div>
            <div class="tabContBox">
              <div class="topBar">
                <h4>ISME 2023</h4>
                <div class="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Eco Park, Rajarhat, Kolkata</span>
                    </li>
                    <li>
                      <img loading="lazy" src={calenderIcon} alt="" />
                      <span>November 6-9, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mainBox"></div>
            </div>
            <div class="tabContBox">
              <div class="topBar">
                <h4>Bureau of Middle East Recycling (BMR)</h4>
                <div class="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Dubai, United Arab Emirates</span>
                    </li>
                    <li>
                      <img loading="lazy" src={calenderIcon} alt="" />
                      <span>20-21st October 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mainBox"></div>
            </div>
          </div>
          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img
                    loading="lazy"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX5}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>MAKH Annual General Meeting</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Hotel Pavillion, Shahupuri, Kolhapur</span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>October 13 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eventMWrap aosAnim">
            <div class="tabContBox">
              <div class="topBar">
                <h4>GIFA (SOUTH-EAST ASIA)</h4>
                <div class="listBox">
                  <ul>
                    <li>
                      <img loading="lazy" src={mapIcon} alt="" />
                      <span>Bangkok, Thailand</span>
                    </li>
                    <li>
                      <img loading="lazy" src={calenderIcon} alt="" />
                      <span>20-23rd September 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mainBox"></div>
            </div>
          </div>

          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img
                    loading="lazy"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX3}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>Goshima Annual General Meeting</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Pavillion Hotel, Assembly Road, Kolhapur</span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>October 1, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img
                    loading="lazy"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX2}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>EO Tech Expo</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>ITC Royal Bengal, Kolkata</span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>April 22, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img loading="lazy" src={eventBg} alt="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>All India Steel Conclave</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>Mayfair Lake Resort, Raipur (C.G.), India</span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>25 - 26 March, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eventFull aosAnim">
            <div class="row">
              <div class="col-md-6">
                <div class="eventImgM">
                  <img
                    loading="lazy"
                    style={{
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={eventIFEX4}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="tabContBox">
                  <div class="topBar">
                    <h4>Indian Foundry Congress & IFEX 2023</h4>
                  </div>
                  <div class="mainBox">
                    <div class="listBox">
                      <ul>
                        <li>
                          <img loading="lazy" src={mapIcon} alt="" />
                          <span>India Expo Mart, Greater Noida, India</span>
                        </li>
                        <li>
                          <img loading="lazy" src={calenderIcon} alt="" />
                          <span>February 8–10, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="event1 event2 pt-0">
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
                      <img loading="lazy" src={calenderIcon} alt="" />
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
                      <img loading="lazy" src={calenderIcon} alt="" />
                      <span>Febr/uary (TBD)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mainBox"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
