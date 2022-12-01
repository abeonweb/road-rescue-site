import "../css/Contact.css"
import phone from "../images/phone.svg"
import location from "../images/location.svg"


export default function Contact() {
    return (
        <section id="contact" className="section section__contact">
            <div className="contact-container">
                <div className="contact--info">
                    <h3 className="contact--info--title">Prefer to call? Get in touch with us.</h3>
                    <ul className="contact--info--list">
                        <li><img src={phone} alt="" className="contact--icon" /> +234 803 323 7141</li>
                        <li><img src={phone} alt="" className="contact--icon" /> +234 803 301 7071</li>
                        <li><img src={phone} alt="" className="contact--icon" /> +234 913 660 6955</li>
                    </ul>
                </div>

                <div className="contact--info">
                    <h3 className="contact--info--title">Offices</h3>
                    <ul className="contact--info--list">
                        <li><img src={location} alt="" className="contact--icon" /> <p>Gloryland Plaza Apata Ibadan, Oyo</p></li>
                        <li><img src={location} alt="" className="contact--icon" /> <p>45/47 Karimu Street Surulere, Lagos</p></li>
                        <li><img src={location} alt="" className="contact--icon" /> <p>773 AMAC Housing Estate Airport Rd, Abuja</p></li>
                    </ul>
                </div>
            </div>
            <div className="contact--info">
                <p>Office hours</p>
                <p>
                    Mon - Sat: 8:00 AM - 5:00 PM
                </p>
            </div>
        </section>
    )
}