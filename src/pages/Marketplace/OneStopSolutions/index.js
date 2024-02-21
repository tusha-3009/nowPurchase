import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import sol1 from "../../../assets/images/marketplace/sol-1.png";
import sol2 from "../../../assets/images/marketplace/sol-2.png";
import sol3 from "../../../assets/images/marketplace/sol-3.png";
import sol4 from "../../../assets/images/marketplace/sol-4.png";
import sol5 from "../../../assets/images/marketplace/sol-5.png";
import sol6 from "../../../assets/images/marketplace/sol-6.png";
import sol7 from "../../../assets/images/marketplace/sol-7.png";
import sol8 from "../../../assets/images/marketplace/sol-8.png";
import Container from "../../../Components/General/Container";
import { Modal, InputPicker, Form, Button } from "rsuite";
function OneStopSolutions() {
  const aosRef = useRef(null);
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
     alert("Please enter a valid name. Only alphabets and spaces are allowed.");
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
  return (
    <>
      {" "}
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
      <div
        ref={aosRef}
        className="solutionSec animated-section section aosAnim "
        id="sec36"
      >
        <div className="scrollSection">
          <Container>
            <div className="solutionHead d-flex align-items-center justify-content-between">
              <div className="sechead keyHead mb-8 aosAnim ">
                <h3>
                  <span>One-stop solution</span> for all
                  <br />
                  your procurement needs
                </h3>
                <p>
                  To view all available raw materials &amp; check prices, place
                  an enquiry and someone from our team will get back to you
                </p>
              </div>
              <a
                onClick={() => setModalOpen(true)}
                style={{ color: "white" }}
                href="#getInTouchForm"
                className="npButton getInTouch aosAnim "
              >
                Enquire Now
              </a>
            </div>

            <div className="sollutionWrap d-flex flex">
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol1} alt="" />
                </div>
                <h5>Metal Scrap</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol2} alt="" />
                </div>
                <h5>Virgin Metals</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol3} alt="" />
                </div>
                <h5>Carbon Additives</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol4} alt="" />
                </div>
                <h5>Ferro Alloys</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol5} alt="" />
                </div>
                <h5>Nodularizers &amp; Inoculants</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol6} alt="" />
                </div>
                <h5>Pig Iron</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol7} alt="" />
                </div>
                <h5>Refractory Items</h5>
              </div>
              <div className="eachSol">
                <div className="solImg">
                  <img loading="lazy" src={sol8} alt="" />
                </div>
                <h5>Sand &amp; Other Essentials</h5>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default OneStopSolutions;
