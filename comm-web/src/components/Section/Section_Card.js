import React from "react";
import "./Section_Style.css";

export default function Section_Card(props) {

  return (
    <>
      <div className="secCard" >
        <div className="secCard-img">
          <img src={props.img} alt="logo" />
        </div>
        <h2>{props.heading}</h2>
        <p>{props.content}</p>
        <a href="/">READ MORE</a>
      </div>
    </>
  );
}
