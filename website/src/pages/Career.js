import React from "react";


// import image from 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

export default function Career() {

  const handleSend = () => {
    window.open('mailto:email@example.com?subject=Subject&body=Body%20goes%20here')
  }
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
                  We invest in our employee’s education, by providing
                  comprehensive training to our new hires, to ensure consistent
                  and top quality, and mentoring by senior solutions
                  consultants. You will work on challenging assignments.
                </p>
                <div className="career-adverts">
                  <div className='advert'>
                    <div className='advert-col-left'>
                    {/* <i class="far fa-user"></i> */}
                    </div>
                    <div className='advert-col-right'>
                      <ul>
                        <li id="first">
                          <h1>Junior Business Analyst</h1>
                          <span>Full-Time</span>
                        </li>
                        <li id="second">
                          <p><i class="fas fa-desktop"></i> Technologies</p>
                          <p><i class="fas fa-map-marker-alt"></i> Wroclaw/Remote</p>
                          <p><i class="far fa-clock"></i> 160h</p>
                        </li>
                        <li id="third">
                          <button>More Details</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='advert'>
                    <div className='advert-col-left'>
                    {/* <i class="far fa-user"></i> */}
                    </div>
                    <div className='advert-col-right'>
                      <ul>
                        <li id="first">
                          <h1>Mid/Senior Business Analyst</h1>
                          <span>Full-Time</span>
                        </li>
                        <li id="second">
                          <p><i class="fas fa-desktop"></i> Technologies</p>
                          <p><i class="fas fa-map-marker-alt"></i> Wroclaw/Remote</p>
                          <p><i class="far fa-clock"></i> 160h</p>
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
                  <img src="https://images.pexels.com/photos/5439472/pexels-photo-5439472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="career-resume">
          <h1><i className="fas fa-minus"></i> Send Your Resume <i className="fas fa-minus"></i></h1>
          <button onClick={handleSend}>Send</button>
        </div>
      </section>
    </>
  );
}
