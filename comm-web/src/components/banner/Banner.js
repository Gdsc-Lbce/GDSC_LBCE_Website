import BannerBackground from "./codecode.jpg";
import ArrowGradient from "./ArrowGradient.svg"
import GdscMono from "./gdscMono.png";
import Twitter from "./twitter.png";
import LinkedIn from "./linkedin.png";
import Github from "./github.png";

const BANNER_HEIGHT = window.innerHeight;
const MIN_CONTENT_WIDTH = 1024;
const MAX_CONTENT_WIDTH = 2560;
const SCROLLBAR_WIDTH = 0;

const browserZoom = window.devicePixelRatio;
const cssResolvedWidth = Math.round(window.screen.width - SCROLLBAR_WIDTH);
var contentWidth;

const bannerDiv = {
    display: "flex",
    position: "fixed",
    top: "0px",
    flexDirection: "column",
    textAlign: "left",
    backgroundImage: "url(" + ArrowGradient + "), url(" + BannerBackground + ")",
    backgroundSize: "contain, cover",
    backgroundPosition: "right, center",
    backgroundRepeat: "no-repeat",
};

const bannerTextDiv0 = {
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    padding: "0 0 0 6%",
    color: "white",
}

const bannerTextDiv1 = {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 1%",
    padding: "0 0 0 6%",
    color: "white",
};

const bannerTextDiv2 = {
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    padding: "0 0 0 6%",
    color: "white",
    verticalAlign: "bottom",
}

if (cssResolvedWidth <= MIN_CONTENT_WIDTH) {
    bannerDiv.overflowX = "scroll";
    contentWidth = MIN_CONTENT_WIDTH;
    bannerDiv.backgroundSize = `${0.20 * contentWidth}px ${BANNER_HEIGHT}px, ${contentWidth}px auto`;
} else if (cssResolvedWidth >= MAX_CONTENT_WIDTH) {
    contentWidth = MAX_CONTENT_WIDTH;
    bannerDiv.backgroundSize = `${0.30 * contentWidth}px ${BANNER_HEIGHT}px, ${contentWidth}px auto`;
} else {
    bannerDiv.backgroundSize = "cover auto";
    contentWidth = cssResolvedWidth;
    bannerDiv.backgroundSize = `${0.45 * contentWidth}px ${BANNER_HEIGHT}px, ${contentWidth}px auto`;
    bannerDiv.overflowX = "hidden";
};

bannerDiv["height"] = `100%`;
bannerDiv["width"] = `100%`;

function Banner() {
    return (
        <div style={bannerDiv}>
            <div style={bannerTextDiv0}>
                <div style={{flex: "auto"}} />
                <div style={{display: "flex", flexDirection: "column", flex: "auto"}}>
                    <div style={{flex: "1 1 96%"}} />
                    <div style={{flex: "1 1 4%"}}>
                        &nbsp;
                        <img src={GdscMono} alt="" height="13em" />
                        <span style={{font: "PT Sans", fontSize: "1.2em", fontWeight: "900"}}>
                            &nbsp; Google Developer Student Club<br />
                        </span>
                    </div>
                </div>
            </div>
            <div style={bannerTextDiv1}>
                <div style={{flex: "auto"}} />
                <div style={{display: "flex", flexDirection: "column", flex: "auto"}}>
                    <span style={{font: "Montserrat", fontSize: `${Math.round(1 / browserZoom * 4.5)}em`, fontWeight: "700"}}>
                        Dr. Lankapalli<br />
                        Bullayya College<br />
                        of Engineering
                    </span>
                </div>
                <div style={{flex: "auto"}} />
            </div>
            <div style={bannerTextDiv2}>
                <div style={{display: "flex", flex: "1 1 60%"}}>
                    <div style={{flex: "1 1 80%"}}/>
                    <div style={{display: "flex", flexDirection: "column", flex: "1 1 20%"}}>
                        <div style={{flex: "1 1 69%"}} />
                        <div style={{display: "flex", flex: "1 1 1%"}}>
                            <div style={{flex: "1 1 20%"}}>
                                <img src={LinkedIn} alt="" height="25em" />
                            </div>
                            <div style={{flex: "1 1 20%"}}>
                                <img src={Twitter} alt="" height="25em" />
                            </div>
                            <div style={{flex: "1 1 20%"}}>
                                <img src={Github} alt="" height="25em" />
                            </div>
                            <div style={{flex: "1 1 31%"}} />
                        </div>
                    </div>
                </div>
                <div style={{flex: "1 1 40%"}}>
                    <span style={{font: "Montserrat", fontSize: `${1 / browserZoom * 0.8}em`}}>
                        &nbsp; Powered by <b>Google Developers</b><br />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Banner;