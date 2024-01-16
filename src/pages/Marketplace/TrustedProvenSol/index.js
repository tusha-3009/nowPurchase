import React from 'react'
import "./index.css"
import tr1 from "../../../assets/images/marketplace/tr-1.png"
import tr2 from "../../../assets/images/marketplace/tr-2.png"
import tr3 from "../../../assets/images/marketplace/tr-3.png"
import tr4 from "../../../assets/images/marketplace/tr-4.png"
import Container from '../../../Components/General/Container'
function TrustedProvenSolutions() {
  return (
   <div className="trust animated-section section" id="sec34">
        <div className="scrollSection">
          <Container>
            <div className="trustRow">
              <div className="sechead keyHead aosAnim ltr">
                <h3>
                  <span>Trusted,</span> proven solutions <br/>for your business
                </h3>
              </div>

              <div className="trWrap aosAnim d-flex justify-content-between ltr">
                <div className="trBox">
                  <div className="trBoxImg">
                    <img loading="lazy" src={tr1} alt=""/>
                  </div>
                  <h5>Committed Deliveries</h5>
                  <p>
                    Our raw material delivery services cater to your on-the-go
                    needs, guaranteeing prompt and highly effective deliveries
                    to our esteemed clients
                  </p>
                </div>
                <div className="trBox">
                  <div className="trBoxImg">
                    <img loading="lazy" src={tr2} alt=""/>
                  </div>
                  <h5>Transparency</h5>
                  <p>
                    Customers receive live updates on the status their orders
                    via WhatsApp, making the ordering process transparent,
                    convenient and efficient
                  </p>
                </div>
                <div className="trBox">
                  <div className="trBoxImg">
                    <img loading="lazy" src={tr3} alt=""/>
                  </div>
                  <h5>Flexible Credit Terms</h5>
                  <p>
                    Empower businesses with our flexible financing options,
                    including Buy Now Pay Later, invoice factoring, LC
                    discounting, and working capital loans
                  </p>
                </div>
                <div className="trBox">
                  <div className="trBoxImg">
                    <img loading="lazy" src={tr4}alt=""/>
                  </div>
                  <h5>Technical Guidance</h5>
                  <p>
                    Expert guidance and round-the-clock chat support to ensure
                    our customers receive prompt and personalised assistance
                    whenever they need it
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
  )
}

export default TrustedProvenSolutions