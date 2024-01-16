import React from 'react'
import "./index.css"
import addr1 from "../../../assets/images/contact/address_1.png"
import addr2 from "../../../assets/images/contact/address_2.png";
import addr3 from "../../../assets/images/contact/address_3.png";
function    AddressSection() {
  return (
    <div className="addressDetails">
        <div className="container">
          <div className="addressRow">
            <h2 className="titleText aosAnim boldText ltr">Find us here</h2>
            <div className="addressBoxWrap aosAnim ltr">
              <div className="eachAddressBox">
                <div className="imgBox">
                  <img loading="lazy" src={addr1} alt=""/>
                </div>
                <div className="contactBox">
                  <div>
                    <h4>Corporate Office</h4>
                    <p>
                      Kariwala Tower, EP Block, Sector V, Bidhannagar, Kolkata,
                      West Bengal <br/>700091
                    </p>
                  </div>
                </div>
                <div className="btnBox">
                  <a href="https://goo.gl/maps/p2p8RqPuFrzdLQC8A" className="npButton" target="_blank" id="OurAddresses_CorporateOffice_ViewOnMap">View on Map</a>
                </div>
              </div>
              <div className="eachAddressBox">
                <div className="imgBox">
                  <img loading="lazy" src={addr2} alt=""/>
                </div>
                <div className="contactBox">
                  <div>
                    <h4>Kolhapur Address</h4>
                    <p>
                      Biz Hero India Pvt Ltd. – (NowPurchase)Plot no.12, Beside
                      Jafrani weight br/idge,M.I.D.C shiroli, Kolhapur – 416122
                    </p>
                  </div>
                </div>
                <div className="btnBox">
                  <a href="https://goo.gl/maps/ajyADxVXhyFqV6XN9" className="npButton" target="_blank" id="OurAddresses_KolhapurOffice_ViewOnMap">View on Map</a>
                </div>
              </div>
              <div className="eachAddressBox">
                <div className="imgBox">
                  <img loading="lazy" src={addr3} alt=""/>
                </div>
                <div className="contactBox">
                  <div>
                    <h4>Warehouse</h4>
                    <p>
                      J7MX+8RW, Shreeram Warehousing Complex, near Indian Oil
                      Petrol Pump, Chamrail, Howrah, West Bengal 711114
                    </p>
                  </div>
                </div>
                <div className="btnBox">
                  <a href="https://goo.gl/maps/CLY5radcRTTrVShc9" className="npButton" target="_blank" id="OurAddresses_Warehouse_ViewOnMap">View on Map</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default  AddressSection