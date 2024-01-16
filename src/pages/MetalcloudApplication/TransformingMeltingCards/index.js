import React from "react";
import "./index.css";
import trf1 from "../../../assets/images/application/trf-1.png";
import trf2 from "../../../assets/images/application/trf-2.png";
import trf3 from "../../../assets/images/application/trf-3.png";
import trf4 from "../../../assets/images/application/trf-4.png";
import trf5 from "../../../assets/images/application/trf-5.png";
import trf6 from "../../../assets/images/application/trf-6.png";
import trf7 from "../../../assets/images/application/trf-7.png";
import trf8 from "../../../assets/images/application/trf-8.png";
import Container from "../../../Components/General/Container";
function TransformingMeltingCards() {
  return (
    <div
      class="application trust animated-section section sectionTrust aosAnim"
      id="sec23"
    >
      <div class="overflowSection">
        <Container>
          <div class="sechead keyHead aosAnim">
            <h3>
              <span>Transforming</span> your melting process
              <br />
              with NP Appliaction
            </h3>
          </div>

          <div class="trWrap aosAnim d-flex justify-content-between">
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf1} alt="" />
              </div>
              <h5>Live Heat Data on WhatsApp</h5>
              <p>
                Real-time heat wise updates to Metal Manufacturers, enabling
                them to optimise workflows and ensure timely delivery of
                high-quality finished products
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf2} alt="" />
              </div>
              <h5>Analytics of Your Heat Data</h5>
              <p>
                Identifying patterns and trends in production processes,
                enabling you to increase efficiency, reduce manufacturing costs,
                and improve product quality
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf3} alt="" />
              </div>
              <h5>Increased Efficiency in Melting</h5>
              <p>
                Reduce power consumption, save costs, and improve the quality of
                castings by providing more precise control over your melting
                processes
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf4} alt="" />
              </div>
              <h5>Live Addition/Dilution Suggestions</h5>
              <p>
                Real-time recommendation to add specific elements in the molten
                metal in the furnace to achieve the desired target chemistry and
                metal quality
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf5} alt="" />
              </div>
              <h5>Raw Material Pricing Dashboard</h5>
              <p>
                Real-time data on raw material prices to help Metal
                Manufacturers make informed decisions and minimise costs in-turn
                increasing overall profitability
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf6} alt="" />
              </div>
              <h5>Heat Wise Log Sheet</h5>
              <p>
                Record the details of each furnace heat, including the date,
                time, type of metal, weight, and temperature to ensure
                consistency in the casting process
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf7} alt="" />
              </div>
              <h5>Charge Mix Optimisation</h5>
              <p>
                Determine the optimal combination of raw materials to be melted
                in a furnace to produce the desired alloy at the lowest cost and
                highest efficiency
              </p>
            </div>
            <div class="trBox">
              <div class="trBoxImg">
                <img loading="lazy" src={trf8} alt="" />
              </div>
              <h5>Cost Savings & Increased Profits</h5>
              <p>
                By minimising waste, improving efficiency, and enhancing product
                quality we help you save costs in-turn increasing your overall
                profits
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default TransformingMeltingCards;
