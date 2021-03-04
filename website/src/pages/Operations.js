import React from "react";

import Management from "../img/icons/management.svg";
import Business from "../img/icons/business.svg";
import IT from "../img/icons/it.svg";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

export default function Operations() {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight - 70,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <section className="homeWrapper-operations section">
      <img src=""></img>
      <div className="content">
        <h1>This page is under construction</h1>
        <p>site nearly ready</p>
      </div>
    </section>
  </>
    // <>
    //   <section className="analyticsWrapper section">
    //     <div className="analytics-thumbnail-section">
    //       <div className="analytics-thumbnail-image"></div>
    //       <div className="analytics-thumbnail-content">
    //         <Fade bottom>
    //           <h1>
    //             <span>O</span>perations
    //           </h1>
    //           <p>Evaluate the entire company data</p>
    //         </Fade>
    //       </div>
    //       <div className="home-right-line-top absolute">
    //         <Slide top>
    //           <span></span>
    //         </Slide>
    //       </div>
    //       <div
    //         className="home-right-line-middle absolute"
    //         onClick={handleScroll}
    //       >
    //         <span>
    //           <Jello>
    //             <i className="fas fa-angle-double-down"></i>
    //           </Jello>
    //         </span>
    //       </div>
    //       <div className="home-right-line-bottom absolute">
    //         <Slide bottom>
    //           <span></span>
    //         </Slide>
    //       </div>
    //     </div>
    //     <div className="analytics-content-section2">
    //       <div className="analytics-content-wrapper2">
    //         <Fade bottom cascade>
    //           <div className="title2">
    //             <h1>RPE supports analytics operations</h1>
    //             <p>
    //               Platform Administration (we provide full administration of
    //               your analytics platform ranging from data refreshes to
    //               software upgrades.) ​
    //             </p>
    //           </div>
    //         </Fade>
    //         <div className="cards2">
    //           <Fade left>
    //             <div className="card2">
    //               <img src={Management}></img>
    //               <h3>Alerting & Monitoring</h3>
    //               <p>
    //                 We offer the necessary alerting & monitoring capabilities
    //                 around key metrics to ensure stability of your platform.
    //               </p>
    //             </div>
    //           </Fade>
    //           <Fade bottom>
    //             <div className="card2">
    //               <img src={Business}></img>
    //               <h3>Architectural Support</h3>
    //               <p>
    //                 We design and implement the necessary platform architectures
    //                 to ensure governance, security, and stability for the data
    //                 assets.
    //               </p>
    //             </div>
    //           </Fade>
    //           <Fade right>
    //             <div className="card2">
    //               <img src={IT}></img>
    //               <h3>Platform Installations & Migrations</h3>
    //               <p>
    //                 We quickly get you up and running with the latest
    //                 technologies.
    //               </p>
    //             </div>
    //           </Fade>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}
