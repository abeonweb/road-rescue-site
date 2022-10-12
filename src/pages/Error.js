import {Link} from "react-router-dom"

export default function Error(){
    return (
        <main className="main">
            <h1 className="page--title">Oops!</h1>
            <p>It seems something went wrong. Sorry about that.</p>
            <Link to="/">Back to Homepage</Link>
        </main>
    )
}