import "../css/Product.css"
import { productFeatures } from "../data"

export default function Product() {
    return (
        <main className="main">
            <h1 className="page--title">Cold Mix Asphalt</h1>
            <section className="section section__product">
                <h2 className="page--subtitle">Learn some more about the our asphalt.</h2>
                <section className="section__product--features">
                    {
                        productFeatures.map((feature, index) => {
                            const { id, image, heading, body } = feature
                            return (
                                <div key={id} className={`product--feature ${index % 2 === 0 ? "right" : "left"}`}>
                                    <div className="image-container">
                                        <img className={`image`} src={require("../images/" + image + ".png")} alt="" />
                                    </div>
                                    <div className="info">
                                        <h5 className="heading" >{heading}</h5>
                                        <p className="body" >{body}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </main>
    )
}