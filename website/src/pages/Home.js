import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import video from "../img/video/video3.mp4";
import digital from "../img/icons/monitoring.svg";
import analytics from "../img/icons/brain.svg";
import operations from "../img/icons/cloud.svg";

import Brands from "../components/Brands";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeCards",
        start: "top center",
      },
    });
    let tl2 = gsap.timeline({
      trigger: ".homeWrapper-home ",
      // start: "top top"
    });
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".homeCards",
        start: "top bottom",
      },
    });

    tl3.from(".banner-title", {
      opacity: 0,
      x: -200,
      duration: 1,
    });
    tl3.to(".banner-title", {
      opacity: 1,
      x: 0,
      duration: 1,
    });

    tl.from(".card", {
      opacity: 0,
      y: 200,
      duration: 0.5,
    });
    tl.to(".card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    tl.from(".card-icon", {
      opacity: 0,
      duration: 0.5,
    });
    tl.to(".card-icon", {
      opacity: 1,
      duration: 0.5,
    });

    tl2.from(".home-content", {
      opacity: 0,
      right: -500,
      duration: 1,
    });
    tl2.to(".home-content ", {
      opacity: 1,
      right: 10,
      duration: 1,
    });

    tl2.from(
      ".c-puzzle:nth-of-type(2)",
      {
        duration: 0.4,
        transform: "skewX(-30deg) translateZ(0)",
      },
      "-=1"
    );
    tl2.to(
      ".c-puzzle:nth-of-type(2)",
      {
        duration: 0.4,
        transform: "skewX(20deg) translateZ(0)",
      },
      "-=1"
    );

    tl2.from(
      ".c-puzzle:nth-of-type(3)",
      {
        duration: 0.5,
        transform: "skewX(25deg) translateZ(0)",
      },
      "-=1"
    );
    tl2.to(
      ".c-puzzle:nth-of-type(3)",
      {
        duration: 0.5,
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
      top:
        document.body.offsetHeight -
        document.querySelector(".homeBanner").getBoundingClientRect().height,
      left: 0,
      behavior: "smooth",
    });
  };

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
            {/* <h1>ACCELERATE  YOUR DIGITAL TRANSFORMATION JOURNEY</h1> */}
            <p>Accelerate your digital transformation journey</p>
          </div>
          <div className="home-bottom-line absolute">
            <p onClick={handleScroll}>Scroll down</p>
            <span></span>
          </div>
          <div className="home-right-line-top absolute">
            <span></span>
          </div>
          <div
            className="home-right-line-middle absolute"
            onClick={handleScroll}
          >
            <span>
              <i className="fas fa-angle-double-down"></i>
            </span>
          </div>
          <div className="home-right-line-bottom absolute">
            <span></span>
          </div>
        </div>
      </section>
      <section className="homeBanner section fadeIn">
        {/* <p>OUR SOLUTIONS</p> */}
        <p></p>
        <h3 className="banner-title ">
          We deliver business intelligence applications focused on improving
          your business.
        </h3>
        <p></p>
        {/* <p>We deliver business intelligence applications focused on improving your business.</p> */}
      </section>
      <section className="industriesSection section">
        <div className="industries-wrapper">
          <h1>Key Industries We Support</h1>
          <div className="industries-cards">
            <div className="industry-cards">
              <img src='https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg'></img>
              <h3>Automotive</h3>
            </div>
            <div className="industry-cards">
            <img src='https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg'></img>
              <h3>Defense</h3>
            </div>
            <div className="industry-cards">
            <img src='https://www.medgadget.com/wp-content/uploads/2020/07/Healthcare9.jpeg'></img>
              <h3>Medical</h3>
            </div>
          </div>
        </div>
      </section>
      <section ref={sectionRef} className="homeCards section">
        <div className="cards-title fadeIn">
          <h1>Use our experience</h1>
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
              <p>
                    Business Intelligence, Data Management, AI & ML
                  </p>
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
              <p>
                    Environment Management, BI Platfrom Operations
                  </p>
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
      </section>

      <section className="brandSection section">
        <Brands />
      </section>
    </>
  );
}
