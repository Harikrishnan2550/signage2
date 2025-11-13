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
          <Services />
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
          <ServicesPage />
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
    </div>
  );
}

export default App;
