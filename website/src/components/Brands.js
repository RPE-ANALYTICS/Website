import React, {useEffect} from 'react';
import jedox from '../img/logos/jedox.png';
import qlik from '../img/logos/qlik.png';
import powerbi from '../img/logos/powerbi.jpg';
import snowflake from '../img/logos/snowflake.png';

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Brands() {

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeCards',
                start: "center center"
            }
        })
    
        tl.from('.brand', {
            opacity: 0,
            y: 200,
            duration: 0.5
        })
        tl.to('.brand', {
            opacity: 1,
            y: 0,
            duration: 0.5
        })
    },[])

    return (
        <div className="brandsWrapper">
            <div className="brand">
                <img src='https://www.axisgroup.com/hs-fs/hubfs/Qlik-Logo_RGB%20(1).png?width=899&name=Qlik-Logo_RGB%20(1).png 899w, https://www.axisgroup.com/hs-fs/hubfs/Qlik-Logo_RGB%20(1).png?width=1797&name=Qlik-Logo_RGB%20(1).png 1797w, https://www.axisgroup.com/hs-fs/hubfs/Qlik-Logo_RGB%20(1).png?width=2696&name=Qlik-Logo_RGB%20(1).png 2696w, https://www.axisgroup.com/hs-fs/hubfs/Qlik-Logo_RGB%20(1).png?width=3594&name=Qlik-Logo_RGB%20(1).png 3594w, https://www.axisgroup.com/hs-fs/hubfs/Qlik-Logo_RGB%20(1).png?width=4493&name=Qlik-Logo_RGB%20(1).png 4493w, https://www.axisgroup.com/hs-fs/hubfs/Qlik-Logo_RGB%20(1).png?width=5391&name=Qlik-Logo_RGB%20(1).png 5391w'></img>
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
        </div>
    )
}
