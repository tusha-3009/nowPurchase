import React, { useState } from "react";
import "./index.css";
import Container from "../General/Container";
import Logo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/icons/arrowDown.png";
import VectorIcon from "../../assets/images/vector.png";
import ServicesMenu from "../Home/ServicesMenu";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu(){
   setIsOpen(!isOpen);
   
  }
  return (
    <div className="headerNew">
      <Container>
        <div className="row headerWrapNew">
          <div className="logoWrapNew">
            <a class="logoMain" href="/">
              <img loading="lazy" src={Logo} alt="logo" />
            </a>
          </div>
          <div className="col-lg-2 navigationWrapNew">
            <div className="row">
              <div className="col-lg-7 navWrapNew">
                <nav>
                  <ul>
                    <li>
                      <div className="services" onClick={openMenu}>
                        Services{" "}
                        <span class="toggleBtn">
                          <img
                            className={isOpen && "invertedArrow"}
                            loading="lazy"
                            src={ArrowDown}
                            alt="ArrowDown"
                          />
                        </span>
                        {isOpen && <ServicesMenu />}
                      </div>
                      <div className="megaMenuNew"></div>
                    </li>
                    <li>
                      <a href="/culture" className="culture">
                        Culture
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="careers">
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-lg-5 btnWrapNew">
                <ul>
                  <li>
                    <a
                      href="/getInTouchForm"
                      class="getInTouch"
                      id="Header_GetInTouch"
                    >
                      Get in touch
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.nowpurchase.com/login"
                      target="_blank"
                      class="gotoApp"
                      id="Header_GoToMetalCloud"
                    >
                      <span class="gotoTopPart">
                        <span>Go to</span>
                        <img loading="lazy" src={VectorIcon} alt="" />
                      </span>
                      NP MetalCloud
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
