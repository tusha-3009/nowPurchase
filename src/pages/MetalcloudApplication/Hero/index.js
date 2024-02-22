import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import marketPlacePic from "../../../assets/images/marketplace/bnrPlay.png";
import locationLogo from "../../../assets/images/marketplace/loc.png";
import applPoly from "../../../assets/images/application/applPoly.png";
import Container from "../../../Components/General/Container";
import CountUp from "react-countup";
import { countc } from "../../../Components/constants";
import { Modal, SelectPicker, Form, Button } from "rsuite";
import dummy1 from "../../../assets/images/application/dummy.mp4";
function MeltingProcessMadeReliable() {
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryPurpose, setEnquiryPurpose] = useState("");
  const [remarks, setRemarks] = useState("");
  const videoRef = React.createRef();
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

  const notifyOnSlack = async (channel, message) => {
    try {
      const response = await fetch(
        "https://test-api.nowpurchase.com/api/send_slack/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            channel: channel,
            message: message,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      return response;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    // Validate form fields
    const namePattern = /^[a-zA-Z\s]*$/;
    const phonePattern = /^\d+$/;

    if (!name || !namePattern.test(name)) {
      alert(
        "Please enter a valid name. Only alphabets and spaces are allowed."
      );
      return;
    }

    if (!phone || !phonePattern.test(phone)) {
      alert("Please enter a valid phone number. Only numbers are allowed.");
      return;
    }

    if (!enquiryPurpose) {
      alert("Please select your enquiry purpose.");
      return;
    }

    if (!remarks) {
      alert("Please enter remarks");
      return;
    }

    const payload = {
      text: `New enquiry:
        Name: ${name}
        Contact Number: ${phone}
        Enquiry Purpose: ${enquiryPurpose}
        Remarks: ${remarks}`,
    };

    try {
      await notifyOnSlack("NP_WEBSITE", payload.text);
      alert("Enquiry submitted successfully!");
    } catch (error) {
      alert("Error submitting enquiry");
    } finally {
      // Reset form fields
      setName("");
      setPhone("");
      setEnquiryPurpose("");
      setRemarks("");
    }
  };
  useEffect(() => {
    const aosElements = document.querySelectorAll(".aosAnim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ltr");
            // entry.target.classList.remove("ltr-out");
          } else {
            // entry.target.classList.add("ltr-out");
            // entry.target.classList.remove("ltr");
          }
        });
      },
      {
        threshold: 0.3,
        // rootMargin: "-10px",
      }
    );

    aosElements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up the observer on component unmount
    return () => {
      aosElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  const handleHover = () => {
    videoRef.current.play();
  };

  const handleHoverOut = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  const handleVideoEnded = () => {
    videoRef.current.play();
  };
  return (
    <>
      <Modal open={modalOpen} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h3>Enquiry Form</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form fluid onSubmit={handleSubmit}>
            <Form.Group>
              <Form.ControlLabel for="name">
                Name <span>*</span>
              </Form.ControlLabel>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter your name here"
                Required
                value={name}
                onChange={(value) => setName(value)}
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
                value={phone}
                onChange={(value) => setPhone(value)}
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

              <SelectPicker
                data={optionsData}
                value={enquiryPurpose}
                searchable={false}
                className="modalSelectPicker"
                onChange={(value) => setEnquiryPurpose(value)}
                style={{ display: "flex", lineHeight: "22px !important" }}
              />
              {/* </Form.Control> */}
            </Form.Group>

            <Form.Group>
              <Form.ControlLabel for="remark">Remark</Form.ControlLabel>
              <Form.Control
                name="remark"
                componentClass="textarea"
                placeholder="Enter your remark here"
                value={remarks}
                required
                onChange={(value) => setRemarks(value)}
              />
            </Form.Group>

            <Form.Group style={{ float: "right" }}>
              <Button
                appearance="subtle"
                onClick={handleClose}
                style={{ marginRight: "20px" }}
              >
                Cancel
              </Button>
              <Button
                appearance="primary"
                type="submit"
                style={{
                  background:
                    "linear-gradient(90deg, #1579be 0%, rgba(21, 121, 190, 0.6) 100%);",
                }}
              >
                Submit Enquiry
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <div
        class="marketbnr animated-section section serviceSec pb-0"
        id="sec21"
      >
        <div class="overflowSection">
          <Container>
            <div class="row bannerContent aosAnim">
              <div class="col-md-7 leftBannerCont">
                <div class="bannerLeft">
                  <h2>Your Melting Process, Now Made Reliable!</h2>
                  <p>
                    Get accurate addition/dilution suggestions, cost savings in
                    ChargeMix, real-time heat analytics, and pricing dashboard
                    for your raw materials via WhatsApp and tab.
                  </p>
                  <a
                    onClick={() => setModalOpen(true)}
                    style={{ color: "white" }}
                    href="#getInTouchForm"
                    class="npButton getInTouch"
                    id="MetalCloud_Section1_Landing_EnquireNow"
                  >
                    Book Demo
                  </a>
                </div>
              </div>
              <div class="col-md-5 rightBannerImg">
                <div class="bannerRight">
                  <div class="bannerPoly bannerPoly1">
                    <img src={applPoly} alt="" />
                    <video
                      className="video"
                      autoPlay
                      muted
                      loop=""
                      ref={videoRef}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverOut}
                      onEnded={handleVideoEnded}
                      id="hoverVideo"
                    >
                      <source src={dummy1} type="video/mp4" />
                    </video>
                    <a
                      href="https://www.youtube.com/embed/664mYn1fjQs"
                      class="bnrPlay"
                      id="MetalCloud_Section1_Landing_VideoPlay"
                      data-fancybox
                    >
                      <img loading="lazy" src={marketPlacePic} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <div class="addr aosAnim">
            <Container>
              <div class="locWrap d-flex align-items-center">
                <div class="locIcon">
                  <img loading="lazy" src={locationLogo} alt="" />
                </div>
                <div class="locAddr d-flex align-items-center">
                  <div class="eachLoc">
                    <h4>All India</h4>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div class="keyNumber triangleTopLeftBg" id="">
            <Container>
              <div class="row">
                <div class="col-lg-12 aosAnim">
                  <div class="sechead keyHead">
                    <h3>
                      <span>Elevating</span> your Metal Manufacturing
                      <br />
                      with technology
                    </h3>
                  </div>

                  <div class="keyWrap">
                    {countc.map(({ number, text, title }) => (
                      <div className="eachkey">
                        <h4>
                          <span className="counter">
                            {" "}
                            <CountUp end={number} duration={8} />
                          </span>
                          {text}
                        </h4>
                        <h6>{title}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeltingProcessMadeReliable;
