import "../css/Product.css"
import { services } from "../data"

export default function Services() {
  return (
    <main className="main">
      <section className="section__services">
        <h1 className="page--title">What we do</h1>

        <h2 className="page--subtitle">Scope of Services</h2>
        <p className="service--body">Our vision is to be able to foster Public Private Partnerships that will be beneficial to the community at large.
          With guided effort, we hope to collaborate with interested parties to bring about positive change for citizens, communities, and eventually the economy.
        </p>
        <p className="service--body">Join us.</p>
        {
          services.map((service, index) => {
            const { id, image, heading, body } = service
            return (
              <article key={id} className={`section-service ${id % 2 === 0 ? "right" : "left"}`}>
                  <img className="service-image" src={require("../images/" + image + ".webp")} alt="" />
                  <div className="service-info">
                    <h5 className="heading" >{heading}</h5>
                    <p className="body" >{body}</p>
                  </div>
              </article>
            )
          })
        }
      </section>

    </main>
  )
}