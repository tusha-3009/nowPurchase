import React from 'react'
import "./index.css"
import val1 from "../../../../src/assets/images/culture/value1.png";
import val2 from "../../../../src/assets/images/culture/value2.png";
import val3 from "../../../../src/assets/images/culture/value3.png";
import val4 from "../../../../src/assets/images/culture/value4.png";
import Container from '../../../Components/General/Container';
function ValueSection() {
  return (
    <>
      <div className="valuesSection trust animated-section section " id="sec43">
        <div className="scrollSection1">
          <div className="container">
            <div
              className="sechead keyHead aosAnim aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <h3>
                A foundation <br />
                built on <span>Values</span>
              </h3>
            </div>
            <div className="trWrap aosAnim d-flex justify-content-between">
              <div className="trBox">
                <div className="trBoxImg">
                  <img loading="lazy" src={val1} alt="" />
                </div>
                <h5>Integrity</h5>
                <p>
                  We have an unwavering adherence to moral and ethical
                  principles
                </p>
              </div>
              <div className="trBox">
                <div className="trBoxImg">
                  <img loading="lazy" src={val2} alt="" />
                </div>
                <h5>Empathy</h5>
                <p>
                  We experience one another's point of view, rather than just
                  our own
                </p>
              </div>
              <div className="trBox">
                <div className="trBoxImg">
                  <img loading="lazy" src={val3} alt="" />
                </div>
                <h5>Ownership</h5>
                <p>
                  We possess the freedom to take decisions with the willingness
                  to accept the outcome of our actions.
                </p>
              </div>
              <div className="trBox">
                <div className="trBoxImg">
                  <img loading="lazy" src={val4} alt="" />
                </div>
                <h5>One Team</h5>
                <p>
                  We have a meaningful, compelling purpose—a shared aspiration
                  that captures the hearts, minds, and energy of every person on
                  the team that lets us work in unity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ValueSection