import Features from '../components/Features'
import Benefits from '../components/Benefits'
import Form from "../components/Form"
import Contact from "../components/Contact"
import Hero from '../components/Hero'
import Faq from './Faq'

export default function Home(){
    return (
        <main className="main">
            <Hero />
            <Benefits />
            <Form />
            <Features />
            <Faq />
            <Contact />
        </main>
    )
}