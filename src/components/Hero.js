import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import "animate.css"
import checkMark from "../images/check-mark.png"

function Hero() {
    return (
        <>
        <section className="hero-container">
            <div className="overlay"></div>

            <div className="hero">

                <div className="catchphrase-container">
                    <h2 className="hero__phrase"><span className="hero-highlight">Fix</span> road defects <span className="hero-highlight">fast</span></h2>
                    <ul className="hero__list">
                        <li className="hero__list-item"><img src={checkMark} className="hero__list-icon" alt=""/> #1 solution effective road repair</li>
                        <li className="hero__list-item"><img src={checkMark} className="hero__list-icon" alt=""/> Save money and time </li>
                        <li className="hero__list-item"><img src={checkMark} className="hero__list-icon" alt=""/> Use even in rainy conditions</li>
                    </ul>
                    <div className="cta-container">
                        <Link to="/road-rescue-site/#form" className="hero__cta-btn hero__cta-btn-form animate__animated animate__slideInLeft shadow">Get a quote</Link>
                        <Link to="/road-rescue-site/#contact" className="hero__cta-btn hero__cta-btn-contact animate__animated animate__slideInRight shadow">Call us</Link>
                    </div>
                </div>
                <div>

                    <div className="logo-title-container">
                        <h1 className="hero__title">
                            <span className="hero__title--primary">Road Rescue</span>
                            <span className="hero__title--secondary">& Maintenance company limited</span>
                        </h1>
                    </div>
                </div>

            </div>
        </section>
        <div className="triangle animate__animated animate__shakeY animate__delay-2s animate__repeat-1 animate__slow"></div>
        </>
    )
}

export default Hero