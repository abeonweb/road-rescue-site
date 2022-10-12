import { NavLink } from "react-router-dom"
import "../css/Navbar.css"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import {links} from "../data"

export default function Footer(){
    const linksList = links.map((data, index) => {

        if(index === 0){
            return (
                <li key ={index + 1}>
                    <NavLink to={data.link} end
                        className= "footer-nav-link"
                    >{data.name}
                    </NavLink>
                </li>
            )
        }
        return (
            <li key ={index+1}>
                <NavLink to={data.link} 
                    className= "footer-nav-link"
                >{data.name}
                </NavLink>
            </li>
        )
    })
    return (
        <footer className="footer">
            <div className="footer-nav-container">
                <div className="footer-navs">
                    <nav className="footer-nav">
                        <ul className="footer-nav-list">
                            {linksList}
                        </ul>           
                    </nav> 
                    <nav className="footer-nav">
                        <ul className="footer-nav-list">
                            <li>
                                <NavLink to="terms"  className="footer-nav-link">Terms & Conditions</NavLink>
                            </li>
                            <li>
                                <NavLink to="privacy"  className="footer-nav-link">Privacy Policy</NavLink>
                            </li>
                        </ul>           
                    </nav> 
                </div>
                <div className="footer-social-media-container">
                    <h4>We are on Social Media</h4>
                    <ul className="footer-nav-list-icons">
                        <li>
                            <a href="https://www.twitter.com" target="_blank" className="footer-social-link" rel=" noopener noreferrer">
                                <img src={twitter} alt="twitter" className="footer-social-icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" className="footer-social-link" rel=" noopener noreferrer">
                                <img src={facebook} alt="facebook" className="footer-social-icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" className="footer-social-link" rel=" noopener noreferrer">
                                <img src={instagram} alt="instagram" className="footer-social-icon"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">&copy; Road Rescue And Maintenance Company Limited 2021</div>
        </footer>
    )
}