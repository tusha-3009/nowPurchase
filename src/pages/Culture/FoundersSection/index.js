import React from "react";
import "./index.css";
import mng1 from "../../../assets/images/culture/mng-1.png";
import mng2 from "../../../assets/images/culture/mng-2.png";
import mng3 from "../../../assets/images/culture/mng-3.png";
import linkedInLogo from "../../../assets/images/icons/social-icons/linkedin_logo.png";
import Container from "../../../Components/General/Container";

function FoundersSection() {
  return (
    <div className="teamManagementC animated-section section" id="sec46">
      <div className="scrollSection1">
        <Container>
          <div
            className="sechead aosAnim keyHead "
            
          >
            <h3>
              Behind the <span>Magic,</span> <br />
              People Making it Happen
            </h3>
          </div>
          <div className="cManagement aosAnim d-flex justify-content-between align-items-start">
            <div className="eachCM">
              <div className="mImageWrap">
                <img loading="lazy" src={mng1} alt="" />
              </div>
              <div className="mngDetails">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  Naman Shah{" "}
                  <a
                    href="https://www.linkedin.com/in/namanshah1/"
                    id="Culture_Section6_Founders_Linkedin1"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src={linkedInLogo}
                      style={{ height: "24px", marginBottom: "4px" }}
                      alt=""
                    />
                  </a>
                </h4>
                <h5>Founder &amp; Chief Executive Officer</h5>
              </div>
            </div>
            <div className="eachCM">
              <div className="mImageWrap">
                <img loading="lazy" src={mng2} alt="" />
              </div>
              <div className="mngDetails">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  Aakash Shah{" "}
                  <a
                    href="https://www.linkedin.com/in/shahaakash/"
                    id="Culture_Section6_Founders_Linkedin2"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src={linkedInLogo}
                      style={{ height: "24px", marginBottom: "4px" }}
                      alt=""
                    />
                  </a>
                </h4>
                <h5>Founding Director &amp; Mentor</h5>
              </div>
            </div>
            <div className="eachCM">
              <div className="mImageWrap">
                <img loading="lazy" src={mng3} alt="" />
              </div>
              <div className="mngDetails">
                <h4
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  Ankan Adhikari{" "}
                  <a
                    href="https://www.linkedin.com/in/ankan-adhikari-63784550/"
                    id="Culture_Section6_Founders_Linkedin3"
                    target="_blank"
                  >
                    <img
                      loading="lazy"
                      src={linkedInLogo}
                      style={{ height: "24px", marginBottom: "4px" }}
                      alt=""
                    ></img>
                  </a>
                </h4>
                <h5>Chief Technology Officer</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FoundersSection;
