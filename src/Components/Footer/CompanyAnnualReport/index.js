import React from 'react'
import "./index.css"
function CompanyAnnualReport() {
  return (
    <div class="addressDetails">
      <div class="container">
        <div class="addressRow">
          <h2 class="titleText aosAnim boldText">Company Annual Reports</h2>
          <div class="addressBoxWrap aosAnim">
            <div class="eachAddressBox">
              <div>
                <h4>
                  1. Annual Report Financial Year <bold>2021 - 2022</bold>
                </h4>
              </div>
              <div class="btnBox">
                <a
                  href="https://img1.nowpurchase.com/assets/docs/Form_MGT_7_Biz hero_21-22.pdf"
                  class="npButton"
                  target="_blank"
                  id="OurAddresses_CorporateOffice_ViewOnMap"
                >
                  View Report 21 - 22
                </a>
              </div>
            </div>
            <div class="eachAddressBox">
              <div>
                <h4>
                  2. Annual Report Financial Year <bold>2022 - 2023</bold>
                </h4>
              </div>
              <div class="btnBox">
                <a
                  href="https://img1.nowpurchase.com/assets/docs/Form_MGT_7_Biz hero_22-23.pdf"
                  class="npButton"
                  target="_blank"
                  id="OurAddresses_KolhapurOffice_ViewOnMap"
                >
                  View Report 22 - 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAnnualReport