import React from "react";
import Dashboard from "../img/icons/dashboard.svg";
import DataComplexity from "../img/icons/data-complexity.svg";
import Data from "../img/icons/data.svg";

import Management from "../img/icons/management.svg";
import Business from "../img/icons/business.svg";
import IT from "../img/icons/it.svg";
import Strategy from "../img/icons/strategy.svg";
import Report from "../img/icons/report.svg";
import DataManagement from "../img/icons/data-management.svg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

export default function Operations() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="analyticsWrapper section">
        <div className="analytics-thumbnail-section">
          <div className="analytics-thumbnail-image"></div>
          <div className="analytics-thumbnail-content">
            <Fade bottom>
              <h1>
                <span>O</span>perations
              </h1>
              <p>Evaluate the entire company data</p>
            </Fade>
          </div>
          <div className="home-right-line-top absolute">
            <Slide top>
              <span></span>
            </Slide>
          </div>
          <div
            className="home-right-line-middle absolute"
            onClick={handleScroll}
          >
            <span>
              <Jello>
                <i className="fas fa-angle-double-down"></i>
              </Jello>
            </span>
          </div>
          <div className="home-right-line-bottom absolute">
            <Slide bottom>
              <span></span>
            </Slide>
          </div>
        </div>
        {/* ====================================CARDS======================================= */}
        <div className="analytics-content-section2">
          <div className="analytics-content-wrapper2">
            <Fade bottom cascade>
              <div className="title2">
                <h1>RPE supports analytics operations</h1>
                <p>
                Platform Administration (we provide full administration of your analytics platform ranging from data refreshes to software upgrades.)  ​
                </p>
              </div>
            </Fade>
            <div className="cards2">
              <Fade left>
                <div className="card2">
                  <img src={Management}></img>
                  <h3>Alerting & Monitoring</h3>
                  <p>
                  We offer the necessary alerting & monitoring capabilities around key metrics to ensure stability of your platform.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="card2">
                  <img src={Business}></img>
                  <h3>Architectural Support</h3>
                  <p>
                  We design and implement the necessary platform architectures to ensure governance, security, and stability for the data assets.
                  </p>
                </div>
              </Fade>
              <Fade right>
                <div className="card2">
                  <img src={IT}></img>
                  <h3>Platform Installations & Migrations</h3>
                  <p>
                  We quickly get you up and running with the latest technologies.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        {/* ================================OUR SERVICES================================== */}
        {/* <div className="analytics-services-section">
          <div className="analytics-services-content">
            <Fade bottom>
              <h1>Our Services</h1>
              <p>
                RPE team can provide expertise to help your organizations
                with...
              </p>
            </Fade>
          </div>
          <div className="analytics-services-cards-section">
            <Fade left>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img className="services-card-img" src={Strategy}></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>Strategy</h1>
                  <p>
                    We will help you with building effective strategy, roadmaps
                    and execution plans.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={Data}></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>Data Extraction</h1>
                  <p>
                    We perform all ranges of data extraction, data ingestion and
                    transformation.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={DataComplexity}></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>Transformation</h1>
                  <p>
                    We design effective and proved Digital Transformation
                    strategy, tailored for your company.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={Dashboard}></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>Vizualizations</h1>
                  <p>
                    We will deliver the insight to help you drive the business
                    impact.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade left>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={Report}></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>Auto Reports</h1>
                  <p>
                    We will help deliver the automated insights right to your
                    device.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="analytics-services-card">
                <div className="analytics-services-card-img">
                  <img src={DataManagement}></img>
                </div>
                <div className="analytics-services-card-content">
                  <h1>Data Management</h1>
                  <p>
                    We will help you build effective Data Management strategy.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div> */}
        {/* //==============================INDUSTRY EXPERTISE====================== */}
        {/* <div className="analytics-content-section">
          <div className="analytics-industry-expertise">
            <div className="wwa-content">
              <div className="wwa-col wwa-col-img-wrapper">
                <div className="wwa-col-img">
                  <Fade bottom>
                    <img src="https://media.istockphoto.com/photos/analysing-data-picture-id872025014?s=612x612"></img>
                  </Fade>
                </div>
              </div>
              <div className="wwa-col">
                <Fade bottom cascade>
                  <div>
                    <h1>Industry expertise</h1>
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
                </Fade>
              </div>
            </div>
          </div>
        </div> */}
        {/* ====================================ROI============================== */}
        {/* <div className="analytics-roi-section">
          <div className="analytics-roi-wrapper">
            <div className="arw-content">
              <div className="arw-col">
                <Fade bottom cascade>
                  <div>
                    <h1>ROI</h1>
                    <br />
                    <p>
                      We’ll help you measure the ROI on your analytical
                      investment. You will start realizing it within the very
                      first few weeks of engaging our team.
                    </p>
                    <p>
                      We will enable unprecedented data visibility, which in
                      turn will lead to significant improvement in data quality.
                    </p>
                    <p>
                      With easy, governed access to so much of actionable data,
                      not only your teams will gain improvement in productivity,
                      they will be able to make more informed, data driven
                      decisions.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="arw-col arw-col-img-wrapper">
                <div className="arw-col-img">
                  <Fade bottom>
                    <img src="https://media.istockphoto.com/vectors/business-people-on-chart-data-vector-id978044314?s=612x612"></img>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
