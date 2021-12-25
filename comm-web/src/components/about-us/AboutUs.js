import WavyCurve from "./wave.svg";
import Rocket from "./rocket.svg";
import Collab from "./collaborating.svg";

const SAMPLE_TEXT = <div>GDSC, short for Google Developer Students Club, is a global approach to bring the College students, interested in Google developer technologies, of any University or college together and connect them on one platform. Students of one GDSC community can connect to other communities, even in different countries.<br /><br />Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

function AboutUs() {
    return (
        <div style={{position: "absolute", top: `${window.innerHeight - 60}px`, display: "block", width: "100%"}}>
            <div style={{overflowY: "hidden", backgroundRepeat: "no-repeat", backgroundImage: "url(" + WavyCurve + ")", backgroundPosition: "10% 90%", backgroundSize: "3000px 80px", width: `100%`, height: "85px"}} />
            <div style={{display: "flex", flexDirection: "column", backgroundColor: "rgba(34, 32, 39, 1)", width: `100%`, paddingTop: "10px"}}>
                <div style={{flex: "1 1 2%", display: "flex", paddingLeft: "50px", paddingBottom: "50px"}}>
                    <span style={{textAlign: "left", font: "Ubuntu Mono", fontSize: "25px", fontWeight: "600", color: "rgb(74, 74, 75)"}}>LBCE /&nbsp;</span>
                    <span style={{textAlign: "left", font: "Ubuntu Mono", fontSize: "25px", fontWeight: "600", color: "rgb(37, 169, 242)"}}>Google Developer Student Club</span>                
                </div>
                <div style={{flex: "1 1 49%", paddingLeft: "50px", display: "flex", paddingBottom: "60px"}}>
                    <div style={{width: "45%", paddingTop: "10px"}}>
                        <img src={Rocket} alt="" width="80%" />
                    </div>
                    <div style={{display: "block", width: "45%", textAlign: "left", padding: "30px"}}>
                        <p style={{font: "Montserrat", fontSize: "15px", fontWeight: "500", color: "rgba(255, 255, 255, .8)", margin: "0"}}>WHO ARE WE?</p>
                        <p style={{font: "Montserrat", fontSize: "30px", fontWeight: "700", color: "white", marginTop: "5px", marginBottom: "5px"}}>{"GDSC LBCE Chapter"}</p>
                        <p style={{font: "Montserrat", fontSize: "15px", fontWeight: "300", color: "rgba(255, 255, 255, .6)", margin: "0"}}>{SAMPLE_TEXT}</p>
                    </div>
                </div>
                <div style={{flex: "1 1 49%", paddingLeft: "50px", display: "flex", paddingBottom: "60px"}}>
                    <div style={{display: "block", width: "45%", textAlign: "left", padding: "30px"}}>
                        <p style={{font: "Montserrat", fontSize: "15px", fontWeight: "500", color: "rgba(255, 255, 255, .8)", margin: "0"}}>WHAT DO WE DO?</p>
                        <p style={{font: "Montserrat", fontSize: "30px", fontWeight: "700", color: "white", marginTop: "5px", marginBottom: "5px"}}>“Bridging the gap<br />between theory and practice”</p>
                        <p style={{font: "Montserrat", fontSize: "15px", fontWeight: "300", color: "rgba(255, 255, 255, .6)", margin: "0"}}>{SAMPLE_TEXT}</p>
                    </div>
                    <div style={{width: "45%", paddingTop: "60px"}}>
                        <img src={Collab} alt="" width="80%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;