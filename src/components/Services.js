import "../css/Product.css"
import { services } from "../data"

export default function Services() {
  return (
    <main className="main">
      <section className="section__services">
        <h1 className="page--title">What we do</h1>

        <h2 className="page--subtitle">Road Repair Services</h2>
        <p className="service--body">Our vision is to be able to foster Public Private Partnerships that will be beneficial to the community at large.
          With guided effort, we hope to collaborate with interested parties to bring about positive change for citizens, communities, and eventually the economy.
        </p>
        <p className="service--body">Join us.</p>
        {
          services.map((service, index) => {
            const { id, image, heading, body } = service
            return (
              <article key={id} className="section section__service">
                <div className={`product--feature ${index % 2 === 0 ? "right" : "left"}`}>
                  <div className="image-container">
                    <img className={`image`} src={require("../images/" + image + ".webp")} alt="" />
                  </div>
                  <div className="info">

                    <h5 className="heading" >{heading}</h5>
                    <p className="body" >{body}</p>
                  </div>
                </div>
              </article>
            )
          })
        }
      </section>

    </main>
  )
}