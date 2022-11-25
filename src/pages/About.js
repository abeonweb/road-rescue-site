import { about, teamData, vision } from "../data"
import "../css/About.css"
import Profile from "../components/Profile"

export default function About() {

    const visionList = vision.map(({ image, alt, text }, index) => {
        return (
            <li key={`vision${index}`} className="vision-list-item">
                <div className="vision-card">
                    <img src={require("../images/" + image + ".webp")} alt={alt} className="vision-image" />
                    <p className="vision-body">{text}</p>
                </div>
            </li>
        )
    })

    const aboutSection = about.map(({ image, alt, title, body, id }) => {
        return (
            <article key={`objective${id}`} className="objective">
                <div className="objective-container">
                    <img src={require(`../images/${image}.webp`)} alt={alt} className="about-image" />
                    <div>
                        <h3 className="about-body-title">{title}</h3>
                        <p className="about-body cutoff-text">{body}</p>
                        <input type="checkbox" className="expand-btn" />
                    </div>
                </div>
            </article>
        )
    })

    const managementTeam = teamData.map(executive => {
        return (
            <Profile key={executive.id} executive={executive} />
        )
    })

    return (
        <main className="main">
            <h1 className="page--title about-title">Who we are</h1>
            <section className="section section__vision">
                <h2 className="section--title">Vision</h2>
                <ul className="vision-list">
                    {visionList}
                </ul>
            </section>
            <section className="section section__about">
                <h2 className="section--title">Our Objective</h2>
                {aboutSection}
            </section>
            <section className="section section__management">
                <h2 className="section--title management-section-title">Our Management Team</h2>
                <div className="profile-container">
                    {managementTeam}
                </div>
            </section>
        </main >
    )
}