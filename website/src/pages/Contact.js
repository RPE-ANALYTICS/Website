import React from "react";
import Fade from 'react-reveal/Fade'
import ContactUs from "../components/ContactUs";
import Image from "./../img/world-map4.png";

import T from "../T";

export default function Contact() {
  const handleSend = () => {
    window.open(
      "mailto:fwydra@rp-eng.com?subject=Subject&body=%20"
    );
  };
  return (
    <>
      <section className="contactWrapper section">

        <div className="contact-image-container">
        <div className="puzzles-contact">
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
            <div className="c-puzzle absolute"></div>
          </div>
          {/* <img src={Image}></img> */}
        </div>
        <div className="contact-content-container">
          <Fade bottom cascade>
          <div className="contact-container">
            <div className="contact-address-us row">
              <div className="address-content">
                <ul>
                  <li className="country-name">United States</li>

                  <li>2701 Cambridge Court</li>
                  <li>Auburn Hills, MI 48326</li>
                  <li>
                    <i className="far fa-envelope-open"></i>{" "}
                    <span>rpe@rp-eng.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-container row">
              <h1>
                <i className="fas fa-minus"></i> <T label={"contactTitle"} />{" "}
                <i className="fas fa-minus"></i>
              </h1>
              <button onClick={handleSend}><T label={"contactBtn"} /></button>
            </div>
            <div className="contact-address-pl row">
              <div className="address-content">
                <ul>
                  <li className="country-name">Poland</li>
                  <li>Legnicka 55f</li>
                  <li>50-204 Wroclaw</li>
                  <li>
                    <i className="far fa-envelope-open"></i>{" "}
                    <span>rpe@rp-eng.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
