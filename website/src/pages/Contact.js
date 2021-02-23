import React from "react";

import ContactUs from "../components/ContactUs";

import Image from "./../img/world-map.png";

export default function Contact() {
  const handleSend = () => {
    window.open(
      "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
    );
  };
  return (
    <>
      <section className="contactWrapper section">
        <div className="contact-image-container">
          <img src={Image}></img>
        </div>
        <div className="contact-content-container">
          {/* <h1>
            <i className="fas fa-minus"></i> Contact us{" "}
            <i className="fas fa-minus"></i>
          </h1> */}
          <div className="contact-container">
            <div className="contact-address-us row">
              <div className="address-content">
                <ul>
                  <li className="country-name">United States</li>
                  {/* <li>
                    <p>RPE</p>
                  </li> */}
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
                <i className="fas fa-minus"></i> Contact us{" "}
                <i className="fas fa-minus"></i>
              </h1>
              <button onClick={handleSend}>Send email</button>
            </div>
            <div className="contact-address-pl row">
              <div className="address-content">
                <ul>
                  <li className="country-name">Poland</li>
                  {/* <li>
                    <p>RPE</p>
                  </li> */}
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
        </div>
      </section>
    </>
  );
}
