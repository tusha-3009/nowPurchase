import React from 'react'
import "./index.css"
import certificatePic from "../../../assets/images/marketplace/mrai-certificate.png"
function Certificate() {
  return (
    <div class="animated-section section aosAnim " id="sec38">
        <div class="mrai-certificate">
          <div class="sechead aosAnim keyHead mb-0 ">
            <h3>
              We are now a Member of<br/>
              <span>Metal Recycling<br/>
                Association of India</span>
            </h3>
          </div>
       
          <div>

            <img loading="lazy" id="mrai-certificate" src={certificatePic} alt=""/>
         
          </div>
        </div>
      </div>)
}

export default Certificate