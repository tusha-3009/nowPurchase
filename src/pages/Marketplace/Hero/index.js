import React, { useEffect, useRef, useState } from "react";
import bnrpoly from "../../../assets/images/marketplace/bnrPoly.png";
import "./index.css";
import loca from "../../../assets/images/marketplace/loc.png";
import dummy from "../../../assets/images/dummy.mp4";
import bnrPlay from "../../../assets/images/marketplace/bnrPlay.png";
import Container from "../../../Components/General/Container";
import { counts } from "../../../Components/constants";
import CountUp from "react-countup";
import { Modal, SelectPicker, Form, Button } from "rsuite";
function Hero() {
  const aosRef = useRef(null);

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

    if (aosRef.current) {
      observer.observe(aosRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (aosRef.current) {
        observer.unobserve(aosRef.current);
      }
    };
  }, []);
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
        className="marketbnr serviceSec animated-section section pb-0"
        id="sec31"
      >
        <div className="overflowSection">
          <div class="container">
            <div ref={aosRef} className="row bannerContent aosAnim ">
              <div className="col-md-7 leftBannerCont">
                <div className="bannerLeft">
                  <h2 className="titleText">
                    <span className="skyText">One-stop</span> Solution for
                    Quality Procurement
                  </h2>
                  <p>
                    We understand the crucial role that procurement plays in
                    ensuring your manufacturing process can adapt to supply
                    chain challenges while maintaining quality
                  </p>
                  <a
                    onClick={() => setModalOpen(true)}
                    href="#getInTouchForm"
                    className="npButton getInTouch"
                    id="MarketPlace_Section1_Landing_EnquireNow"
                    style={{ color: "white" }}
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="col-md-5 rightBannerImg">
                <div className="bannerRight">
                  <div className="bannerPoly bannerPoly1">
                    <img src={bnrpoly} alt="" />

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
                      <source src={dummy} type="video/mp4" />
                    </video>

                    <a
                      href="https://www.youtube.com/embed/O8rqmHvFmQY"
                      className="bnrPlay"
                      data-fancybox=""
                    >
                      <img loading="lazy" src={bnrPlay} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={aosRef} className="addr aosAnim">
            <div className="container">
              <div className="locWrap d-flex align-items-center">
                <div className="locIcon">
                  <img loading="lazy" src={loca} alt="" />
                </div>
                <div className="locAddr d-flex align-items-center">
                  <div className="eachLoc">
                    <h4>West Bengal</h4>
                  </div>
                  <div className="eachLoc">
                    <h4>Maharastra</h4>
                  </div>
                  <div className="eachLoc">
                    <h4>Karnataka</h4>
                  </div>
                  <div className="eachLoc">
                    <h4>Jharkhand</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="keyNumber triangleTopLeftBg" id="">
            <Container>
              <div className="row">
                <div ref={aosRef} className="col-lg-12 aosAnim">
                  <div className="sechead keyHead aosAnim ">
                    <h3>
                      <span>Our success</span> is a reflection
                      <br />
                      of your satisfaction
                    </h3>
                  </div>

                  <div className="keyWrap">
                    {counts.map(({ number, text, title }) => (
                      <div className="eachkey">
                        <h4>
                          <span className="counter">
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
          </section>
        </div>
      </div>
    </>
  );
}

export default Hero;
