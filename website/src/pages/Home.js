import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import video from "../img/video/video3.mp4";
import digital from "../img/icons/digital.svg";
import analytics from "../img/icons/monitor.svg";
import operations from "../img/icons/operations.svg";

import Brands from "../components/Brands";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from 'react-reveal/Jello';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let x = gsap.timeline({
      trigger: ".homeWrapper-home "
    });
    x.to(
      ".c-puzzle:nth-of-type(2)",
      {
        duration: 1,
        transform: "skewX(20deg) translateZ(0)",
      }
    );
    x.to(
      ".c-puzzle:nth-of-type(3)",
      {
        duration: 1,
        transform: "skewX(-35deg) translateZ(0)",
      },
      "-=1"
    );
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  // const handleScroll = () => {
  //   window.scroll({
  //     top:
  //       document.body.offsetHeight -
  //       document.querySelector(".homeBanner").getBoundingClientRect().height,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <>
      <section className="homeWrapper-home section">
        <div className="video-container-home">
          <video
            src={video}
            autoPlay="autoPlay"
            loop="loop"
            playsInline="playsInline"
            muted="muted"
          ></video>
        </div>
        <div className="puzzles-home">
          <div className="c-puzzle absolute"></div>
          <div className="c-puzzle absolute"></div>
          <div className="c-puzzle absolute"></div>
          <div className="home-content absolute">
            <Fade right>
              <p>ACCELERATE YOUR DIGITAL TRANSFORMATION JOURNEY</p>
            </Fade>
            {/* <p>Accelerate your digital transformation journey</p> */}
          </div>
          <div className="home-bottom-line absolute">
          <Fade bottom>
          <p onClick={handleScroll}>Scroll down</p>
            {/* <span></span> */}
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
      </section>
      <section className="homeBanner section fadeIn">
        {/* <p>OUR SOLUTIONS</p> */}
        <p></p>
        <h3 className="banner-title ">
        <Fade left cascade>
          We deliver business intelligence applications focused on improving
          your business.
          </Fade>
        </h3>
        <p></p>
        {/* <p>We deliver business intelligence applications focused on improving your business.</p> */}
      </section>
      <section ref={sectionRef} className="homeCards section">
        <div className="cards-title fadeIn">
        <Fade left>
          <h1>
            Use our experience</h1>
        </Fade>
        </div>
        <div className="cards-wrapper">
        <Fade left>
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
          <Fade right>
          <div className="card fadeIn">
            <div className="card-icon">
              <img src={digital}></img>
            </div>
            <div className="info">
              <h1 className="title">
                <span>D</span>igital <span>T</span>ransformation
              </h1>
              <p>Transformation Strategy & Roadmaps, Analytics Enablement</p>
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
      </section>

      <section className="brandSection section">
        <Brands />
      </section>
    </>
  );
}
