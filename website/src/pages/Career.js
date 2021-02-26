import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../data/data.json";
import Advert from "../components/Advert";
import Popup from '../components/Popup';

// import image from 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

export default function Career() {
  const handleSend = () => {
    window.open("mailto:fwydra@rp-eng.com?subject=Subject&body=%20");
  };

  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [oneAdvert, setOneAdvert] = useState();

  const handleClick = (id) => {
    data.map((d) => {
      if (id === d.id && d.isActive === true) {
        setActive(false)
        setOneAdvert(d);
        setShow(true);
      } 
      if (id === d.id && d.isActive === false) {
        setShow(false)
        setActive(true)
      }
    });
  };

  console.log(oneAdvert);

  return (
    <>
      <section className="careerWrapper section">
        <div className="career-content-section">
          <div className="career-wrapper">
            <div className="career-content">
              <div className="career-col left">
                <h1 className="career-title">We Are Hiring !</h1>
                <br />
                <p>
                  RPE is always looking to grow our team with the strong talent.
                  We invest in our employee’s education, and are providing
                  comprehensive training to our new hires. You will work on
                  challenging assignments.
                </p>
                <div className="career-adverts">
                  {data.map((d) => (
                    <div className="advert" key={d.id}>
                      <div className="advert-col-left">
                        {/* <i class="far fa-user"></i> */}
                      </div>
                      <div className="advert-col-right">
                        <ul>
                          <li id="first">
                            <h1>{d.title}</h1>
                            <h2>{d.isActive ? "Active" : "Not Active"}</h2>
                          </li>
                          <li id="second">
                            <p>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {d.location}
                            </p>
                            <p>
                              <i className="fas fa-desktop"></i> Technologies
                            </p>
                            <p>
                              <i className="far fa-clock"></i> Full-Time
                            </p>
                          </li>
                          <li id="third">
                            <button onClick={() => handleClick(d.id)}>
                              More Details
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="career-col right">
                <div className="career-col-img">
                  <img src="https://image.freepik.com/free-photo/business-sucessful-businessman-working-with-laptop-using-computer-smiling-standing_1258-26447.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show ? <Advert data={oneAdvert} show={show} setShow={setShow} /> : ""}
        {active ? <Popup active={active} setActive={setActive} /> : ''}
      </section>
    </>
  );
}
