import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'


export default function SharedLayout(){
    
    return (
        <div id="shared-layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
