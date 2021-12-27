import GdscMono from "./gdscMono.png";
import Twitter from "./twitter.png";
import LinkedIn from "./linkedin.png";
import Github from "./github.png";
import "./Banner.css";

const ipx = (i) => {
    const BASE_RESOLUTION = 1366;
    return Math.round(i * window.screen.width * window.devicePixelRatio / BASE_RESOLUTION) + 'px';
};

function Banner() {
    return (
        <div id="banner-div">
            <div id="banner-div-1">
                <div id="banner-div-1-spacerflex-1" />
                <div style={{display: "flex", flexDirection: "column", flex: "auto"}}>
                    <div id="banner-div-1-spacerflex-2" />
                    <div id="banner-div-1-content-div">
                        &nbsp;
                        <img src={GdscMono} alt="" height={ipx(15)} />
                        <span id="banner-div-1-content-gdsc" style={{fontSize: ipx(20)}}>
                            &nbsp; Google Developer Student Club<br />
                        </span>
                    </div>
                </div>
            </div>
            <div id="banner-div-2">
                <div id="banner-div-2-spacerflex-1" />
                <div id="banner-div-2-content-div">
                    <span id="banner-div-2-content-drlbce" style={{fontSize: ipx(80)}}>
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
                                <img src={LinkedIn} alt="" height={ipx(28)} />
                            </div>
                            <div className="banner-div-3-div-socials-emblem">
                                <img src={Twitter} alt="" height={ipx(28)} />
                            </div>
                            <div className="banner-div-3-div-socials-emblem">
                                <img src={Github} alt="" height={ipx(28)} />
                            </div>
                            <div id="banner-div-3-div-socials-spacerflex-3" />
                        </div>
                    </div>
                </div>
                <div id="banner-div-3-div-powered">
                    <span id="banner-div-3-div-powered-content" style={{fontSize: ipx(15)}}>
                        &nbsp; Powered by <b>Google Developers</b><br />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Banner;