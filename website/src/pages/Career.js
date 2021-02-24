import React from "react";

// import image from 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

export default function Career() {
  const handleSend = () => {
    window.open(
      "mailto:fwydra@rp-eng.com?subject=Subject&body=%20"
    );
  };
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
                  <div className="advert">
                    <div className="advert-col-left">
                      {/* <i class="far fa-user"></i> */}
                    </div>
                    <div className="advert-col-right">
                      <ul>
                        <li id="first">
                          <h1>Junior Business Analyst</h1>
                          <h2>Active</h2>
                        </li>
                        <li id="second">
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Wroclaw
                          </p>
                          <p>
                            <i class="fas fa-desktop"></i> Technologies
                          </p>
                          <p>
                            <i className="far fa-clock"></i> Full-Time
                          </p>
                        </li>
                        <li id="third">
                          <button>More Details</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="advert">
                    <div className="advert-col-left">
                    </div>
                    <div className="advert-col-right">
                      <ul>
                        <li id="first">
                          <h1>Senior Business Analyst</h1>
                          <h2>Active</h2>
                        </li>
                        <li id="second">
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Wroclaw
                          </p>
                          <p>
                            <i className="fas fa-desktop"></i> Technologies
                          </p>
                          <p>
                            <i className="far fa-clock"></i> Full-Time
                          </p>
                        </li>
                        <li id="third">
                          <button>More Details</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="advert">
                    <div className="advert-col-left">
                    </div>
                    <div className="advert-col-right">
                      <ul>
                        <li id="first">
                          <h1>Power BI Developer</h1>
                          <h2>Active</h2>
                        </li>
                        <li id="second">
                        <p>
                            <i className="fas fa-map-marker-alt"></i> Wroclaw
                          </p>
                          <p>
                            <i className="fas fa-desktop"></i> Technologies
                          </p>
                          <p>
                            <i className="far fa-clock"></i> Full-Time
                          </p>
                        </li>
                        <li id="third">
                          <button>More Details</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="career-col right">
                <div className="career-col-img">
                  <img src="https://image.freepik.com/free-photo/business-sucessful-businessman-working-with-laptop-using-computer-smiling-standing_1258-26447.jpg"></img>
                  {/* <img src="https://image.freepik.com/free-photo/young-girl-is-standing-leaning-table-office_88135-1539.jpg"></img> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="career-resume">
          <h1>
            <i className="fas fa-minus"></i> Send Your Resume{" "}
            <i className="fas fa-minus"></i>
          </h1>
          <button onClick={handleSend}>Send</button>
        </div> */}
      </section>
    </>
  );
}
