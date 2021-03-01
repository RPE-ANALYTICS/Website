import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import digital from "../img/icons/digital.svg";
import analytics from "../img/icons/monitor.svg";
import operations from "../img/icons/operations.svg";
import BigData from "../img/big-data.jpg";

import CloudStorage from "../img/icons/cloud-storage.svg";

import Brands from "../components/Brands";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

import gsap from "gsap";

export default function About() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let x = gsap.timeline({
      trigger: ".about-puzzles-home",
    });
    x.to(".c-puzzle:nth-of-type(2)", {
      duration: 1,
      transform: "skewX(25deg) translateZ(0)",
    });
    x.to(
      ".c-puzzle:nth-of-type(3)",
      {
        duration: 1,
        transform: "skewX(-25deg) translateZ(0)",
      },
      "-=1"
    );
  }, []);
  return (
    <>
      <section className="aboutWrapper section">
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
            <Fade bottom>
              <h1>
                <span>A</span>bout us
              </h1>
              <p>We believe in your success.</p>
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
        {/* ===================WHO WE ARE======================== */}
        <div className="about-content-section">
          <div className="about-who-we-are">
            <div className="wwa-content">
              <div className="wwa-col wwa-col-content">
                <Fade bottom cascade>
                  <div>
                    <h1>Who we are ?</h1>
                    <p>
                      RPE Analytics is a boutique analytics and automation
                      organization. We help our clients build solutions to
                      maximize the value of their data and analytics assets, and
                      automate key business processes.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="wwa-col wwa-col-img-wrapper">
                <div className="wwa-col-img">
                  <Fade bottom>
                    <img src="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================WE ARE DIFFERENT======================== */}
        <div className="about-content-section3">
          <div className="about-content-wrapper3">
            <div className="title3">
              <Fade bottom cascade>
                <div>
                  <h1>WE ARE DIFFERENT</h1>
                  <p>MAIN AREAS OF EXPERTISE</p>
                </div>
              </Fade>
            </div>
            <div className="cards-wrapper">
              <Fade bottom>
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
              </Fade>
              <Fade bottom>
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
              </Fade>
              <Fade bottom>
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
              </Fade>
            </div>
          </div>
        </div>
        {/* ===================ABOUT OUR TEAM======================== */}
        <div className="about-content-section about-team-section">
          <div className="about-who-we-are">
            <div className="wwa-content">
              <div className="wwa-col wwa-col-content">
                <Fade bottom cascade>
                  <div>
                    <h1>About Our Team</h1>
                    <p>
                      We bring deep expertise in analytics, data management, and
                      business process automation. Our team's collective
                      experience encompasses established experience in solving
                      complex business problems, and hands-on experience and
                      certifications in new and emerging technologies. Our
                      clients range from small businesses to Fortune 500
                      companies across all major industries.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="wwa-col wwa-col-img-wrapper">
                <div className="wwa-col-img">
                  <Fade bottom>
                    <img src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================KEY INDUSTRIES======================== */}
        <section className="industriesSection section">
          <div className="industries-wrapper">
            <Fade bottom>
              <h1>Key Industries We Support</h1>
            </Fade>
            <div className="industry-cards">
              <Fade bottom>
                <div className="industry-card">
                  <div className="industry-card-inner">
                    <div className="industry-card-front">
                      <img src="https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg"></img>
                      <div>
                        <h3>Manufacturing</h3>
                      </div>
                    </div>
                    <div className="industry-card-back">
                      <h3>Manufacturing</h3>
                      {/* <p>Architect & Engineer</p> 
                  <p>We love that guy</p> */}
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="industry-card">
                  <div className="industry-card-inner">
                    <div className="industry-card-front">
                      <img src="https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg"></img>
                      <div>
                        <h3>Medical</h3>
                      </div>
                    </div>
                    <div className="industry-card-back">
                      <h3>Medical</h3>
                      {/* <p>Architect & Engineer</p> 
                  <p>We love that guy</p> */}
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="industry-card">
                  <div className="industry-card-inner">
                    <div className="industry-card-front">
                      <img src="https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg"></img>
                      <div>
                        <h3>Telecomunication</h3>
                      </div>
                    </div>
                    <div className="industry-card-back">
                      <h3>Telecomunication</h3>
                      {/* <p>Architect & Engineer</p> 
                  <p>We love that guy</p> */}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>
        {/* ===================OUR PARTNERS======================== */}
        <div className="about-partners-section">
          <Fade bottom cascade>
            <div className="about-partners-wrapper">
              <h1>OUR PARTNERS</h1>
              <p>
                RPE has developed technology partnerships with top software
                vendors that are leading the Digital Transformation. We will
                help you accelerate your Digital Transformation journey and
                maximize return on your technology investments.
              </p>
            </div>
          </Fade>
        </div>
        {/* ===================BRANDS======================== */}
        <section className="brandSection section">
          <Brands />
        </section>
      </section>
    </>
  );
}
