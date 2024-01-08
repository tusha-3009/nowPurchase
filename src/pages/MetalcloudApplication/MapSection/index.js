import React from 'react'
import "./index.css"
import indiaMap from "../../../assets/images/application/india_map.svg";
import fr1 from "../../../assets/images/application/map-pointer/fr_1.svg";
import fr2 from "../../../assets/images/application/map-pointer/fr_2.svg";
import fr3 from "../../../assets/images/application/map-pointer/fr_3.svg";
import fr4 from "../../../assets/images/application/map-pointer/fr_4.svg";
import fr5 from "../../../assets/images/application/map-pointer/fr_5.svg";
import fr6 from "../../../assets/images/application/map-pointer/fr_6.svg";
import fr7 from "../../../assets/images/application/map-pointer/fr_7.svg";
import fr8 from "../../../assets/images/application/map-pointer/fr_8.svg";
import fr9 from "../../../assets/images/application/map-pointer/fr_9.svg";
import fr10 from "../../../assets/images/application/map-pointer/fr_10.svg";
import fr11 from "../../../assets/images/application/map-pointer/fr_11.svg";
import fr12 from "../../../assets/images/application/map-pointer/fr_12.svg";
import fr13 from "../../../assets/images/application/map-pointer/fr_13.svg";
import fr14 from "../../../assets/images/application/map-pointer/fr_14.svg";
import fr15 from "../../../assets/images/application/map-pointer/fr_15.svg";
import Container from '../../../Components/General/Container';

function MapSection() {
  return (
    <div class="mapSec animated-section section aosAnim" id="sec24">
      <div class="overflowSection">
        <Container>
          <div class="mapRow">
            <div class="mapleft aosAnim">
              <div class="sechead keyHead">
                <h3>
                  <span class="gradientText skyText">Creating </span>
                  connections,<br/> building loyalty
                </h3>
              </div>
              <div class="stateWrap">
                <div class="eachstate">
                  <h4>
                    <span>15+</span> States
                  </h4>
                </div>
                <div class="eachstate">
                  <h4>
                    <span>50+</span> Customers
                  </h4>
                </div>
              </div>
              <p>
                In the land of diverse cultures and traditions, our software has
                found a welcoming embrace among the Metal Manufacturers
                scattered throughout India. Our innovative solution has earned
                the admiration and loyalty of these industrial powerhouses,
                enabling them to amplify their profits and optimize their
                operations with ease. We are humbled by the trust bestowed upon
                us by the Metal Manufacturers of India and take pride in being
                their partner on this journey towards success.
              </p>
            </div>
            <div class="mapRight">
              <div class="indMapWrap">
                <img class="mapImg" src={indiaMap} alt="" />

                <div class="mapPointers">
                  <span class="eachPointer ep_1">
                    <img src={fr1} alt="" />
                  </span>
                  <span class="eachPointer ep_2">
                    <img src={fr2} alt="" />
                  </span>
                  <span class="eachPointer ep_3">
                    <img src={fr3} alt="" />
                  </span>
                  <span class="eachPointer ep_4">
                    <img src={fr4} alt="" />
                  </span>
                  <span class="eachPointer ep_5">
                    <img src={fr5} alt="" />
                  </span>
                  <span class="eachPointer ep_6">
                    <img src={fr6} alt="" />
                  </span>
                  <span class="eachPointer ep_7">
                    <img src={fr7} alt="" />
                  </span>
                  <span class="eachPointer ep_8">
                    <img src={fr8} alt="" />
                  </span>
                  <span class="eachPointer ep_9">
                    <img src={fr9} alt="" />
                  </span>
                  <span class="eachPointer ep_10">
                    <img src={fr10} alt="" />
                  </span>
                  <span class="eachPointer ep_11">
                    <img src={fr11} alt="" />
                  </span>
                  <span class="eachPointer ep_12">
                    <img src={fr12} alt="" />
                  </span>
                  <span class="eachPointer ep_13">
                    <img src={fr13} alt="" />
                  </span>
                  <span class="eachPointer ep_14">
                    <img src={fr14} alt="" />
                  </span>
                  <span class="eachPointer ep_15">
                    <img src={fr15} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MapSection