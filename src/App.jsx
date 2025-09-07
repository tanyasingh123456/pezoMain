import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Section from "./components/section/Section";
const App = () => {
  return (
    <BrowserRouter>
      {/* main  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/print" element={<Section />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
