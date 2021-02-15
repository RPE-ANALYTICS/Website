import React, { useState } from "react";

import {Button} from 'react-bootstrap'

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
                <h1>We Are Hiring !</h1>
                <br />
                <p>
                    RPE is always looking to grow our team with the strong talent.
                  We invest in our employee’s education, by providing
                  comprehensive training to our new hires, to ensure consistent
                  and top quality, and mentoring by senior solutions
                  consultants. You will work on challenging assignments.
                </p>
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
