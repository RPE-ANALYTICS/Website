// import React, { useState, useRef, useEffect } from "react";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import "../styles/style.css";
import whiteLogo from "../img/logos/rpe_white.png";

// export default function NavigationBar() {
//   const [navBackground, setNavBackground] = useState(false);
//   const navRef = useRef();
//   let sectionTwo = 0;

//   navRef.current = navBackground;
//   useEffect(() => {
//     const handleScroll = () => {
//       let show = window.scrollY > 20;
//       if (navRef.current !== show) {
//         setNavBackground(show);
//       }
//     };
//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       sectionTwo = document.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleClick = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section
//       className="navbarWrapper section"
//       style={{
//         transition: "1s ease",
//         backgroundColor: navBackground
//           ? "rgba(17, 40, 56, 0.9)"
//           : "transparent",
//         height: navBackground ? "70px" : "80px",
//       }}
//     >
//       <Navbar variant="dark" collapseOnSelect expand="lg">
//         <Nav>
//           <Link className="brandLogo" to="/" onClick={handleClick}>
//             <img className="logo-nav" src={whiteLogo} alt="RPE Analytics"></img>
//           </Link>
//         </Nav>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse
//           id="responsive-navbar-nav"
//           className="justify-content-end"
//         >
//           <Nav className="mr-auto"></Nav>
//           <Nav>
//             <NavLink id="home" exact to="/" onClick={handleClick}>
//               Home
//             </NavLink>
//             <NavDropdown
//               id="solutions"
//               title="Solutions"
//               id="collasible-nav-dropdown"
//             >
//               <NavDropdown.Item>
//                 <NavLink className="link-hover" to="analytics" onClick={handleClick}>
//                   Analytics
//                 </NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <NavLink className="link-hover" to="operations" onClick={handleClick}>
//                   Operations
//                 </NavLink>
//               </NavDropdown.Item>
//               <NavDropdown.Item>
//                 <NavLink className="link-hover" to="digital" onClick={handleClick}>
//                   Digital Transformations
//                 </NavLink>
//               </NavDropdown.Item>
//             </NavDropdown>
//             <NavLink id="about" to="about" onClick={handleClick}>
//               About us
//             </NavLink>
//             <NavLink id="career" to="career" onClick={handleClick}>
//               Career
//             </NavLink>
//             <NavLink id="contact" to="contact" onClick={handleClick}>
//               Contact
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import Dropdown from './Dropdown';

function NavigationBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
      setDropdown(true);
  };

  const onMouseLeave = () => {
      setDropdown(false);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img className="logo-nav" src={whiteLogo} alt="RPE Analytics"></img>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              // to='/analytics'
              className='nav-links'
              // onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/career'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Career
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact us
            </Link>
          </li>

        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default NavigationBar;


