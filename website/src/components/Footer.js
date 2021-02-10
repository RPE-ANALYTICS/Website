import React, {useState} from 'react';
import whiteLogo from "../img/logos/rpe_white.png";
import {Link} from 'react-router-dom';

export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    const [isActive, setIsActive] = useState(false);
    const handle= () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <section className="footerWrapper section">
                <div className="footer-top">
                    <div className="footer-top-col-left">
                        <div className="content-left">
                        <img className="logo-footer" src={whiteLogo} alt="RPE Analytics"></img>
                        <div className="footer-links links">
                            <ul>
                                <li>
                                    <Link to="/analytics">Analytics</Link>
                                </li>
                                <li>
                                    <Link to="/operations">Operations</Link>
                                </li>
                                <li>
                                    <Link to="/digital">Digital transformations</Link>
                                </li>
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-top-col-right">
                        <div className="content-right">
                            <div className="contact-title">
                                <h2>Contact</h2>
                            </div>
                            <div className="address-columns">
                                <div className="address-us links">
                                    <ul>
                                        <li className="address-country">
                                            United States
                                        </li>
                                        <li><p>RPE</p></li>
                                        <li>
                                            2701 Cambridge Court
                                        </li>
                                        <li>
                                            Auburn Hills, MI 48326
                                        </li>
                                        <li>
                                            @: <span>rpe@rp-eng.com</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="address-pl links">
                                    <ul>
                                            <li className="address-country">
                                                Poland
                                            </li>
                                            <li><p>RPE</p></li>
                                            <li>
                                                Legnicka 55f
                                            </li>
                                            <li>
                                                54-203 Wroclaw
                                            </li>
                                            <li>
                                                @: <span>rpe@rp-eng.com</span>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        Copyright <span onClick={handle}>{isActive ? ' villagef' : `©`}</span> {year} RPE Analytics
                    </div>
                </div>
            </section>
        </>
    )
}
