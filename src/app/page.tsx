import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/CarouselHero";
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Sustainability from "../components/Sustainability";
import Gallery from "../components/Gallery";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import './globals.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Products />
      <Sustainability />
      <Gallery />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
