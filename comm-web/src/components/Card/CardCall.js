import React from "react";
import "./CardStyle.css";
import img3 from "../../images/twitter.png";
import img4 from "../../images/linkedin.png";
import img5 from "../../images/github.png";
import img6 from "../../images/gmail.jpg";

export default function CardCall(props) {

    return (
        <>
            {/* <div className="banner"> */}
                {/* <div className="cardList"> */}
                    <div className="card">
                        <div className="cardImage">
                            <img src={props.image} alt="IMAGE" id="cardImage" />
                        </div>
                        <div className="cardText">
                            <span className="text">
                                <h2>{props.name}</h2>
                                <h3>{props.designation}</h3>
                            </span>
                        </div>
                        <div className="cardButtons">
                            <div className="icon"><a href={props.twitter}></a><img src={img3} id="twitter" alt="" /></div>
                            <div className="icon"><a href={props.linkedin}></a><img src={img4} id="linkedin" alt="" /></div>
                            <div className="icon"><a href={props.github}></a><img src={img5} id="github" alt="" /></div>
                            <div className="icon"><a href={props.gmail}></a><img src={img6} id="gmail" alt="" /></div>
                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </>
    );
}