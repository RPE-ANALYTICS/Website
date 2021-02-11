import React from "react";
import Dashboard from "../img/icons/dashboard.svg";
import DataComplexity from "../img/icons/data-complexity.svg";
import Data from "../img/icons/data.svg";
import Vision from "../img/icons/vision.svg";
import BigData from "../img/big-data.jpg";

import CloudStorage from '../img/icons/cloud-storage.svg'

import xxx from "../img/city.jpg";

import Brands from "../components/Brands";

export default function Analytics() {
  return (
    <>
      <section className="analyticsWrapper section">
        <div className="analytics-thumbnail-section">
          <div className="analytics-thumbnail-image">
            <img src={BigData}></img>
            {/* <img src="https://s7703.pcdn.co/wp-content/uploads/2013/01/banner-analytics-background.jpg"></img> */}
          </div>
          <div className="analytics-thumbnail-content">
            <h1>
              <span>A</span>nalytics
            </h1>
            {/* <span></span> */}
            <p>
              Analytics is the systematic computational analysis of data or
              statistics. It is used for the discovery and interpretation.
            </p>
            {/* <button>arrow</button> */}
          </div>
        </div>
        {/* ==================================================================================== */}
        <div className="analytics-content-section2">
          <div className="analytics-content-wrapper2">
            <div className="title2">
              <h1>The smart way to transform your company</h1>
              <p>
                There is always a story behind and it is the one that matter
                because it's the why behind what we do
              </p>
            </div>
            <div className="cards2">
              <div className="card2">
                <img src={CloudStorage}></img>
                <h3>Data</h3>
                <p>
                  Sample text. Lorem ipsum dolor es momentum estra de onio nunc
                  justo utlificatum.
                </p>
              </div>
              <div className="card2">
                <img src={CloudStorage}></img>
                <h3>Discovery</h3>
                <p>
                  Sample text. Lorem ipsum dolor es momentum estra de onio nunc
                  justo utlificatum.
                </p>
              </div>
              <div className="card2">
                <img src={CloudStorage}></img>
                <h3>Deployment</h3>
                <p>
                  Sample text. Lorem ipsum dolor es momentum estra de onio nunc
                  justo utlificatum.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================================================== */}
        <div className="analytics-services-section">
          <div className="analytics-services-content">
            <h1>Our Services</h1>
            <p>
              RPE team can provide expertise to help your organizations with
            </p>
          </div>
          <div className="analytics-services-cards-section">
            <div className="analytics-services-card">
              <div className="analytics-services-card-img">
                <img className="services-card-img" src={Vision}></img>
              </div>
              <div className="analytics-services-card-content">
                <h1>Strategy</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="analytics-services-card">
              <div className="analytics-services-card-img">
                <img src={Data}></img>
              </div>
              <div className="analytics-services-card-content">
                <h1>Data Extraction</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="analytics-services-card">
              <div className="analytics-services-card-img">
                <img src={DataComplexity}></img>
              </div>
              <div className="analytics-services-card-content">
                <h1>Transformation</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="analytics-services-card">
              <div className="analytics-services-card-img">
                <img src={Dashboard}></img>
              </div>
              <div className="analytics-services-card-content">
                <h1>Vizualizations</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="analytics-services-card">
              <div className="analytics-services-card-img">
                <img src={Dashboard}></img>
              </div>
              <div className="analytics-services-card-content">
                <h1>Auto Reports</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="analytics-services-card">
              <div className="analytics-services-card-img">
                <img src={Dashboard}></img>
              </div>
              <div className="analytics-services-card-content">
                <h1>Data Management</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================================================== */}
        <div className="analytics-content-section">
          <div className="analytics-content-wrapper">
            <div className="analytics-content-box">
              <div className="analytics-content-box-col-1">
                <h3>INDUSTRY EXPERTISE</h3>
                <br />
                <p>
                  Whether you are OEM, Tier 1 supplier, defense company or a
                  small medical office, we will deliver you data analytics
                  solutions that will help you optimize your business.
                </p>
                <p>
                  Whether you are looking for Supply Chain connectivity, to
                  drive better cost reductions, flawless launches, supplier
                  performance across quality, delivery, cost reduction,
                  inventory optimization, sales or cost, we will help you
                  accelerate to insight.
                </p>
              </div>
              <div className="analytics-content-box-col-2">
                <img src={xxx}></img>
              </div>
            </div>
            <div className="analytics-content-box">
              <div className="analytics-content-box-col-2">
                <img src={xxx}></img>
              </div>
              <div className="analytics-content-box-col-1">
                <h3>ROI</h3>
                <br />
                <p>
                  We’ll help you measure the ROI on your analytical investment.
                  You will start realizing it within the very first few weeks of
                  engaging our team.
                </p>
                <p>
                  We will enable unprecedented data visibility, which in turn
                  will lead to significant improvement in data quality.
                </p>
                <p>
                  With easy, governed access to so much of actionable data, not
                  only your teams will gain improvement in productivity, they
                  will be able to make more informed, data driven decisions.
                </p>
                {/* <p>
                  Your team will no longer spend time on gathering data,
                  producing manual reports – instead they will be able to focus
                  on the action to make your business better.
                </p>
                <p>
                  Our dashboards will enable your organization to drive savings
                  within Supply Chain, Inventory, and will enable better cost
                  control.
                </p>
                <p>
                  The insights into internal long-range planning, blended with
                  the external market data will allow you to focus your business
                  growth strategy.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* ====================================================================================
        <div className="analytics-content-section">
          <div className='analytics-content-wrapper'>
            <div className="analytics-content-col-1 column">
              <div className="analytics-content-col-1-card">
                <div className="analytics-content-col-1-card-txt">
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                </div>
                <div className="analytics-content-col-1-card-title">
                  <h3>INDUSTRY</h3>
                </div>
              </div>
            </div>
            <div className="analytics-content-col-2 column">
              <div className="analytics-content-col-2-card">
              <div className="analytics-content-col-2-circle">
              </div>
              </div>
            </div>
            <div className="analytics-content-col-3 column">
            <div className="analytics-content-col-3-card">
                <div className="analytics-content-col-3-card-title">
                  <h3>ROI</h3>
                </div>
                <div className="analytics-content-col-3-card-txt">
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                  <p>Lorem impsum dolor es enum</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="brandSection section">
        <Brands />
      </section> */}
    </>
  );
}
