import React, {useState, useRef, useEffect} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';
import "../styles/style.css";
import whiteLogo from "../img/logos/rpe_white.png";

export default function NavigationBar() {
    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    let sectionTwo = 0;


    navRef.current = navBackground;
    useEffect(() => {
      const handleScroll = () => {
        let show = window.scrollY > 70
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        sectionTwo = document.removeEventListener('scroll', handleScroll)
      }
    }, []);

    const handleClick = () => {
      window.scrollTo(0, 0);
    }


  return (
    <section className="navbarWrapper section" style={{ transition: '1s ease',
      backgroundColor: navBackground ? 'rgba(17, 40, 56, 0.8)' : 'transparent',
      height: navBackground ? '70px' : '80px'}}>
      <Navbar variant="dark" collapseOnSelect  expand="lg">
        <Nav>
        <Link className="brandLogo" to="/"  onClick={handleClick}>
          <img className="logo-nav" src={whiteLogo} alt="RPE Analytics"></img>
        </Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavLink id="home" exact to="/"  onClick={handleClick}>Home</NavLink>
            <NavDropdown id='solutions' title="Solutions" id="collasible-nav-dropdown">
              <NavLink to="analytics" onClick={handleClick}>Analytics</NavLink>
              <NavLink to="operations"  onClick={handleClick}>Operations</NavLink>
              <NavLink to="digital"  onClick={handleClick}>
                Digital Transformations
              </NavLink>
            </NavDropdown>
            <NavLink id="about" to="about"  onClick={handleClick}>About us</NavLink>
            <NavLink id="contact" to="contact"  onClick={handleClick}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}
