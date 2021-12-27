import GdscMono from "./gdscMono.png";
import Twitter from "./twitter.png";
import LinkedIn from "./linkedin.png";
import Github from "./github.png";
import "./Banner.css";

function Banner() {
    return (
        <div id="banner-div">
            <div id="banner-div-1">
                <div id="banner-div-1-spacerflex-1" />
                <div style={{display: "flex", flexDirection: "column", flex: "auto"}}>
                    <div id="banner-div-1-spacerflex-2" />
                    <div id="banner-div-1-content-div">
                        &nbsp;
                        <img src={GdscMono} alt="" height="13em" />
                        <span id="banner-div-1-content-gdsc">
                            &nbsp; Google Developer Student Club<br />
                        </span>
                    </div>
                </div>
            </div>
            <div id="banner-div-2">
                <div id="banner-div-2-spacerflex-1" />
                <div id="banner-div-2-content-div">
                    <span id="banner-div-2-content-drlbce">
                        Dr. Lankapalli<br />
                        Bullayya College<br />
                        of Engineering
                    </span>
                </div>
                <div id="banner-div-2-spacerflex-2" />
            </div>
            <div id="banner-div-3">
                <div id="banner-div-3-div-socials">
                    <div id="banner-div-3-div-socials-spacerflex-1"/>
                    <div id="banner-div-3-div-socials-div-socials">
                        <div id="banner-div-3-div-socials-spacerflex-2" />
                        <div id="banner-div-3-div-socials-div-socials-div-socials">
                            <div className="banner-div-3-div-socials-emblem">
                                <img src={LinkedIn} alt="" height="25em" />
                            </div>
                            <div className="banner-div-3-div-socials-emblem">
                                <img src={Twitter} alt="" height="25em" />
                            </div>
                            <div className="banner-div-3-div-socials-emblem">
                                <img src={Github} alt="" height="25em" />
                            </div>
                            <div id="banner-div-3-div-socials-spacerflex-3" />
                        </div>
                    </div>
                </div>
                <div id="banner-div-3-div-powered">
                    <span id="banner-div-3-div-powered-content">
                        &nbsp; Powered by <b>Google Developers</b><br />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Banner;