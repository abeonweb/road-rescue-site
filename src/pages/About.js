import { teamData } from "../data"
import "../css/About.css"
import Profile from "../components/Profile"

export default function About() {

    const managementTeam = teamData.map(executive => {
        return (
            <Profile key={executive.id} executive={executive} />
        )
    })

    return (
        <main className="main">
            <h1 className="page--title about-title">Who we are</h1>
            <section className="section section__about">
                <h2 className="section--title">Our Objective</h2>

                <h3 className="section--subtitle about-subtitle">Youth Empowerment</h3>
                <p className="about-body">We believe in the employment of the young and vibrant workforce. Nigeria has a very young
                    population. With the average age of the population at around 18 years old, it is our strong
                    belief that empowering the youth directly through employment opportunities in the sector through
                    our endeavour at Road Rescue and Maintenance in conjunction with a well meaning Public sector can
                    bring about positive change. </p>

                <h3 className="section--subtitle about-subtitle">Economic Growth</h3>
                <p className="about-body">There is also the indirect impact of those works
                    through the improvement of road infrastructure which in turn will be crucial to economic growth at
                    local, state and National level in due time through the cascade effect.</p>
            </section>
            <section className="section section__management">
                <h2 className="section--title management-section-title">Our Management Team</h2>
                <div className="profile-container">
                    {managementTeam}
                </div>
            </section>
        </main>
    )
}