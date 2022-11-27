import "../css/Product.css"
import { services } from "../data"

export default function Services() {
  return (
    <main className="main">
      <h1 className="page--title">What we do</h1>
      <section className="section section__services">

        <h2 className="section--title">Scope of Services</h2>
        <div>
          <div className="scope-image"></div>
          <div>
            <p className="scope-body">Our vision is to be able to foster Public Private Partnerships that will be beneficial to the community at large.
              With guided effort, we hope to collaborate with interested parties to bring about positive change for citizens, communities, and eventually the economy.
            </p>
            <p className="scope-body">Join us.</p>
          </div>
        </div>
      </section>
      <section className="section-service">
        {
          services.map((service) => {
            const { id, image, heading, body } = service
            return (
              <article key={id} className={`section-service-article ${id % 2 === 0 ? "right" : "left"}`}>
                <img className="service-image" src={require("../images/" + image + ".webp")} alt="" />
                <div className="service-info">
                  <h5 className="service-heading" >{heading}</h5>
                  <p className="service-body" >{body}</p>
                </div>
              </article>
            )
          })
        }
      </section>

    </main>
  )
}