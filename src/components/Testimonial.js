import React from "react";
import "../css/Testimonial.css"
import socialProof from "./social-proof-image.jpg"

function Testimonial(){
    return (
        <section className="section section__testimonial">
          <div className="testimonial">
            <div className="testimonial-container">
              <div className="testimonial-image-container">
                <img className="testimonial-image" src={socialProof} alt="" />
              </div>
              <blockquote className="testimonial-quote">"Our CDA decided to use Cold Mix Asphalt to repair our estate roads.
                  For me, living in the estate, It was very frustrating to see the sad state of the roads.
                  This was even made worse by the heavy rainfall that continued to erode the potholes.
                  Now, all that is fixed because of the decision to use this asphalt on the Estate
                  roads. It instantly solved the issues and no heavy equipment was used. The roads
                  were not even closed during the repairs."
              </blockquote>
            </div>
            <div className="testimonial-info">Olalekan Oke. Resident, Omole Estate Phase 2, Lagos.</div>
          </div>
      </section>
    )
}

export default Testimonial
