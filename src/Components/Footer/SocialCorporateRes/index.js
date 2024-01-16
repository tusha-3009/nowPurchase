import React from 'react'
import "./index.css"
import csrBg from "../../../assets/images/csr/csrBg.png";
function Csr() {
  return (
    <section class="event1 csrSec">
      <div class="container">
        <div class="eventHead aosAnim">
          <h3 class="titleText">Corporate Social Responsibility</h3>
        </div>
        <div class="row csrContent aosAnim">
          <div class="col-md-12 csrBigimg">
            <img loading="lazy" src={csrBg} alt="" />
          </div>
          <div class="col-md-7 csrP">
            <p>
              Our volunteers at NowPurchase interacted with these young minds at
              the Calcutta Social Project to show support for one of our CSR
              initiatives, learning about their personal lives, as well as the
              different opportunities provided by their school as part of the
              social project.🙂
            </p>
            <p>
              We are grateful to Calcutta Social Project for providing us with
              the opportunity to educate students from disadvantaged backgrounds
              in order to facilitate their progress toward a brighter and more
              self-determined future.
            </p>
            <p>
              The enthusiasm shown by our team members throughout this
              initiative has been heartwarming, and a special mention goes to
              the volunteers at the foundation who helped us achieve the goal.
              🌟
            </p>

            <p>
              #CSR #CSRIndia #corporatesocialresponsibility #csrinitiative
              #NowPurchase #LifeatNowPurchase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Csr