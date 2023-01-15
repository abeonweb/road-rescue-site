import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="road-rescue-site" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="success" element={<Success />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
