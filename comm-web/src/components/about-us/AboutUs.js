import React, { useEffect } from "react";
import "./AboutUs.css";
import Rocket from "./rocket.svg";
import Collab from "./collaborating.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WHO_ARE_WE = <div>GDSC, short for Google Developer Students Club, is a global approach to bring the College students, interested in Google developer technologies, of any University or college together and connect them on one platform. Students of one GDSC community can connect to other communities, even in different countries. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.<br /><br />The GDSC of Dr. Lankapalli Bullayya College of Engineering, Visakhapatnam is one of the numerous Developer clubs out there which promote advocacy in creating, curating and enhancing projects built by the community to help the masses. We are a newly inaugurated Developer club based in our college campus in the Indian state of Andhra Pradesh and we whole-heartedly welcome all inquisitive, interested and budding developers to collaborate with us in the long run.</div>
const WHAT_DO_WE_DO = <div>At GDSC LBCE, we seek to make Developer information accessible to everyone so that they may hone their development skills. This programme provides students with the tools and skills they need to create new and intriguing projects. We believe in the potential of technology and the developer community as a whole to empower people and create products that will help them live better lives. Join us now on our official developer community page to get notified about upcoming events.</div>

function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true,  // to be trued during deployment
        });
    }, []);

    useEffect(() => {
        var translationDiff = 0;
        function updateSVGPosition() {
            const yOffset = document.body.ownerDocument.defaultView.pageYOffset - document.body.scrollTop;
            var translation = (yOffset / window.innerHeight * 100);
            translationDiff = Math.abs(translation - translationDiff);
            if (translation < 90 && translationDiff > 10)
                document.getElementById('w-curve').style.backgroundPosition = `${translation}% 90%`;
        };
        window.addEventListener("scroll", updateSVGPosition, false)
    }, []);

    return (
        <div id="about-us-div" style={{top: `${window.innerHeight - 60}px`}}>
            <div id="w-curve" />
            <div id="about-us-bg">
                <div id="about-us-title">
                    <span id="about-us-title-lbce">LBCE /&nbsp;</span>
                    <span id="about-us-title-gdsc">Google Developer Student Club</span>                
                </div>
                <div id="about-us-p-div">
                    <div id="about-us-p-svg">
                        <img data-aos="zoom-in-up" src={Rocket} alt="" width="80%" />
                    </div>
                    <div id="about-us-p-content-div">
                        <div id="about-us-p-content-spacerflex" />
                        <p id="about-us-p-1" data-aos="fade-up" data-aos-offset="50">WHO ARE WE?</p>
                        <p id="about-us-p-2" data-aos="fade-up" data-aos-offset="50">{"GDSC LBCE Chapter"}</p>
                        <p id="about-us-p-3" data-aos="fade-up" data-aos-offset="50">{WHO_ARE_WE}</p>
                        <div id="about-us-p-content-spacerflex" />
                    </div>
                </div>
                <div id="about-us-p-div">
                    <div id="about-us-p-content-div">
                        <div id="about-us-p-content-spacerflex" />
                        <p id="about-us-p-1" data-aos="fade-up" data-aos-offset="50">WHAT DO WE DO?</p>
                        <p id="about-us-p-2" data-aos="fade-up" data-aos-offset="100">“Bridging the gap<br />between theory and practice”</p>
                        <p id="about-us-p-3" data-aos="fade-up" data-aos-offset="150">{WHAT_DO_WE_DO}</p>
                        <div id="about-us-p-content-spacerflex" />
                    </div>
                    <div id="about-us-p-svg">
                        <img data-aos="zoom-in-up" src={Collab} alt="" width="80%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;