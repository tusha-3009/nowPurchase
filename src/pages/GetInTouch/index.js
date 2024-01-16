import React from 'react'
import "./index.css";

function GetInTouch() {
  return (
    <div id="getInTouchForm" className="getInTouchForm">
  
      <div className="getInTouchFormWrap">
        <h3>Enquiry Form</h3>
        <div className="formBox">
          <form className="form" action="#" method="post">
            <div className="inputBox">
              <label for="name">
                Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name here"
                id="name"
                required
              />
            </div>
            <div className="inputBox">
              <label for="phone">
                Contact Number <span>*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                id="phone"
                required
              />
            </div>
            <div className="inputBox">
              <label for="entry_purpose">
                Enquiry Purpose <span>*</span>
              </label>

              <select name="cars" id="cars" required>
                <option value="MarketPlace">MarketPlace</option>
                <option value="MetalCloud">MetalCloud</option>
                <option value="Career">Career</option>
                <option value="Request Demo" selected>
                  Request Demo
                </option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputBox">
              <label for="entry_purpose">Remark</label>
              <textarea name="" placeholder="Enter your name here"></textarea>
            </div>

            <div className="inputBox btnBox formBtns">
              <div className="canecelBtn" id="Form_Cancel">
                <img loading="lazy" src="assets/images/crossBtnf.png" alt="" />
                <h5>Cancel</h5>
              </div>
              <div className="submitEnq" id="formSubmit">
                <div className="submitEnq" id="formSubmit">
                  <button className="submit_button" type="submit" id="submitButton">
                    <img loading="lazy" src="assets/images/submit.png" alt="" />
                    Submit Enquiry
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="submitMsg" id="offSubmit">
        <div className="submitIc">
          <img loading="lazy" src="assets/images/submitIc.png" alt="" />
        </div>
        <h4>Enquiry Successfully submitted</h4>
        <p>Someone from our team will contact you soon</p>
      </div>
    </div>
  );
}

export default GetInTouch;