import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "./index.css";
import c1 from "../../../assets/images/culture/culture_1_new.png";
import ct2 from "../../../assets/images/culture/cTeam-2.png";
import ct3 from "../../../assets/images/culture/cTeam-3.png";
import ct4 from "../../../assets/images/culture/cTeam-4.png";
import ct5 from "../../../assets/images/culture/cTeam-5.png";
import ct6 from "../../../assets/images/culture/cTeam-6.png";
import ct7 from "../../../assets/images/culture/cTeam-7.png";
import ct8 from "../../../assets/images/culture/cTeam-8.png";
import ct9 from "../../../assets/images/culture/cTeam-9.png";
import ct10 from "../../../assets/images/culture/cTeam-10.png";
import img1 from "../../../assets/images/culture/c-Team1Big.png";
import img2 from "../../../assets/images/culture/c-Team2Big.png";
import img3 from "../../../assets/images/culture/c-Team3Big.png";
import img4 from "../../../assets/images/culture/c-Team4Big.png";
import img5 from "../../../assets/images/culture/c-Team5Big.png";
import img6 from "../../../assets/images/culture/c-Team6Big.png";
import img7 from "../../../assets/images/culture/c-Team7Big.png";
import img8 from "../../../assets/images/culture/c-Team8Big.png";
import img9 from "../../../assets/images/culture/c-Team9Big.png";
import img10 from "../../../assets/images/culture/c-Team10Big.png";
import Container from "../../../Components/General/Container";
import Fancybox from "./Fancybox";






function ImgSection() {
  const [Open, setOpen] = useState(false);

  
  return (
    <div className="teamCulture animated-section section" id="sec45">
      <div className="scrollSection1">
        <Container>
          <div
            className="sechead aosAnim keyHead aos-init ltr aos-animate"
            data-aos="fade-right"
          >
            <h3>
              <span>Glimpses </span> into our <br />
              fun loving team
            </h3>
          </div>
          <Fancybox>
            <div className="glimpsRowWrap aosAnim ltr">
              <div className="row">
                <div className="col-md-6">
                  <a
                    className="teamEachC"
                    href={c1}
                    data-fancybox="gallery"
                  >
                    <img
                      loading="lazy"
                      src={img1}
                      id="Culture_Section5_Gallery_ImageView"
                      style={{ width: "100%" }}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img2}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct2}
                          id="Culture_Section5_Gallery_ImageView"
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img3}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct3}
                          id="Culture_Section5_Gallery_ImageView"
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img4}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct4}
                          id="Culture_Section5_Gallery_ImageView"
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img5}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct5}
                          id="Culture_Section5_Gallery_ImageView"
                          style={{ width: "100%" }}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <a
                    className="teamEachC"
                    href={img10}
                    id="Culture_Section5_Gallery_ImageView"
                    data-fancybox="gallery"
                  >
                    <img
                      loading="lazy"
                      src={ct10}
                      id="Culture_Section5_Gallery_ImageView"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img9}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct7}
                          style={{ width: "100%" }}
                          id="Culture_Section5_Gallery_ImageView"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img8}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct8}
                          style={{ width: "100%" }}
                          id="Culture_Section5_Gallery_ImageView"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        className="teamEachC"
                        href={img2}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct9}
                          id="Culture_Section5_Gallery_ImageView"
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a
                        className="teamEachC lastEachteam"
                        href={img7}
                        id="Culture_Section5_Gallery_ImageView"
                        data-fancybox="gallery"
                      >
                        <img
                          loading="lazy"
                          src={ct6}
                          style={{ width: "100%" }}
                          alt=""
                        />
                        <div className="lastGal" onClick={() => setOpen(true)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M33.334 21.6666C30.5375 21.6666 27.9197 22.432 25.6787 23.7645C27.652 26.073 29.2122 28.7451 30.2448 31.6666H33.334V21.6666ZM26.6735 31.6666C23.4083 23.8368 15.6805 18.3333 6.66732 18.3333V31.6666H26.6735ZM6.66732 15C13.0492 15 18.8727 17.3913 23.2903 21.3268C26.1751 19.4341 29.626 18.3333 33.334 18.3333V4.99996H35.0143C35.9273 4.99996 36.6673 5.74154 36.6673 6.65563V33.3443C36.6673 34.2586 35.9085 35 35.0143 35H4.98698C4.07407 35 3.33398 34.2585 3.33398 33.3443V6.65563C3.33398 5.74123 4.09283 4.99996 4.98698 4.99996H10.0007V1.66663H13.334V8.33329H6.66732V15ZM30.0007 1.66663V8.33329H16.6673V4.99996H26.6673V1.66663H30.0007ZM27.5007 16.6666C26.12 16.6666 25.0007 15.5473 25.0007 14.1666C25.0007 12.7859 26.12 11.6666 27.5007 11.6666C28.8813 11.6666 30.0007 12.7859 30.0007 14.1666C30.0007 15.5473 28.8813 16.6666 27.5007 16.6666Z"
                              fill="white"
                            ></path>
                          </svg>
                          <h4>13 More</h4>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{ display: "none" }}
                    id="hidden-images"
                    onClick={() => console.log("hello")}
                  >
                    <a
                      data-fancybox="gallery"
                      href={img5}
                    ></a>
                    <a
                      data-fancybox="gallery"
                      href={img6}
                    ></a>
                    <a
                      data-fancybox="gallery"
                      href={img4}
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </Fancybox>
        </Container>
      </div>
    </div>
  );
}

export default ImgSection;
