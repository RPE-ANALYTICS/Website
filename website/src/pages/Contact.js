import React from 'react';

import ContactUs from '../components/ContactUs';

import image from './../img/map.jpg'

export default function Contact() {
    return (
        <>
        <section className="contactWrapper section">

          <div className="contact-background">
            {/* <img src="https://cdn4.vectorstock.com/i/1000x1000/13/63/global-network-connection-background-vector-18811363.jpg"></img> */}
            <img src='https://vemaps.com/uploads/img/large/wrld-16.jpg'></img>
            {/* <img src={image}></img> */}
          </div>
          <div className="darker"></div>
          <div className="contact-container">
            <div className="contact-right-col">
              <div className="form-container">
                  {/* <ContactUs/> */}
              </div>
            </div>
          </div>
        </section>

      </>
    )
}
