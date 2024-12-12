import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import './Home.css'
import Navbar from "../../components/NavBar/NavBar";
import FeatureCards from "../../components/FeatureCards/FeatureCards";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import SponsorCompanies from '../../components/SponsorCompanies/SponsorCompanies';
import Footer from "../../components/Footer/Footer";
import About from '../../components/About/About'
function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <FeatureCards/>
        <About />
        <ServiceCard />
        <SponsorCompanies />
        <Footer />
    </>
  );
}

export default Home;
