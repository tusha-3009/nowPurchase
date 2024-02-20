import React, { useEffect, useRef } from "react";
import "./index.css";
import "../../assets/css/style-responsive.css";
import wa from "../../assets/images/icons/social-icons/social_wa.png";
import ma from "../../assets/images/icons/social-icons/social_ma.png";
import li from "../../assets/images/icons/social-icons/social_li.png";
import fa from "../../assets/images/icons/social-icons/social_fa.png";
import inn from "../../assets/images/icons/social-icons/social_in.png";
import tw from "../../assets/images/icons/social-icons/social_tw.png";
import ti from "../../assets/images/icons/footer_tiger.png";

import Container from "../General/Container";
function Footer() {
  const aosRef = useRef(null);

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
  },[]);

  return (
    <footer
      ref={aosRef}
      className="footerSection animated-section sectionf"
      id=""
    >
      <div class="container">
        <div className="row">
          <div className="col-lg-8 footerBlock footerBlockLeft aosAnim">
            <h2 className="footerTitleText">
              For every reason that got you here, <br />
              <strong>Let’s Connect!</strong>
            </h2>

            <div className="socialShare">
              <ul className="noList">
                <li>
                  <a
                    href="https://wa.me/+919073738181"
                    id="Footer_WhatsApp"
                    target="_blank"
                  >
                    <figure>
                      <img loading="lazy" src={wa} alt="" />
                      <figcaption>Whatsapp</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:foundry@nowpurchase.com"
                    target="_blank"
                    id="Footer_Email"
                  >
                    <figure>
                      <img loading="lazy" src={ma} alt="" />
                      <figcaption>Email</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/nowpurchase/"
                    target="_blank"
                    id="Footer_Linkedin"
                  >
                    <figure>
                      <img loading="lazy" src={li} alt="" />
                      <figcaption>LinkedIn</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/NowPurchase"
                    target="_blank"
                    id="Footer_Facebook"
                  >
                    <figure>
                      <img loading="lazy" src={fa} alt="" />
                      <figcaption>Facebook</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/nowpurchase.official?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    id="Footer_Instagram"
                  >
                    <figure>
                      <img loading="lazy" src={inn} alt="" />
                      <figcaption>Instagram</figcaption>
                    </figure>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/NowPurchase?t=8OVfwJLb52B48nfaqntVmA&amp;s=09"
                    target="_blank"
                    id="Footer_Twitter"
                  >
                    <figure>
                      <img loading="lazy" src={tw} alt="" />
                      <figcaption>Twitter</figcaption>
                    </figure>
                  </a>
                </li>
              </ul>
            </div>

            <div className="copyrightBlock">
              <p className="copyText">
                Copyright © 2020 by NowPurchase All Rights Reserved
              </p>
              <p className="tredText">
                All product and company names are trademarks™ or registered®
                trademarks of their respective holders. Use of them does not
                imply any affiliation with or endorsement by them.
              </p>
            </div>
          </div>

          <div
            ref={aosRef}
            className="col-lg-4 footerBlock footerBlockRight aosAnim"
          >
            <div className="footerLinkList">
              <ul className="noList">
                <li>
                  <a href="/events" id="Footer_Events">
                    Events
                  </a>
                </li>

                <li>
                  <a href="/our-address" id="Footer_OurAdderss">
                    Our Address
                  </a>
                </li>
                <li>
                  <a href="/privacy" id="Footer_PrivacyPolicy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" id="Footer_Terms&amp;Conditions">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/companyAnnualReport"
                    id="Footer_CompanyAnnualReports"
                  >
                    Company Annual Reports
                  </a>
                </li>
                <li>
                  <a href="/csr" id="Footer_CorporateSocialResponsibility">
                    Corporate Social Responsibility
                  </a>
                </li>
              </ul>
            </div>
            <div className="makeInIndiaImg">
              <figure>
                <img loading="lazy" src={ti} alt="" />
              </figure>
            </div>
            <div className="footerInfo">
              <p className="dippText">DIPP No. : DIPP36503</p>
              <p className="designText">
                Website designed by{" "}
                <span className="teamHover">NowPurchase Team</span>
              </p>
              <div className="ul">
                <ul>
                  <li>Umang Singh - Project Lead &amp; UX Designer</li>
                  <li>Debasmita Dutta - UX Designer</li>
                  <li>Hussena Calcuttawala - Marketing Executive</li>
                </ul>
              </div>
            </div>
            <div className="copyrightBlock">
              <p className="copyText">
                Copyright © 2020 by NowPurchase All Rights Reserved
              </p>
              <p className="tredText">
                All product and company names are trademarks™ or registered®
                trademarks of their respective holders. Use of them does not
                imply any affiliation with or endorsement by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
