import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Security from "./pages/Security";
import WhoIsThisFor from "./pages/Whoisthisfor";
import HowItWorks from "./pages/Howitworks";
import Impact from "./pages/Impact";
import About from "./pages/About";
import EarlyAccessPage from "./pages/Earlyaccess";
import TermsPage from "./pages/Terms";
import PrivacyPage from "./pages/Privacy";
import NotFoundPage from "./pages/NotFound";
import { Loader } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      <Routes>
        {/* Pages with Navigation + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/security" element={<Security />} />
          <Route path="/who-its-for" element={<WhoIsThisFor />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/about" element={<About />} />
          <Route path="/early-access" element={<EarlyAccessPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>

        {/* 404 page WITHOUT Navigation or Footer */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="loading" element={<Loader />} />
      </Routes>
    </div>
  );
}

export default App;
