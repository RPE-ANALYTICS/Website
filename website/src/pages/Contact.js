import React from "react";

import ContactUs from "../components/ContactUs";

import image from "./../img/map-pin.png";

export default function Contact() {
  const handleSend = () => {
    window.open('mailto:email@example.com?subject=Subject&body=Body%20goes%20here')
  }
  return (
    <>
      <section className="contactWrapper section">
        <div className="contact-background">
          <img src={image}></img>
        </div>
        <div className="contact-address-wrapper">
        <div className='address-contact-us'>
            <h1><i className="fas fa-minus"></i> Send Your Email <i className="fas fa-minus"></i></h1>
            <button onClick={handleSend}>Send</button>
          </div>
          <div className="address">
            <div className="address-us links">
              <ul>
                <li className="address-country">United States</li>
                <li>
                  <p>RPE</p>
                </li>
                <li>2701 Cambridge Court</li>
                <li>Auburn Hills, MI 48326</li>
                <li>
                <i class="far fa-envelope-open"></i> <span>rpe@rp-eng.com</span>
                </li>
              </ul>
            </div>
            <div className="address-pl links">
              <ul>
                <li className="address-country">Poland</li>
                <li>
                  <p>RPE</p>
                </li>
                <li>Legnicka 55f</li>
                <li>54-203 Wroclaw</li>
                <li>
                <i class="far fa-envelope-open"></i> <span>rpe@rp-eng.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
