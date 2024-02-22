import React, { useState } from "react";
import "./index.css";
import { Modal, SelectPicker, Form, Button } from "rsuite";

function GetInTouch() {
  const [modalOpen, setModalOpen] = useState(true);
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
    </>
  );
}

export default GetInTouch;
