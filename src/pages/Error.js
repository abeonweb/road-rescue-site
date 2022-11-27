import { Link } from "react-router-dom"

export default function Error() {
    return (
        <main className="main">
            <section className="section__error">
                <h1 className="page--title">Oops! Seems you've taken a wrong turn</h1>
                <div className="error-container">
                    <p>It seems something went wrong. Sorry about that.</p>
                    <div>
                        <Link to="/road-rescue-site" className="error-link">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}