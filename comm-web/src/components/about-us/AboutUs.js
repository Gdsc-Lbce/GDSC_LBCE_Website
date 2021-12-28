import React, { useEffect } from "react";
import "./AboutUs.css";
import Rocket from "./rocket.svg";
import Collab from "./collaborating.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WHO_ARE_WE = <div>GDSC, short for Google Developer Students Club, is a global approach to bring the College students, interested in Google developer technologies, of any University or college together and connect them on one platform. Students of one GDSC community can connect to other communities, even in different countries. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.<br /><br />The GDSC of Dr. Lankapalli Bullayya College of Engineering, Visakhapatnam is one of the numerous Developer clubs out there which promote advocacy in creating, curating and enhancing projects built by the community to help the masses. We are a newly inaugurated Developer club based in our college campus in the Indian state of Andhra Pradesh and we whole-heartedly welcome all inquisitive, interested and budding developers to collaborate with us in the long run.</div>
const WHAT_DO_WE_DO = <div>At GDSC LBCE, we seek to make Developer information accessible to everyone so that they may hone their development skills. This programme provides students with the tools and skills they need to create new and intriguing projects. We believe in the potential of technology and the developer community as a whole to empower people and create products that will help them live better lives. Join us now on our official developer community page to get notified about upcoming events.</div>

const ipx = (i) => {
    const BASE_RESOLUTION = 1366;
    return Math.round(i * window.screen.width * window.devicePixelRatio / BASE_RESOLUTION) + 'px';
};

const ipxv = (i) => {
    const BASE_RESOLUTION = 1366;
    return Math.round(i * window.screen.width * window.devicePixelRatio / BASE_RESOLUTION);
};

function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration : 1000,
            once: true,  // to be trued during deployment
        });

        var translationDiff = 0;
        function updateSVGPosition() {
            const yOffset = document.body.ownerDocument.defaultView.pageYOffset - document.body.scrollTop;
            var translation = (yOffset / window.innerHeight * 100);
            translationDiff = Math.abs(translation - translationDiff);
            if (translation < 90 && translationDiff > 10)
                document.getElementById('w-curve').style.backgroundPosition = `${translation}% 90%`;
        };
        window.addEventListener("scroll", updateSVGPosition, false);

        function updateAboutUsDivPosition() {
            const topOffset = ((window.innerHeight - ipxv(60)) > 1380) ? 1380 : (window.innerHeight - ipxv(60));
            document.getElementById('about-us-div').style.top = `${topOffset}px`
        }
        window.addEventListener("resize", updateAboutUsDivPosition, false);
    }, []);

    return (
        <div id="about-us-div" style={{top: `${((window.innerHeight - ipxv(60)) > 1380) ? 1380 : (window.innerHeight - ipxv(60))}px`}}>
            <div id="w-curve" style={{backgroundSize: `${ipx(3000)}px ${90}px`, height: `${ipx(85)}`}} />
            <div id="about-us-bg" style={{paddingTop: `${ipx(10)}`}}>
                <div id="about-us-title" style={{paddingLeft: `${ipx(50)}`, paddingBottom: `${ipx(50)}`}}>
                    <span id="about-us-title-lbce" style={{fontSize: `${ipx(25)}`}}>LBCE /&nbsp;</span>
                    <span id="about-us-title-gdsc" style={{fontSize: `${ipx(25)}`}}>Google Developer Student Club</span>                
                </div>
                <div className="about-us-p-div" style={{paddingLeft: `${ipx(50)}`, paddingBottom: `${ipx(60)}`}}>
                    <div className="about-us-p-svg">
                        <img data-aos="zoom-in-up" src={Rocket} alt="" width="80%" />
                    </div>
                    <div className="about-us-p-content-div" style={{padding: `${ipx(30)}`}}>
                        <div className="about-us-p-content-spacerflex" />
                        <p className="about-us-p-1" style={{fontSize: `${ipx(15)}`, margin: `${ipx(0)}`}} data-aos="fade-up" data-aos-offset="50">WHO ARE WE?</p>
                        <p className="about-us-p-2" style={{fontSize: `${ipx(30)}`, marginTop: `${ipx(5)}`, marginBottom: `${ipx(5)}`}} data-aos="fade-up" data-aos-offset="50">{"GDSC LBCE Chapter"}</p>
                        <p className="about-us-p-3" style={{fontSize: `${ipx(15)}`, margin: `${ipx(0)}`}} data-aos="fade-up" data-aos-offset="50">{WHO_ARE_WE}</p>
                        <div className="about-us-p-content-spacerflex" />
                    </div>
                </div>
                <div className="about-us-p-div">
                    <div className="about-us-p-content-div">
                        <div className="about-us-p-content-spacerflex" />
                        <p className="about-us-p-1" style={{fontSize: `${ipx(15)}`, margin: `${ipx(0)}`}} data-aos="fade-up" data-aos-offset="50">WHAT DO WE DO?</p>
                        <p className="about-us-p-2" style={{fontSize: `${ipx(30)}`, marginTop: `${ipx(5)}`, marginBottom: `${ipx(5)}`}} data-aos="fade-up" data-aos-offset="100">“Bridging the gap<br />between theory and practice”</p>
                        <p className="about-us-p-3" style={{fontSize: `${ipx(15)}`, margin: `${ipx(0)}`}} data-aos="fade-up" data-aos-offset="150">{WHAT_DO_WE_DO}</p>
                        <div className="about-us-p-content-spacerflex" />
                    </div>
                    <div className="about-us-p-svg">
                        <img data-aos="zoom-in-up" src={Collab} alt="" width="80%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;