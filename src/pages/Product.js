import "../css/Product.css"
import { productFeatures } from "../data"

export default function Product() {
    return (
        <main className="main">
            <h1 className="page--title">Cold Mix Asphalt</h1>
            <section className="section section-product">
                <h2 className="section--title">Learn some more about the our asphalt.</h2>
                <section className="section-product-features">
                    {
                        productFeatures.map((feature, index) => {
                            const { id, image, heading, body } = feature
                            return (
                                <div key={id} className={`product-feature ${index % 2 === 0 ? "right" : "left"}`}>
                                    <img className="product-image" src={require("../images/" + image + ".webp")} alt="" />
                                    <div className="product-info">
                                        <h5 className="product-heading" >{heading}</h5>
                                        <p className="product-body" >{body}</p>
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
