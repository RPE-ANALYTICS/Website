import React from 'react';

import jedox from '../img/logos/jedox.svg';
import powerbi from '../img/logos/powerbi.jpg';
import snowflake from '../img/logos/snowflake.png';
import qlik from '../img/logos/qlik.png';

import Fade from "react-reveal/Fade";

export default function Brands() {
    return (
        <div className="brandsWrapper">
            <Fade bottom>
            <div className="brand">
                <img src={qlik}></img>
            </div>
            <div className="brand">
                <img src={jedox}></img>
            </div>
            <div className="brand">
                <img src={powerbi}></img>
            </div>
            <div className="brand">
                <img src={snowflake}></img>
            </div>
            </Fade>
        </div>
    )
}
