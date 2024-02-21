import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import tickImg from "../../../assets/images/application/list-1.png";
import crossImg from "../../../assets/images/application/list-2.png";
import Price1 from "../../../assets/images/application/price-1.png";
import Price2 from "../../../assets/images/application/price-2.png";
import Container from "../../../Components/General/Container";
import { Modal, InputPicker, Form, Button } from "rsuite";
function PlansPricing() {
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryPurpose, setEnquiryPurpose] = useState("");
  const [remarks, setRemarks] = useState("");
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

              <InputPicker
                data={optionsData}
                value={enquiryPurpose}
                onChange={(value) => setEnquiryPurpose(value)}
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
      <div className="priceSec animated-section section aosAnim " id="sec25">
        <div className="overflowSection">
          <Container>
            <div className="sechead keyHead aosAnim ">
              <h3>
                <span className="gradientText skyText">Plans</span> &amp;
                Pricing
              </h3>
            </div>
            <div className="row priceSecWrap aosAnim ">
              <div className="col-md-6 pricewrapHolder">
                <div className="pricewrap">
                  <div className="priceHead d-flex justify-content-between align-items-center">
                    <div className="priceIc ic-1 d-flex align-items-center">
                      <div className="priceImg">
                        <img loading="lazy" src={Price1} alt="" />
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
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Alloy Consumption Estimation</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">Comparative Report</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>Spectrometer</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Mounted Tablet / TV Screen</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>
                            Live Spectrometer readings sent to WhatsApp + Tablet
                            / TV Screen + Website
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Cost efficient Addition Dilution Suggestion</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>
                            Log Sheet of all heats accessible from anywhere
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Real-time analytics on the heat data</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4 className="list-grey">ChargeMix</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">Charge Mix Organiser</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">
                            Least Cost Charge Mix Optimisation
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">
                            Raw Material Suggestiont
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">Heat Planning</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>Inventory &amp; Grade</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Live Heat</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">
                            Edit Raw Material with Composition
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Add / Edit Grade</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={crossImg} alt="" />
                          <h5 className="list-grey">Add New Grade</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>Procurement</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Live Pricing of Raw Materials &amp; Alloys</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>RFQ Generation</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Live Order Tracking</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="prBtnA">
                      <a
                        onClick={() => setModalOpen(true)}
                        style={{ color: "white" }}
                        href="#getInTouchForm"
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
                        <img loading="lazy" src={Price2} alt="" />
                      </div>
                      <h4>PRO</h4>
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
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Alloy Consumption Estimation</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Comparative Report</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>Spectrometer</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Mounted Tablet / TV Screen</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>
                            Live Spectrometer readings sent to WhatsApp + Tablet
                            / TV Screen + Website
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Cost efficient Addition Dilution Suggestion</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>
                            Log Sheet of all heats accessible from anywhere
                          </h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Real-time analytics on the heat data</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>ChargeMix</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Charge Mix Organiser</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Least Cost Charge Mix Optimisation</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Raw Material Suggestiont</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Heat Planning</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>Inventory &amp; Grade</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Live Heat</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Edit Raw Material with Composition</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Add / Edit Grade</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Add New Grade</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="priceBody">
                      <h4>Procurement</h4>
                      <ul>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Live Pricing of Raw Materials &amp; Alloys</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>RFQ Generation</h5>
                        </li>
                        <li>
                          <img loading="lazy" src={tickImg} alt="" />
                          <h5>Live Order Tracking</h5>
                        </li>
                      </ul>
                    </div>
                    <div className="prBtnA">
                      <a
                        onClick={() => setModalOpen(true)}
                        style={{ color: "white" }}
                        href="#getInTouchForm"
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
    </>
  );
}

export default PlansPricing;
