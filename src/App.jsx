import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Feature from "./pages/Feature/Feature";
import About from "./pages/AboutPage/AboutPage";
import Works from "./pages/Works/Works"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />}/>
      </Routes>
    </Router>
  );
}

export default App;
