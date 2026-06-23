import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Security from "./pages/Security";
import WhoIsThisFor from "./pages/Whoisthisfor";
import HowItWorks from "./pages/Howitworks";
import Impact from "./pages/Impact";
import About from "./pages/About";
import Footer from "./pages/Footer";
import EarlyAccessPage from "./pages/Earlyaccess";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Active global scroll listener to reset view coordinates to (0,0) */}
      <ScrollToTop />

      <Navigation />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/security" element={<Security />} />
          <Route path="/who-its-for" element={<WhoIsThisFor />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/about" element={<About />} />
          <Route path="/early-access" element={<EarlyAccessPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
