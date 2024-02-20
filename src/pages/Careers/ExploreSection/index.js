import React, { useRef } from 'react'
import "./index.css"
function ExploreSection() {
  const exploreRef = useRef(null);
  return (
    <div
      ref={exploreRef}
      className="exploreSectionWrap animated-section section"
      id="jobOpening"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="exploreWrap aosAnim">
              <h2 className="titleText">
                <span className="gradientText skyText">Explore</span>, Apply,
                Succeed
              </h2>
              <iframe
                id="myIframe"
                src="https://bizhero.kekahire.com/api/embedjobs/0fa1028b-ca3d-4d2a-80a4-f98b79382865"
                frameborder="0"
                height="600px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection