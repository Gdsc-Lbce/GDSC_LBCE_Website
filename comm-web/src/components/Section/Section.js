import React from "react";
import Section_Card from "./Section_Card";
import './Section_Style.css';
import {sectionData} from './SectionData'

export default function Section() {
  return (
    <>
      <h2 style={{'color': 'white', 'textAlign': 'center', 'marginTop': '25px', 'textDecoration': 'underline'}}> Event Section </h2>
      <section className="secContainer">
        {
          sectionData.map(({title, content, imgUrl}) => (
            <Section_Card heading={title} content={content} img={imgUrl} />
          ))
        }
      </section>
    </>
  );
}
