import React from "react";
import "./index.css"
import menu1 from "../../../assets/images/home/menuItem1.png";
import menu2 from "../../../assets/images/home/menuItem2.png";
function ServicesMenu() {
  return (
    <div className="megaMenuNew showMenu">
      <div className="container">
        <div className="megaMenuWrap">
          <ul className="noList">
            <li>
              <figure>
                <img loading="lazy" src={menu1} alt="" />
                <figcaption>MarketPlace</figcaption>
              </figure>
              <div className="figCont">
                <p>
                  <strong>One-stop</strong> Solution <br />
                  for Quality Procurement
                </p>
                <a
                  className="knowMoreBtn gradientBtn"
                  href="/marketplace"
                  id="Header_Services_Marketplace"
                >
                  Know More
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img loading="lazy" src={menu2} alt="" />
                <figcaption>MetalCloud</figcaption>
              </figure>
              <div className="figCont">
                <p>
                  Your Melting Process, <br />
                  Now Made
                  <strong> Reliable!</strong>
                </p>
                <a
                  className="knowMoreBtn gradientBtn"
                  href="/application"
                  id="Header_Services_MetalCloud"
                >
                  Know More
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesMenu;
