import React from "react";
import Navbar from "../../components/NavBar/NavBar";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./Service.css";

function Service() {
  return (
    <>
      <section className="serviceContainer">
        <Navbar />
        <ServiceCard />
      </section>
    </>
  );
}

export default Service;
