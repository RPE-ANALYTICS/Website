import React, { useState } from "react";
import data from "../data/data.json";
import Advert from "../components/Advert";
import Popup from "../components/Popup";

import Fade from "react-reveal/Fade";
import cv from '../img/test/cv.svg'

import T from "../T";

export default function Career() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [oneAdvert, setOneAdvert] = useState();

  const handleClick = (id) => {
    data.map((d) => {
      if (id === d.id && d.isActive === true) {
        setActive(false);
        setOneAdvert(d);
        setShow(true);
      }
      if (id === d.id && d.isActive === false) {
        setShow(false);
        setActive(true);
      }
    });
  };

  return (
    <>
      <section className="careerWrapper section">
        <div className="career-content-section">
          <div className="career-wrapper">
            <div className="career-content">
              <div className="career-col left">
                <h1 className="career-title">
                  <T label={"careerTitle"} />
                </h1>
                <br />
                <p>
                  <T label={"careerContent"} />
                </p>
                <div className="career-adverts">
                  {data.map((d) => (
                    <Fade bottom>
                      <div
                        className="advert"
                        key={d.id}
                        onClick={() => handleClick(d.id)}
                      >
                        <div className="advert-col-left"></div>
                        <div className="advert-col-right">
                          <ul>
                            <li id="first">
                              <h1
                                style={{
                                  color:
                                    d.isActive === true ? "#1e2f3b" : "#bbb",
                                }}
                              >
                                {d.title}
                              </h1>
                              <h2
                                style={{
                                  color:
                                    d.isActive === true
                                      ? "rgb(1, 122, 1)"
                                      : "#bbb",
                                }}
                              >
                                {d.isActive ? "Active" : "Not Active"}
                              </h2>
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
                              <button
                                onClick={() => handleClick(d.id)}
                                style={{
                                  color:
                                    d.isActive === true ? "#d42028" : "#bbb",
                                }}
                              >
                                <T label={"careerADDBtn"} />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
              <div className="career-col right">
                <div className="career-col-img">
                  {/* <img src="https://image.freepik.com/free-photo/business-sucessful-businessman-working-with-laptop-using-computer-smiling-standing_1258-26447.jpg"></img> */}
                  {/* <img src={cv}></img> */}
                  {/* <img src="https://image.freepik.com/darmowe-wektory/lider-zespolu-i-koncepcja-pracy-zespolowej_74855-6671.jpg"></img> */}
                  <img src="https://image.freepik.com/darmowe-wektory/wizjonerski-biznesmen-patrzac-w-spyglass_87720-4246.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {show ? <Advert data={oneAdvert} show={show} setShow={setShow} /> : ""}
        {active ? <Popup active={active} setActive={setActive} /> : ""}
      </section>
    </>
  );
}
