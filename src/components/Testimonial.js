import React from "react";
import "../css/Testimonial.css"
import socialProof from "./social-proof-image.jpg"
import {testimonials} from "../data.js"

function Testimonial({image, text, info}){
    return (
        <section className="section section__testimonial">
          <div className="testimonial">
            <div className="testimonial-container">
              <div className="testimonial-image-container">
                <img className="testimonial-image" src={image} alt="" />
              </div>
              <blockquote className="testimonial-quote">
                {text}
              </blockquote>
            </div>
            <div className="testimonial-info">{info}</div>
          </div>
      </section>
    )
}

export default Testimonial