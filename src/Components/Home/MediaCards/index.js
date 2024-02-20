import React, { useEffect } from "react";
import "./index.css";
import media1 from "../../../assets/images/home/media/media3.png";
import media2 from "../../../assets/images/home/media/media1.png";
import media3 from "../../../assets/images/home/media/media2.png";
import media4 from "../../../assets/images/home/media/media4.png";
function MediaCards() {
  useEffect(() => {
    const aosElements = document.querySelectorAll(".aosAnim");

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

    aosElements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up the observer on component unmount
    return () => {
      aosElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  return (
    <div
      className="mediaSectionWrap animated-section section aosAnim "
      id="sec17"
    >
      <div className="scrollSection">
        <div className="container">
          <div className="mediaRow">
            <h2 className="titleText" style={{ lineHeight: "1.2" }}>
              Our <span className="skyText">Media</span> Moments!
            </h2>
            <div className="mediaWrap mediaSlider">
              <div className="eachMediaBox">
                <figure>
                  <img loading="lazy" src={media1} alt="" />
                </figure>
                <div className="mediaText">
                  <p>
                    "NowPurchase is a Kolkata-based technology-driven
                    procurement solution for metal manufacturers that suggests
                    and delivers production inputs with the lowest cost of
                    manufacturing..."
                  </p>
                </div>
                <a
                  target="_blank"
                  href="https://www.dnb.co.in/file/publications/the-next-big-leap/32/"
                  className="knowMoreBtn gradientBtn"
                  id="Home_Section7_MediaMoments_Card1"
                >
                  Read More
                </a>
              </div>
              <div className="eachMediaBox">
                <figure>
                  <img loading="lazy" src={media2} alt="" />
                </figure>
                <div className="mediaText">
                  <p>
                    “Kolkata-based NowPurchase plans to use the funding to
                    expand its procurement business by establishing a global
                    supplier base, expanding into other parts of India, and
                    strengthening its technology team.”
                  </p>
                </div>
                <a
                  target="_blank"
                  href="https://yourstory.com/2022/01/nowpurchase-seed-funding-global-suppliers-expansion-technology-team/amp"
                  className="knowMoreBtn gradientBtn"
                  id="Home_Section7_MediaMoments_Card2"
                >
                  Read More
                </a>
              </div>

              <div className="eachMediaBox">
                <figure>
                  <img loading="lazy" src={media3} alt="" />
                </figure>
                <div className="mediaText">
                  <p>
                    “B2B marketplace NowPurchase picks up $2.4 million in
                    funding led by Orios, others. NowPurchase said it will use
                    the funds towards expanding its procurement business by
                    establishing …”
                  </p>
                </div>
                <a
                  target="_blank"
                  href="https://economictimes.indiatimes.com/tech/funding/b2b-marketplace-newpurchase-bags-2-4-million-in-seed-round-led-by-orios-others/articleshow/89111131.cms"
                  className="knowMoreBtn gradientBtn"
                  id="Home_Section7_MediaMoments_Card3"
                >
                  Read More
                </a>
              </div>

              <div className="eachMediaBox">
                <figure>
                  <img loading="lazy" src={media4} alt="" />
                </figure>
                <div className="mediaText">
                  <p>
                    “Kolkata Based B2B Marketplace NowPurchase Raises 2.4M Funds
                    to be used to grow business across newer geographies and
                    invest in its proprietary software platform, startups,
                    NowPurchase, funding”
                  </p>
                </div>
                <a
                  target="_blank"
                  href="http://bwdisrupt.businessworld.in/article/Kolkata-Based-B2B-Marketplace-NowPurchase-Raises-2-4M/19-01-2022-418185/"
                  className="knowMoreBtn gradientBtn"
                  id="Home_Section7_MediaMoments_Card4"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaCards;
