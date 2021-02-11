import React from "react";
import { Link } from "react-router-dom";
import digital from "../img/icons/monitoring.svg";
import analytics from "../img/icons/brain.svg";
import operations from "../img/icons/cloud.svg";
import BigData from "../img/big-data.jpg";

import CloudStorage from "../img/icons/cloud-storage.svg";

import Brands from "../components/Brands";

export default function About() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="homeWrapper-about section">
        <div className="about-thumbnail-section">
          <div className="about-puzzles-home">
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
          </div>
          <div className="about-thumbnail-image">
            <img src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
          </div>
          <div className="about-thumbnail-content">
            <h1>
              <span>A</span>bout
            </h1>
            <p>
              We believe that high-quality, meaningful digital products can help
              transform organizations.
            </p>
          </div>
        </div>
        <div className="about-content-section">
          <div className="about-who-we-are">
            <div className="wwa-content">
              <div className="wwa-col">
                <div className="wwa-col-img">
                  <img src="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                </div>
              </div>
              <div className="wwa-col">
                <h1>Who we are ?</h1>
                <br />
                <p>
                  RPE Analytics is a boutique analytics and automation
                  organization. We help our clients build solutions to maximize
                  the value of their data and analytics assets, and automate key
                  business processes.
                </p>
                <p>
                  We bring deep expertise in analytics, data management, and
                  business process automation. Our team's collective experience
                  encompasses established experience in solving complex business
                  problems, and hands-on experience and certifications in new
                  and emerging technologies. Our clients range from small
                  businesses to Fortune 500 companies across all major
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-section3">
          <div className="about-content-wrapper3">
            <div className="title3">
              <h1>WE ARE DIFFERENT</h1>
              <p>MAIN AREAS OF EXPERTISE</p>
            </div>
            <div className="cards-wrapper">
              <div className="card fadeIn">
                <div className="card-icon">
                  <img src={analytics}></img>
                </div>
                <div className="info">
                  <h1 className="title">
                    <span>A</span>nalytics
                  </h1>
                  <p>Business Intelligence, Data Management, AI & ML</p>
                </div>
                <div className="see-button">
                  <span></span>
                  <Link to="/analytics" onClick={handleClick}>
                    <button>Learn More</button>
                  </Link>
                </div>
              </div>
              <div className="card fadeIn">
                <div className="card-icon">
                  <img src={operations}></img>
                </div>
                <div className="info">
                  <h1 className="title">
                    <span>O</span>perations
                  </h1>
                  <p>Environment Management, BI Platfrom Operations</p>
                </div>
                <div className="see-button">
                  <span></span>
                  <Link to="/operations" onClick={handleClick}>
                    <button>Learn More</button>
                  </Link>
                </div>
              </div>
              <div className="card fadeIn">
                <div className="card-icon">
                  <img src={digital}></img>
                </div>
                <div className="info">
                  <h1 className="title">
                    <span>D</span>igital <span>T</span>ransformation
                  </h1>
                  <p>
                    Transformation Strategy & Roadmaps, Analytics Enablement
                  </p>
                </div>
                <div className="see-button">
                  <span></span>
                  <Link to="/digital" onClick={handleClick}>
                    <button>Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-team-section">
          <div className="about-team-wrapper">
            <div className="atw-content">
              <div className="atw-col">
                <h1>About Our Team</h1>
                <br />
                <p>
                  RPE Analytics is a boutique analytics and automation
                  organization. We help our clients build solutions to maximize
                  the value of their data and analytics assets, and automate key
                  business processes.
                </p>
                <p>
                  We bring deep expertise in analytics, data management, and
                  business process automation. Our team's collective experience
                  encompasses established experience in solving complex business
                  problems, and hands-on experience and certifications in new
                  and emerging technologies. Our clients range from small
                  businesses to Fortune 500 companies across all major
                  industries.
                </p>
              </div>
              <div className="atw-col">
                <div className="atw-col-img">
                  <img src="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="industriesSection section">
        <div className="industries-wrapper">
          <h1>Key Industries We Support</h1>
          <div className="industry-cards">
            {/*=====================================================*/}
            <div className="industry-card">
              <div className="industry-card-inner">
                <div className="industry-card-front">
                  <img src='https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg'></img>
                  <h3>Automotive</h3>
                </div>
                <div className="industry-card-back">
                  <h1>About Automotive</h1> 
                  {/* <p>Architect & Engineer</p> 
                  <p>We love that guy</p> */}
                </div>
              </div>
            </div>
            {/*=====================================================*/}
            {/*=====================================================*/}
            <div className="industry-card">
              <div className="industry-card-inner">
                <div className="industry-card-front">
                  <img src='https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg'></img>
                  <h3>Defense</h3>
                </div>
                <div className="industry-card-back">
                  <h1>About Defense</h1> 
                  {/* <p>Architect & Engineer</p> 
                  <p>We love that guy</p> */}
                </div>
              </div>
            </div>
            {/*=====================================================*/}
            {/*=====================================================*/}
            <div className="industry-card">
              <div className="industry-card-inner">
                <div className="industry-card-front">
                  <img src='https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg'></img>
                  <h3>Medical</h3>
                </div>
                <div className="industry-card-back">
                  <h1>About Medical</h1> 
                  {/* <p>Architect & Engineer</p> 
                  <p>We love that guy</p> */}
                </div>
              </div>
            </div>
            {/*=====================================================*/}
          </div>
        </div>
      </section>

        <div className="about-partners-section">
          <div className="about-partners-wrapper">
            <h1>OUR PARTNERS</h1>
            <p>
              RPE has developed technology partnerships with top software
              vendors that are leading the Digital Transformation. We will help
              you accelerate your Digital Transformation journey and maximize
              return on your technology investments.
            </p>
          </div>
        </div>
        <section className="brandSection section">
          <Brands />
        </section>
      </section>
    </>
  );
}
