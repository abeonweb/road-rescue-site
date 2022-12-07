import { Link } from "react-router-dom"
import "../css/Product.css"
import { productFeatures } from "../data"

export default function Product() {
    return (
        <main className="product-main">
            <h1 className="page--title">Cold Mix Asphalt</h1>
            <section className="section section-product">
                <h2 className="section--title">What makes our asphalt the best choice.</h2>
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
                <div className="banner-image">
                    <div className="banner-overlay"></div>
                    <p className="banner-image-text banner-image-text-primary">Road Rescue</p>
                    <p className="banner-image-text banner-image-text-secondary">We pave the way</p>
                    <Link to="/contacts" className="banner-btn">Get an Estimate</Link>
                </div>
            </section>
        </main>
    )
}
