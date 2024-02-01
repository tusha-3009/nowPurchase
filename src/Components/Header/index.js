import React, { useEffect, useState } from "react";
// import { useParams, useSearchParams } from "react-router-dom";
import "./index.css";
import Container from "../General/Container";
import Logo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/icons/arrowDown.png";
import VectorIcon from "../../assets/images/vector.png";
import ServicesMenu from "../Home/ServicesMenu";
import menuPic from "../../assets/images/home/menuItem1.png";
import menuPic2 from "../../assets/images/home/menuItem2.png";
// import crossBtn from "../../assets/images/crossBtnf.png";
// import submitBtn from "../../assets/images/submit.png";

import { Modal, InputPicker, Form, Button } from "rsuite";

const headerTitleJSON = [
  { url: "/careers", text: "Career" },
  { url: "/culture", text: "Culture" },
  { url: "/events", text: "Events" },
  { url: "/our-address", text: "Addresses" },
  { url: "/privacy", text: "Privacy" },
  { url: "/terms-conditions", text: "Terms & Conditions" },
  { url: "/csr", text: "CSR" },
  { url: "/companyAnnualReport", text: "Company Annual Reports" },
  { url: "/marketplace", text: "MarketPlace" },
  { url: "/application", text: "MetalCloud" },
];

