import React from 'react';

import ContactUs from '../components/ContactUs';

import image from './../img/pontiac.png'

export default function Contact() {
    return (
        <>
        <section className="contactWrapper section">

          <div className="contact-background">
            {/* <img src="https://cdn4.vectorstock.com/i/1000x1000/13/63/global-network-connection-background-vector-18811363.jpg"></img> */}
            <img src={image}></img>
          </div>
          <div className="darker"></div>
          <div className="contact-container">
            {/* <div className="contact-left-col">
              <div className="contact-address-us">
                <div className="address-content">
                  <ul>
                    <li className="country-name">United States</li>
                    <li><p>RPE</p></li>
                    <li>2701 Cambridge Court</li>
                    <li>Auburn Hills, MI 48326</li>
                    <li>
                    <i className="far fa-envelope-open"></i> <span>rpe@rp-eng.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact-address-pl">
                <div className="address-content">
                  <ul>
                    <li className="country-name">Poland</li>
                    <li><p>RPE</p></li>
                    <li>Legnicka 55f</li>
                    <li>50-204 Wroclaw</li>
                    <li>
                    <i className="far fa-envelope-open"></i> <span>rpe@rp-eng.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="contact-right-col">
              <div className="form-container">
                  <ContactUs/>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="contactWrapper section">
          <div className="darker"></div>
          <div className="contact-container">
            <div className="contact-left-col">
              <div className="contact-address-us">
                <div className="address-content">
                  <ul>
                    <li className="country-name">United States</li>
                    <li><p>RPE</p></li>
                    <li>2701 Cambridge Court</li>
                    <li>Auburn Hills, MI 48326</li>
                    <li>
                    <i className="far fa-envelope-open"></i> <span>rpe@rp-eng.com</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact-address-pl">
                <div className="address-content">
                  <ul>
                    <li className="country-name">Poland</li>
                    <li><p>RPE</p></li>
                    <li>Legnicka 55f</li>
                    <li>50-204 Wroclaw</li>
                    <li>
                    <i className="far fa-envelope-open"></i> <span>rpe@rp-eng.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contact-right-col">
              <div className="form-container">
                  <ContactUs/>
              </div>
            </div>
          </div>
        </section> */}
      </>
    )
}
