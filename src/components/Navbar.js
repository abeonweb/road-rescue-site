import logo from "../images/rrlogo.webp"
import "../css/Navbar.css"
import { useEffect } from "react";
import useToggle from "../hooks/useToggle";
import { NavLink } from "react-router-dom"
import { links } from "../data"

function Navbar() {
    const { openMenu, handleClick } = useToggle()

    useEffect(() => {
        window.addEventListener("scroll", iScrolled)

        return function () {
            window.removeEventListener("scroll", iScrolled)
        }
    })

    function iScrolled() {
        const navbar = document.querySelector(".navbar")
        const sharedLayout = document.querySelector("#shared-layout")
        if (window.pageYOffset > (navbar.clientHeight))
            sharedLayout.classList.add("sticky")
        else
            sharedLayout.classList.remove("sticky")

    }

    const linksList = links.map((data, index) => {

        if (index === 0) {
            return (
                <li key={index + 1}>
                    <NavLink to={data.link} end
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                        onClick={handleClick}
                    >{data.name}
                    </NavLink>
                </li>
            )
        }
        return (
            <li key={index + 1}>
                <NavLink to={data.link}
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    onClick={handleClick}
                >{data.name}
                </NavLink>
            </li>
        )
    })
    return (
        <header className={`navbar ${openMenu ? "nav-open" : ""}`}>
            <div className="hero-content-wrapper">

                <div className="nav-logo" >
                    <NavLink to="/road-rescue-site" 
                        end
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        <img src={logo} className="logo-nav" alt="" />

                    </NavLink>
                </div>
                <button onClick={handleClick} className="menu-icon" aria-label="toggle navigation menu" type="submit">
                    <span className="hamburger"></span>
                </button>
                <nav className="nav">
                    <ul className="nav-list">
                        {linksList}
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default Navbar