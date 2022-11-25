import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/road-rescue-site" element={<SharedLayout />} >
          <Route index element={<Home />}/>
          <Route path="product" element={<Product />}/>
          <Route path="services" element={<Services />}/>
          <Route path="about" element={<About />}/>
          <Route path="contacts" element={<Contacts />}/>
          <Route path="privacy" element={<PrivacyPolicy />}/>
          <Route path="terms" element={<Terms />}/>
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
