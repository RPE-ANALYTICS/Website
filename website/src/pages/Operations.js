import React from "react";

import video from '../img/video/video3.mp4';
import digital from '../img/icons/monitoring.svg';
import analytics from '../img/icons/brain.svg';
import operations from '../img/icons/cloud.svg';

import Brands from '../components/Brands';

export default function Operations() {
  return (
    <>
    <section className="homeWrapper-operations section">
        <div className="video-container-operations">
            <video src={video} autoPlay='autoPlay' loop='loop' playsInline='playsInline' muted='muted'></video>
        </div>
        <div className="puzzles-operations">
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
            <div className="operations-content absolute">
                {/* <h1>ACCELERATE  YOUR DIGITAL TRANSFORMATION JOURNEY</h1> */}
                <p>Accelerate your digital transformation journey</p>
            </div>
            <div className="operations-bottom-line absolute">
                <span></span>
                <p>Scroll down</p>
            </div>
            <div className="operations-right-line-top absolute">
                <span></span>
            </div>
            <div className="operations-right-line-middle absolute">
                <span>
                    <i className="fas fa-angle-double-down"></i>
                </span>
            </div>
            <div className="operations-right-line-bottom absolute">
                <span></span>
            </div>
        </div>
    </section>
    <section className="homeBanner section">
            <p>OUR SOLUTIONS</p>
            <h3>Use our experience</h3>
            <p>We deliver business intelligence applications focused on improving your business.</p>
    </section>
    <section className="homeCards section">
        <div className="cards-wrapper">
          <div className="card">
            <div className="card-icon">
              <img src={analytics}></img>
            </div>
            <div className="info">
              <h1 className="title">Analytics</h1>
              <p>FUTCEPTION COMFORT.dfljaskdjoajoajsdalksdl</p>
            </div>
            <div className="see-button">
                <button>See more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={operations}></img>
            </div>
            <div className="info">
              <h1 className="title">Operations</h1>
              <p>FUTCEPTION COMFORT.dfljaskdjoajoajsdalksdl</p>
            </div>
            <div className="see-button">
                <button>See more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={digital}></img>
            </div>
            <div className="info">
              <h1 className="title">Digital Transformation</h1>
              <p>FUTCEPTION COMFORT.dfljaskdjoajoajsdalksdl</p>
            </div>
            <div className="see-button">
                <button>See more</button>
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
