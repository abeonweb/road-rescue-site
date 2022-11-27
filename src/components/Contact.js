import "../css/Contact.css"
import phone from "../images/phone.svg"
import location from "../images/location.svg"


export default function Contact(){
    return (
        <section id="contact" className="section section__contact">
            <div className="contact--info">
                <div className="contact--info--container">
                    <h3 className="contact--info--title">Prefer to call? Get in touch with us.</h3>
                </div>
                <ul className="contact--info--list">
                    <li><img src={phone} alt="" className="contact--icon"/> +234 803 323 7141</li>
                    <li><img src={phone} alt="" className="contact--icon"/> +234 803 301 7071</li>
                    <li><img src={phone} alt="" className="contact--icon"/> +234 913 660 6955</li>
                </ul>
            </div>

            <div className="contact--info">
                <div className="contact--info--container">
                    <h3 className="contact--info--title">Offices</h3>
                </div>
                <ul className="contact--info--list">
                    <li><img src={location} alt="" className="contact--icon"/> <div>Gloryland Plaza Apata Ibadan, Oyo</div></li>
                    <li><img src={location} alt="" className="contact--icon"/> <div>45/47 Karimu Street Surulere, Lagos</div></li>
                    <li><img src={location} alt="" className="contact--icon"/> <div>773 AMAC Housing Estate Airport Rd, Abuja</div></li>
                </ul>
            </div>
        </section>
    )
}