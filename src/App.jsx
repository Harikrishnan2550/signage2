import { useState } from "react";
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import ConnectUs from './components/ConnectUs'
import Footer from './components/Footer'

import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import GalleryPage from "./components/GalleryPage";
import ServicesPage from "./components/ServicesPage";

import WhatsAppButton from "./components/WhatsAppButton"; // <-- ⭐ ADD THIS

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="bg-black min-h-screen">
      <Navbar onNav={setRoute} route={route} />

      {/* HOME PAGE */}
      {route === "home" && (
        <>
          <Home onNav={setRoute} />
          <About />
          <Services onNav={setRoute}/>
          <Gallery />
          <ConnectUs />
          <Footer />
        </>
      )}

      {/* ABOUT PAGE */}
      {route === "about" && (
        <>
          <AboutUsPage />
          <Footer />
        </>
      )}

      {/* SERVICES PAGE */}
      {route === "services" && (
        <>
          <ServicesPage/>
          <Footer />
        </>
      )}

      {/* GALLERY PAGE */}
      {route === "gallery" && (
        <>
          <GalleryPage />
          <Footer />
        </>
      )}

      {/* CONTACT PAGE */}
      {route === "contact" && (
        <>
          <ContactUsPage />
          <Footer />
        </>
      )}

      <WhatsAppButton phone="918714302550"/>  
    </div>
  );
}

export default App;
