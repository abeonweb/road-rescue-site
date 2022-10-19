import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import "animate.css"

function Hero() {
    return (
        <section className="hero-container">
            <div className="overlay"></div>
            <div className="hero">

                <div className="catchphrase-container">
                    <h2 className="hero__phrase">Fix road defects fast</h2>
                    {/* <p className="hero__tagline">Solving road issues should not be an issue. Let us help out.</p> */}
                    <ul className="hero__tagline">
                        <li className="hero__tagline-list">#1 solution to fix roads fast</li>
                        <li className="hero__tagline-list">Save money on repairs </li>
                        <li className="hero__tagline-list">Can be applied even in harsh conditions</li>
                    </ul>
                    <div className="cta-container">
                        <Link to="/road-rescue-site/#form" className="hero__cta-btn hero__cta-btn-form animate__animated animate__slideInLeft shadow">Get a quote</Link>
                        <Link to="/road-rescue-site/#contact" className="hero__cta-btn hero__cta-btn-contact animate__animated animate__slideInRight shadow">Call us</Link>
                    </div>
                </div>
                <div>

                    <div className="logo-title-container">
                        {/* <img className="page-logo" src={logo} alt="road rescue logo" /> */}
                        <h1 className="hero__title">
                            <span className="hero__title--primary">Road Rescue</span>
                            <span className="hero__title--secondary">& Maintenance company limited</span>
                        </h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero