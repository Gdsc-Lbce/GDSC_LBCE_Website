import React from "react";
import CardCall from "./CardCall";
import './CardStyle.css';
import {CardData} from './CardData'

export default function Card () {
    return (
        <>
         <h2 style={{'color': 'blue', 'marginTop': '25px', 'textAlign':'center'}}> Core Team </h2>
        <section className="cardList">
            {
                CardData.map(({img,nam,desig,twitter,linkedin,github,gmail}) => (
                    <CardCall image={img} name={nam} designation={desig} twitter={twitter} linkedin={linkedin} github={github} gmail={gmail}/>
                    ))
            }
        </section>
        </>
    );
}