import React, { useEffect } from "react";
import WavyCurve from "./wave.svg";
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
            once: false,  // to be trued during deployment
        });
    }, []);
    return (
        <div style={{position: "absolute", top: `${window.innerHeight - 60}px`, display: "block", width: "100%"}}>
            <div style={{overflowY: "hidden", backgroundRepeat: "no-repeat", backgroundImage: "url(" + WavyCurve + ")", backgroundPosition: "10% 90%", backgroundSize: "3000px 80px", width: `100%`, height: "85px"}} />
            <div style={{display: "flex", flexDirection: "column", backgroundColor: "rgba(34, 32, 39, 1)", width: `100%`, paddingTop: "10px"}}>
                <div data-aos="fade-right" style={{flex: "1 1 2%", display: "flex", paddingLeft: "50px", paddingBottom: "50px"}}>
                    <span style={{textAlign: "left", font: "Ubuntu Mono", fontSize: "25px", fontWeight: "600", color: "rgb(74, 74, 75)"}}>LBCE /&nbsp;</span>
                    <span style={{textAlign: "left", font: "Ubuntu Mono", fontSize: "25px", fontWeight: "600", color: "rgb(37, 169, 242)"}}>Google Developer Student Club</span>                
                </div>
                <div style={{flex: "1 1 49%", paddingLeft: "50px", display: "flex", paddingBottom: "60px"}}>
                    <div style={{width: "45%", paddingTop: "10px"}}>
                        <img data-aos="zoom-in-up" src={Rocket} alt="" width="80%" />
                    </div>
                    <div style={{display: "block", width: "45%", textAlign: "left", padding: "30px"}}>
                        <p data-aos="fade-up" data-aos-offset="50" style={{font: "Montserrat", fontSize: "15px", fontWeight: "600", color: "rgba(255, 255, 255, .8)", margin: "0"}}>WHO ARE WE?</p>
                        <p data-aos="fade-up" data-aos-offset="50" style={{font: "Montserrat", fontSize: "30px", fontWeight: "700", color: "white", marginTop: "5px", marginBottom: "5px"}}>{"GDSC LBCE Chapter"}</p>
                        <p data-aos="fade-up" data-aos-offset="50" style={{font: "Montserrat", fontSize: "15px", fontWeight: "400", color: "rgba(255, 255, 255, .6)", margin: "0"}}>{WHO_ARE_WE}</p>
                    </div>
                </div>
                <div style={{flex: "1 1 49%", paddingLeft: "50px", display: "flex", paddingBottom: "60px"}}>
                    <div style={{display: "block", width: "45%", textAlign: "left", padding: "30px"}}>
                        <p data-aos="fade-up" data-aos-offset="50" style={{font: "Montserrat", fontSize: "15px", fontWeight: "600", color: "rgba(255, 255, 255, .8)", margin: "0"}}>WHAT DO WE DO?</p>
                        <p data-aos="fade-up" data-aos-offset="100" style={{font: "Montserrat", fontSize: "30px", fontWeight: "700", color: "white", marginTop: "5px", marginBottom: "5px"}}>“Bridging the gap<br />between theory and practice”</p>
                        <p data-aos="fade-up" data-aos-offset="150" style={{font: "Montserrat", fontSize: "15px", fontWeight: "400", color: "rgba(255, 255, 255, .6)", margin: "0"}}>{WHAT_DO_WE_DO}</p>
                    </div>
                    <div style={{width: "45%", paddingTop: "60px"}}>
                        <img data-aos="zoom-in-up" src={Collab} alt="" width="80%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;