function Header() {
  //console.log(window.location.pathname);
  const headerTitle = headerTitleJSON.find(
    ({ url }) => url === window.location.pathname
  );
  useEffect(() => {
    if (headerTitle?.text) {
      document.title = "NowPurchase || " + headerTitle.text;
    }
  }, [headerTitle]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }
  const handleClose = () => {
    setModalOpen(false);
  };
  const optionsData = [
    "MarketPlace",
    "MetalCloud",
    "Careers",
    "Requeest Demo",
    "Others",
  ].map((items) => ({ label: items, value: items }));
  //console.log(optionsData);

  const [isVisible, setIsVisible] = useState(true);

  const toggleDrawer = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };
  console.log(modalOpen,'kkk')
  return (
    <>
      <Modal open={modalOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h3>Enquiry Form</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid>
            <Form.Group>
              <Form.ControlLabel for="name">
                Name <span>*</span>
              </Form.ControlLabel>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter your name here"
                Required
              />
              {/* <Form.HelpText>Required</Form.HelpText> */}
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel for="phone">
                Contact Number <span>*</span>
              </Form.ControlLabel>
              <Form.Control
                name="phone"
                type="tel"
                placeholder="Enter your contact number"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel for="entry_purpose">
                Enquiry Purpose <span>*</span>
              </Form.ControlLabel>
              {/* <Form.Control
                name="entry_purpose"
                componentClass="select"
                placeholder="Select"
                required
              > */}

              <InputPicker data={optionsData} />
              {/* </Form.Control> */}
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel for="remark">Remark</Form.ControlLabel>
              <Form.Control
                name="remark"
                componentClass="textarea"
                placeholder="Enter your remark here"
              />
            </Form.Group>

            <Form.Group>
              <Button appearance="subtle" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                appearance="primary"
                onClick={() => {
                  alert("submitted");
                }}
              >
                Submit Enquiry
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="headerNew">
        <Container>
          <div className="row headerWrapNew">
            <div className="col-lg-2 logoWrapNew">
              <a class="logoMain" href="/">
                <img loading="lazy" src={Logo} alt="logo" />
              </a>
            </div>
            {headerTitle?.text && (
              <div class="col-lg-3 pageTitleNew">
                <ul class="noList">
                  <li>
                    <span>{headerTitle?.text}</span>
                  </li>
                </ul>
              </div>
            )}

            {/* <div className="col-lg-2 navigationWrapNew">
              <div className="row">
                <div className="col-lg-7 navWrapNew">
                  <nav>
                    <ul>
                      <li>
                        <div className="services" onClick={openMenu}>
                          Services{" "}
                          <span class="toggleBtn">
                            <img
                              className={isOpen && "invertedArrow"}
                              loading="lazy"
                              src={ArrowDown}
                              alt="ArrowDown"
                            />
                          </span>
                          {isOpen && <ServicesMenu />}
                        </div>
                        <div className="megaMenuNew"></div>
                      </li>
                      <li>
                        <a href="/culture" className="culture">
                          Culture
                        </a>
                      </li>
                      <li>
                        <a href="/careers" className="careers">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-lg-5 btnWrapNew">
                  <ul>
                    <li>
                      <a onClick={() => setModalOpen(true)} class="getInTouch">
                        Get in touch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://app.nowpurchase.com/login"
                        target="_blank"
                        class="gotoApp"
                        id="Header_GoToMetalCloud"
                      >
                        <span class="gotoTopPart">
                          <span>Go to</span>
                          <img loading="lazy" src={VectorIcon} alt="" />
                        </span>
                        NP MetalCloud
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
         
              <div class="btnWrapNew mobBtnWrapNew">
                <ul>
                  <li onClick={() => setModalOpen(true)}>
                    <a href="#getInTouchForm" class="getInTouch">
                      Get in touch
                    </a>
                  </li>
                  <li class="mobWrapBtn" onClick={toggleDrawer}>
                    <a
                      className={`mobNavBtn mobNavBtnCrossBar ${
                        isVisible ? "visible" : "hidden"
                      }`}
                      href="javascript:void(0);"
                    >
                      <span class="bar bar1"></span>
                      <span class="bar bar2"></span>
                      <span class="bar bar3"></span>
                    </a>
                    <a
                      class={`mobNavBtn mobNavBtnCross ${
                        isVisible ? "hidden" : "visible"
                      }`}
                      href="javascript:void(0);"
                    >
                      <span class="bar bar1"></span>
                      <span class="bar bar2"></span>
                      <span class="bar bar3"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {!isVisible && (
                <div class="col-lg-7 navigationWrapNew slide">
                <div class="row">
                  <div class="col-lg-7 navWrapNew">
                    <nav>
                      <ul>
                        <li>
                          <a href="#" id="Header_Services">Services
                            <span class="toggleBtn"><img loading="lazy" src={ArrowDown} alt=""/></span></a>
                          <div class="megaMenuNew">
                            <div class="container">
                            
                              <div class="megaMenuWrap">
                                <ul class="noList">
                                  <li>
                                    <figure>
                                      <img loading="lazy" src={menuPic} alt=""/>
                                      <figcaption>MarketPlace</figcaption>
                                    </figure>
                                    <div class="figCont">
                                      <p>
                                        <strong>One-stop</strong> Solution <br/>for
                                        Quality Procurement
                                      </p>
                                      <a href="marketplace.html" id="Header_Services_Marketplace" class="knowMoreBtn gradientBtn">Know More</a>
                                    </div>
                                  </li>
                                  <li>
                                    <figure>
                                      <img loading="lazy" src={menuPic2} alt=""/>
                                      <figcaption>MetalCloud</figcaption>
                                    </figure>
                                    <div class="figCont">
                                      <p>
                                        Your Melting Process, <br/>Now Made
                                        <strong>Reliable!</strong>
                                      </p>
                                      <a href="application.html" class="knowMoreBtn gradientBtn" id="Header_Services_MetalCloud">Know More</a>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                  
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="culture.html" id="Header_Cluture">Culture</a>
                        </li>
                        <li>
                          <a href="career.html" id="Header_Careers">Careers</a>
                        </li>
                       
                      </ul>
                    </nav>
                  </div>
                  <div class="col-lg-5 btnWrapNew">
                    <ul>
                      <li>
                        <a href="/getInTouchForm" class="getInTouch" id="Header_GetInTouch">Get in touch</a>
                      </li>
                      <li>
                        <a href="https://app.nowpurchase.com/login" target="_blank" class="gotoApp" id="Header_GoToMetalCloud">
                          <span class="gotoTopPart">
                            <span>Go to</span>
                            <img loading="lazy" src={VectorIcon} alt=""/>
                          </span>
                          NP MetalCloud
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              )}
           
            <div className="col-lg-7 navigationWrapNew">
              <div className="row">
                <div className="col-lg-7 navWrapNew">
                  <nav>
                    <ul>
                      <li>
                        <div className="services" onClick={openMenu}>
                          Services{" "}
                          <span class="toggleBtn">
                            <img
                              className={isOpen && "invertedArrow"}
                              loading="lazy"
                              src={ArrowDown}
                              alt="ArrowDown"
                            />
                          </span>
                          {isOpen && <ServicesMenu />}
                        </div>
                        <div className="megaMenuNew"></div>
                      </li>
                      <li>
                        <a href="/culture" className="culture">
                          Culture
                        </a>
                      </li>
                      <li>
                        <a href="/careers" className="careers">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="col-lg-5 btnWrapNew">
                  <ul>
                    <li onClick={() => setModalOpen(true)}>
                      <a class="getInTouch">Get in touch</a>
                    </li>
                    <li>
                      <a
                        href="https://app.nowpurchase.com/login"
                        target="_blank"
                        class="gotoApp"
                        id="Header_GoToMetalCloud"
                      >
                        <span class="gotoTopPart">
                          <span>Go to</span>
                          <img loading="lazy" src={VectorIcon} alt="" />
                        </span>
                        NP MetalCloud
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
